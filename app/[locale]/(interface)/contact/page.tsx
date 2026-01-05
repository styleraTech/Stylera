import Navigation from '@/components/layout/navigation'
import ShaderBackground from '@/components/ui/Custom-ui/shader-background/shader-background'
import ContactHero from '@/components/contact-us/contact-hero'
import ContactInfo from '@/components/contact-us/contact-info'
import BusinessHours from '@/components/contact-us/business-hours'
import LocationSection from '@/components/contact-us/location'
import FaqSection from '@/components/contact-us/faq'
import ContactForm from '@/components/contact-us/contact-form'
import AppointmentsSchedule from '@/components/contact-us/appointments'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | StyleraTech',
  description:
    'Get in touch with StyleraTech. Whether you have a project in mind, need support, or just want to say hi — we’re here to help you build something amazing.',
  openGraph: {
    title: 'Contact Us | StyleraTech',
    description:
      'Get in touch with StyleraTech. Whether you have a project in mind, need support, or just want to say hi — we’re here to help you build something amazing.',
    url: 'https://styleratech.com/en/contact',
    siteName: 'StyleraTech',

    type: 'website',
  },
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const isRTL = locale === 'ar'
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
        <AppointmentsSchedule
          dictionary={dictionary.appointments}
          isRTL={isRTL}
        />
      </div>
    </div>
  )
}
