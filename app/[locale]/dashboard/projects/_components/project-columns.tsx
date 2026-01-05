// app/dashboard/projects/_components/project-columns.tsx
"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DeleteProjectButton } from "./delete-project-button";

export const projectColumns: Array<{
  key: string;
  title: string;
  className: string;
  render: (p: ProjectListItem) => React.ReactNode;
}> = [
  {
    key: "poster",
    title: "Poster",
    className: "col-span-2 flex items-center",
    render: (p) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={p.poster}
        alt={p.slug}
        className="h-12 w-20 rounded-md object-cover border"
      />
    ),
  },
  {
    key: "slug",
    title: "Slug",
    className: "col-span-3 flex items-center",
    render: (p) => (
      <div className="space-y-1">
        <div className="font-medium">{p.slug}</div>
        <div className="text-xs text-muted-foreground">{p.className}</div>
      </div>
    ),
  },
  {
    key: "year",
    title: "Year",
    className: "col-span-1 flex items-center",
    render: (p) => <span>{p.year}</span>,
  },
  {
    key: "translations",
    title: "Translations",
    className: "col-span-3 flex items-center",
    render: (p) => (
      <div className="flex flex-wrap gap-2">
        {(p.translations ?? []).map((t: any) => (
          <Badge key={t.locale} variant="secondary">
            {t.locale}: {t.title}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    key: "meta",
    title: "Meta",
    className: "col-span-2 flex items-center",
    render: (p) => (
      <div className="space-y-1">
        <div className="text-xs">
          <span className="text-muted-foreground">Screens:</span>{" "}
          <span className="font-medium">{p.screens?.length ?? 0}</span>
        </div>
        <div className="text-xs">
          <span className="text-muted-foreground">Color:</span>{" "}
          <span className="font-medium">{p.color}</span>
        </div>
      </div>
    ),
  },
  {
    key: "actions",
    title: "Actions",
    className: "col-span-1 flex items-center justify-end gap-2",
    render: (p) => (
      <div className="flex items-center justify-end gap-2">
        <Button size="sm" variant="outline" asChild>
          <Link href={`/dashboard/projects/${p.id}`}>Edit</Link>
        </Button>
        <DeleteProjectButton id={p.id} />
      </div>
    ),
  },
];
