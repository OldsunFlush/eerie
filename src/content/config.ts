import { defineCollection, z } from "astro:content";

const collection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { collection };
