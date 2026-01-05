"use client";
import { ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

interface projectData {
  id: string;
  slug: string;
  className: string;
  year: number;
  tipInfo: string;
  poster: string;
  color: string;
  screens: string[];
  createdAt: Date;
  updatedAt: Date;
  translations: {
    locale: Locale;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    github: string | null;
    live: string | null;
  }[];
}

export default function NextProject({
  project,
}: {
  project: projectData | null;
}) {
  if (!project) return null;
  const { locale } = useParams();
  const title = project.translations.find((t) => t.locale === locale)?.title;
  const href = `/${locale}/projects/${project.id}`;
  return (
    <section className="py-32 px-4 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/40 mb-4 text-sm tracking-widest uppercase">
          {locale === "en" ? "Next Project" : "المشروع التالي"}
        </p>
        <a href={href} className="group inline-block">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-blue-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span className="font-medium">View Case</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </a>
      </div>
    </section>
  );
}
