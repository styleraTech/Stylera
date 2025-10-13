'use client'

import { Card } from '@/components/ui/card'
import { Rocket, Users, Award, Target } from 'lucide-react'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'

interface TimelineProps {
  dictionary: Dictionary['whoWeAre']
}

export default function Timeline({ dictionary }: TimelineProps) {
  if (!dictionary?.timeline) return null

  const { timeline } = dictionary

  const icons: Record<string, any> = {
    '2022': Rocket,
    '2023': Users,
    '2024': Award,
    '2025': Target,
  }

  const years = Object.keys(timeline.items)

  return (
    <InViewSection
      className='py-20 px-4 bg-[#0B1121]'
      variants={defaultContainerVariants}
    >
      {/* Header */}
      <Div
        className='max-w-6xl mx-auto text-center mb-20'
        variants={itemVariants}
      >
        <H2
          className='text-4xl md:text-5xl font-bold text-cyan-400 mb-4'
          variants={textVariants}
        >
          {timeline.title}
        </H2>
        <P
          className='text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'
          variants={textVariants}
        >
          {timeline.subtitle}
        </P>
      </Div>

      {/* Timeline Items */}
      <Div
        className='relative max-w-5xl mx-auto'
        variants={defaultContainerVariants}
      >
        {/* Vertical Line */}
        <div className='absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500/50 via-cyan-500/50 to-fuchsia-500/50 -translate-x-1/2' />

        <div className='space-y-24'>
          {Object.entries(timeline.items).map(([year, text], index) => {
            const Icon = icons[year] || Rocket
            const isLeft = index % 2 === 0

            return (
              <Div
                key={year}
                className={`relative flex items-center ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
                variants={itemVariants}
              >
                {/* Card Container - half width */}
                <div
                  className={`w-[calc(50%-3rem)] ${isLeft ? 'pr-4' : 'pl-4'}`}
                >
                  <Card className='relative h-64 bg-gradient-to-br from-[#1A1F35]/90 to-[#0E162B]/80 border border-fuchsia-500/30 rounded-2xl backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.15)] overflow-visible'>
                    {/* Inner gradient sheen */}
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 pointer-events-none' />

                    {/* Card Content */}
                    <div className='relative h-full p-8 text-slate-200 flex flex-col justify-center'>
                      <h3 className='text-2xl font-semibold text-white mb-3'>
                        {text.split('—')[0]}
                      </h3>
                      <p className='text-slate-300 leading-relaxed text-base'>
                        {text.split('—')[1]}
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Icon Node - centered */}
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                  <div className='relative'>
                    <div
                      className='grid place-items-center h-16 w-16 rounded-full shadow-[0_0_25px_rgba(5,163,190,0.45)] border-[4px] border-[#0B1121]'
                      style={{
                        background:
                          'linear-gradient(145deg, #1E1D56 0%, #05A3BE 100%)',
                      }}
                    >
                      <Icon className='h-6 w-6 text-white' />
                    </div>

                    {/* Year Pill */}
                    <div className='absolute -top-3 -right-3'>
                      <span
                        className='rounded-full text-white text-xs px-2.5 py-1.5 font-medium shadow-lg whitespace-nowrap'
                        style={{
                          background:
                            'linear-gradient(145deg, #7C4DFF 0%, #9C27B0 100%)',
                        }}
                      >
                        {year}
                      </span>
                    </div>
                  </div>
                </div>
              </Div>
            )
          })}
        </div>
      </Div>
    </InViewSection>
  )
}
