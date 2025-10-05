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
  MessageCircle,
  ArrowRight,
  HelpCircle,
} from 'lucide-react'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+218 92 8666 458',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@ebtkar.tech',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Tripoli, Libya',
    gradient: 'from-green-500 to-emerald-500',
  },
]

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer comprehensive technology solutions including web development, mobile applications, AI solutions, and UI/UX design. Our team specializes in modern technologies and can handle projects of any scale.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes, we offer comprehensive support and maintenance packages to ensure your application continues to perform optimally. This includes updates, security patches, and technical support.',
  },
  {
    question: 'What is your development process?',
    answer:
      'We follow an agile development methodology with regular client communication, iterative development, and thorough testing. Our process includes discovery, design, development, testing, and deployment phases.',
  },
  {
    question: 'Can you work with existing systems?',
    answer:
      'We have extensive experience integrating with existing systems and can help modernize legacy applications or build new features that work seamlessly with your current infrastructure.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We specialize in modern web technologies including React, Next.js, Node.js, Python, mobile development with React Native and Flutter, and AI/ML technologies including TensorFlow and various cloud platforms.',
  },
]

export default function ContactPage() {
  const { t, isRTL } = useLanguage()
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log('Form submitted:', formData)
    setIsSubmitting(false)

    // Reset form
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

  return (
    <div className='relative'>
      <ShaderBackground>
        <div className='relative z-10'>
          <Navigation />

          {/* Hero Section */}
          <section className='pt-32 pb-20 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight'>
                Contact Us
              </h1>
              <p className='text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto'>
                We are here to help you transform your ideas into digital
                reality. Contact us today and get a free consultation
              </p>
            </div>
          </section>
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        {/* Contact Information */}
        <section className='py-20 px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              {contactInfo.map((info, index) => {
                const Icon = info.icon

                return (
                  <Card
                    key={index}
                    className='bg-slate-800/50 border-slate-700 p-8 text-center hover:bg-slate-700/50 transition-all duration-300 group'
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className='w-8 h-8 text-white' />
                    </div>

                    <h3 className='text-xl font-bold text-white mb-3'>
                      {info.title}
                    </h3>
                    <p className='text-slate-300 text-lg'>{info.value}</p>
                  </Card>
                )
              })}
            </div>

            {/* Business Hours */}
            <Card className='bg-slate-800/50 border-slate-700 p-8 mb-16'>
              <div className='flex items-center mb-6'>
                <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-6'>
                  <Clock className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    Business Hours
                  </h3>
                  <p className='text-slate-300'>
                    We're available during these hours
                  </p>
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='text-white font-semibold mb-2'>Weekdays</h4>
                  <p className='text-slate-300'>
                    Sunday - Thursday: 9:00 AM - 6:00 PM
                  </p>
                </div>
                <div>
                  <h4 className='text-white font-semibold mb-2'>Weekend</h4>
                  <p className='text-slate-300'>Friday - Saturday: Closed</p>
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
                Our Location
              </h2>
              <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
                Visit us at our office in the heart of Libya
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <Card className='bg-slate-800/50 border-slate-700 p-8'>
                  <h3 className='text-2xl font-bold text-white mb-6'>
                    StyleraTech Office
                  </h3>
                  <div className='space-y-4'>
                    <div className='flex items-start'>
                      <MapPin className='w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0' />
                      <div>
                        <p className='text-white font-semibold'>Address</p>
                        <p className='text-slate-300'>Tripoli, Libya</p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <Phone className='w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0' />
                      <div>
                        <p className='text-white font-semibold'>Phone</p>
                        <p className='text-slate-300'>+218 92 8666 458</p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <Mail className='w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0' />
                      <div>
                        <p className='text-white font-semibold'>Email</p>
                        <p className='text-slate-300'>contact@ebtkar.tech</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className='aspect-video bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center'>
                <div className='text-center'>
                  <MapPin className='w-16 h-16 text-slate-400 mx-auto mb-4' />
                  <p className='text-slate-400'>Interactive Map</p>
                  <p className='text-slate-500 text-sm'>
                    Map will be available soon
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
                Frequently Asked Questions
              </h2>
              <p className='text-xl text-slate-300 leading-relaxed'>
                Find answers to common questions about our services and process
              </p>
            </div>

            <Accordion type='single' collapsible className='space-y-4'>
              {faqs.map((faq, index) => (
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
                  Didn't find an answer to your question?
                </h3>
                <p className='text-slate-300 mb-6'>
                  Contact us directly and we will answer all your inquiries
                </p>

                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                  {/* WhatsApp Button */}
                  <Button
                    asChild
                    className='bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-5 flex items-center justify-center'
                  >
                    <a
                      href='https://wa.me/218928666458'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Message us on WhatsApp
                      <FaWhatsapp className='w-5 h-5 mr-2' />
                    </a>
                  </Button>

                  {/* Email Button */}
                  <Button
                    asChild
                    className='bg-slate-800 hover:bg-slate-700 border text-white text-lg px-8 py-5 flex items-center justify-center'
                  >
                    <a href='mailto:contact@ebtkar.tech'>
                      Send an Email
                      <Mail className='w-5 h-5 mr-2' />
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
                Start Your Project With Us
              </h2>
              <p className='text-xl text-slate-300 leading-relaxed'>
                Fill out the form below and we will contact you within 24 hours
              </p>
            </div>

            <Card className='bg-slate-800/50 border-slate-700 p-8'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-white font-semibold mb-2'>
                      Name *
                    </label>
                    <Input
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='bg-slate-700 border-slate-600 text-white'
                      placeholder='Your full name'
                    />
                  </div>
                  <div>
                    <label className='block text-white font-semibold mb-2'>
                      Email *
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
                      Phone
                    </label>
                    <Input
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='bg-slate-700 border-slate-600 text-white'
                      placeholder='+966 50 123 4567'
                    />
                  </div>
                  <div>
                    <label className='block text-white font-semibold mb-2'>
                      Company
                    </label>
                    <Input
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                      className='bg-slate-700 border-slate-600 text-white'
                      placeholder='Your company name'
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-white font-semibold mb-2'>
                      Project Type
                    </label>
                    <select
                      name='projectType'
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className='w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-md'
                    >
                      <option value=''>Select project type</option>
                      <option value='web'>Web Development</option>
                      <option value='mobile'>Mobile App</option>
                      <option value='ai'>AI Solution</option>
                      <option value='design'>UI/UX Design</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className='block text-white font-semibold mb-2'>
                    Project Description *
                  </label>
                  <Textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='bg-slate-700 border-slate-600 text-white'
                    placeholder='Tell us about your project, goals, and any specific requirements...'
                  />
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg group'
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <ArrowRight
                        className={`w-5 h-5 ${
                          isRTL ? 'mr-2 rotate-180' : 'ml-2'
                        } group-hover:translate-x-1 transition-transform`}
                      />
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
