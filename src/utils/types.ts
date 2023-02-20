export interface Language {
  language: "en" | "pl";
}

export type Links = {
  text: string;
  url: string;
}[];

export type Link = { text: string; url: string };
