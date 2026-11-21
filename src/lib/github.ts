// Builds the "From GitHub" feed at build time so the long tail of code work
// shows up without hand-writing an entry for each project.
//
// This runs during `astro build` (and on each request in dev), never in the
// browser, so there is no token and no client-side rate limit to worry about.
// Unauthenticated requests are limited to 60/hour per IP, which is plenty for
// a build. If a request fails, that source is skipped; if everything fails the
// helper returns an empty list and the page omits the section.
//
// What the feed shows, in order:
//   1. Pinned repos (flagship work), newest first.
//   2. Everything from the owners below, ranked by OWNER_PRIORITY then recency.
// Ranking by recency rather than stars keeps recent Luau work ahead of older,
// higher-starred Lua repos.

// Repos to always feature, by "owner/name".
const PINNED = ['gummy-galaxy/orion']

// Accounts to pull from. flipbook-labs leads, so its work shows first.
const OWNERS: { login: string; kind: 'org' | 'user' }[] = [
	{ login: 'flipbook-labs', kind: 'org' },
	{ login: 'vocksel', kind: 'user' },
]

// Higher wins. Anything not listed sorts lowest.
const OWNER_PRIORITY: Record<string, number> = {
	'flipbook-labs': 3,
	'gummy-galaxy': 2,
	vocksel: 1,
}

const HEADERS = {
	Accept: 'application/vnd.github+json',
	// GitHub requires a User-Agent; keep it generic.
	'User-Agent': 'vocksel.com-build',
}

export type Repo = {
	name: string
	owner: string
	description: string | null
	url: string
	language: string | null
	stars: number
	updated: string
}

type GitHubRepo = {
	name: string
	owner: { login: string }
	description: string | null
	html_url: string
	language: string | null
	stargazers_count: number
	pushed_at: string
	fork: boolean
	archived: boolean
}

function toRepo(r: GitHubRepo): Repo {
	return {
		name: r.name,
		owner: r.owner.login,
		description: r.description,
		url: r.html_url,
		language: r.language,
		stars: r.stargazers_count,
		updated: r.pushed_at,
	}
}

async function fetchJson<T>(url: string): Promise<T | null> {
	try {
		const res = await fetch(url, { headers: HEADERS })
		if (!res.ok) return null
		return (await res.json()) as T
	} catch {
		return null
	}
}

export async function getRepos(limit = 6): Promise<Repo[]> {
	const pinnedResults = await Promise.all(
		PINNED.map((fullName) =>
			fetchJson<GitHubRepo>(`https://api.github.com/repos/${fullName}`)
		)
	)
	const ownerResults = await Promise.all(
		OWNERS.map((o) =>
			fetchJson<GitHubRepo[]>(
				`https://api.github.com/${o.kind === 'org' ? 'orgs' : 'users'}/${o.login}/repos?per_page=100&sort=pushed`
			)
		)
	)

	const pinned = pinnedResults.filter((r): r is GitHubRepo => r !== null)
	const pinnedKeys = new Set(pinned.map((r) => `${r.owner.login}/${r.name}`))

	const rest = ownerResults
		.flat()
		.filter((r): r is GitHubRepo => r !== null)
		.filter((r) => !r.fork && !r.archived)
		.filter((r) => !pinnedKeys.has(`${r.owner.login}/${r.name}`))
		.sort(
			(a, b) =>
				(OWNER_PRIORITY[b.owner.login] ?? 0) -
					(OWNER_PRIORITY[a.owner.login] ?? 0) ||
				new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()
		)

	return [...pinned, ...rest].slice(0, limit).map(toRepo)
}
