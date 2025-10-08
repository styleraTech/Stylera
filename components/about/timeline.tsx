'use client'

import { Card } from '@/components/ui/card'
import { Rocket, Users, Award, Target } from 'lucide-react'
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

const timeline = [
  { year: '2022', icon: Rocket, color: 'text-blue-400' },
  { year: '2023', icon: Users, color: 'text-purple-400' },
  { year: '2024', icon: Award, color: 'text-green-400' },
  { year: '2025', icon: Target, color: 'text-orange-400' },
]

export default function Timeline() {
  const { t } = useLanguage()

  return (
    <InViewSection
      className='py-20 px-4 bg-slate-900/50'
      variants={defaultContainerVariants}
    >
      <Div
        className='max-w-6xl mx-auto text-center mb-16'
        variants={itemVariants}
      >
        <H2
          className='text-4xl md:text-5xl font-bold text-white mb-6'
          variants={textVariants}
        >
          {t('aboutPage.timeline.title')}
        </H2>
        <P
          className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'
          variants={textVariants}
        >
          {t('aboutPage.timeline.subtitle')}
        </P>
      </Div>

      <Div
        className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'
        variants={defaultContainerVariants}
      >
        {timeline.map(({ year, icon: Icon, color }, i) => (
          <Div key={i} variants={itemVariants}>
            <Card className='h-full bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group'>
              <div className='relative mb-6'>
                <div className='w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
                <div className='absolute -top-2 -right-2 w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold'>
                  {year}
                </div>
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>{year}</h3>
              <p className='text-slate-300 leading-relaxed text-sm'>
                {t(`aboutPage.timeline.items.${year}`)}
              </p>
            </Card>
          </Div>
        ))}
      </Div>
    </InViewSection>
  )
}
