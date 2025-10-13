'use client'
import type { Variants, Transition } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import InViewSection from '../ui/Custom-ui/framer-motion/in-view-section'

interface TestimonialsSectionProps {
  dictionary?: Dictionary['testimonials']
  isRTL?: boolean
}

const avatars = [
  '/images/person.webp',
  '/images/person.webp',
  '/images/person.webp',
  '/images/person.webp',
]

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => {
    const transition: Transition = {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ cubic-bezier for "easeOut"
    }

    return {
      opacity: 1,
      y: 0,
      transition,
    }
  },
}

export default function TestimonialsSection({
  dictionary,
  isRTL,
}: TestimonialsSectionProps) {
  if (!dictionary) return null

  return (
    <InViewSection className='py-24 px-6 relative overflow-hidden bg-background'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-accent mb-6'>
            {dictionary.title}
          </h2>
          <p className='text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed'>
            {dictionary.subtitle}
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className='space-y-16'>
          {dictionary.items.map((item, index) => {
            const alignRight = index % 2 === 1
            const avatar = avatars[index] || avatars[0]

            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  alignRight
                    ? isRTL
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse'
                    : ''
                }`}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index}
              >
                {/* Avatar */}
                <motion.div
                  className='flex-shrink-0'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src={avatar}
                    alt={item.name}
                    width={100}
                    height={100}
                    className='w-28 h-28 rounded-full object-cover border-4 border-accent shadow-lg'
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className='flex-1'
                  variants={fadeInUp}
                  custom={index + 0.5}
                >
                  <Card className='bg-slate-800/60 border-slate-700 p-8 hover:bg-slate-700/60 transition-all duration-300 relative'>
                    <span
                      className={`absolute top-2 ${
                        isRTL ? 'right-3 sm:right-4' : 'left-3 sm:left-4'
                      } text-accent text-6xl opacity-20 font-serif select-none`}
                    >
                      “
                    </span>

                    <blockquote className='relative text-slate-200 text-lg md:text-xl leading-relaxed mb-6 z-10'>
                      {item.content}
                    </blockquote>

                    <div className='flex items-center justify-between flex-wrap gap-3'>
                      <div>
                        <div className='text-white font-semibold text-lg'>
                          {item.name}
                        </div>
                        <div className='text-slate-400 text-sm'>
                          {item.position}
                        </div>
                      </div>

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
              </motion.div>
            )
          })}
        </div>
      </div>
    </InViewSection>
  )
}
