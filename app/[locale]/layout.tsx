import Footer from '@/components/layout/footer'
import { Cairo } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

export const generateStaticParams = async () => {
  const locales = ['en', 'ar']
  return locales.map((locale) => ({ locale: locale }))
}

import localFont from 'next/font/local'
import { getDictionary } from '@/get-dictionary'

// English font (local)
const nasalization = localFont({
  src: '../../public/fonts/FontsFree-Net-nasalization-rg.ttf',
  variable: '--font-english',
  display: 'swap',
})

// Arabic font (Google Cairo)
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-arabic',
  display: 'swap',
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const locale = (await params).locale as Locale
  const dictionary = await getDictionary(locale)

  return (
    <div
      className={`${
        locale === 'ar' ? cairo.className : nasalization.className
      } antialiased`}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      lang={locale}
    >
      {children}
      <Footer dictionary={dictionary.footer} />
      <Toaster />
    </div>
  )
}
