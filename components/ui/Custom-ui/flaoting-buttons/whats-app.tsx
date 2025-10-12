'use client'

import { Phone } from 'lucide-react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <Link
      href='https://wa.me/218928666458'
      target='_blank'
      rel='noopener noreferrer'
      className='bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center'
      aria-label='Chat on WhatsApp'
    >
      <FaWhatsapp size={22} />
    </Link>
  )
}
