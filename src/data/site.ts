// Core profile + link data for the site.
// NOTE: the tagline/blurb are minimal placeholders — real copy comes from the
// content interview (issue #33).

export const site = {
	name: 'Marin Minnerly',
	// The site is branded "vocksel" (matches the domain + repo).
	brand: 'vocksel',
	// TODO(#33): refine in the interview.
	tagline: 'Senior software engineer.',
	blurb: 'I build software and developer tools.',
	location: 'California',
	// TODO(#33): confirm current employer to show alongside the Senior title.
	email: 'me@vocksel.com',
}

export type SocialLink = {
	label: string
	href: string
	handle: string
}

// GitHub is the only public link for now (Twitter dropped; LinkedIn/email kept
// private). Rendered as a single prominent button, not a lone pill.
export const socials: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com/vocksel', handle: 'vocksel' },
]
