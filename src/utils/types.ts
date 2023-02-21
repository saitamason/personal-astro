import type { Tech } from "./technologies.astro";

export type Language = "en" | "pl";

export interface Link {
  text: string;
  url: string;
}

export interface Project {
  title: string;
  subtitle: string;
  type: "commercial" | "personal" | "course";
  description: string;
  image: {
    full: string;
    mobile: string;
  };
  technologies: Tech[];
  link: {
    text: string;
    url: string;
    lang: string;
    icon: Tech;
  };
  source?: string;
}

export interface Caption {
  title: string;
  subtitle: string;
}
