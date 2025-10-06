'use client'

import type React from 'react'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ShaderBackground from '@/components/shader-background'
import { useLanguage } from '@/contexts/language-context'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  HelpCircle,
} from 'lucide-react'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Phone,
      title: t('contactPage.phone'),
      value: '+218 92 8666 458',
      gradient: 'from-blue-500 to-cyan-500',
      href: 'tel:+218928666458',
      type: 'phone',
    },
    {
      icon: Mail,
      title: t('contactPage.email'),
      value: 'contact@ebtkar.tech',
      gradient: 'from-purple-500 to-pink-500',
      href: 'mailto:contact@ebtkar.tech',
      type: 'email',
    },
    {
      icon: MapPin,
      title: t('contactPage.location'),
      value: 'Tripoli, Libya',
      gradient: 'from-green-500 to-emerald-500',
      href: 'https://www.google.com/maps/search/?api=1&query=Tripoli,Libya',
      type: 'location',
    },
    {
      icon: FaWhatsapp,
      title: t('contactPage.whatsapp'),
      value: '+218 92 8666 458',
      gradient: 'from-green-500 to-emerald-500',
      href: 'https://wa.me/218928666458',
      type: 'whatsapp',
    },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      message: '',
    })
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleContactClick = (href: string, type: string) => {
    window.open(
      href,
      type === 'whatsapp' || type === 'location' ? '_blank' : '_self'
    )
  }

  const faqs = t('contactPage.faq.questions')

  return (
    <div className='relative'>
      <ShaderBackground>
        <div className='relative z-10'>
          <Navigation />

          {/* Hero Section */}
          <section className='pt-32 pb-20 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight'>
                {t('contactPage.title')}
              </h1>
              <p className='text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto'>
                {t('contactPage.subtitle')}
              </p>
            </div>
          </section>
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        {/* Contact Information */}
        <section className='py-20 px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-4 gap-8 mb-16'>
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card
                    key={index}
                    onClick={() => handleContactClick(info.href, info.type)}
                    className='bg-slate-800/50 border-slate-700 p-8 text-center hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer transform hover:scale-105'
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className='w-8 h-8 text-white' />
                    </div>

                    <h3 className='text-xl font-bold text-white mb-3'>
                      {info.title}
                    </h3>
                    <p
                      className='text-slate-300 text-lg group-hover:text-blue-400 transition-colors'
                      dir='ltr'
                    >
                      {info.value}
                    </p>
                  </Card>
                )
              })}
            </div>

            {/* Business Hours */}
            <Card className='bg-slate-800/50 border-slate-700 p-8 mb-16'>
              <div className='flex items-center mb-6'>
                <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center me-6'>
                  <Clock className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {t('contactPage.businessHours.title')}
                  </h3>
                  <p className='text-slate-300'>
                    {t('contactPage.businessHours.subtitle')}
                  </p>
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='text-white font-semibold mb-2'>
                    {t('contactPage.businessHours.weekdays')}
                  </h4>
                  <p className='text-slate-300'>
                    {t('contactPage.businessHours.weekdaysTime')}
                  </p>
                </div>
                <div>
                  <h4 className='text-white font-semibold mb-2'>
                    {t('contactPage.businessHours.weekend')}
                  </h4>
                  <p className='text-slate-300'>
                    {t('contactPage.businessHours.weekendTime')}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Location Section */}
        <section className='py-20 px-4 bg-slate-900/50'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                {t('contactPage.locationSection.title')}
              </h2>
              <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
                {t('contactPage.locationSection.subtitle')}
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <Card className='bg-slate-800/50 border-slate-700 p-8'>
                  <h3 className='text-2xl font-bold text-white mb-6'>
                    {t('contactPage.locationSection.officeTitle')}
                  </h3>
                  <div className='space-y-4'>
                    <a
                      href='https://www.google.com/maps/search/?api=1&query=Tripoli,Libya'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-start hover:bg-slate-700/50 p-3 rounded-lg transition-colors'
                    >
                      <MapPin className='w-6 h-6 text-blue-400 me-3 mt-1 flex-shrink-0' />
                      <div>
                        <p className='text-white font-semibold'>
                          {t('contactPage.locationSection.address')}
                        </p>
                        <p className='text-slate-300 hover:text-blue-400 transition-colors'>
                          Tripoli, Libya
                        </p>
                      </div>
                    </a>
                    <a
                      href='tel:+218928666458'
                      className='flex items-start hover:bg-slate-700/50 p-3 rounded-lg transition-colors'
                    >
                      <Phone className='w-6 h-6 text-green-400 me-3 mt-1 flex-shrink-0' />
                      <div>
                        <p className='text-white font-semibold'>
                          {t('contactPage.phone')}
                        </p>
                        <p
                          className='text-slate-300 hover:text-green-400 transition-colors'
                          dir='ltr'
                        >
                          +218 92 8666 458
                        </p>
                      </div>
                    </a>
                    <a
                      href='mailto:contact@ebtkar.tech'
                      className='flex items-start hover:bg-slate-700/50 p-3 rounded-lg transition-colors'
                    >
                      <Mail className='w-6 h-6 text-purple-400 me-3 mt-1 flex-shrink-0' />
                      <div>
                        <p className='text-white font-semibold'>
                          {t('contactPage.email')}
                        </p>
                        <p className='text-slate-300 hover:text-purple-400 transition-colors'>
                          contact@ebtkar.tech
                        </p>
                      </div>
                    </a>
                  </div>
                </Card>
              </div>

              <div
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/search/?api=1&query=Tripoli,Libya',
                    '_blank'
                  )
                }
                className='aspect-video bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors group'
              >
                <div className='text-center'>
                  <MapPin className='w-16 h-16 text-slate-400 mx-auto mb-4 group-hover:text-blue-400 transition-colors' />
                  <p className='text-slate-400 group-hover:text-blue-400 transition-colors'>
                    {t('contactPage.locationSection.mapPlaceholder')}
                  </p>
                  <p className='text-slate-500 text-sm'>
                    {t('contactPage.locationSection.mapSubtext')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-20 px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6'>
                <HelpCircle className='w-8 h-8 text-white' />
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                {t('contactPage.faq.title')}
              </h2>
              <p className='text-xl text-slate-300 leading-relaxed'>
                {t('contactPage.faq.subtitle')}
              </p>
            </div>

            <Accordion type='single' collapsible className='space-y-4'>
              {faqs.map((faq: any, index: number) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className='bg-slate-800/50 border-slate-700 rounded-lg px-6'
                >
                  <AccordionTrigger className='text-white hover:text-blue-400 text-left'>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-slate-300 leading-relaxed'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className='text-center mt-12'>
              <Card className='bg-slate-800/50 border-slate-700 p-8'>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {t('contactPage.faq.cta.title')}
                </h3>
                <p className='text-slate-300 mb-6'>
                  {t('contactPage.faq.cta.subtitle')}
                </p>

                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                  <Button
                    asChild
                    className='bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 flex items-center justify-center'
                  >
                    <a
                      href='https://wa.me/218928666458'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center'
                    >
                      <FaWhatsapp className='w-5 h-5 me-2' />
                      {t('contactPage.faq.cta.whatsappButton')}
                    </a>
                  </Button>

                  <Button
                    asChild
                    className='bg-slate-800 hover:bg-slate-700 border text-white text-lg px-8 py-6 flex items-center justify-center'
                  >
                    <a
                      href='mailto:contact@ebtkar.tech'
                      className='flex items-center'
                    >
                      <Mail className='w-5 h-5 me-2' />
                      {t('contactPage.faq.cta.emailButton')}
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className='py-20 px-4 bg-slate-900/50'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                {t('contactPage.form.title')}
              </h2>
              <p className='text-xl text-slate-300 leading-relaxed'>
                {t('contactPage.form.subtitle')}
              </p>
            </div>

            <Card className='bg-slate-800/50 border-slate-700 p-8'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-white font-semibold mb-2'>
                      {t('contactPage.form.name')}{' '}
                      {t('contactPage.form.required')}
                    </label>
                    <Input
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='bg-slate-700 border-slate-600 text-white'
                      placeholder={t('contactPage.form.name')}
                    />
                  </div>
                  <div>
                    <label className='block text-white font-semibold mb-2'>
                      {t('contactPage.form.email')}{' '}
                      {t('contactPage.form.required')}
                    </label>
                    <Input
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='bg-slate-700 border-slate-600 text-white'
                      placeholder='your@email.com'
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-white font-semibold mb-2'>
                      {t('contactPage.form.phone')}
                    </label>
                    <Input
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='bg-slate-700 border-slate-600 text-white'
                      placeholder='+218 92 123 4567'
                    />
                  </div>
                  <div>
                    <label className='block text-white font-semibold mb-2'>
                      {t('contactPage.form.company')}
                    </label>
                    <Input
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                      className='bg-slate-700 border-slate-600 text-white'
                      placeholder={t('contactPage.form.company')}
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-white font-semibold mb-2'>
                      {t('contactPage.form.projectType')}
                    </label>
                    <select
                      name='projectType'
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className='w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-md'
                    >
                      <option value=''>
                        {t('contactPage.form.projectTypeOptions.placeholder')}
                      </option>
                      <option value='web'>
                        {t('contactPage.form.projectTypeOptions.web')}
                      </option>
                      <option value='mobile'>
                        {t('contactPage.form.projectTypeOptions.mobile')}
                      </option>
                      <option value='ai'>
                        {t('contactPage.form.projectTypeOptions.ai')}
                      </option>
                      <option value='design'>
                        {t('contactPage.form.projectTypeOptions.design')}
                      </option>
                      <option value='other'>
                        {t('contactPage.form.projectTypeOptions.other')}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className='block text-white font-semibold mb-2'>
                    {t('contactPage.form.message')}{' '}
                    {t('contactPage.form.required')}
                  </label>
                  <Textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='bg-slate-700 border-slate-600 text-white'
                    placeholder={t('contactPage.form.messagePlaceholder')}
                  />
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg group'
                >
                  {isSubmitting ? (
                    t('contactPage.form.sending')
                  ) : (
                    <>
                      {t('contactPage.form.submit')}
                      <ArrowRight className='w-5 h-5 ms-2 group-hover:translate-x-1 transition-transform' />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
