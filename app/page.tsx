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

      {/* Services Section */}
      <div className='bg-background'>
        <ServicesSection />
      </div>

      <div className='bg-background'>
        <TechnologiesSection />
      </div>

      <div className='bg-background'>
        <ProjectsSection />
      </div>

      <div className='bg-background'>
        <TestimonialsSection />
      </div>

      {/* About Section */}
      <div className='bg-background'>
        <AboutSection />
      </div>

      {/* Team Section */}
      <div className='bg-background'>
        <TeamSection />
      </div>

      <div className='bg-background'>
        <CTASection />
      </div>

      {/* Contact Section */}
      <div className='bg-background'>
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
