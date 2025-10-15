"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Div,
  defaultContainerVariants,
  itemVariants,
} from "@/constants/animation";
import InViewSection from "../ui/Custom-ui/framer-motion/in-view-section";
import ProjectCard from "@/components/projects/project-card";

interface ProjectsSectionProps {
  dictionary?: Dictionary["projects"];
  locale?: string;
}

const projects = [
  {
    id: 1,
    image: "/ar-en-Logo.webp",
    key: "mset",
    category: "Education",
    technologies: ["React", "Next.js", "MongoDB"],
    liveLink: "https://mset.ly/en",
    githubLink: "#",
  },
];

export default function ProjectsSection({
  dictionary,
  locale,
}: ProjectsSectionProps) {
  if (!dictionary) return null;

  return (
    <InViewSection className="py-20 px-4" variants={defaultContainerVariants}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            {dictionary.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {dictionary.subtitle}
          </p>
        </Div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const item = dictionary.items?.[project.key];
            if (!item) return null;

            return (
              <Div key={project.id} variants={itemVariants}>
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  image={project.image}
                  category={project.category}
                  technologies={project.technologies}
                  github={project.githubLink}
                  live={project.liveLink}
                />
              </Div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href={`/projects`}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5.5 text-lg cursor-pointer">
              {dictionary.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </InViewSection>
  );
}
