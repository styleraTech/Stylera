'use client'

import { useState } from 'react'
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
import { ArrowLeft, ArrowRight, Search } from 'lucide-react'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'
import {
  Div,
  itemVariants,
  defaultContainerVariants,
} from '@/constants/animation'
import Link from 'next/link'
import ProjectCard from './project-card'

interface AllProjectsProps {
  dictionary?: Dictionary['allProjects']
  isRTL?: boolean
  locale: string
}

export default function AllProjects({
  dictionary,
  isRTL,
  locale,
}: AllProjectsProps) {
  if (!dictionary) return null
  const projects = Object.values(dictionary.projects || {})

  //  State for search + category filter
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  //  Filtered projects logic
  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === 'all' ||
      !selectedCategory ||
      p.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
          className={`flex flex-col md:flex-row justify-between items-center gap-4 mb-12 ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
        >
          {/* Search + Select */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
          >
            {/* Search Input */}
            <div className='relative w-full sm:w-64'>
              <Search
                className={`absolute ${
                  isRTL ? 'right-3' : 'left-3'
                } top-2 text-slate-400 h-5 w-5`}
              />
              <Input
                type='text'
                placeholder={dictionary.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`${
                  isRTL ? 'pr-10' : 'pl-10'
                } bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-400`}
              />
            </div>

            {/* Category Filter */}
            <Select onValueChange={(val) => setSelectedCategory(val)}>
              <SelectTrigger className='w-full sm:w-48 bg-slate-800 border-slate-700 text-slate-200'>
                <SelectValue placeholder={dictionary.selectCategory} />
              </SelectTrigger>
              <SelectContent className='bg-slate-800 text-slate-200 border-slate-700 font-[cairo]'>
                <SelectItem value='all'>{dictionary.selectCategory}</SelectItem>
                {Array.from(new Set(projects.map((p) => p.category))).map(
                  (category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          {/* CTA Button */}
          <Link
            href={`/${locale}/contact`}
            className='bg-gradient-to-r cursor-pointer from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-2 py-2 flex rounded-sm items-center gap-1 text-lg'
          >
            {dictionary.cta.startProject}
            {isRTL ? (
              <ArrowLeft size={18} className='mt-0.5' />
            ) : (
              <ArrowRight size={18} className='mt-0.5' />
            )}
          </Link>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p, index) => (
              <ProjectCard
                key={index}
                title={p.title}
                description={p.description}
                image={p.image}
                category={p.category}
                technologies={p.technologies}
                github={p.github}
                live={p.live}
              />
            ))
          ) : (
            <p className='text-center text-slate-400 col-span-full text-lg'>
              {isRTL
                ? 'لم يتم العثور على مشاريع مطابقة.'
                : 'No matching projects found.'}
            </p>
          )}
        </div>

        {/* Pagination */}
        <div className='mt-12 flex justify-center'>
          <Pagination isRTL={isRTL}>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' isRTL={isRTL} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' isActive>
                  01
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' isRTL={isRTL} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Div>
    </InViewSection>
  )
}
