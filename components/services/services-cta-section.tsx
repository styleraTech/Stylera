'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'

interface CTASectionProps {
  dictionary: Dictionary['OurServicesPage']
  isRTL?: boolean
}

export default function CTASection({ dictionary, isRTL }: CTASectionProps) {
  if (!dictionary) return null

  return (
    <InViewSection className='py-20 px-4' variants={defaultContainerVariants}>
      <Div className='max-w-4xl mx-auto text-center'>
        <Div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-slate-700'>
          <H2
            className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'
            variants={textVariants}
          >
            {dictionary.ctaTitle}
          </H2>

          <P
            className='text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto'
            variants={textVariants}
          >
            {dictionary.ctaSubtitle}
          </P>

          <Div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button className='bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group'>
                {dictionary.startProject || 'Start Your Project'}
                {isRTL ? (
                  <ArrowLeft className='w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform' />
                ) : (
                  <ArrowRight className='w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform' />
                )}
              </Button>
            </Link>

            <Link href='https://wa.me/218928666458'>
              <Button
                variant='outline'
                className='border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg group bg-transparent cursor-pointer'
              >
                {dictionary.freeConsultation || 'Free Consultation'}
                <FaWhatsapp className='w-5 h-5 text-green-500 ms-2' />
              </Button>
            </Link>
          </Div>
        </Div>
      </Div>
    </InViewSection>
  )
}
