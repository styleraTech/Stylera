// app/dashboard/projects/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectTable } from "./_components/project-table";

// ✅ updated to match the new database/projects.ts helpers
// Use listProjects() and do filtering/pagination here (server-side), OR implement getProjects in db.
// Since you asked to match the new db, this version uses listProjects() + manual paging.
import { listProjects } from "@/database/projects";

type SearchParams = Promise<{ q?: string; page?: string }>;

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const q = ((await searchParams)?.q ?? "").trim();
  const pageRaw = Number((await searchParams)?.page ?? "1");
  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;

  const pageSize = 20;

  const res = await listProjects();
  const all = res.ok ? res.data : [];

  // ✅ filter by slug OR any translation title (en/ar)
  const filtered = q
    ? all.filter((p) => {
        const slugMatch = p.slug?.toLowerCase().includes(q.toLowerCase());
        const titleMatch = (p.translations ?? []).some((t) =>
          (t.title ?? "").toLowerCase().includes(q.toLowerCase())
        );
        return slugMatch || titleMatch;
      })
    : all;

  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, pageCount);

  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;

  const items = filtered.slice(start, end).map((p) => ({
    id: p.id,
    slug: p.slug,
    className: p.className,
    year: p.year,
    tipInfo: p.tipInfo,
    poster: p.poster,
    color: p.color,
    screens: p.screens,
    translations: (p.translations ?? []).map((t) => ({
      locale: t.locale,
      title: t.title,
      category: t.category,
      image: t.image,
    })),
    createdAt: p.createdAt?.toISOString?.() ?? String(p.createdAt ?? ""),
    updatedAt: p.updatedAt?.toISOString?.() ?? String(p.updatedAt ?? ""),
  }));

  const data = {
    items,
    total,
    page: safePage,
    pageSize,
    pageCount,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="text-sm text-muted-foreground">
            Create, edit, translate, and manage portfolio projects.
          </p>
        </div>

        <Button asChild>
          <Link href="/dashboard/projects/new">New Project</Link>
        </Button>
      </div>

      <ProjectTable initialQuery={q} data={data} />
    </div>
  );
}
