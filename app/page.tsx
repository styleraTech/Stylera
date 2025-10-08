'use client'

import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import TechnologiesSection from '@/components/technologies-section'
import ProjectsSection from '@/components/projects-section'
import TestimonialsSection from '@/components/testimonials-section'
import CTASection from '@/components/cta-section'
import AboutSection from '@/components/about-section'
import TeamSection from '@/components/team-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import PulsingCircle from '@/components/pulsing-circle'
import PulsingCirclePhone from '@/components/pulsing-circle-phone'
import ShaderBackground from '@/components/shader-background'
import WhatsAppButton from '@/components/whats-app'
import LiveChatMock from '@/components/livechat'

export default function StyleraTechPortfolio() {
  return (
    <div className='relative'>
      <ShaderBackground>
        <Navigation />
        <HeroSection />

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
        <ServicesSection />
        <TechnologiesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <AboutSection />
        <TeamSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </div>

      {/* Floating Buttons */}
      <div className='fixed bottom-6 right-6 flex  items-end gap-3 z-50'>
        <WhatsAppButton />
        <LiveChatMock />
      </div>
    </div>
  )
}
