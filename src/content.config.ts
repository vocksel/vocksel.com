import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Full project write-ups. Each gets a detail page at /projects/<slug>.
// Adding a project is just a new .md file here.
const projects = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string(),
			type: z.enum(['Game', 'Code']),
			year: z.number(),
			url: z.string().url().optional(),
			// Higher = shown first. Ties fall back to year desc.
			order: z.number().default(0),
			featured: z.boolean().default(true),
			// Card + hero image.
			thumbnail: image(),
			// Optional screenshot gallery shown on the detail page.
			gallery: z
				.array(
					z.object({
						src: image(),
						alt: z.string().default(''),
						caption: z.string().optional(),
					})
				)
				.default([]),
		}),
})

// Writing / devlog. Empty to start; drop a .md file to publish.
const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().default(false),
	}),
})

export const collections = { projects, blog }
