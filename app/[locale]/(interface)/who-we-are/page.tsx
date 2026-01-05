import Navigation from '@/components/layout/navigation'
import ShaderBackground from '@/components/ui/Custom-ui/shader-background/shader-background'
import TeamSection from '@/components/shared/team-section'
import AboutHero from '@/components/about/about-hero'
import OurStory from '@/components/about/our-story'
import MissionVision from '@/components/about/mission-vision'
import CoreValues from '@/components/about/core-values'
import Timeline from '@/components/about/timeline'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | StyleraTech',
  description:
    'Learn more about StyleraTech — our story, mission, and the passionate team driving innovation in web, app, and digital experience design.',
  openGraph: {
    title: 'About Us | StyleraTech',
    description:
      'Learn more about StyleraTech — our story, mission, and the passionate team driving innovation in web, app, and digital experience design.',
    url: 'https://styleratech.com/en/who-we-are',
    siteName: 'StyleraTech',
    type: 'website',
  },
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const isRTL = locale === 'ar'

  const whoWeAre = dictionary.whoWeAre!

  return (
    <div className='relative'>
      <ShaderBackground>
        <div className='relative z-10'>
          <Navigation dictionary={dictionary.nav} />
          <AboutHero dictionary={whoWeAre} />
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        <OurStory dictionary={whoWeAre} />
        <MissionVision dictionary={whoWeAre} />
        <CoreValues dictionary={whoWeAre} />
        <Timeline dictionary={whoWeAre} />
        <TeamSection dictionary={dictionary.teamSection} />
      </div>
    </div>
  )
}
