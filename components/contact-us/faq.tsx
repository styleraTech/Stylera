'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'
import Link from 'next/link'

interface FaqSectionProps {
  dictionary: Dictionary['contactUs']
}

export default function FaqSection({ dictionary }: FaqSectionProps) {
  if (!dictionary?.faq) return null

  const faq = dictionary.faq
  const faqs = faq.questions || []

  return (
    <InViewSection className='py-20 px-4' variants={defaultContainerVariants}>
      <Div className='max-w-4xl mx-auto' variants={defaultContainerVariants}>
        {/* Header */}
        <Div className='text-center mb-16' variants={itemVariants}>
          <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6'>
            <HelpCircle className='w-8 h-8 text-white' />
          </div>
          <H2
            className='text-4xl md:text-5xl font-bold text-accent mb-6'
            variants={textVariants}
          >
            {faq.title}
          </H2>
          <P
            className='text-xl text-slate-300 leading-relaxed'
            variants={textVariants}
          >
            {faq.subtitle}
          </P>
        </Div>

        {/* FAQ Items */}
        <Accordion type='single' collapsible className='space-y-4'>
          {faqs.map((q, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='bg-slate-800/50 border-slate-700 rounded-lg px-6'
            >
              <AccordionTrigger className='text-white hover:text-blue-400 text-left'>
                {q.question}
              </AccordionTrigger>
              <AccordionContent className='text-slate-300 leading-relaxed'>
                {q.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <Div className='text-center mt-12' variants={itemVariants}>
          <Card className='bg-slate-800/50 border-slate-700 p-8'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              {faq.cta.title}
            </h3>
            <p className='text-slate-300 mb-6'>{faq.cta.subtitle}</p>

            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button
                asChild
                className='bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 flex items-center justify-center'
              >
                <Link
                  className='text-sm md:text-base flex items-center'
                  href='https://wa.me/218928666458'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaWhatsapp className='w-5 h-5 me-2' />
                  {faq.cta.whatsappButton}
                </Link>
              </Button>

              <Button
                asChild
                className='bg-slate-800 hover:bg-slate-700 border text-white text-lg px-8 py-6 flex items-center justify-center'
              >
                <Link
                  href='mailto:contact@ebtkar.tech'
                  className='text-sm md:text-base flex items-center'
                >
                  <Mail className='w-5 h-5 me-2' />
                  {faq.cta.emailButton}
                </Link>
              </Button>
            </div>
          </Card>
        </Div>
      </Div>
    </InViewSection>
  )
}
