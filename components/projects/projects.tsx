// app/[locale]/(site)/projects/_components/all-projects.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Div, itemVariants } from "@/constants/animation";
import ProjectCard from "./project-card";

// ✅ Prisma Locale is enum, but in UI you use "ar" | "en"
type UiLocale = "ar" | "en";

type ProjectTranslation = {
  locale: UiLocale;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  github?: string | null;
  live?: string | null;
};

type ProjectListItemForPublic = {
  id: string;
  slug: string;
  year: number;
  tipInfo: string;
  poster: string;
  color: string;
  screens: string[];
  translations: ProjectTranslation[];
};

type ListResponse = {
  items: ProjectListItemForPublic[];
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
};

interface AllProjectsProps {
  dictionary?: Dictionary["allProjects"];
  isRTL?: boolean;
  locale: UiLocale;

  // ✅ new db response
  data: Data[];
}
type Data = {
  className: string;
  slug: string;
  year: number;
  tipInfo: string;
  poster: string;
  color: string;
  id: string;
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
};

function pickTranslation(project: ProjectListItemForPublic, locale: UiLocale) {
  // prefer requested locale
  const exact = project.translations.find((t) => t.locale === locale);
  if (exact) return exact;

  // fallback: first translation if exists
  return project.translations[0] ?? null;
}

function buildQuery(params: { q?: string; category?: string; page?: number }) {
  const sp = new URLSearchParams();
  if (params.q?.trim()) sp.set("q", params.q.trim());
  if (params.category?.trim() && params.category !== "all")
    sp.set("category", params.category.trim());
  if (params.page && params.page > 1) sp.set("page", String(params.page));
  return sp.toString();
}

export default function AllProjects({
  dictionary,
  isRTL,
  locale,
  data,
}: AllProjectsProps) {
  if (!dictionary) return null;

  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const initialQ = sp.get("q") ?? "";
  const initialCategory = sp.get("category") ?? "all";

  // ✅ keep same UX: controlled search + category state
  const [searchTerm, setSearchTerm] = useState(initialQ);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || "all"
  );

  // ✅ projects with resolved locale translation
  const resolved = useMemo(() => {
    return data
      .map((p) => {
        const t = pickTranslation(p, locale);
        return { p, t };
      })
      .filter((x): x is { p: Data; t: ProjectTranslation } => Boolean(x.t));
  }, [data, locale]);

  // ✅ categories list (from translations of current page items)
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const { t } of resolved) {
      if (t.category) set.add(t.category);
    }
    return Array.from(set);
  }, [resolved]);

  // ✅ filtered list (same logic as your old file, but using resolved translation)
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const cat = selectedCategory;

    return resolved.filter(({ t }) => {
      const matchesSearch =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);

      const matchesCategory = cat === "all" || !cat || t.category === cat;

      return matchesSearch && matchesCategory;
    });
  }, [resolved, searchTerm, selectedCategory]);

  // ✅ push query params (mirrors your earlier dashboard table pattern)
  const applyFiltersToUrl = (next: { q: string; category: string }) => {
    const qs = buildQuery({
      q: next.q,
      category: next.category,
      page: 1,
    });
    router.push(qs ? `${pathname}?${qs}` : pathname);
  };

  return (
    <div className="py-24 px-4">
      <Div className="max-w-7xl mx-auto" variants={itemVariants}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            {dictionary.featuredTitle}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {dictionary.featuredSubtitle}
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-4 mb-12 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* Search + Select */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search
                className={`absolute ${
                  isRTL ? "right-3" : "left-3"
                } top-2 text-slate-400 h-5 w-5`}
              />
              <Input
                type="text"
                placeholder={dictionary.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    applyFiltersToUrl({
                      q: searchTerm,
                      category: selectedCategory,
                    });
                  }
                }}
                className={`${
                  isRTL ? "pr-10" : "pl-10"
                } bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-400`}
              />
            </div>

            {/* Category Filter */}
            <Select
              value={selectedCategory}
              onValueChange={(val) => {
                setSelectedCategory(val);
                applyFiltersToUrl({ q: searchTerm, category: val });
              }}
            >
              <SelectTrigger className="w-full sm:w-48 bg-slate-800 border-slate-700 text-slate-200">
                <SelectValue placeholder={dictionary.selectCategory} />
              </SelectTrigger>

              <SelectContent className="bg-slate-800 text-slate-200 border-slate-700 font-[cairo]">
                <SelectItem value="all">{dictionary.selectCategory}</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Search Button (same intent as old behavior) */}
            <button
              type="button"
              onClick={() =>
                applyFiltersToUrl({
                  q: searchTerm,
                  category: selectedCategory,
                })
              }
              className="hidden"
              aria-hidden
            />
          </div>

          {/* CTA Button */}
          <Link
            href={`/${locale}/contact`}
            className="bg-gradient-to-r cursor-pointer from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-2 py-2 flex rounded-sm items-center gap-1 text-lg"
          >
            {dictionary.cta.startProject}
            {isRTL ? (
              <ArrowLeft size={18} className="mt-0.5" />
            ) : (
              <ArrowRight size={18} className="mt-0.5" />
            )}
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {filtered.length > 0 ? (
            filtered.map(({ p, t }) => (
              <ProjectCard
                key={p.id}
                title={t.title}
                description={t.description}
                image={p.poster}
                category={t.category}
                technologies={t.technologies}
                github={t.github ?? undefined}
                live={t.live ?? undefined}
                uniqueKey={p.id}
              />
            ))
          ) : (
            <p className="text-center text-slate-400 col-span-full text-lg">
              {isRTL
                ? "لم يتم العثور على مشاريع مطابقة."
                : "No matching projects found."}
            </p>
          )}
        </div>

        {/* Pagination (real) */}
        <div className="mt-12 flex justify-center">
          <Pagination isRTL={isRTL}>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={`${pathname}?${buildQuery({
                    q: initialQ,
                    category: initialCategory,
                    page: Math.max(1, data.length - 1),
                  })}`}
                  isRTL={isRTL}
                />
              </PaginationItem>

              {/* Current page */}
              <PaginationItem>
                <PaginationLink
                  href={`${pathname}?${buildQuery({
                    q: initialQ,
                    category: initialCategory,
                    page: data.length,
                  })}`}
                  isActive
                >
                  {String(data.length).padStart(2, "0")}
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  href={`${pathname}?${buildQuery({
                    q: initialQ,
                    category: initialCategory,
                    page: data.length,
                  })}`}
                  isRTL={isRTL}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Div>
    </div>
  );
}
