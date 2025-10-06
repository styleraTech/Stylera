'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ShaderBackground from '@/components/shader-background'
import TeamSection from '@/components/team-section'
import { useLanguage } from '@/contexts/language-context'
import { Card } from '@/components/ui/card'
import {
  Heart,
  Target,
  Lightbulb,
  Shield,
  Users,
  Award,
  Rocket,
} from 'lucide-react'

const values = [
  { key: 'passion', icon: Heart, gradient: 'from-red-500 to-pink-500' },
  { key: 'excellence', icon: Target, gradient: 'from-blue-500 to-cyan-500' },
  {
    key: 'innovation',
    icon: Lightbulb,
    gradient: 'from-yellow-500 to-orange-500',
  },
  { key: 'integrity', icon: Shield, gradient: 'from-green-500 to-emerald-500' },
]

const timeline = [
  { year: '2022', icon: Rocket, color: 'text-blue-400' },
  { year: '2023', icon: Users, color: 'text-purple-400' },
  { year: '2024', icon: Award, color: 'text-green-400' },
  { year: '2025', icon: Target, color: 'text-orange-400' },
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className='relative'>
      <ShaderBackground>
        {/* Foreground content */}
        <div className='relative z-10'>
          <Navigation />

          {/* Hero Section */}
          <section className='pt-32 pb-20 px-4 text-center'>
            <div className='max-w-4xl mx-auto'>
              <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
                {t('aboutPage.title')}
              </h1>
              <p className='text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto'>
                {t('aboutPage.subtitle')}
              </p>
            </div>
          </section>
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        {/* Our Story Section */}
        <section className='py-20 px-4'>
          <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-8'>
                {t('aboutPage.story.title')}
              </h2>
              <div className='space-y-6 text-lg text-slate-300 leading-relaxed'>
                {t('aboutPage.story.paragraphs').map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className='relative'>
              <div className='aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-slate-700 flex items-center justify-center'>
                <img
                  src='/modern-tech-team-working-together-in-office.jpg'
                  alt='Our Story'
                  className='w-full h-full object-cover rounded-3xl'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className='py-20 px-4 bg-slate-900/50'>
          <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12'>
            <Card className='bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6'>
                <Target className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                {t('aboutPage.mission.title')}
              </h3>
              <p className='text-slate-300 text-lg leading-relaxed'>
                {t('aboutPage.mission.text')}
              </p>
            </Card>

            <Card className='bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6'>
                <Lightbulb className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                {t('aboutPage.vision.title')}
              </h3>
              <p className='text-slate-300 text-lg leading-relaxed'>
                {t('aboutPage.vision.text')}
              </p>
            </Card>
          </div>
        </section>

        {/* Core Values Section */}
        <section className='py-20 px-4'>
          <div className='max-w-6xl mx-auto text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              {t('aboutPage.values.title')}
            </h2>
            <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
              {t('aboutPage.values.subtitle')}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
            {values.map(({ key, icon: Icon, gradient }, index) => (
              <Card
                key={index}
                className='bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group'
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold text-white mb-3'>
                  {t(`aboutPage.values.items.${key}.title`)}
                </h3>
                <p className='text-slate-300 leading-relaxed'>
                  {t(`aboutPage.values.items.${key}.description`)}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className='py-20 px-4 bg-slate-900/50'>
          <div className='max-w-6xl mx-auto text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              {t('aboutPage.timeline.title')}
            </h2>
            <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
              {t('aboutPage.timeline.subtitle')}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
            {timeline.map(({ year, icon: Icon, color }, index) => (
              <Card
                key={index}
                className='bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group'
              >
                <div className='relative mb-6'>
                  <div className='w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <Icon className={`w-8 h-8 ${color}`} />
                  </div>
                  <div className='absolute -top-2 -right-2 w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold'>
                    {year}
                  </div>
                </div>

                <h3 className='text-xl font-bold text-white mb-3'>{year}</h3>
                <p className='text-slate-300 leading-relaxed text-sm'>
                  {t(`aboutPage.timeline.items.${year}`)}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <TeamSection />
      </div>

      <Footer />
    </div>
  )
}
