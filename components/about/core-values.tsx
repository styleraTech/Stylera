'use client'

import { Card } from '@/components/ui/card'
import { Heart, Target, Lightbulb, Shield } from 'lucide-react'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'

interface CoreValuesProps {
  dictionary: Dictionary['whoWeAre']
}

export default function CoreValues({ dictionary }: CoreValuesProps) {
  if (!dictionary?.values) return null

  const { values } = dictionary

  const icons: Record<string, any> = {
    passion: Heart,
    excellence: Target,
    innovation: Lightbulb,
    integrity: Shield,
  }

  const gradients: Record<string, string> = {
    passion: 'from-red-500 to-pink-500',
    excellence: 'from-blue-500 to-cyan-500',
    innovation: 'from-yellow-500 to-orange-500',
    integrity: 'from-green-500 to-emerald-500',
  }

  return (
    <InViewSection className='py-20 px-4' variants={defaultContainerVariants}>
      {/* Header */}
      <Div
        className='max-w-6xl mx-auto text-center mb-16'
        variants={itemVariants}
      >
        <H2
          className='text-4xl md:text-5xl font-bold text-accent mb-6'
          variants={textVariants}
        >
          {values.title}
        </H2>
        <P
          className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'
          variants={textVariants}
        >
          {values.subtitle}
        </P>
      </Div>

      {/* Value Cards */}
      <Div
        className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-stretch'
        variants={defaultContainerVariants}
      >
        {Object.entries(values.items).map(([key, val], i) => {
          const Icon = icons[key] || Heart
          const gradient = gradients[key] || 'from-blue-500 to-purple-500'

          return (
            <Div key={i} variants={itemVariants}>
              <Card className='h-full flex flex-col justify-between bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group'>
                <div>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className='w-8 h-8 text-white' />
                  </div>

                  <h3 className='text-xl py-5 font-bold text-white mb-3'>
                    {val.title}
                  </h3>
                  <p className='text-slate-300 leading-relaxed'>
                    {val.description}
                  </p>
                </div>
              </Card>
            </Div>
          )
        })}
      </Div>
    </InViewSection>
  )
}
