import Navigation from '@/components/layout/navigation'
import ShaderBackground from '@/components/ui/Custom-ui/shader-background/shader-background'
import ProjectsHeroSection from '@/components/projects/_components/projects-hero-section'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import AllProjects from '@/components/projects/projects'
import ProjectsContactForm from '@/components/projects/_components/contact-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | StyleraTech',
  description:
    'Explore StyleraTech’s portfolio of projects that combine creativity, design, and cutting-edge technology in web and app development.',
  openGraph: {
    title: 'StyleraTech Projects',
    description:
      'Explore StyleraTech’s portfolio of projects that combine creativity, design, and cutting-edge technology in web and app development.',
    url: 'https://styleratech.com/en/projects',
    siteName: 'StyleraTech',
    type: 'website',
  },
}
export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const isRTL = locale === 'ar'

  return (
    <div className='relative'>
      <ShaderBackground>
        <div className='relative z-10'>
          <Navigation dictionary={dictionary.nav} />
          <ProjectsHeroSection dictionary={dictionary.allProjects} />
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        <AllProjects
          dictionary={dictionary.allProjects}
          isRTL={isRTL}
          locale={locale}
        />
        <ProjectsContactForm dictionary={dictionary.allProjects} />
      </div>
    </div>
  )
}
