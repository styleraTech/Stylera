"use client";
import { cn } from "@/lib/utils";
import { Globe, ExternalLink } from "lucide-react";

interface HeroSectionProps {
  className?: string;
  title: string;
  description: string;
  liveSite?: string;
  year?: number;
  tipInfo?: string;
}

export default function HeroSection({
  className,
  title,
  description,
  liveSite,
  tipInfo,
  year,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative h-screen  w-full overflow-hidden flex flex-col justify-center pb-24 px-6 md:px-12 lg:px-24",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-[#050511]/40 to-transparent z-10" />

      <div className=" z-20 max-w-5xl translate-y-16">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-3 py-1 border border-white/20 rounded-full text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
            {tipInfo || "Featured Project"}
          </span>
          <span className="px-3 py-1 border border-white/20 rounded-full text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
            {year || 2024}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
          {title}
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            {description}
          </p>
          {liveSite && liveSite.length > 0 && (
            <a
              href={liveSite}
              target="_blank"
              className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
            >
              <Globe className="w-5 h-5" />
              <span>Visit Live Site</span>
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
