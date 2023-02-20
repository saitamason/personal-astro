export interface Language {
  language: "en" | "pl";
}

export type Links = {
  text: string;
  url: string;
}[];

export type Link = { text: string; url: string };

export interface Project {
  title: string;
  subtitle: string;
  image: {
    full: string;
    mobile: string;
  };
}
