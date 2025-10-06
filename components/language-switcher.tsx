'use client'

import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className='flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full p-1'>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size='sm'
        onClick={() => setLanguage('en')}
        className={`h-8 px-3 text-xs rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-white text-black hover:bg-white/90'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        EN
      </Button>
      <Button
        variant={language === 'ar' ? 'default' : 'ghost'}
        size='sm'
        onClick={() => setLanguage('ar')}
        className={`h-8 px-3 text-xs rounded-full transition-all duration-200 ${
          language === 'ar'
            ? 'bg-white text-black hover:bg-white/90'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        AR
      </Button>
    </div>
  )
}
