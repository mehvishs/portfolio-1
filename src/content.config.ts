import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One .mdx file per case study in src/content/work/. The filename is the URL: spark-ai.mdx -> /work/spark-ai
const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    order: z.number(),                 // position on the homepage
    outcome: z.string(),               // one line on the homepage card
    headline: z.string(),              // big outcome headline at the top of the case study
    tags: z.array(z.string()).max(3),
    status: z.enum(['Shipped', 'In rollout', 'Vision']),
    role: z.string(),
    workedWith: z.string(),
    timeline: z.string(),
    tools: z.array(z.string()),
    cover: z.string(),                 // placeholder label until real images arrive
    opener: z.object({
      back: z.string(),
      mid: z.string(),
      phone: z.string().optional(),
      note: z.string(),
    }),
    draft: z.boolean().default(false), // true = page exists but isn't listed on the homepage
  }),
});

export const collections = { work };
