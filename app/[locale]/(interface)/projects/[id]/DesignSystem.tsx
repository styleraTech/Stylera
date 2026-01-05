import { cn } from "@/lib/utils";
import { Palette, Layers } from "lucide-react";

interface DesignCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function DesignCard({ children, className = "", style }: DesignCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col border border-white/5 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

interface DesignSystemProps {
  locale?: Locale;
  color: string;
  className?: string;
}

export default function DesignSystem({
  locale,
  color,
  className,
}: DesignSystemProps) {
  return (
    <section className="py-32 px-4 md:px-12 lg:px-24">
      <div className="flex items-center gap-4 mb-12">
        <Palette className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold tracking-tight">
          {locale === "ar" ? "نظام التصميم" : "Design System"}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
        {/* Primary Brand Card */}
        <DesignCard
          className={cn(
            "col-span-2 row-span-2 bg-gradient-to-br p-8 justify-between group overflow-hidden relative",
            className
          )}
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-2">
              {locale === "ar" ? "اللون الأساسي" : "Primary Brand Color"}
            </h3>
            <p className="text-blue-100/80">{color}</p>
          </div>
          <div className="text-9xl font-bold text-white/10 absolute -bottom-10 -right-10 select-none group-hover:scale-110 transition-transform duration-500">
            Aa
          </div>
        </DesignCard>

        {/* Atomic Components Card */}
        <DesignCard className="col-span-1 bg-[#1a1d2d] items-center justify-center group hover:border-white/20 transition-colors">
          <Layers className="w-12 h-12 text-white/80 mb-4 group-hover:text-blue-400 transition-colors" />
          <span className="text-sm text-white/60">
            {locale === "ar" ? "مكونات ذرية" : "Atomic Components"}
          </span>
        </DesignCard>

        {/* Typography Card */}
        <DesignCard className="col-span-1 bg-[#1a1d2d] justify-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold">
              {locale === "ar" ? "الخط" : "Font"}
            </div>
            <div className="text-sm text-white/50">
              {locale === "ar" ? "مانروبي سانس" : "Manrope Sans"}
            </div>
          </div>
        </DesignCard>

        {/* Dark Mode Card */}
        <DesignCard className="col-span-2 bg-[#1a1d2d] rounded-2xl overflow-hidden relative group p-0">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
            alt="Dark Mode Texture"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          />
          <div
            className={cn(
              "absolute bottom-6 p-2",
              locale === "ar" ? "right-6" : "left-6"
            )}
          >
            <h4 className="font-bold text-lg">
              {locale === "en" ? "Dark Mode Optimized" : "تحسين الوضع المظلم"}
            </h4>
            <p className="text-sm text-white/60">
              {locale === "en"
                ? "Reduced eye strain for 12h+ shifts"
                : "تقليل إجهاد العين لفترات العمل الطويلة"}
            </p>
          </div>
        </DesignCard>
      </div>
    </section>
  );
}
