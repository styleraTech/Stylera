'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '../ui/Custom-ui/framer-motion/in-view-section'

interface ProjectsSectionProps {
  dictionary?: Dictionary['projects']
  locale?: string
}

const projects = [
  {
    id: 1,
    image: '/ar-en-Logo.webp',
    key: 'mset',
    category: 'Education',
    technologies: ['React', 'Next.js', 'MongoDB'],
    liveLink: 'https://mset.ly/en',
    githubLink: '#',
  },
]

export default function ProjectsSection({
  dictionary,
  locale,
}: ProjectsSectionProps) {
  if (!dictionary) return null

  return (
    <InViewSection className='py-20 px-4' variants={defaultContainerVariants}>
      <Div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <Div className='text-center mb-16' variants={itemVariants}>
          <H2
            className='text-4xl md:text-5xl font-bold text-accent mb-6'
            variants={textVariants}
          >
            {dictionary.title}
          </H2>
          <P
            className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'
            variants={textVariants}
          >
            {dictionary.subtitle}
          </P>
        </Div>

        {/* Projects Grid */}
        <Div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => {
            const item = dictionary.items?.[project.key]
            if (!item) return null

            return (
              <Div key={project.id} variants={itemVariants}>
                <Card className='bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-700/50 transition-all duration-300 group'>
                  {/* Image */}
                  <div className='aspect-video relative overflow-hidden'>
                    <Image
                      src={project.image}
                      alt={`${project.category} Project`}
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-500'
                      sizes='(max-width: 768px) 100vw, 33vw'
                      priority
                    />
                    <div className='absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300' />
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='text-blue-400 text-sm font-medium'>
                        {project.category}
                      </span>

                      <div className='flex gap-2'>
                        {/* GitHub */}
                        {project.githubLink && (
                          <Link
                            href={project.githubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer'
                          >
                            <Button
                              size='sm'
                              variant='ghost'
                              className='h-8 w-8 p-0 text-slate-400 hover:text-white cursor-pointer'
                            >
                              <FaGithub className='h-4 w-4' />
                            </Button>
                          </Link>
                        )}

                        {/* Live Link */}
                        {project.liveLink && (
                          <Link
                            href={project.liveLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer'
                          >
                            <Button
                              size='sm'
                              variant='ghost'
                              className='h-8 w-8 p-0 text-slate-400 hover:text-white cursor-pointer'
                            >
                              <ExternalLink className='h-4 w-4' />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <h3 className='text-white font-semibold text-lg mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-slate-300 text-sm mb-4 leading-relaxed'>
                      {item.description}
                    </p>

                    {/* Tech Stack */}
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className='px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Div>
            )
          })}
        </Div>

        {/* CTA */}
        <div className='text-center mt-12'>
          <Link href={`/${locale}/projects`}>
            <Button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5.5 text-lg cursor-pointer'>
              {dictionary.viewAll}
            </Button>
          </Link>
        </div>
      </Div>
    </InViewSection>
  )
}
