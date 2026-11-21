// Fonts offered by the temporary font switcher in the nav, which overrides the
// theme's font so candidates can be compared on real pages. Delete this file,
// the switcher, and the extra families in Base.astro once a font is picked.

export type FontOption = {
	name: string
	// The Google Fonts `family=` value, including the weights the site uses.
	google: string
}

export const fontOptions: FontOption[] = [
	{ name: 'Figtree', google: 'Figtree:wght@400;500;600;700' },
	{ name: 'Plus Jakarta Sans', google: 'Plus+Jakarta+Sans:wght@400;500;600;700' },
	{ name: 'Onest', google: 'Onest:wght@400;500;600;700' },
	{ name: 'Geist', google: 'Geist:wght@400;500;600;700' },
	{ name: 'DM Sans', google: 'DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700' },
	{ name: 'Manrope', google: 'Manrope:wght@400;500;600;700' },
	{ name: 'Outfit', google: 'Outfit:wght@400;500;600;700' },
	{ name: 'Inter', google: 'Inter:wght@400;500;600;700' },
	{ name: 'Poppins', google: 'Poppins:ital,wght@0,400;0,500;0,600;0,700;1,500' },
]

export const googleFontsHref =
	'https://fonts.googleapis.com/css2?' +
	fontOptions.map((f) => `family=${f.google}`).join('&') +
	'&display=swap'
