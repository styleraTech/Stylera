'use client'

import { Card } from '@/components/ui/card'
import { Target, Lightbulb } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import {
  Div,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/in-view-section'

export default function MissionVision() {
  const { t } = useLanguage()

  return (
    <InViewSection
      className='py-20 px-4 bg-slate-900/50'
      variants={defaultContainerVariants}
    >
      <Div
        className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12'
        variants={defaultContainerVariants}
      >
        <Div variants={itemVariants}>
          <Card className='h-full bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300'>
            <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6'>
              <Target className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              {t('aboutPage.mission.title')}
            </h3>
            <p className='text-slate-300 text-lg leading-relaxed'>
              {t('aboutPage.mission.text')}
            </p>
          </Card>
        </Div>

        <Div variants={itemVariants}>
          <Card className='h-full bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300'>
            <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6'>
              <Lightbulb className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              {t('aboutPage.vision.title')}
            </h3>
            <p className='text-slate-300 text-lg leading-relaxed'>
              {t('aboutPage.vision.text')}
            </p>
          </Card>
        </Div>
      </Div>
    </InViewSection>
  )
}
