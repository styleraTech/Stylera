'use client'

import { Target, Users, Lightbulb, Award } from 'lucide-react'
import {
  Div,
  defaultContainerVariants,
  itemVariants,
} from '@/constants/animation'
import InViewSection from '../ui/Custom-ui/framer-motion/in-view-section'

interface AboutSectionProps {
  dictionary?: Dictionary['HomeWhoWeAre']
}

export default function AboutSection({ dictionary }: AboutSectionProps) {
  if (!dictionary) return null

  const values = [
    {
      icon: Target,
      title: dictionary.coreValues.values['Precision & Quality title'],
      description:
        dictionary.coreValues.values['Precision & Quality description'],
    },
    {
      icon: Users,
      title: dictionary.coreValues.values['Collaboration & Partnership title'],
      description:
        dictionary.coreValues.values['Collaboration & Partnership description'],
    },
    {
      icon: Lightbulb,
      title: dictionary.coreValues.values['Innovation & Creativity title'],
      description:
        dictionary.coreValues.values['Innovation & Creativity description'],
    },
    {
      icon: Award,
      title: dictionary.coreValues.values['Excellence & Professionalism title'],
      description:
        dictionary.coreValues.values[
          'Excellence & Professionalism description'
        ],
    },
  ]

  return (
    <InViewSection
      id='about'
      className='py-24 relative bg-card/20'
      variants={defaultContainerVariants}
    >
      <div className='container mx-auto px-6'>
        {/* Header */}
        <Div
          className='max-w-4xl mx-auto mb-20 text-center'
          variants={itemVariants}
        >
          <h2 className='text-4xl text-center md:text-5xl font-light text-white mb-8'>
            <span className='font-medium ltr:instrument text-accent'>
              {dictionary.about.title}
            </span>
          </h2>
          <p className='text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8'>
            {dictionary.about.description}
          </p>
          <p className='text-lg text-white/70 font-light leading-relaxed'>
            {dictionary.about.more}
          </p>
        </Div>

        {/* Mission & Vision */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20'>
          <Div
            className={`bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-border rounded-2xl p-8`}
            variants={itemVariants}
          >
            <h3 className='text-2xl font-semibold text-white mb-6'>
              {dictionary.vision.title}
            </h3>
            <p className='text-white/80 font-light leading-relaxed'>
              {dictionary.vision.description}
            </p>
          </Div>

          <Div
            className={`bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm border border-border rounded-2xl p-8`}
            variants={itemVariants}
          >
            <h3 className='text-2xl font-semibold text-white mb-6'>
              {dictionary.mission.title}
            </h3>
            <p className='text-white/80 font-light leading-relaxed'>
              {dictionary.mission.description}
            </p>
          </Div>
        </div>

        {/* Core Values */}
        <div className={`mb-20`}>
          <h3 className='text-3xl font-light text-white mb-12 text-center'>
            <span className='font-medium ltr:instrument text-accent'>
              {dictionary.coreValues.title}
            </span>
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Div
                  key={index}
                  variants={itemVariants}
                  className='group text-center hover:scale-105 transition-transform duration-300'
                >
                  <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent p-5 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300'>
                    <Icon className='w-full h-full text-white' />
                  </div>
                  <h4 className='text-lg select-none font-semibold text-white mb-3'>
                    {value.title}
                  </h4>
                  <p className='text-white/70 select-none font-light leading-relaxed text-sm'>
                    {value.description}
                  </p>
                </Div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div
          className='bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-border rounded-2xl p-12'
          // variants={itemVariants}
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                50+
              </div>
              <div className='text-white/70 font-light'>
                {dictionary.stats.projectsCompleted}
              </div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                25+
              </div>
              <div className='text-white/70 font-light'>
                {dictionary.stats.happyClients}
              </div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                3+
              </div>
              <div className='text-white/70 font-light'>
                {dictionary.stats.yearsExperience}
              </div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                100%
              </div>
              <div className='text-white/70 font-light'>
                {dictionary.stats.clientSatisfaction}
              </div>
            </div>
          </div>
        </div>
      </div>
    </InViewSection>
  )
}
