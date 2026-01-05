"use client";

import { UploadButton } from "@/lib/uploadthing"; // adjust path
import { Button } from "@/components/ui/button";

type Props = {
  values: string[];
  onChange: (values: string[]) => void;
  endpoint: string;
};

export function ImagesUploader({ values, onChange, endpoint }: Props) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        {values.map((url, idx) => (
          <div
            key={url + idx}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={url}
              alt={`Screen ${idx + 1}`}
              className="h-24 w-24 object-cover"
            />

            <div className="absolute inset-0 hidden items-end justify-center bg-black/50 p-2 group-hover:flex">
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="h-8 border-white/12 bg-white/[0.02] text-white/80 hover:bg-white/[0.05]"
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
        onUploadError={(error: Error) => {
          alert(error.message);
        }}
      />
    </div>
  );
}
