declare type Locale = "en" | "ar";
declare interface UserSession {
  id: string;
  fullName: string;
  role: "admin" | "superAdmin";
  email: string;
}
declare type ProjectListItem = {
  id: string;
  slug: string;
  className: string;
  year: number;
  tipInfo: string;
  poster: string;
  color: string;
  screens: string[];
  translations: Array<{
    locale: string;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    github?: string | null;
    live?: string | null;
  }>;
};

declare type TranslationState = {
  locale: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string; // UI as comma separated
  github: string;
  live: string;
};
