'use client'

import { Card } from '@/components/ui/card'
import { Users, Target, Code, Rocket } from 'lucide-react'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'

interface HowWeWorkProps {
  dictionary: Dictionary['OurServicesPage']
}

const stepIcons = [Users, Target, Code, Rocket]
const stepColors = [
  'text-blue-400',
  'text-purple-400',
  'text-green-400',
  'text-orange-400',
]

export default function HowWeWork({ dictionary }: HowWeWorkProps) {
  if (!dictionary) return null
  const steps = dictionary.steps || []

  return (
    <InViewSection
      className='py-20 px-4 bg-slate-900/50'
      variants={defaultContainerVariants}
    >
      <Div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <Div className='text-center mb-16' variants={itemVariants}>
          <H2
            className='text-4xl md:text-5xl font-bold text-accent mb-6'
            variants={textVariants}
          >
            {dictionary.howWeWorkTitle}
          </H2>
          <P
            className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'
            variants={textVariants}
          >
            {dictionary.howWeWorkSubtitle}
          </P>
        </Div>

        {/* Steps Grid */}
        <Div
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch'
          variants={defaultContainerVariants}
        >
          {steps.map((step: any, index: number) => {
            const Icon = stepIcons[index] || Users
            const color = stepColors[index] || 'text-blue-400'
            const stepNumber = (index + 1).toString().padStart(2, '0')

            return (
              <Div key={index} variants={itemVariants}>
                <Card className='h-full flex flex-col justify-between bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group'>
                  {/* Icon + Step Number */}
                  <div>
                    <div className='relative mb-6'>
                      <div className='w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                        <Icon className={`w-8 h-8 ${color}`} />
                      </div>
                      <div className='absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold'>
                        {stepNumber}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className='text-xl font-bold text-white mb-3'>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className='text-slate-300 leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </Card>
              </Div>
            )
          })}
        </Div>
      </Div>
    </InViewSection>
  )
}
