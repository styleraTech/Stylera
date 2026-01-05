"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "@/components/form";
type Action = (
  prevState: { message: string },
  formData: FormData
) => Promise<{ message: string }>;

export const LoginForm = ({
  href,
  action,
}: {
  href?: string;
  action: Action;
}) => {
  const { locale } = useParams();

  return (
    <Form
      action={action}
      success="تم تسجيل الدخول بنجاح."
      replaceLink={href ? `/${href}` : `/${locale}`}
      submit="تسجيل الدخول"
    >
      <Card
        className="
              relative overflow-hidden border border-white/10 bg-[#0A1025]/55
              shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]
              backdrop-blur-xl
            "
      >
        {/* Card top glow line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

        <CardHeader className="space-y-2">
          <CardTitle className="text-base uppercase tracking-[0.22em] text-cyan-200/90">
            {locale === "en" ? "Welcome back" : "مرحبًا بعودتك"}
          </CardTitle>
          <CardDescription className="text-white/60">
            {locale === "en"
              ? "Use your email and password to continue."
              : "استخدم بريدك الإلكتروني وكلمة المرور للمتابعة."}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs uppercase tracking-[0.22em] text-white/70"
            >
              {locale === "en" ? "Email" : "البريد الإلكتروني"}
            </Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="name@company.com"
              className="
                    h-11 border-white/10 bg-black/25 text-white placeholder:text-white/35
                    focus-visible:ring-cyan-400/35
                  "
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <Label
                htmlFor="password"
                className="text-xs uppercase tracking-[0.22em] text-white/70"
              >
                {locale === "en" ? "Password" : "كلمة المرور"}
              </Label>
              {/* <Link
                    href="/forgot-password"
                    className="text-xs text-cyan-200/80 hover:text-cyan-200"
                  >
                    {locale === "en" ? "Forgot?" : "هل نسيت؟"}
                  </Link> */}
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              className="
                    h-11 border-white/10 bg-black/25 text-white placeholder:text-white/35
                    focus-visible:ring-cyan-400/35
                  "
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                className="border-white/20 data-[state=checked]:bg-cyan-400 data-[state=checked]:text-black"
              />
              <Label htmlFor="remember" className="text-sm text-white/65">
                {locale === "en" ? "Remember me" : "تذكرني"}
              </Label>
            </div>

            <span className="text-xs text-white/45">v1.0</span>
          </div>

          <Button
            className="
                  h-11 w-full rounded-md
                  bg-gradient-to-r from-cyan-400/90 via-sky-400/90 to-purple-500/85
                  text-black font-medium
                  shadow-[0_10px_30px_rgba(56,189,248,0.18)]
                  hover:opacity-95
                "
          >
            {locale === "en" ? "Sign in" : "تسجيل الدخول"}
          </Button>
        </CardContent>
      </Card>
    </Form>
  );
};
