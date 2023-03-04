import { z, defineCollection } from "astro:content";

const educationCollection = defineCollection({
  schema: z.object({
    gpa: z.number(),
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

const researchCollection = defineCollection({
  schema: z.object({
    index: z.number(),
    years: z.object({
      from: z.string(),
      to: z.string(),
    }),
    title: z.object({
      content: z.string(),
      lang: z.enum(["en", "pl"]),
    }),
    role: z.string(),
    link: z
      .object({
        url: z.string().url(),
        text: z.string(),
        hreflang: z.enum(["en", "pl"]),
      })
      .optional(),
  }),
});

export const collections = {
  education: educationCollection,
  research: researchCollection,
};
