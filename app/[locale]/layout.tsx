import { Cairo } from "next/font/google";

export const generateStaticParams = async () => {
  const locales = ["en", "ar"];
  return locales.map((locale) => ({ locale: locale }));
};

import localFont from "next/font/local";

// // English font (local)
// const nasalization = localFont({
//   src: "../../public/fonts/FontsFree-Net-nasalization-rg.ttf",
//   variable: "--font-english",
//   display: "swap",
// });

// Arabic font (Google Cairo)
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-arabic",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;

  return <div>{children}</div>;
}
