'use client'

import {
  Div,
  H2,
  P,
  textVariants,
  defaultContainerVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'

interface ServicesHeroSectionProps {
  dictionary: Dictionary['OurServicesPage']
}

export default function ServicesHeroSection({
  dictionary,
}: ServicesHeroSectionProps) {
  if (!dictionary) return null
  return (
    <InViewSection
      className='pt-32 pb-20 px-4 text-center'
      variants={defaultContainerVariants}
    >
      <Div className='max-w-4xl mx-auto'>
        <H2
          className='text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight'
          variants={textVariants}
        >
          {dictionary.title}
        </H2>
        <P
          className='text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto'
          variants={textVariants}
        >
          {dictionary.subtitle}
        </P>
      </Div>
    </InViewSection>
  )
}
