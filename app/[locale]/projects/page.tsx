import Navigation from '@/components/layout/navigation'
import ShaderBackground from '@/components/ui/Custom-ui/shader-background/shader-background'
import ProjectsHeroSection from '@/components/projects/_components/projects-hero-section'
import DetailedServices from '@/components/services/services-details'
import HowWeWork from '@/components/services/how-we-work'
import CTASection from '@/components/services/services-cta-section'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import AllProjects from '@/components/projects/projects'

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
        <AllProjects dictionary={dictionary.allProjects} />
      </div>
    </div>
  )
}
