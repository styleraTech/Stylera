import { Monitor } from "lucide-react";
import Image from "next/image";

export default function DesktopExperience({
  title,
  locale,
  image,
}: {
  title: string;
  locale?: Locale;
  image: string;
}) {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24">
      <div className="flex items-center gap-4 mb-12">
        <Monitor className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold tracking-tight">
          {locale === "ar" ? "تجربة سطح المكتب" : "Desktop Experience"}
        </h2>
      </div>

      <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 bg-[#0f111a]">
        <div className="h-10 bg-[#1a1d2d] flex items-center px-4 gap-2 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center">
            <div className="inline-block px-4 py-1 bg-[#050511]/50 rounded text-xs text-white/40 font-mono">
              {title}
            </div>
          </div>
        </div>

        <div className="aspect-[20/10] w-full relative group cursor-zoom-in overflow-hidden">
          <Image
            src={image}
            alt="Desktop Dashboard UI"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
