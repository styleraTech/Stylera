'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ShaderBackground from '@/components/shader-background'
import TeamSection from '@/components/team-section'
import AboutHero from '@/components/about/about-hero'
import OurStory from '@/components/about/our-story'
import MissionVision from '@/components/about/mission-vision'
import CoreValues from '@/components/about/core-values'
import Timeline from '@/components/about/timeline'

export default function AboutPage() {
  return (
    <div className='relative'>
      <ShaderBackground>
        <div className='relative z-10'>
          <Navigation />
          <AboutHero />
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        <OurStory />
        <MissionVision />
        <CoreValues />
        <Timeline />
        <TeamSection />
      </div>

      <Footer />
    </div>
  )
}
