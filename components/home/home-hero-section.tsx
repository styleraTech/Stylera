'use client'

import { ArrowRight, ArrowLeft, Play } from 'lucide-react'
import Link from 'next/link'
import {
  Div,
  H1,
  P,
  Span,
  defaultContainerVariants,
  itemVariants,
  textVariants,
  comeFromBottomItem,
} from '@/constants/animation'

interface HeroSectionProps {
  dictionary?: Dictionary['homeHero']
  isRTL?: boolean
  locale?: string
}

export default function HeroSection({
  dictionary,
  isRTL,
  locale,
}: HeroSectionProps) {
  if (!dictionary) return null

  return (
    <section
      id='home'
      className='md:min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      <Div
        className='container mx-auto mt-5 px-6 z-20 relative'
        variants={defaultContainerVariants}
        initial='hidden'
        animate='visible'
      >
        <Div className='max-w-4xl mx-auto' variants={itemVariants}>
          {/* Title */}
          <h1 className='sm:text-6xl text-[42px] md:text-8xl lg:text-9xl font-light text-white mb-4 sm:mb-6 leading-tight'>
            <span className='font-medium text-accent block'>
              {dictionary.title}
            </span>
            <span className='font-light tracking-tight text-white/90 text-xl sm:text-4xl md:text-5xl lg:text-6xl block'>
              {dictionary.subtitle}
            </span>
          </h1>

          {/* Description */}
          <P
            variants={textVariants}
            className='text-lg md:text-xl text-white/70 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto sm:mx-0 text-start'
          >
            {dictionary.description}
          </P>

          {/* CTA Buttons */}
          <Div className='flex items-center justify-center sm:justify-normal sm:flex-wrap gap-6'>
            <Div variants={itemVariants}>
              <Link
                href={`/${locale}/contact`}
                className='group py-3 px-4 md:px-8 md:py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm sm:text-base transition-all duration-300 hover:bg-primary/80 flex items-center gap-3'
              >
                {dictionary.cta.primary}
                {isRTL ? (
                  <ArrowLeft size={20} className='hidden sm:block' />
                ) : (
                  <ArrowRight size={20} className='hidden sm:block' />
                )}
              </Link>
            </Div>

            <Div variants={itemVariants}>
              <Link
                href={`/${locale}/services`}
                className='group py-3 px-4 md:px-8 md:py-4 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white/10 hover:border-white/50 flex items-center gap-3'
              >
                {isRTL ? (
                  <>
                    {dictionary.cta.secondary}
                    <Play size={18} className='rotate-180 hidden sm:block' />
                  </>
                ) : (
                  <>
                    <Play size={18} className='hidden sm:block' />
                    {dictionary.cta.secondary}
                  </>
                )}
              </Link>
            </Div>
          </Div>

          {/* Stats */}
          <Div
            className='md:mt-16 mt-8 grid grid-cols-3 gap-8 2xl:gap-12 max-w-lg mx-auto sm:mx-0'
            variants={defaultContainerVariants}
          >
            {[
              { number: '50+', label: dictionary.stats.projects },
              { number: '3+', label: dictionary.stats.experience },
              { number: '100%', label: dictionary.stats.clients },
            ].map((stat, i) => (
              <Div key={i} variants={itemVariants}>
                <div className='text-3xl text-center sm:text-start font-semibold text-white mb-1'>
                  {stat.number}
                </div>
                <div className='text-sm text-center sm:text-start text-white/60 font-light'>
                  {stat.label}
                </div>
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
    </section>
  )
}
