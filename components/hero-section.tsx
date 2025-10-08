'use client'

import { useLanguage } from '@/contexts/language-context'
import { ArrowRight, ArrowLeft, Play } from 'lucide-react'
export default function HeroSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section
      id='home'
      className='sm:min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      <div className='container mx-auto mt-5 px-6 z-20 relative'>
        <div className='max-w-4xl mx-auto'>
          {/* Main Heading */}
          <h1 className='sm:text-6xl text-5xl md:text-8xl lg:text-9xl font-light text-white mb-4 sm:mb-6 leading-tight'>
            <span className='font-medium text-accent block'>
              {t('hero.title')}
            </span>
            <span className='font-light tracking-tight text-white/90 text-2xl sm:text-4xl md:text-5xl lg:text-6xl block '>
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Description */}
          <p className='text-lg md:text-xl font-light font-figtree text-white/70 mb-10 md:mb-12 leading-relaxed max-w-2xl'>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className='flex items-center justify-center sm:justify-normal sm:flex-wrap gap-6'>
            <button className='group py-3 px-6 md:px-8 md:py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm sm:text-base transition-all duration-300 hover:bg-primary/80 cursor-pointer flex items-center gap-3'>
              {t('hero.cta.primary')}
              {isRTL ? (
                <ArrowLeft
                  size={20}
                  className='transition-all duration-300 hidden sm:block'
                />
              ) : (
                <ArrowRight
                  size={20}
                  className='transition-all duration-300 hidden sm:block'
                />
              )}
            </button>

            <button className='group py-3 px-6 md:px-8 md:py-4 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white/10 hover:border-white/50 cursor-pointer flex items-center gap-3'>
              {isRTL ? (
                <>
                  {t('hero.cta.secondary')}
                  <Play
                    size={18}
                    className='fill-current rotate-180 transition-transform duration-300 hidden sm:block'
                  />
                </>
              ) : (
                <>
                  <Play
                    size={18}
                    className='fill-current transition-transform duration-300 hidden sm:block'
                  />
                  {t('hero.cta.secondary')}
                </>
              )}
            </button>
          </div>

          {/* Stats */}
          <div className='md:mt-16 mt-8 grid grid-cols-3 gap-8 2xl:gap-12 max-w-lg mx-auto sm:mx-0'>
            <div>
              <div className='text-3xl text-center sm:text-start font-semibold text-white mb-1'>
                50+
              </div>
              <div className='text-sm text-center sm:text-start xl:w-[170px] text-white/60 font-light'>
                {t('hero.stats.projects')}
              </div>
            </div>
            <div>
              <div className='text-3xl text-center sm:text-start font-semibold text-white mb-1'>
                5+
              </div>
              <div className='text-sm  text-center sm:text-start text-white/60 font-light'>
                {t('hero.stats.experience')}
              </div>
            </div>
            <div>
              <div className='text-3xl text-center sm:text-start font-semibold text-white mb-1'>
                100%
              </div>
              <div className='text-sm text-center sm:text-start text-white/60 font-light'>
                {t('hero.stats.clients')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
