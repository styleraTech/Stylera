'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ShaderBackground from '@/components/shader-background'
import { useLanguage } from '@/contexts/language-context'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Brain,
  Palette,
  Shield,
  Database,
  Users,
  Target,
  Rocket,
  MessageCircle,
  ArrowLeft,
} from 'lucide-react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
  { key: 'web', icon: Code, gradient: 'from-blue-500 to-cyan-500' },
  { key: 'mobile', icon: Smartphone, gradient: 'from-purple-500 to-pink-500' },
  { key: 'ai', icon: Brain, gradient: 'from-green-500 to-emerald-500' },
  { key: 'design', icon: Palette, gradient: 'from-orange-500 to-red-500' },
  { key: 'security', icon: Shield, gradient: 'from-red-500 to-rose-500' },
  { key: 'data', icon: Database, gradient: 'from-amber-500 to-yellow-500' },
]

// icons for methodology steps (keep same order as translation array)
const stepIcons = [Users, Target, Code, Rocket]
const stepColors = [
  'text-blue-400',
  'text-purple-400',
  'text-green-400',
  'text-orange-400',
]

export default function ServicesPage() {
  const { t, isRTL } = useLanguage()

  const steps = t('OurServices.steps') || []

  return (
    <div className='relative'>
      <ShaderBackground>
        <div className='relative z-10'>
          <Navigation />

          {/* Hero Section */}
          <section className='pt-32 pb-20 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight'>
                {t('OurServices.title')}
              </h1>
              <p className='text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto'>
                {t('OurServices.subtitle')}
              </p>
            </div>
          </section>
        </div>
      </ShaderBackground>
      <div className='bg-background'>
        {/* Detailed Services Section */}
        <section className='py-20 px-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
              {services.map(({ key, icon: Icon, gradient }, index) => {
                const title = t(`OurServices.${key}.title`)
                const description = t(`OurServices.${key}.description`)
                const features = t(`OurServices.${key}.features`) || []

                return (
                  <Card
                    key={index}
                    className='flex flex-col bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300 group h-full'
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className='w-8 h-8 text-white' />
                    </div>

                    <h3 className='text-2xl font-bold text-white mb-4'>
                      {title}
                    </h3>
                    <p className='text-slate-300 text-lg leading-relaxed mb-6'>
                      {description}
                    </p>

                    <ul className='space-y-2 mb-8'>
                      {features.map((feature: string, i: number) => (
                        <li key={i} className='flex items-center'>
                          <CheckCircle className='w-4 h-4 text-green-400 me-2' />
                          <span className='text-slate-300'>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Push button to bottom */}
                    <div className='mt-auto'>
                      <Button
                        variant='outline'
                        className='w-full border-slate-600 text-white hover:bg-slate-800 px-6 py-3 text-lg group bg-transparent'
                      >
                        {t('OurServices.requestQuote')}
                        {isRTL ? (
                          <ArrowLeft />
                        ) : (
                          <ArrowRight className='w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform' />
                        )}
                      </Button>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className='py-20 px-4 bg-slate-900/50'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                {t('OurServices.howWeWorkTitle')}
              </h2>
              <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
                {t('OurServices.howWeWorkSubtitle')}
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {steps.map((step: any, index: number) => {
                const Icon = stepIcons[index] || Users
                const color = stepColors[index] || 'text-blue-400'
                const stepNumber = (index + 1).toString().padStart(2, '0')

                return (
                  <Card
                    key={index}
                    className='bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group'
                  >
                    <div className='relative mb-6'>
                      <div className='w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                        <Icon className={`w-8 h-8 ${color}`} />
                      </div>
                      <div className='absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold'>
                        {stepNumber}
                      </div>
                    </div>

                    <h3 className='text-xl font-bold text-white mb-3'>
                      {step.title}
                    </h3>
                    <p className='text-slate-300 leading-relaxed'>
                      {step.description}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Start Your Project Section */}
        <section className='py-20 px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-slate-700'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
                {t('OurServices.ctaTitle')}
              </h2>
              <p className='text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto'>
                {t('OurServices.ctaSubtitle')}
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group'>
                  {t('cta.startProject')}
                  <ArrowRight
                    className={`w-5 h-5 ${
                      isRTL ? 'mr-2 rotate-180' : 'ml-2'
                    } group-hover:translate-x-1 transition-transform`}
                  />
                </Button>
                <Link href='https://wa.me/218928666458'>
                  <Button
                    variant='outline'
                    className='border-slate-600 text-white hover:bg-slate-800 px-8 py-4.5 text-lg group bg-transparent cursor-pointer'
                  >
                    {t('cta.freeConsultation')}
                    <FaWhatsapp className={`w-5 h-5 text-green-500 me-1`} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
