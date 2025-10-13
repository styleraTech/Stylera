'use client'

import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'
import Image from 'next/image'

interface OurStoryProps {
  dictionary: Dictionary['whoWeAre']
}

export default function OurStory({ dictionary }: OurStoryProps) {
  if (!dictionary?.story) return null

  const { story } = dictionary

  return (
    <InViewSection className='py-20 px-4' variants={defaultContainerVariants}>
      <Div
        className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center'
        variants={itemVariants}
      >
        {/* Text Section */}
        <Div variants={itemVariants}>
          <H2 className='text-4xl md:text-5xl font-bold text-accent mb-8'>
            {story.title}
          </H2>

          <div className='space-y-6 text-lg text-slate-300 leading-relaxed'>
            {story.paragraphs.map((p: string, i: number) => (
              <P key={i}>{p}</P>
            ))}
          </div>
        </Div>

        {/* Image Section */}
        <Div className='relative' variants={itemVariants}>
          <div className='aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-slate-700 flex items-center justify-center overflow-hidden'>
            <Image
              width={800}
              height={800}
              src='/modern-tech-team-working-together-in-office.webp'
              alt='Our Story'
              className='w-full h-full object-cover rounded-3xl'
            />
          </div>
        </Div>
      </Div>
    </InViewSection>
  )
}
