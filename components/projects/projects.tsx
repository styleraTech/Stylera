'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import Image from 'next/image'
import { ExternalLink, Search } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'
import {
  Div,
  itemVariants,
  defaultContainerVariants,
} from '@/constants/animation'

interface AllProjectsProps {
  dictionary?: Dictionary['allProjects']
  isRTL?: boolean
}

const projects = [
  {
    id: 1,
    title: 'MSET Learning Platform',
    description:
      'MSET is an educational platform providing learning tools and resources for students and institutions, built with scalability and a seamless UX in mind.',
    category: 'Education',
    image: '/ar-en-Logo.webp',
    technologies: ['React', 'Next.js', 'MongoDB', 'Node.js'],
    github: '',
    live: 'https://mset.ly/en',
  },
]

export default function AllProjects({ dictionary, isRTL }: AllProjectsProps) {
  if (!dictionary) return null

  return (
    <InViewSection className='py-24 px-4' variants={defaultContainerVariants}>
      <Div className='max-w-7xl mx-auto' variants={itemVariants}>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-accent mb-4'>
            {dictionary.featuredTitle}
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
            {dictionary.featuredSubtitle}
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-col md:flex-row justify-center items-center gap-4 mb-12 ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
        >
          <div className='relative w-full md:w-64'>
            <Search className='absolute left-3 top-2 text-slate-400 h-5 w-5' />
            <Input
              type='text'
              placeholder={dictionary.searchPlaceholder}
              className='pl-10 bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-400'
            />
          </div>

          <Select>
            <SelectTrigger className='w-full md:w-48 bg-slate-800 border-slate-700 text-slate-200'>
              <SelectValue placeholder={dictionary.selectCategory} />
            </SelectTrigger>
            <SelectContent className='bg-slate-800 text-slate-200 border-slate-700'>
              <SelectItem value='education'>Education</SelectItem>
            </SelectContent>
          </Select>

          <Button className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-5 text-lg'>
            {dictionary.cta.startProject}
          </Button>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {projects.map((p) => (
            <Card
              key={p.id}
              className='bg-slate-800/60 border-slate-700 overflow-hidden hover:bg-slate-700/60 transition-all duration-300 group'
            >
              {/* Image */}
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <div className='flex items-center justify-between mb-3'>
                  <span className='text-blue-400 text-sm font-medium'>
                    {p.category}
                  </span>
                  <div className='flex gap-2'>
                    {p.github && (
                      <Button
                        size='sm'
                        variant='ghost'
                        className='h-8 w-8 p-0 text-slate-400 hover:text-white'
                        asChild
                      >
                        <a
                          href={p.github}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <FaGithub className='h-4 w-4' />
                        </a>
                      </Button>
                    )}
                    {p.live && (
                      <Button
                        size='sm'
                        variant='ghost'
                        className='h-8 w-8 p-0 text-slate-400 hover:text-white'
                        asChild
                      >
                        <a
                          href={p.live}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ExternalLink className='h-4 w-4' />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <h3 className='text-white font-semibold text-lg mb-2'>
                  {p.title}
                </h3>
                <p className='text-slate-300 text-sm mb-4 leading-relaxed'>
                  {p.description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {p.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className='mt-12 flex justify-center'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' isActive>
                  01
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Div>
    </InViewSection>
  )
}
