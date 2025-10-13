'use client'

import { Card } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import {
  Div,
  defaultContainerVariants,
  itemVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/framer-motion/in-view-section'

interface ContactInfoProps {
  dictionary: Dictionary['contactUs']
}

export default function ContactInfo({ dictionary }: ContactInfoProps) {
  if (!dictionary) return null

  const contactInfo = [
    {
      icon: Phone,
      title: dictionary.phone,
      value: '+218 92 8666 458',
      gradient: 'from-blue-500 to-cyan-500',
      href: 'tel:+218928666458',
      type: 'phone',
    },
    {
      icon: Mail,
      title: dictionary.email,
      value: 'contact@ebtkar.tech',
      gradient: 'from-purple-500 to-pink-500',
      href: 'mailto:contact@ebtkar.tech',
      type: 'email',
    },
    {
      icon: MapPin,
      title: dictionary.location,
      value: 'Tripoli, Libya',
      gradient: 'from-green-500 to-emerald-500',
      href: 'https://www.google.com/maps/search/?api=1&query=Tripoli,Libya',
      type: 'location',
    },
    {
      icon: FaWhatsapp,
      title: dictionary.whatsapp,
      value: '+218 92 8666 458',
      gradient: 'from-green-500 to-emerald-500',
      href: 'https://wa.me/218928666458',
      type: 'whatsapp',
    },
  ]

  const handleContactClick = (href: string, type: string) => {
    window.open(
      href,
      type === 'whatsapp' || type === 'location' ? '_blank' : '_self'
    )
  }

  return (
    <InViewSection className='py-20 px-4' variants={defaultContainerVariants}>
      <Div
        className='max-w-6xl mx-auto grid md:grid-cols-4 gap-8'
        variants={defaultContainerVariants}
      >
        {contactInfo.map((info, i) => {
          const Icon = info.icon
          return (
            <Div key={i} variants={itemVariants}>
              <Card
                onClick={() => handleContactClick(info.href, info.type)}
                className='h-full flex flex-col justify-between bg-slate-800/50 border-slate-700 p-8 text-center hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer transform hover:scale-105'
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
            </Div>
          )
        })}
      </Div>
    </InViewSection>
  )
}
