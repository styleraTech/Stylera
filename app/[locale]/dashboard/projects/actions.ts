// app/[locale]/dashboard/projects/actions.ts
"use server";

import { z } from "zod";

import { createProject, updateProject } from "@/database/projects";

// ✅ IMPORTANT: import Prisma enums from your generated output
import { Locale } from "@/generated/prisma/client"; // <-- matches your generator output path
import { deleteProject } from "@/database/projects";

const TranslationSchema = z.object({
  // ✅ MUST be Prisma enum, not string
  locale: z.nativeEnum(Locale),

  title: z.string().min(1, "Title مطلوب"),
  description: z.string().min(1, "Description مطلوب"),
  category: z.string().min(1, "Category مطلوب"),

  // ✅ REQUIRED string URL (matches schema: image String)
  image: z.string().optional(),

  technologies: z.array(z.string()).default([]),

  // Prisma allows optional string fields; we store null/undefined safely
  github: z.string().nullable().optional(),
  live: z.string().nullable().optional(),
});

const BaseProjectSchema = z.object({
  slug: z.string().min(1, "Slug مطلوب"),
  className: z.string().min(1, "ClassName مطلوب"),
  year: z.coerce.number().int().min(1900).max(2100),
  tipInfo: z.string().min(1, "Tip Info مطلوب"),
  poster: z.string().url("Poster URL غير صالح"),
  color: z.string().min(1, "Color مطلوب"),

  // JSON strings from hidden inputs
  screensJson: z.string().default("[]"),
  translationsJson: z.string().default("[]"),
});

function parseJsonArray<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
}

export async function createProjectAction(
  _: { message: string },
  formData: FormData
) {
  try {
    const parsed = BaseProjectSchema.safeParse({
      slug: formData.get("slug") || "",
      className: formData.get("className") || "",
      year: formData.get("year") || "",
      tipInfo: formData.get("tipInfo") || "",
      poster: formData.get("poster") || "",
      color: formData.get("color") || "",
      screensJson: formData.get("screensJson") || "[]",
      translationsJson: formData.get("translationsJson") || "[]",
    });

    if (!parsed.success) {
      return {
        message: parsed.error.errors.map((e) => e.message).join(", "),
      };
    }

    const screens = parseJsonArray<string[]>(parsed.data.screensJson, [])
      .map((s) => (typeof s === "string" ? s.trim() : ""))
      .filter(Boolean);

    const translationsRaw = parseJsonArray<unknown[]>(
      parsed.data.translationsJson,
      []
    );

    const translationsParsed = z
      .array(TranslationSchema)
      .safeParse(translationsRaw);

    if (!translationsParsed.success) {
      return {
        message:
          "Translations غير صالحة: " +
          translationsParsed.error.errors.map((e) => e.message).join(", "),
      };
    }

    const res = await createProject({
      slug: parsed.data.slug,
      className: parsed.data.className,
      year: parsed.data.year,
      tipInfo: parsed.data.tipInfo,
      poster: parsed.data.poster,
      color: parsed.data.color,
      screens,
      translations: translationsParsed.data.map((t) => ({
        locale: t.locale, // ✅ Locale enum
        title: t.title.trim(),
        description: t.description.trim(),
        category: t.category.trim(),
        image: t.image ?? "", // ✅ required
        technologies: (t.technologies ?? [])
          .map((x) => x.trim())
          .filter(Boolean),
        github: t.github?.trim() ? t.github.trim() : null,
        live: t.live?.trim() ? t.live.trim() : null,
      })),
    });

    return { message: res.message ?? "تم إنشاء المشروع" };
  } catch (error) {
    console.error("Error in createProjectAction:", error);
    return { message: "فشلت العملية، يرجى المحاولة لاحقاً" };
  }
}

export async function updateProjectAction(
  _: { message: string },
  formData: FormData
) {
  try {
    const schema = BaseProjectSchema.extend({
      id: z.string().min(1, "Project ID مطلوب"),
    });

    const parsed = schema.safeParse({
      id: formData.get("id") || "",
      slug: formData.get("slug") || "",
      className: formData.get("className") || "",
      year: formData.get("year") || "",
      tipInfo: formData.get("tipInfo") || "",
      poster: formData.get("poster") || "",
      color: formData.get("color") || "",
      screensJson: formData.get("screensJson") || "[]",
      translationsJson: formData.get("translationsJson") || "[]",
    });

    if (!parsed.success) {
      return {
        message: parsed.error.errors.map((e) => e.message).join(", "),
      };
    }

    const screens = parseJsonArray<string[]>(parsed.data.screensJson, [])
      .map((s) => (typeof s === "string" ? s.trim() : ""))
      .filter(Boolean);

    const translationsRaw = parseJsonArray<unknown[]>(
      parsed.data.translationsJson,
      []
    );

    const translationsParsed = z
      .array(TranslationSchema)
      .safeParse(translationsRaw);

    if (!translationsParsed.success) {
      return {
        message:
          "Translations غير صالحة: " +
          translationsParsed.error.errors.map((e) => e.message).join(", "),
      };
    }

    const res = await updateProject({
      id: parsed.data.id,
      slug: parsed.data.slug,
      className: parsed.data.className,
      year: parsed.data.year,
      tipInfo: parsed.data.tipInfo,
      poster: parsed.data.poster,
      color: parsed.data.color,
      screens,
      translations: translationsParsed.data.map((t) => ({
        locale: t.locale, // ✅ Locale enum
        title: t.title.trim(),
        description: t.description.trim(),
        category: t.category.trim(),
        image: t.image ?? "", // ✅ required
        technologies: (t.technologies ?? [])
          .map((x) => x.trim())
          .filter(Boolean),
        github: t.github?.trim() ? t.github.trim() : null,
        live: t.live?.trim() ? t.live.trim() : null,
      })),
    });

    return { message: res.message ?? "تم تحديث المشروع" };
  } catch (error) {
    console.error("Error in updateProjectAction:", error);
    return { message: "فشلت العملية، يرجى المحاولة لاحقاً" };
  }
}

export async function deleteProjectAction(
  _: { message: string },
  formData: FormData
) {
  try {
    const schema = z.object({
      id: z.string().min(1, "Project ID مطلوب"),
    });

    const data = schema.safeParse({
      id: formData.get("id") || "",
    });

    if (!data.success) {
      return { message: data.error.errors.map((e) => e.message).join(", ") };
    }

    const res = await deleteProject(data.data.id);

    // deleteProject returns { ok, message }
    if (!res.ok) return { message: res.message };

    return { message: "OK" };
  } catch (error) {
    console.error("deleteProjectAction error:", error);
    return { message: "فشلت العملية، يرجى المحاولة لاحقاً" };
  }
}
