'use client'

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
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '../ui/Custom-ui/framer-motion/in-view-section'

interface TechnologiesSectionProps {
  dictionary?: Dictionary['technologies']
}

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

export default function TechnologiesSection({
  dictionary,
}: TechnologiesSectionProps) {
  if (!dictionary) return null

  return (
    <InViewSection className='py-20 px-4' variants={defaultContainerVariants}>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <Div className='text-center mb-16' variants={itemVariants}>
          <h2 className='text-4xl md:text-5xl font-bold text-accent mb-6'>
            {dictionary.title}
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
            {dictionary.subtitle}
          </p>
        </Div>

        {/* Technologies Grid */}
        <Div
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'
          variants={defaultContainerVariants}
        >
          {technologies.map((tech, index) => (
            <Div key={index} variants={itemVariants}>
              <Card className='bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group'>
                <div className='p-6 text-center flex flex-col items-center'>
                  <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {tech.icon}
                  </div>
                  <h3 className='text-white font-semibold mb-2'>{tech.name}</h3>
                  {/* <p className='text-white/50 text-sm'>{tech.category}</p> */}
                </div>
              </Card>
            </Div>
          ))}
        </Div>
      </div>
    </InViewSection>
  )
}
