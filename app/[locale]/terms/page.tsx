import Navigation from '@/components/layout/navigation'
import ShaderBackground from '@/components/ui/Custom-ui/shader-background/shader-background'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | StyleraTech',
  description:
    'Review StyleraTech’s Terms of Service to understand the guidelines, responsibilities, and policies for using our digital services and website.',
  openGraph: {
    title: 'Terms of Service | StyleraTech',
    description:
      'Review StyleraTech’s Terms of Service to understand the guidelines, responsibilities, and policies for using our digital services and website.',
    url: 'https://styleratech.com/en/terms',
    siteName: 'StyleraTech',
    type: 'website',
  },
}

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const t = dictionary.terms

  return (
    <div className='relative'>
      <ShaderBackground>
        <div className='relative z-10'>
          <Navigation dictionary={dictionary.nav} />
          <section className='container mx-auto px-6 py-20'>
            <h1 className='text-3xl md:text-4xl font-bold text-white tracking-tight'>
              {t.title}
            </h1>
            <p className='mt-4 text-white/70 max-w-3xl leading-relaxed'>
              {t.intro}
            </p>
          </section>
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        <section className='container mx-auto px-6 py-12 space-y-10'>
          {t.sections.map((section: any, index: number) => (
            <div key={index} className='space-y-4'>
              <h2 className='text-xl md:text-2xl font-semibold text-white'>
                {section.heading}
              </h2>

              {section.paragraph && (
                <p className='text-white/70 max-w-4xl leading-relaxed'>
                  {section.paragraph}
                </p>
              )}

              {section.list && (
                <ul className='list-disc pl-6 text-white/70 space-y-2 max-w-4xl'>
                  {section.list.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
