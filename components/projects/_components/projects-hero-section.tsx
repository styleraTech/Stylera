'use client'

import {
  Div,
  H2,
  P,
  textVariants,
  defaultContainerVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'
import Link from 'next/link'

interface ProjectsHeroSectionProps {
  dictionary?: Dictionary['allProjects']
  isRTL?: boolean
}

export default function ProjectsHeroSection({
  dictionary,
  isRTL,
}: ProjectsHeroSectionProps) {
  if (!dictionary) return null

  return (
    <InViewSection
      className={`md:pt-32 pt-10 pb-20 px-4 md:ps-20`}
      variants={defaultContainerVariants}
    >
      <Div className='max-w-7xl'>
        {/* Title and Brand */}
        <H2
          className='text-5xl md:text-7xl font-medium text-white mb-6 leading-tight'
          variants={textVariants}
        >
          {dictionary.title}{' '}
          <span className='text-accent'>{dictionary.brand}</span>
        </H2>

        {/* Subtitle / Description */}
        <P
          className='text-xl text-slate-300 leading-relaxed max-w-2xl mb-8'
          variants={textVariants}
        >
          {dictionary.description}
        </P>

        {/* CTA Buttons */}
        <Div className={`flex flex-wrap gap-4`} variants={textVariants}>
          <Link
            href='https://wa.me/218922588880'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='px-6 py-3 rounded-full cursor-pointer bg-green-600 hover:bg-green-700 text-white transition'>
              {dictionary.cta.consultation}
            </button>
          </Link>
          <Link href='/contact'>
            <button className='px-6 py-3 rounded-full bg-transparent cursor-pointer text-white hover:bg-slate-600 transition border border-white'>
              {dictionary.cta.startProject}
            </button>
          </Link>
        </Div>
      </Div>
    </InViewSection>
  )
}
