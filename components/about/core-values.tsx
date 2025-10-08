'use client'

import { Card } from '@/components/ui/card'
import { Heart, Target, Lightbulb, Shield } from 'lucide-react'
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

const values = [
  { key: 'passion', icon: Heart, gradient: 'from-red-500 to-pink-500' },
  { key: 'excellence', icon: Target, gradient: 'from-blue-500 to-cyan-500' },
  {
    key: 'innovation',
    icon: Lightbulb,
    gradient: 'from-yellow-500 to-orange-500',
  },
  { key: 'integrity', icon: Shield, gradient: 'from-green-500 to-emerald-500' },
]

export default function CoreValues() {
  const { t } = useLanguage()

  return (
    <InViewSection className='py-20 px-4' variants={defaultContainerVariants}>
      <Div
        className='max-w-6xl mx-auto text-center mb-16'
        variants={itemVariants}
      >
        <H2
          className='text-4xl md:text-5xl font-bold text-white mb-6'
          variants={textVariants}
        >
          {t('aboutPage.values.title')}
        </H2>
        <P
          className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'
          variants={textVariants}
        >
          {t('aboutPage.values.subtitle')}
        </P>
      </Div>

      {/*  Grid with equal-height cards */}
      <Div
        className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-stretch'
        variants={defaultContainerVariants}
      >
        {values.map(({ key, icon: Icon, gradient }, i) => (
          <Div key={i} variants={itemVariants}>
            <Card className='h-full flex flex-col justify-between bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group'>
              <div>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold text-white mb-3'>
                  {t(`aboutPage.values.items.${key}.title`)}
                </h3>

                <p className='text-slate-300 leading-relaxed'>
                  {t(`aboutPage.values.items.${key}.description`)}
                </p>
              </div>
            </Card>
          </Div>
        ))}
      </Div>
    </InViewSection>
  )
}
