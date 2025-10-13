'use client'

import type React from 'react'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'

interface ContactSectionProps {
  dictionary?: Dictionary['contactUs']
  isRTL?: boolean
}

export default function ContactSection({
  dictionary,
  isRTL,
}: ContactSectionProps) {
  if (!dictionary) return null

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)

    toast.success(dictionary.form.successMessage)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: dictionary.phone,
      value: '+218 92 8666 458',
      href: 'tel:+218928666458',
    },
    {
      icon: Mail,
      label: dictionary.email,
      value: 'contact@styleratech.com',
      href: 'mailto:contact@styleratech.com',
    },
    {
      icon: MapPin,
      label: dictionary.location,
      value: 'Tripoli, Libya',
      href: '#',
    },
  ]

  return (
    <section
      id='contact'
      className='py-24 relative bg-gradient-to-br from-background to-card/20'
    >
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='max-w-3xl mx-auto mb-20 text-center'>
          <h2 className='text-4xl md:text-5xl font-light text-white mb-6'>
            <span className='font-medium text-accent'>{dictionary.title}</span>
          </h2>
          <p className='text-lg text-white/70 font-light leading-relaxed'>
            {dictionary.subtitle}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Info */}
          <div>
            <h3 className='text-2xl font-semibold text-white mb-8'>
              {dictionary.locationSection.title}
            </h3>

            <div className='space-y-6 mb-12'>
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Link
                    key={index}
                    href={info.href}
                    className='flex items-center gap-4 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 transition-all duration-300 group'
                  >
                    <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-3 group-hover:scale-110 transition-transform duration-300'>
                      <Icon className='w-full h-full text-white' />
                    </div>
                    <div>
                      <div className='text-white/60 text-sm font-light'>
                        {info.label}
                      </div>
                      <div className='text-white font-medium' dir='ltr'>
                        {info.value}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Business Hours */}
            <div className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-border rounded-2xl p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <Clock className='w-5 h-5 text-accent' />
                <h4 className='text-white font-semibold'>
                  {dictionary.businessHours.title}
                </h4>
              </div>
              <p className='text-white/80 font-light mb-2'>
                {dictionary.businessHours.weekdaysTime}
              </p>
              <p className='text-white/80 font-light'>
                {dictionary.businessHours.weekendTime}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8'>
            <h3 className='text-2xl font-semibold text-white mb-8'>
              {dictionary.form.title}
            </h3>
            <p className='text-white/70 mb-6'>{dictionary.form.subtitle}</p>

            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-white/80 text-sm font-medium mb-2'
                >
                  {dictionary.form.name}
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={dictionary.form.placeholders.name}
                  className='w-full px-4 py-3 bg-input border border-border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-white/80 text-sm font-medium mb-2'
                >
                  {dictionary.form.email}
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={dictionary.form.placeholders.email}
                  className='w-full px-4 py-3 bg-input border border-border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-white/80 text-sm font-medium mb-2'
                >
                  {dictionary.form.message}
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder={dictionary.form.messagePlaceholder}
                  className='w-full px-4 py-3 bg-input border border-border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-base transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3'
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                    {dictionary.form.sending}
                  </>
                ) : (
                  <>
                    {dictionary.form.submit}
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
