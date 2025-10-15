"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight, SparkleIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  technologies,
  github,
  live,
}: ProjectCardProps) {
  return (
    <Card className="relative bg-[#111a2b] border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 group rounded-2xl flex flex-col h-full p-0 gap-0">
      {/* Image with Background */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative px-6 py-6 flex-1 flex flex-col">
        {/* Vertical Light Beam Effect - Only on text section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-full backdrop-blur-2xl blur-3xl opacity-30"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.6) 45%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.6) 55%, transparent 100%)",
            }}
          />
        </div>

        <div className="flex items-center justify-between mb-4 relative z-10">
          <span className="px-4 py-1.5 bg-[#27272a] border border-slate-700/50 text-slate-300 text-sm font-medium rounded-full flex items-center gap-2">
            <SparkleIcon size={16}/>
            {category}
          </span>
          <div className="flex gap-2">
            {github && (
              <Button
                size="sm"
                variant="ghost"
                className="h-10 w-10 p-0 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50"
                asChild
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-4 w-4" />
                </a>
              </Button>
            )}
            {live && (
              <Button
                size="sm"
                variant="ghost"
                className="h-10 w-10 p-0 rounded-full bg-[#27272a] border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50"
                asChild
              >
                <a href={live} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <h3 className="text-white font-semibold text-xl mb-3 relative z-10">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-1 relative z-10">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
          {technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-800/50 border border-slate-700/30 text-slate-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
