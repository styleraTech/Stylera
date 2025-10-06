'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/language-context'

function FontDirectionWrapper({ children }: { children: React.ReactNode }) {
  const { language, isRTL } = useLanguage()

  useEffect(() => {
    const html = document.documentElement
    html.lang = language
    html.dir = isRTL ? 'rtl' : 'ltr'

    if (language === 'ar') {
      document.body.classList.add('font-arabic')
      document.body.classList.remove('font-english')
    } else {
      document.body.classList.add('font-english')
      document.body.classList.remove('font-arabic')
    }
  }, [language, isRTL])

  return children
}
export default FontDirectionWrapper
