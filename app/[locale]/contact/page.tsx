import Navigation from '@/components/layout/navigation'
import ShaderBackground from '@/components/ui/Custom-ui/shader-background/shader-background'
import ContactHero from '@/components/contact-us/contact-hero'
import ContactInfo from '@/components/contact-us/contact-info'
import BusinessHours from '@/components/contact-us/business-hours'
import LocationSection from '@/components/contact-us/location'
import FaqSection from '@/components/contact-us/faq'
import ContactForm from '@/components/contact-us/contact-form'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  const contact = dictionary.contactUs!

  return (
    <div className='relative'>
      <ShaderBackground>
        <div className='relative z-10'>
          <Navigation dictionary={dictionary.nav} />
          <ContactHero dictionary={contact} />
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        <ContactInfo dictionary={contact} />
        <BusinessHours dictionary={contact} />
        <LocationSection dictionary={contact} />
        <FaqSection dictionary={contact} />
        <ContactForm dictionary={contact} />
      </div>
    </div>
  )
}
