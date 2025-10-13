'use client'

import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const params = useParams()

  const currentLocale = (params?.locale as string) || 'en'

  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || ''

  const getLocaleHref = (locale: string) => {
    return `/${locale}${pathWithoutLocale}`
  }

  return (
    <div className='flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full p-1'>
      <Button
        asChild
        size='sm'
        variant={currentLocale === 'en' ? 'default' : 'ghost'}
        className={`h-8 px-3 text-xs rounded-full transition-all duration-200 ${
          currentLocale === 'en'
            ? 'bg-white text-black hover:bg-white/90'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        <Link href={getLocaleHref('en')}>EN</Link>
      </Button>

      <Button
        asChild
        size='sm'
        variant={currentLocale === 'ar' ? 'default' : 'ghost'}
        className={`h-8 px-3 text-xs rounded-full transition-all duration-200 ${
          currentLocale === 'ar'
            ? 'bg-white text-black hover:bg-white/90'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        <Link href={getLocaleHref('ar')}>AR</Link>
      </Button>
    </div>
  )
}
