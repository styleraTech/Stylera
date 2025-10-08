'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/in-view-section'
import { toast } from 'sonner' // ✅ Make sure you have installed sonner (`npm i sonner`)

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Mock API delay
    await new Promise((r) => setTimeout(r, 1500))

    console.log('✅ Form submitted:', formData)

    // ✅ Show success toast
    toast.success(
      t('contactPage.form.successMessage') || 'Message sent successfully!'
    )

    // Reset form
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      message: '',
    })
  }

  return (
    <InViewSection
      className='py-20 px-4 bg-slate-900/50'
      variants={defaultContainerVariants}
    >
      <Div className='max-w-4xl mx-auto' variants={itemVariants}>
        <Div className='text-center mb-16' variants={textVariants}>
          <H2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            {t('contactPage.form.title')}
          </H2>
          <P className='text-xl text-slate-300 leading-relaxed'>
            {t('contactPage.form.subtitle')}
          </P>
        </Div>

        <Card className='bg-slate-800/50 border-slate-700 p-8'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              {/* Name */}
              <div>
                <label className='block text-white font-semibold mb-2'>
                  {t('contactPage.form.name')} {t('contactPage.form.required')}
                </label>
                <Input
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={
                    t('contactPage.form.placeholders.name') || 'John Doe'
                  }
                  className='bg-slate-700 border-slate-600 text-white'
                />
              </div>

              {/* Email */}
              <div>
                <label className='block text-white font-semibold mb-2'>
                  {t('contactPage.form.email')} {t('contactPage.form.required')}
                </label>
                <Input
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={
                    t('contactPage.form.placeholders.email') ||
                    'john@example.com'
                  }
                  className='bg-slate-700 border-slate-600 text-white'
                />
              </div>
            </div>

            {/* Phone / Company */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-white font-semibold mb-2'>
                  {t('contactPage.form.phone')}
                </label>
                <Input
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={
                    t('contactPage.form.placeholders.phone') ||
                    '+218 92 123 4567'
                  }
                  className='bg-slate-700 border-slate-600 text-white'
                />
              </div>

              <div>
                <label className='block text-white font-semibold mb-2'>
                  {t('contactPage.form.company')}
                </label>
                <Input
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('contactPage.form.placeholders.company')}
                  className='bg-slate-700 border-slate-600 text-white'
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className='block text-white font-semibold mb-2'>
                {t('contactPage.form.projectType')}
              </label>
              <select
                name='projectType'
                value={formData.projectType}
                onChange={handleChange}
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

            {/* Message */}
            <div>
              <label className='block text-white font-semibold mb-2'>
                {t('contactPage.form.message')} {t('contactPage.form.required')}
              </label>
              <Textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder={
                  t('contactPage.form.placeholders.message') ||
                  'Tell us more about your project goals...'
                }
                className='bg-slate-700 border-slate-600 text-white'
              />
            </div>

            {/* Submit */}
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
      </Div>
    </InViewSection>
  )
}
