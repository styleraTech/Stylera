'use client'

import { Card } from '@/components/ui/card'
import Link from 'next/link'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'
import {
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Brain,
  Palette,
  Shield,
  Database,
  Cloud,
  BarChart3,
  MessageCircle,
} from 'lucide-react'

interface DetailedServicesProps {
  dictionary: Dictionary['OurServicesPage']
}

const services = [
  { key: 'web', icon: Code, gradient: 'from-blue-500 to-cyan-500' },
  { key: 'mobile', icon: Smartphone, gradient: 'from-purple-500 to-pink-500' },
  { key: 'ai', icon: Brain, gradient: 'from-green-500 to-emerald-500' },
  { key: 'data', icon: Database, gradient: 'from-amber-500 to-yellow-500' },
  { key: 'security', icon: Shield, gradient: 'from-red-500 to-rose-500' },
  { key: 'design', icon: Palette, gradient: 'from-orange-500 to-red-500' },
  { key: 'cloud', icon: Cloud, gradient: 'from-sky-500 to-indigo-500' },
  {
    key: 'business',
    icon: BarChart3,
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  {
    key: 'chatbot',
    icon: MessageCircle,
    gradient: 'from-green-400 to-teal-500',
  },
]

export default function DetailedServices({
  dictionary,
}: DetailedServicesProps) {
  if (!dictionary) return null
  return (
    <InViewSection className='py-20 px-4' variants={defaultContainerVariants}>
      <Div className='container mx-auto' variants={defaultContainerVariants}>
        {/* Header */}
        {/* <Div className='text-center mb-16' variants={itemVariants}>
          <H2
            className='text-4xl md:text-5xl font-bold text-accent mb-6'
            variants={textVariants}
          >
            {dictionary.title}
          </H2>
          <P
            className='text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto'
            variants={textVariants}
          >
            {dictionary.subtitle}
          </P>
        </Div> */}

        {/* Service Cards */}
        <Div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {services.map(({ key, icon: Icon, gradient }, i) => {
            const service = dictionary[key as keyof typeof dictionary] as
              | { title: string; description: string; features?: string[] }
              | undefined

            if (!service) return null

            return (
              <Div key={i} variants={itemVariants}>
                <Card className='bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300 group h-full flex flex-col'>
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className='w-8 h-8 text-white' />
                  </div>

                  {/* Text */}
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {service.title}
                  </h3>
                  <p className='text-slate-300 text-lg leading-relaxed mb-6'>
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <ul className='space-y-2 mb-8'>
                      {service.features.map((f, j) => (
                        <li key={j} className='flex items-center'>
                          <CheckCircle className='w-4 h-4 text-green-400 me-2' />
                          <span className='text-slate-300'>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  <Link
                    href='https://wa.me/218928666458'
                    className='mt-auto border border-slate-600 rounded-lg text-white px-6 py-2 text-lg flex justify-center items-center gap-2 hover:bg-slate-800 transition-all group'
                  >
                    {dictionary.requestQuote}
                    <ArrowRight className='group-hover:translate-x-1 transition-transform' />
                  </Link>
                </Card>
              </Div>
            )
          })}
        </Div>
      </Div>
    </InViewSection>
  )
}
