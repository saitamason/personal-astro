import type { Icon } from "phosphor-react";

export type LanguageSelectionType = "en" | "pl";

export interface Link {
  heading: string;
  subheading: string;
  url: string;
  icon: Icon;
}

export interface Caption {
  title: string;
  subtitle: string;
  img: {
    filename: string;
    alt: string;
  };
}

export type SizeType = "large" | "medium" | "small";

export interface LanguageVersionsType {
  en?: string;
  pl?: string;
  default?: LanguageSelectionType;
}
