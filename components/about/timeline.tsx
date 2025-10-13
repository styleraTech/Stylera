'use client'

import { Card } from '@/components/ui/card'
import { Rocket, Users, Award, Target } from 'lucide-react'
import { motion } from 'framer-motion'
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
          className='text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-4'
          variants={textVariants}
        >
          {timeline.title}
        </H2>
        <P
          className='text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'
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
        {/* Center Line */}
        <div className='absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500/50 via-cyan-500/50 to-fuchsia-500/50 -translate-x-1/2' />

        <div className='space-y-20 md:space-y-24'>
          {Object.entries(timeline.items).map(([year, text], index) => {
            const Icon = icons[year] || Rocket
            const isLeft = index % 2 === 0

            const slideVariants = {
              hidden: {
                opacity: 0,
                x: isLeft ? -100 : 100,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  ease: 'easeOut' as const,
                },
              },
            }

            return (
              <motion.div
                key={year}
                variants={slideVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                className={`relative flex items-center ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Card */}
                <div
                  className={`w-[calc(50%-3rem)] ${
                    isLeft ? 'pr-4' : 'pl-4'
                  } transition-all duration-300`}
                >
                  <Card
                    className={`
                      relative h-auto p-6 sm:p-8 rounded-2xl overflow-visible
                      bg-transparent border-none shadow-none
                      md:bg-gradient-to-br md:from-[#1A1F35]/90 md:to-[#0E162B]/80 md:border md:border-fuchsia-500/30 md:backdrop-blur-md md:shadow-[0_0_25px_rgba(168,85,247,0.15)]
                    `}
                  >
                    {/* Subtle overlay for md+ */}
                    <div className='hidden md:block absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 pointer-events-none' />

                    <div className='relative h-full text-slate-200 flex flex-col justify-center'>
                      <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3'>
                        {text.split('—')[0]}
                      </h3>
                      <p className='text-slate-300 text-sm sm:text-base leading-relaxed'>
                        {text.split('—')[1]}
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Icon Node */}
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                  <motion.div
                    className='relative'
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div
                      className='grid place-items-center h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 rounded-full shadow-[0_0_25px_rgba(5,163,190,0.45)] border-[3px] border-[#0B1121]'
                      style={{
                        background:
                          'linear-gradient(145deg, #1E1D56 0%, #05A3BE 100%)',
                      }}
                    >
                      <Icon className='h-5 w-5 md:h-6 md:w-6 text-white' />
                    </div>

                    {/* Year pill */}
                    <div className='absolute -top-3 -right-3'>
                      <span
                        className='rounded-full text-white text-xs sm:text-sm px-2 py-1 font-medium shadow-lg whitespace-nowrap'
                        style={{
                          background:
                            'linear-gradient(145deg, #7C4DFF 0%, #9C27B0 100%)',
                        }}
                      >
                        {year}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Div>
    </InViewSection>
  )
}
