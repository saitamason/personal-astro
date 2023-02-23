import { z, defineCollection } from "astro:content";

const educationCollection = defineCollection({
  schema: z.object({
    lang: z.enum(["en", "pl"]),
    years: z.object({
      from: z.string(),
      to: z.string(),
    }),
    title: z.object({
      content: z.string(),
      lang: z.enum(["en", "pl"]),
    }),
    school: z.object({
      name: z.string(),
      lang: z.enum(["en", "pl"]),
      logo: z.object({
        filename: z.string(),
        aspectRatio: z.string(),
      }),
    }),
  }),
});

export const collections = {
  education: educationCollection,
};
