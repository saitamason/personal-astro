import type { IconType } from "@icons-pack/react-simple-icons";

export interface Language {
  language: "en" | "pl";
}

export interface Link {
  text: string;
  url: string;
}

export interface Project {
  title: string;
  subtitle: string;
  image: {
    full: string;
    mobile: string;
  };
  technologies: { name: string; icon: IconType }[];
}

export interface Caption {
  title: string;
  subtitle: string;
}
