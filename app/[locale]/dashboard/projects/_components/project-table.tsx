// app/dashboard/projects/_components/project-table.tsx
"use client";

import Link from "next/link";
import { useMemo, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { projectColumns } from "./project-columns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export type ProjectListItem = {
  id: string;
  slug: string;
  className: string;
  year: number;
  tipInfo: string;
  poster: string;
  color: string;
  screens: string[];
  // keep translations lightweight for the table; columns can still render based on it if you include it
  translations?: Array<{
    locale: "ar" | "en";
    title: string;
    category: string;
    image: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
};

export type ProjectsListResponse = {
  items: ProjectListItem[];
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
};

export function ProjectTable({
  data,
  initialQuery,
}: {
  data: ProjectsListResponse;
  initialQuery: string;
}) {
  const [q, setQ] = useState(initialQuery ?? "");
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const columns = useMemo(() => projectColumns, []);

  function buildQuery(params: { q?: string; page?: number }) {
    // keep any other params that might exist
    const next = new URLSearchParams(sp?.toString() ?? "");

    if (params.q?.trim()) next.set("q", params.q.trim());
    else next.delete("q");

    // reset page when searching unless explicitly provided
    if (params.page && params.page > 1) next.set("page", String(params.page));
    else next.delete("page");

    return next.toString();
  }

  function onSearch() {
    startTransition(() => {
      router.push(`${pathname}?${buildQuery({ q, page: 1 })}`);
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full max-w-md items-center gap-2">
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by slug or title…"
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch();
            }}
          />
          <Button
            type="button"
            variant="secondary"
            disabled={isPending}
            onClick={onSearch}
          >
            Search
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          Total:{" "}
          <span className="font-medium text-foreground">{data.total}</span>
        </div>
      </div>

      <div className="rounded-md border">
        <div className="grid grid-cols-12 gap-2 border-b bg-muted/40 px-3 py-2 text-xs font-medium text-muted-foreground">
          {columns.map((c) => (
            <div key={c.key} className={c.className}>
              {c.title}
            </div>
          ))}
        </div>

        <div className="divide-y">
          {data.items.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-12 gap-2 px-3 py-3 text-sm"
            >
              {columns.map((c) => (
                <div key={c.key} className={c.className}>
                  {c.render(p as any)}
                </div>
              ))}
            </div>
          ))}

          {data.items.length === 0 ? (
            <div className="px-3 py-10 text-center text-sm text-muted-foreground">
              No projects found.
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" disabled={data.page <= 1} asChild>
          <Link
            href={`${pathname}?${buildQuery({
              q: initialQuery,
              page: data.page - 1,
            })}`}
          >
            Previous
          </Link>
        </Button>

        <div className="text-sm text-muted-foreground">
          Page <span className="font-medium text-foreground">{data.page}</span>{" "}
          of{" "}
          <span className="font-medium text-foreground">{data.pageCount}</span>
        </div>

        <Button
          variant="outline"
          disabled={data.page >= data.pageCount}
          asChild
        >
          <Link
            href={`${pathname}?${buildQuery({
              q: initialQuery,
              page: data.page + 1,
            })}`}
          >
            Next
          </Link>
        </Button>
      </div>
    </div>
  );
}
