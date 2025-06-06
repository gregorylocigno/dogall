import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        featured: z.boolean().optional(),
        image: z.string().optional(),
        description: z.string(),
        authors: z.any().optional(),
      }),
    }),
  },
});
