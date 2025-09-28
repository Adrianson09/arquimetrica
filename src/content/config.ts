// src/content/config.ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    coverImage: z.string().optional(),   // ← string
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
