import Navigation from '@/components/layout/navigation'
import HeroSection from '@/components/home/home-hero-section'
import ServicesSection from '@/components/home/services-section'
import TechnologiesSection from '@/components/home/technologies-section'
import ProjectsSection from '@/components/home/projects-section'
import TestimonialsSection from '@/components/home/testimonials-section'
import CTASection from '@/components/shared/cta-section'
import AboutSection from '@/components/home/about-section'
import TeamSection from '@/components/shared/team-section'
import ContactSection from '@/components/home/contact-section'
import Footer from '@/components/layout/footer'
import PulsingCircle from '@/components/ui/Custom-ui/pusling-cricle/pulsing-circle'
import PulsingCirclePhone from '@/components/ui/Custom-ui/pusling-cricle/pulsing-circle-phone'
import ShaderBackground from '@/components/ui/Custom-ui/shader-background/shader-background'
import WhatsAppButton from '@/components/ui/Custom-ui/flaoting-buttons/whats-app'
import LiveChatMock from '@/components/ui/Custom-ui/flaoting-buttons/livechat'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function StyleraTechPortfolio({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <div className='relative'>
      <ShaderBackground>
        <Navigation dictionary={dictionary.nav} />
        <HeroSection dictionary={dictionary.homeHero} />
        <div>
          <div className='hidden md:block'>
            <PulsingCircle />
          </div>
          <div className='block md:hidden'>
            <PulsingCirclePhone />
          </div>
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        <ServicesSection dictionary={dictionary.services} />
        <TechnologiesSection dictionary={dictionary.technologies} />
        <ProjectsSection dictionary={dictionary.projects} />
        <TestimonialsSection dictionary={dictionary.testimonials} />
        <AboutSection dictionary={dictionary.HomeWhoWeAre} />
        <TeamSection dictionary={dictionary.teamSection} />
        <CTASection dictionary={dictionary.cta} />
        <ContactSection dictionary={dictionary.contactUs} />
      </div>

      {/* Floating Buttons */}
      <div className='fixed bottom-6 right-6 flex items-end gap-3 z-50'>
        <LiveChatMock />
        <WhatsAppButton />
      </div>
    </div>
  )
}
