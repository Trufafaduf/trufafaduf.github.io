import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each Markdown file in src/content/projects becomes a page at /projects/<filename>.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['In progress', 'Draft', 'Complete']),
    role: z.string(),
    methods: z.array(z.string()),
    updated: z.coerce.date(),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
