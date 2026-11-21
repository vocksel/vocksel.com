// Core profile + link data for the site.
// NOTE: tagline and some copy are placeholders flagged for rework (issue #33).

export const site = {
	name: 'Marin Minnerly',
	// TODO(#33): Marin wants to rewrite this tagline — placeholder for now.
	tagline: 'Software engineer & game developer.',
	// TODO(#33): expand/refresh. Marin lives in California (~5 years).
	blurb:
		'I build games, tools, and the occasional Linux server. I work full-time at Roblox.',
	location: 'California',
	email: 'me@vocksel.com',
}

export type SocialLink = {
	label: string
	href: string
	handle: string
}

export const socials: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com/vocksel', handle: 'vocksel' },
	{ label: 'Twitter', href: 'https://twitter.com/vocksel_', handle: '@vocksel_' },
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/marin-m-916809149/',
		handle: 'Marin M.',
	},
	// Email is rendered as selectable text (mailto is unreliable in some contexts).
	{ label: 'Email', href: `mailto:me@vocksel.com`, handle: 'me@vocksel.com' },
]
