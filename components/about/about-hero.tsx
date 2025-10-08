'use client'

import { useLanguage } from '@/contexts/language-context'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/in-view-section'

export default function AboutHero() {
  const { t } = useLanguage()

  return (
    <InViewSection
      className='pt-32 pb-20 px-4 text-center'
      variants={defaultContainerVariants}
    >
      <Div className='max-w-4xl mx-auto' variants={itemVariants}>
        <H2
          className='text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight'
          variants={textVariants}
        >
          {t('aboutPage.title')}
        </H2>
        <P
          className='text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto'
          variants={textVariants}
        >
          {t('aboutPage.subtitle')}
        </P>
      </Div>
    </InViewSection>
  )
}
