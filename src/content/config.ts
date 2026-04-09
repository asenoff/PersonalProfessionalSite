import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number().int().nonnegative(),
    publishedAt: z.string().optional()
  })
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number().int().nonnegative()
  })
});

export const collections = {
  articles,
  work
};
