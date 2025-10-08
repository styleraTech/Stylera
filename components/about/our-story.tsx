'use client'

import { useLanguage } from '@/contexts/language-context'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/in-view-section'

export default function OurStory() {
  const { t } = useLanguage()

  return (
    <InViewSection className='py-20 px-4' variants={defaultContainerVariants}>
      <Div
        className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center'
        variants={itemVariants}
      >
        {/* Text */}
        <Div variants={itemVariants}>
          <H2 className='text-4xl md:text-5xl font-bold text-white mb-8'>
            {t('aboutPage.story.title')}
          </H2>
          <div className='space-y-6 text-lg text-slate-300 leading-relaxed'>
            {t('aboutPage.story.paragraphs').map((p: string, i: number) => (
              <P key={i}>{p}</P>
            ))}
          </div>
        </Div>

        {/* Image */}
        <Div className='relative' variants={itemVariants}>
          <div className='aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-slate-700 flex items-center justify-center'>
            <img
              src='/modern-tech-team-working-together-in-office.jpg'
              alt='Our Story'
              className='w-full h-full object-cover rounded-3xl'
            />
          </div>
        </Div>
      </Div>
    </InViewSection>
  )
}
