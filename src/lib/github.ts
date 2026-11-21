// Fetches public repositories from GitHub at build time so the "Code" section
// stays current without hand-writing an entry for every project.
//
// This runs during `astro build` (and on each request in dev), never in the
// browser, so there is no token and no client-side rate limit to worry about.
// Unauthenticated requests are limited to 60/hour per IP, which is plenty for
// a build. If the request fails, the helper returns an empty list and the
// page simply omits the section rather than breaking the build.

const GITHUB_USER = 'vocksel'

export type Repo = {
	name: string
	description: string | null
	url: string
	language: string | null
	stars: number
	updated: string
}

type GitHubRepo = {
	name: string
	description: string | null
	html_url: string
	language: string | null
	stargazers_count: number
	pushed_at: string
	fork: boolean
	archived: boolean
}

export async function getRepos(limit = 6): Promise<Repo[]> {
	try {
		const res = await fetch(
			`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
			{
				headers: {
					Accept: 'application/vnd.github+json',
					// GitHub requires a User-Agent; keep it generic.
					'User-Agent': 'vocksel.com-build',
				},
			}
		)

		if (!res.ok) return []

		const data = (await res.json()) as GitHubRepo[]

		return data
			.filter((r) => !r.fork && !r.archived)
			.sort(
				(a, b) =>
					b.stargazers_count - a.stargazers_count ||
					new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()
			)
			.slice(0, limit)
			.map((r) => ({
				name: r.name,
				description: r.description,
				url: r.html_url,
				language: r.language,
				stars: r.stargazers_count,
				updated: r.pushed_at,
			}))
	} catch {
		return []
	}
}
