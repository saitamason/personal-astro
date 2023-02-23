export type LanguageSelectionType = "en" | "pl";

export interface Link {
  text: string;
  url: string;
}

export interface Caption {
  title: string;
  subtitle: string;
}

export type SizeType = "large" | "medium" | "small";

export interface LanguageVersionsType {
  en?: string;
  pl?: string;
  default?: LanguageSelectionType;
}
