import { Smartphone } from "lucide-react";
import Image from "next/image";

interface MobileScreenProps {
  image: string;
  title?: string;
  bg?: string;
}

function MobileScreen({ image, title, bg = "0" }: MobileScreenProps) {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="relative aspect-[9/19.5]  rounded-[3rem] border-2 border-[#2a2a35] bg-[#050511] overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[#2a2a35] rounded-b-xl z-20" />
        <Image
          src={image}
          alt={`Mobile Screen ${title}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none" />
      </div>
      <p className="text-center mt-6 text-white/50 text-sm font-medium">
        {title}
      </p>
    </div>
  );
}

interface MobileCompanionProps {
  screens: string[];
  title: string;
  locale?: Locale;
}

export default function MobileCompanion({
  screens,
  title,
  locale,
}: MobileCompanionProps) {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#0A0A16]">
      <div className="flex items-center gap-4 mb-16">
        <Smartphone className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold tracking-tight">
          {locale === "ar" ? "تطبيق الهاتف المحمول" : "Mobile Companion"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {screens.map((screen, index) => (
          <MobileScreen
            key={index}
            image={screen}
            title={`${title}-${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
