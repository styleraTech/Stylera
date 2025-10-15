import Navigation from '@/components/layout/navigation'
import ShaderBackground from '@/components/ui/Custom-ui/shader-background/shader-background'
import ServicesHeroSection from '@/components/services/services-hero-section'
import DetailedServices from '@/components/services/services-details'
import HowWeWork from '@/components/services/how-we-work'
import CTASection from '@/components/services/services-cta-section'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | StyleraTech',
  description:
    'Discover StyleraTech’s range of services including web development, mobile apps, UI/UX design, and AI solutions — all tailored to elevate your digital presence.',
  openGraph: {
    title: 'Our Services | StyleraTech',
    description:
      'Discover StyleraTech’s range of services including web development, mobile apps, UI/UX design, and AI solutions — all tailored to elevate your digital presence.',
    url: 'https://styleratech.com/en/services',
    siteName: 'StyleraTech',
    type: 'website',
  },
}

export default async function ServicesPage({
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
          <ServicesHeroSection dictionary={dictionary.OurServicesPage} />
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        <DetailedServices dictionary={dictionary.OurServicesPage} />
        <HowWeWork dictionary={dictionary.OurServicesPage} />
        <CTASection dictionary={dictionary.OurServicesPage} isRTL={isRTL} />
      </div>
    </div>
  )
}
