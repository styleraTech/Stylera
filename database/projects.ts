// database/projects.ts
// Prisma MongoDB + composite type array (ProjectTranslation[]) support
// Uses the same "message" return style you use in other database modules.
import "server-only";
import prisma from "@/lib/prisma"; // ✅ adjust if your prisma client path differs
import type { Project, Locale } from "@/generated/prisma/client";
import type { ProjectTranslation } from "@/generated/prisma/client"; // composite type
// If your generated output path differs, keep it consistent with your generator output:
// generator client { output = "../generated/prisma" }

type CreateProjectInput = {
  slug: string;
  className: string;
  year: number;
  tipInfo: string;
  poster: string;
  color: string;
  screens: string[];
  translations: Array<{
    locale: Locale;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    github?: string | null;
    live?: string | null;
  }>;
};

type UpdateProjectInput = CreateProjectInput & {
  id: string;
};

function normalizeStrings(arr: string[]) {
  return (arr ?? []).map((x) => String(x ?? "").trim()).filter(Boolean);
}

function normalizeTranslation(t: CreateProjectInput["translations"][number]) {
  return {
    locale: t.locale,
    title: String(t.title ?? "").trim(),
    description: String(t.description ?? "").trim(),
    category: String(t.category ?? "").trim(),
    image: String(t.image ?? "").trim(),
    technologies: normalizeStrings(t.technologies ?? []),
    // Prisma expects undefined for "not set" on optional fields (works well with Mongo)
    github: t.github ? String(t.github).trim() : undefined,
    live: t.live ? String(t.live).trim() : undefined,
  } satisfies ProjectTranslation;
}

function normalizeCreate(input: CreateProjectInput) {
  return {
    slug: String(input.slug ?? "").trim(),
    className: String(input.className ?? "").trim(),
    year: Number(input.year),
    tipInfo: String(input.tipInfo ?? "").trim(),
    poster: String(input.poster ?? "").trim(),
    color: String(input.color ?? "").trim(),
    screens: normalizeStrings(input.screens ?? []),
    translations: (input.translations ?? []).map(normalizeTranslation),
  };
}

/**
 * ✅ Create
 * IMPORTANT: For MongoDB composite type arrays, you assign translations directly:
 *   translations: [...]
 * NOT nested create/update syntax.
 */
export async function createProject(input: CreateProjectInput) {
  try {
    const data = normalizeCreate(input);

    // basic guardrails (actions already validate, but DB layer should stay safe)
    if (!data.slug) return { ok: false as const, message: "Slug مطلوب" };
    if (!data.className)
      return { ok: false as const, message: "ClassName مطلوب" };
    if (!Number.isFinite(data.year))
      return { ok: false as const, message: "Year غير صالح" };
    if (!data.tipInfo) return { ok: false as const, message: "Tip Info مطلوب" };
    if (!data.poster) return { ok: false as const, message: "Poster مطلوب" };
    if (!data.color) return { ok: false as const, message: "Color مطلوب" };
    if (!data.translations.length)
      return { ok: false as const, message: "Translations مطلوبة" };

    const created = await prisma.project.create({
      data: {
        slug: data.slug,
        className: data.className,
        year: data.year,
        tipInfo: data.tipInfo,
        poster: data.poster,
        color: data.color,
        screens: data.screens,
        translations: data.translations, // ✅ direct assignment for composite type[]
      },
      select: { id: true },
    });

    return {
      ok: true as const,
      message: "تم إنشاء المشروع بنجاح",
      data: { id: created.id },
    };
  } catch (error: any) {
    // handle unique slug
    const msg =
      typeof error?.message === "string" &&
      error.message.includes("Unique constraint")
        ? "Slug مستخدم مسبقاً"
        : "فشلت العملية، يرجى المحاولة لاحقاً";

    console.error("createProject error:", error);
    return { ok: false as const, message: msg };
  }
}

/**
 * ✅ Update (OVERWRITE translations)
 * IMPORTANT: With composite type arrays, you overwrite like:
 *   translations: [...]
 */
export async function updateProject(input: UpdateProjectInput) {
  try {
    const data = normalizeCreate(input);

    if (!input.id) return { ok: false as const, message: "Project ID مطلوب" };

    const updated = await prisma.project.update({
      where: { id: input.id },
      data: {
        slug: data.slug,
        className: data.className,
        year: data.year,
        tipInfo: data.tipInfo,
        poster: data.poster,
        color: data.color,
        screens: data.screens,
        translations: data.translations, // ✅ overwrite composite array
      },
      select: { id: true },
    });

    return {
      ok: true as const,
      message: "تم تحديث المشروع بنجاح",
      data: { id: updated.id },
    };
  } catch (error: any) {
    console.error("updateProject error:", error);

    const msg =
      typeof error?.message === "string" &&
      error.message.includes("Record to update not found")
        ? "المشروع غير موجود"
        : typeof error?.message === "string" &&
          error.message.includes("Unique constraint")
        ? "Slug مستخدم مسبقاً"
        : "فشلت العملية، يرجى المحاولة لاحقاً";

    return { ok: false as const, message: msg };
  }
}

/**
 * ✅ Get single project (optional helper)
 */
export async function getProjectById(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) return { ok: false as const, message: "المشروع غير موجود" };

    return { ok: true as const, data: project };
  } catch (error) {
    console.error("getProjectById error:", error);
    return {
      ok: false as const,
      message: "فشلت العملية، يرجى المحاولة لاحقاً",
    };
  }
}

/**
 * ✅ List projects (optional helper)
 */
export async function listProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    if (!projects) {
      return { ok: false as const, message: "لا توجد مشاريع", projects: [] };
    }
    return { ok: true as const, data: projects };
  } catch (error) {
    console.error("listProjects error:", error);
    return {
      ok: false as const,
      message: "فشلت العملية، يرجى المحاولة لاحقاً",
      projects: [],
    };
  }
}

/**
 * ✅ Delete project (optional helper)
 */
export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({ where: { id } });
    return { ok: true as const, message: "تم حذف المشروع بنجاح" };
  } catch (error) {
    console.error("deleteProject error:", error);
    return {
      ok: false as const,
      message: "فشلت العملية، يرجى المحاولة لاحقاً",
    };
  }
}

// find next project randomly

export const findNextProject = async (
  currentProjectId: string
): Promise<Project | null> => {
  try {
    const projects = await listProjects();
    if (!projects.ok) return null;

    const filtered = projects.data.filter((p) => p.id !== currentProjectId);
    if (filtered.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
  } catch (error) {
    console.error("findNextProject error:", error);
    return null;
  }
};
