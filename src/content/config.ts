import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    date: z.date(),
    category: z.enum([
      "civil",
      "trabalhista",
      "empresarial",
      "imobiliario",
      "familia",
    ]),
    featured: z.boolean().default(false),
    readTime: z.string(),
  }),
});

export const collections = { blog };
