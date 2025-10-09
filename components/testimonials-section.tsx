'use client'

import { useLanguage } from '@/contexts/language-context'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  { id: 1, avatar: '/images/296fe121-5dfa-43f4-98b5-db50019738a7.jpg' },
  { id: 2, avatar: '/images/296fe121-5dfa-43f4-98b5-db50019738a7.jpg' },
  { id: 3, avatar: '/images/296fe121-5dfa-43f4-98b5-db50019738a7.jpg' },
  { id: 4, avatar: '/images/296fe121-5dfa-43f4-98b5-db50019738a7.jpg' },
]

export default function TestimonialsSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className='py-24 px-6 relative overflow-hidden bg-background'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold text-accent mb-6'>
            {t('testimonials.title')}
          </h2>
          <p className='text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed'>
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials */}
        <div className='space-y-16'>
          {testimonials.map((testimonial, index) => {
            const alignRight = index % 2 === 1
            const delay = index * 0.2

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  alignRight ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div className='flex-shrink-0'>
                  <Image
                    src={testimonial.avatar}
                    alt='person'
                    width={100}
                    height={100}
                    className='w-28 h-28 rounded-full object-cover border-4 border-accent shadow-lg'
                  />
                </div>

                {/* Content */}
                <Card className='flex-1 bg-slate-800/60 border-slate-700 p-8 hover:bg-slate-700/60 transition-all duration-300 relative'>
                  {/* Decorative quote mark */}
                  <span className='absolute top-2 left-3 sm:top-2 sm:left-4 text-accent text-6xl opacity-20 font-serif select-none'>
                    “
                  </span>

                  <blockquote className='relative text-slate-200 text-lg md:text-xl leading-relaxed mb-6 z-10'>
                    {t(`testimonials.items.${index}.content`)}
                  </blockquote>

                  <div className='flex items-center justify-between flex-wrap gap-3'>
                    <div>
                      <div className='text-white font-semibold text-lg'>
                        {t(`testimonials.items.${index}.name`)}
                      </div>
                      <div className='text-slate-400 text-sm'>
                        {t(`testimonials.items.${index}.position`)}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className='flex items-center'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-5 h-5 text-yellow-400 fill-current'
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
