type ProjectListItem = {
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

type TranslationState = {
  locale: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string; // UI as comma separated
  github: string;
  live: string;
};
