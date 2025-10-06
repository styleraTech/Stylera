'use client'

import { useLanguage } from '@/contexts/language-context'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    avatar: '/client-1.jpg',
    rating: 5,
  },
  {
    id: 2,
    avatar: '/client-2.jpg',
    rating: 5,
  },
  {
    id: 3,
    avatar: '/client-3.jpg',
    rating: 5,
  },
  {
    id: 4,
    avatar: '/client-4.jpg',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className='py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            {t('testimonials.title')}
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className='bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300'
            >
              <div className='flex items-center mb-6'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-5 h-5 text-yellow-400 fill-current'
                  />
                ))}
              </div>

              <blockquote className='text-slate-300 text-lg leading-relaxed mb-6'>
                "{t(`testimonials.items.${index}.content`)}"
              </blockquote>

              <div className='flex items-center'>
                <img
                  src={`/placeholder.svg?height=60&width=60&query=professional business person portrait`}
                  alt={t(`testimonials.items.${index}.name`)}
                  className='w-12 h-12 rounded-full object-cover me-4'
                />
                <div>
                  <div className='text-white font-semibold'>
                    {t(`testimonials.items.${index}.name`)}
                  </div>
                  <div className='text-slate-400 text-sm'>
                    {t(`testimonials.items.${index}.position`)}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
