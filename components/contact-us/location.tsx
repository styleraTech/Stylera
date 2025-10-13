'use client'

import { Card } from '@/components/ui/card'
import { MapPin, Phone, Mail } from 'lucide-react'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'

interface LocationSectionProps {
  dictionary: Dictionary['contactUs']
}

export default function LocationSection({ dictionary }: LocationSectionProps) {
  if (!dictionary) return null

  const t = dictionary.locationSection

  return (
    <InViewSection
      className='py-20 px-4 bg-slate-900/50'
      variants={defaultContainerVariants}
    >
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <Div className='text-center mb-16' variants={itemVariants}>
          <h2 className='text-4xl md:text-5xl font-bold text-accent mb-6'>
            {t.title}
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
            {t.subtitle}
          </p>
        </Div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Info Card */}
          <Div variants={itemVariants}>
            <Card className='bg-slate-800/50 border-slate-700 p-8'>
              <h3 className='text-2xl font-bold text-white mb-6'>
                {t.officeTitle}
              </h3>

              <div className='space-y-4'>
                {/* Address */}
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Tripoli,Libya'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-start hover:bg-slate-700/50 p-3 rounded-lg transition-colors'
                >
                  <MapPin className='w-6 h-6 text-blue-400 me-3 mt-1 flex-shrink-0' />
                  <div>
                    <p className='text-white font-semibold'>{t.address}</p>
                    <p className='text-slate-300 hover:text-blue-400 transition-colors'>
                      Tripoli, Libya
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href='tel:+218928666458'
                  className='flex items-start hover:bg-slate-700/50 p-3 rounded-lg transition-colors'
                >
                  <Phone className='w-6 h-6 text-green-400 me-3 mt-1 flex-shrink-0' />
                  <div>
                    <p className='text-white font-semibold'>
                      {dictionary.phone}
                    </p>
                    <p
                      className='text-slate-300 hover:text-green-400 transition-colors'
                      dir='ltr'
                    >
                      +218 92 8666 458
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href='mailto:contact@ebtkar.tech'
                  className='flex items-start hover:bg-slate-700/50 p-3 rounded-lg transition-colors'
                >
                  <Mail className='w-6 h-6 text-purple-400 me-3 mt-1 flex-shrink-0' />
                  <div>
                    <p className='text-white font-semibold'>
                      {dictionary.email}
                    </p>
                    <p className='text-slate-300 hover:text-purple-400 transition-colors'>
                      contact@ebtkar.tech
                    </p>
                  </div>
                </a>
              </div>
            </Card>
          </Div>

          {/* Map Placeholder */}
          <Div
            variants={itemVariants}
            onClick={() =>
              window.open(
                'https://www.google.com/maps/search/?api=1&query=Tripoli,Libya',
                '_blank'
              )
            }
            className='aspect-video bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors group'
          >
            <div className='text-center'>
              <MapPin className='w-16 h-16 text-slate-400 mx-auto mb-4 group-hover:text-blue-400 transition-colors' />
              <p className='text-slate-400 group-hover:text-blue-400 transition-colors'>
                {t.mapPlaceholder}
              </p>
              <p className='text-slate-500 text-sm'>{t.mapSubtext}</p>
            </div>
          </Div>
        </div>
      </div>
    </InViewSection>
  )
}
