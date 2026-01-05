import Navigation from "@/components/layout/navigation";
import HeroSection from "@/components/home/home-hero-section";
import ServicesSection from "@/components/home/services-section";
import TechnologiesSection from "@/components/home/technologies-section";
import ProjectsSection from "@/components/home/projects-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import CTASection from "@/components/shared/cta-section";
import AboutSection from "@/components/home/about-section";
import TeamSection from "@/components/shared/team-section";
import ContactSection from "@/components/home/contact-section";
import PulsingCircle from "@/components/ui/Custom-ui/pusling-cricle/pulsing-circle";
import PulsingCirclePhone from "@/components/ui/Custom-ui/pusling-cricle/pulsing-circle-phone";
import ShaderBackground from "@/components/ui/Custom-ui/shader-background/shader-background";
import WhatsAppButton from "@/components/ui/Custom-ui/flaoting-buttons/whats-app";
import LiveChatMock from "@/components/ui/Custom-ui/flaoting-buttons/livechat";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default async function StyleraTechPortfolio({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const isRTL = locale === "ar";
  return (
    <div className="relative">
      <ShaderBackground>
        <Navigation dictionary={dictionary.nav} />
        <HeroSection dictionary={dictionary.homeHero} />
        <div>
          <div className="hidden md:block">
            <PulsingCircle />
          </div>
          <div className="block md:hidden">
            <PulsingCirclePhone />
          </div>
        </div>
      </ShaderBackground>

      <div className="bg-background">
        <ServicesSection dictionary={dictionary.services} />
        <section className="bg-secondary py-20">
          {dictionary.cta && (
            <div className=" text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
                  {dictionary.cta.title}
                </h2>
                <p className="text-white/70 font-light mb-8 leading-relaxed">
                  {dictionary.cta.subtitle}
                </p>
                <Link
                  href={`/projects`}
                  className="group px-8 py-4 w-fit rounded-full bg-primary text-primary-foreground font-medium text-base transition-all duration-300 hover:bg-primary/90 cursor-pointer flex items-center gap-3 hover:gap-4 mx-auto"
                >
                  {dictionary.cta.startProject}
                  <ArrowRight
                    size={20}
                    className={`transition-all duration-300 ${
                      isRTL ? "rotate-180" : ""
                    }`}
                  />
                </Link>
              </div>
            </div>
          )}
        </section>
        <TechnologiesSection dictionary={dictionary.technologies} />
        <ProjectsSection locale={locale} dictionary={dictionary.projects} />
        <TestimonialsSection dictionary={dictionary.testimonials} />
        <AboutSection dictionary={dictionary.HomeWhoWeAre} />
        <TeamSection dictionary={dictionary.teamSection} />
        <CTASection dictionary={dictionary.cta} />
        <ContactSection dictionary={dictionary.contactUs} />
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex items-end gap-3 z-50">
        <LiveChatMock />
        <WhatsAppButton />
      </div>
    </div>
  );
}
