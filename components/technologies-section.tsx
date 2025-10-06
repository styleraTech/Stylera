'use client'

import { useLanguage } from '@/contexts/language-context'
import { Card } from '@/components/ui/card'
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiTensorflow,
  SiReact,
} from 'react-icons/si'

const technologies = [
  {
    name: 'React',
    icon: <FaReact className='text-sky-400' />,
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className='text-white' />,
    category: 'Framework',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className='text-green-500' />,
    category: 'Backend',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className='text-blue-500' />,
    category: 'Language',
  },
  {
    name: 'Python',
    icon: <FaPython className='text-yellow-400' />,
    category: 'Language',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className='text-green-600' />,
    category: 'Database',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className='text-sky-600' />,
    category: 'Database',
  },
  {
    name: 'AWS',
    icon: <FaAws className='text-orange-400' />,
    category: 'Cloud',
  },
  {
    name: 'Docker',
    icon: <FaDocker className='text-blue-400' />,
    category: 'DevOps',
  },
  {
    name: 'Flutter',
    icon: <SiFlutter className='text-cyan-400' />,
    category: 'Mobile',
  },
  {
    name: 'React Native',
    icon: <SiReact className='text-sky-400' />,
    category: 'Mobile',
  },
  {
    name: 'TensorFlow',
    icon: <SiTensorflow className='text-orange-500' />,
    category: 'AI/ML',
  },
]

export default function TechnologiesSection() {
  const { t } = useLanguage()

  return (
    <section className='py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            {t('technologies.title')}
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
            {t('technologies.subtitle')}
          </p>
        </div>

        {/* Tech Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className='bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group'
            >
              <div className='p-6 text-center flex flex-col items-center'>
                <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {tech.icon}
                </div>
                <h3 className='text-white font-semibold mb-2'>{tech.name}</h3>
                <p className='text-slate-400 text-sm'>{tech.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
