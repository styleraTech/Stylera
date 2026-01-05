import HeroSection from "./HeroSection";
import DesktopExperience from "./DesktopExperience";
import MobileCompanion from "./MobileCompanion";
import DesignSystem from "./DesignSystem";
import NextProject from "./NextProject";
import { notFound } from "next/navigation";
import Navigation from "@/components/layout/navigation";
import {
  findNextProject,
  getProjectById,
  listProjects,
} from "@/database/projects";

export const generateStaticParams = async () => {
  const projects = await listProjects();
  return projects.data?.map((project) => ({
    id: project.id,
  }));
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; locale: Locale }>;
}) {
  const { id, locale } = await params;
  const project = await getProjectById(id);

  if (!project || !project.ok) return notFound();
  const projectData = project.data;
  const translation = projectData.translations.find((t) => t.locale === locale);

  const nextProject = await findNextProject(projectData.id);

  return (
    <main>
      <div className="min-h-screen bg-[#050511] text-white font-sans selection:bg-blue-500/30">
        <Navigation />
        <HeroSection
          description={translation?.description ?? ""}
          title={translation?.title ?? ""}
          className={projectData.className}
          liveSite={translation?.live ?? ""}
          tipInfo={projectData.tipInfo}
          year={projectData.year}
        />
        <DesktopExperience
          locale={locale}
          title={translation?.title ?? ""}
          image={projectData.poster}
        />
        <MobileCompanion
          locale={locale}
          title={translation?.title ?? ""}
          screens={projectData.screens}
        />
        <DesignSystem
          color={projectData.color}
          className={projectData.className}
          locale={locale}
        />
        <NextProject project={nextProject} />
      </div>
    </main>
  );
}
