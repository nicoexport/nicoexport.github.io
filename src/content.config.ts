import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
			z.object({
			title: z.string(),
			description: z.string(),
			// Single year or range string, e.g. "2022" or "2019-2021"
			year: z.string(),
			updatedDate: z.string().optional(),
			heroImage: image().optional(),
			category: z.string().optional(),
				// Allow marking projects as selected for highlighting
				selected: z.boolean().optional(),
				// Optional tags array (e.g. ['selected'])
				tags: z.array(z.string()).optional(),
			// Optional external links to the project
			github: z.string().url().optional(),
			steam: z.string().url().optional(),
			itch: z.string().url().optional(),
		}),
});

const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		company: z.string(),
		years: z.string(),
	}),
});

export const collections = { projects, experience };
