"use client";

import * as React from "react";
import { useMemo, useState } from "react";

import AccessibleDialogForm from "@/components/accible-dialog-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

// ✅ UploadThing (adjust import)
import { UploadButton } from "@/lib/uploadthing"; // <-- adjust

// ✅ actions (server)
import { createProjectAction, updateProjectAction } from "../actions"; // <-- adjust
import Form from "@/components/form";

// ✅ adjust this type to your real Project type if you have it
type ProjectListItem = {
  id: string;
  slug: string;
  className: string;
  year: number;
  tipInfo: string;
  poster: string;
  color: string;
  screens: string[];
  translations: Array<{
    locale: string;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    github?: string | null;
    live?: string | null;
  }>;
};

type TranslationState = {
  locale: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string; // UI as comma separated
  github: string;
  live: string;
};

function patch<T extends object>(arr: T[], idx: number, partial: Partial<T>) {
  return arr.map((x, i) => (i === idx ? { ...x, ...partial } : x));
}

function toUiTranslations(project?: ProjectListItem): TranslationState[] {
  const existing = project?.translations ?? [];
  const base = existing.length
    ? existing
    : [{ locale: "en" }, { locale: "ar" }];

  return base.map((t: any) => ({
    locale: t.locale,
    title: t.title ?? "",
    description: t.description ?? "",
    category: t.category ?? "",
    image: t.image ?? "",
    technologies: (t.technologies ?? []).join(", "),
    github: t.github ?? "",
    live: t.live ?? "",
  }));
}

function SingleImageUpload({
  endpoint,
  value,
  onChange,
}: {
  endpoint: string;
  value: string;
  onChange: (url: string) => void;
}) {
  return (
    <div className="space-y-3">
      {value ? (
        <div className="flex items-center gap-3 rounded-lg border p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="uploaded"
            className="h-14 w-14 rounded-md object-cover"
          />
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.open(value, "_blank")}
            >
              Preview
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onChange("")}
            >
              Remove
            </Button>
          </div>
        </div>
      ) : null}

      <UploadButton
        endpoint={endpoint as any}
        onClientUploadComplete={(res) => {
          const url = res?.[0]?.url;
          if (url) onChange(url);
        }}
        onUploadError={(error: Error) => alert(error.message)}
      />
    </div>
  );
}

