export interface Language {
  language: "en" | "pl";
}

export type Links = Map<string, string>;

export type Link = { text: string; url: string };
