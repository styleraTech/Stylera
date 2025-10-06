'use client'

import { useLanguage } from '@/contexts/language-context'
import { Code, Smartphone, Brain, Palette, ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      titleKey: 'services.web.title',
      descriptionKey: 'services.web.description',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      titleKey: 'services.mobile.title',
      descriptionKey: 'services.mobile.description',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Brain,
      titleKey: 'services.ai.title',
      descriptionKey: 'services.ai.description',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Palette,
      titleKey: 'services.design.title',
      descriptionKey: 'services.design.description',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id='services' className='py-24 relative'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='max-w-3xl mx-auto mb-20 text-start'>
          <h2 className='text-4xl md:text-5xl font-light text-white mb-6'>
            <span className='font-medium ltr:instrument text-accent'>
              {t('services.title')}
            </span>
          </h2>
          <p className='text-lg text-white/70 font-light leading-relaxed'>
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.titleKey}
                className='group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl'
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className='w-full h-full text-white' />
                </div>

                {/* Content */}
                <div className='text-start select-none'>
                  <h3 className='text-xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                    {t(service.titleKey)}
                  </h3>
                  <p className='text-white/70 font-light leading-relaxed mb-6'>
                    {t(service.descriptionKey)}
                  </p>

                  {/* Learn More Link */}
                  {/* <button className='flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 group-hover:gap-3'>
                    <span className='text-sm font-medium'>
                      {t('services.learnMore')}
                    </span>
                    <ArrowRight
                      size={16}
                      className='transition-transform duration-300'
                    />
                  </button> */}
                </div>

                {/* Hover Overlay */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className='mt-20 text-center'>
          <div className='max-w-2xl mx-auto'>
            <h3 className='text-2xl md:text-3xl font-light text-white mb-6'>
              {t('services.cta.title')}
            </h3>
            <p className='text-white/70 font-light mb-8 leading-relaxed'>
              {t('services.cta.subtitle')}
            </p>
            <button className='group px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base transition-all duration-300 hover:bg-primary/90 cursor-pointer flex items-center gap-3 hover:gap-4 mx-auto'>
              {t('services.cta.button')}
              <ArrowRight
                size={20}
                className='transition-all duration-300 rtl:rotate-180'
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