function MultiImageUpload({
  endpoint,
  values,
  onChange,
}: {
  endpoint: string;
  values: string[];
  onChange: (urls: string[]) => void;
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        {values.map((url, idx) => (
          <div
            key={url + idx}
            className="group relative overflow-hidden rounded-lg border"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={url}
              alt={`screen-${idx + 1}`}
              className="h-24 w-24 object-cover"
            />
            <div className="absolute inset-0 hidden items-end justify-center bg-black/50 p-2 group-hover:flex">
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => onChange(values.filter((_, i) => i !== idx))}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <UploadButton
        endpoint={endpoint as any}
        onClientUploadComplete={(res) => {
          const urls = (res ?? []).map((x) => x.url).filter(Boolean);
          if (urls.length) onChange([...values, ...urls]);
        }}
        onUploadError={(error: Error) => alert(error.message)}
      />
    </div>
  );
}

export function ProjectFormDialog({
  mode,
  project,
}: {
  mode: "create" | "edit";
  project?: ProjectListItem;
}) {
  const [open, setOpen] = useState(false);

  const [slug, setSlug] = useState(project?.slug ?? "");
  const [className, setClassName] = useState(project?.className ?? "");
  const [year, setYear] = useState(
    String(project?.year ?? new Date().getFullYear())
  );
  const [tipInfo, setTipInfo] = useState(project?.tipInfo ?? "");
  const [poster, setPoster] = useState(project?.poster ?? "");
  const [color, setColor] = useState(project?.color ?? "");
  const [screens, setScreens] = useState<string[]>(project?.screens ?? []);
  const [translations, setTranslations] = useState<TranslationState[]>(
    toUiTranslations(project)
  );

  // ✅ Build JSON fields that will be placed into hidden inputs
  const screensJson = useMemo(() => JSON.stringify(screens), [screens]);

  const translationsJson = useMemo(() => {
    const mapped = translations.map((t) => ({
      locale: t.locale,
      title: t.title.trim(),
      description: t.description.trim(),
      category: t.category.trim(),
      image: t.image.trim(),
      technologies: t.technologies
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean),
      github: t.github.trim() || null,
      live: t.live.trim() || null,
    }));
    return JSON.stringify(mapped);
  }, [translations]);

  const action = mode === "create" ? createProjectAction : updateProjectAction;

  return (
    <Form
      dontReplace
      action={action}
      submit={mode === "create" ? "إنشاء" : "حفظ"}
    >
      {/* ✅ REQUIRED: these hidden inputs are what actually get sent in FormData */}
      {mode === "edit" ? (
        <Input type="hidden" name="id" value={project?.id ?? ""} readOnly />
      ) : null}

      <Input type="hidden" name="poster" value={poster} readOnly />
      <Input type="hidden" name="screensJson" value={screensJson} readOnly />
      <Input
        type="hidden"
        name="translationsJson"
        value={translationsJson}
        readOnly
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Project details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                name="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="stylera-erp"
              />
            </div>

            <div>
              <Label htmlFor="className">Class Name</Label>
              <Input
                id="className"
                name="className"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="portfolio-card"
              />
            </div>

            <div>
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                inputMode="numeric"
              />
            </div>

            <div>
              <Label htmlFor="tipInfo">Tip Info</Label>
              <Textarea
                id="tipInfo"
                name="tipInfo"
                value={tipInfo}
                onChange={(e) => setTipInfo(e.target.value)}
              />
            </div>

            <div>
              <Label>Poster (UploadThing)</Label>
              <SingleImageUpload
                endpoint="imageUploader" // ✅ replace with your endpoint
                value={poster}
                onChange={setPoster}
              />
            </div>

            <div>
              <Label htmlFor="color">Color</Label>
              <Input
                id="color"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="#0EA5E9"
              />
            </div>

            <div>
              <Label>Screens (UploadThing)</Label>
              <MultiImageUpload
                endpoint="imageUploader" // ✅ replace with your endpoint
                values={screens}
                onChange={setScreens}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Translations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-xs text-muted-foreground">
              يتم إرسال الترجمات عبر hidden input باسم <b>translationsJson</b>.
              (نفس فكرة نماذج المستخدم التي تعتمد على FormData)
              {/* :contentReference[oaicite:4]{(index = 4)} */}
            </p>

            <Separator />

            {translations.map((t, idx) => (
              <div key={t.locale} className="space-y-3 rounded-lg border p-3">
                <div className="text-sm font-medium">
                  {t.locale.toUpperCase()}
                </div>

                <div>
                  <Label>Title</Label>
                  <Input
                    value={t.title}
                    onChange={(e) =>
                      setTranslations((prev) =>
                        patch(prev, idx, { title: e.target.value })
                      )
                    }
                  />
                </div>

                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={t.description}
                    onChange={(e) =>
                      setTranslations((prev) =>
                        patch(prev, idx, { description: e.target.value })
                      )
                    }
                  />
                </div>

                <div>
                  <Label>Category</Label>
                  <Input
                    value={t.category}
                    onChange={(e) =>
                      setTranslations((prev) =>
                        patch(prev, idx, { category: e.target.value })
                      )
                    }
                  />
                </div>

                <div>
                  <Label>Image (UploadThing)</Label>
                  <SingleImageUpload
                    endpoint="imageUploader" // ✅ replace with your endpoint
                    value={t.image}
                    onChange={(url) =>
                      setTranslations((prev) =>
                        patch(prev, idx, { image: url })
                      )
                    }
                  />
                </div>

                <div>
                  <Label>Technologies (comma separated)</Label>
                  <Input
                    value={t.technologies}
                    onChange={(e) =>
                      setTranslations((prev) =>
                        patch(prev, idx, { technologies: e.target.value })
                      )
                    }
                    placeholder="Next.js, Prisma, MongoDB"
                  />
                </div>

                <div>
                  <Label>GitHub URL</Label>
                  <Input
                    value={t.github}
                    onChange={(e) =>
                      setTranslations((prev) =>
                        patch(prev, idx, { github: e.target.value })
                      )
                    }
                    placeholder="https://github.com/..."
                  />
                </div>

                <div>
                  <Label>Live URL</Label>
                  <Input
                    value={t.live}
                    onChange={(e) =>
                      setTranslations((prev) =>
                        patch(prev, idx, { live: e.target.value })
                      )
                    }
                    placeholder="https://..."
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Form>
  );
}
