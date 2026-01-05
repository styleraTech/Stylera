import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { LoginForm } from "./components/forms";
import { loginUserAction } from "./actions";

const page = async (props: {
  searchParams?: Promise<{ redirect?: string }>;
  params: Promise<{ locale: string }>;
}) => {
  const searchParams = await props.searchParams;
  const locale = (await props.params).locale;
  const user = await getSession();
  const redirectLink = searchParams?.redirect;
  if (user) {
    redirect(redirectLink ?? `/${locale}`);
  }
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#070B18] text-white"
    >
      {/* Background: deep navy + subtle grid + glow blobs (matches PDF vibe) */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A44]/60 via-transparent to-transparent" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(64, 178, 255, .22) 1px, transparent 1px), linear-gradient(90deg, rgba(64, 178, 255, .16) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            backgroundPosition: "center",
          }}
        />

        {/* glow blobs */}
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />
        <div className="absolute bottom-[-140px] right-[-120px] h-[520px] w-[520px] rounded-full bg-purple-500/12 blur-[110px]" />
        <div className="absolute bottom-[-160px] left-[-140px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[110px]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Brand header (tech + cyan) */}
          <div className="mb-8 text-center">
            {/* <div className="mx-auto mb-3 h-[2px] w-20 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" /> */}

            {/* NOTE: font family set via className hook; see tailwind note below */}
            <h1 className="mt-3 font-[var(--font-heading)] text-3xl uppercase tracking-[0.18em]">
              {locale === "en" ? "Sign In" : "تسجيل الدخول"}
            </h1>

            <p className="mt-3 text-sm text-white/60">
              {locale === "en"
                ? "Access your account to manage projects and settings."
                : "قم بالوصول إلى حسابك لإدارة المشاريع والإعدادات."}
            </p>
          </div>
          <LoginForm action={loginUserAction} href={redirectLink} />
        </div>
      </div>
    </div>
  );
};

export default page;
