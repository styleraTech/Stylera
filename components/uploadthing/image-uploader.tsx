"use client";

import { UploadButton, UploadDropzone } from "@/lib/uploadthing"; // adjust path to your uploadthing exports
import { Button } from "@/components/ui/button";

type Props = {
  label?: string;
  value?: string; // current image url
  onChange: (url: string) => void;
  endpoint: string; // your uploadthing endpoint name
  mode?: "button" | "dropzone";
};

export function ImageUploader({
  label,
  value,
  onChange,
  endpoint,
  mode = "button",
}: Props) {
  return (
    <div className="space-y-2">
      {label ? (
        <div className="text-xs uppercase tracking-[0.22em] text-white/70">
          {label}
        </div>
      ) : null}

      {value ? (
        <div className="flex items-center gap-3">
          {/* preview */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="Uploaded"
            className="h-14 w-14 rounded-md object-cover border border-white/10"
          />

          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              className="h-9 border-white/12 bg-white/[0.02] text-white/80 hover:bg-white/[0.05]"
              onClick={() => window.open(value, "_blank")}
            >
              Preview
            </Button>

            <Button
              type="button"
              variant="outline"
              className="h-9 border-white/12 bg-white/[0.02] text-white/80 hover:bg-white/[0.05]"
              onClick={() => onChange("")}
            >
              Remove
            </Button>
          </div>
        </div>
      ) : null}

      {mode === "dropzone" ? (
        <UploadDropzone
          endpoint={endpoint as any}
          onClientUploadComplete={(res) => {
            const url = res?.[0]?.url;
            if (url) onChange(url);
          }}
          onUploadError={(error: Error) => {
            alert(error.message);
          }}
        />
      ) : (
        <UploadButton
          endpoint={endpoint as any}
          onClientUploadComplete={(res) => {
            const url = res?.[0]?.url;
            if (url) onChange(url);
          }}
          onUploadError={(error: Error) => {
            alert(error.message);
          }}
        />
      )}
    </div>
  );
}
