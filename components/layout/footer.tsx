'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
  dictionary?: Dictionary['footer']
}

export default function Footer({ dictionary }: FooterProps) {
  if (!dictionary) return null

  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-card/20 border-t border-border'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='md:col-span-2'>
            <div className='text-white font-semibold text-2xl tracking-tight mb-4'>
              <Image
                src='/styleraLOGO.webp'
                alt='StyleraTech'
                width={200}
                height={200}
                priority
              />
            </div>

            <p className='text-white/70 font-light leading-relaxed mb-6 max-w-md'>
              {dictionary.description}
            </p>

            <div className='flex gap-4'>
              <Link
                href='https://linkedin.com/company/styleratech'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href='https://github.com/styleratech'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
              >
                <Github size={20} />
              </Link>
              <Link
                href='https://twitter.com/styleratech'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-white font-semibold mb-4'>
              {dictionary.quickLinks}
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#home'
                  className='text-white/70 hover:text-white transition-colors duration-300'
                >
                  {dictionary.links.home}
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='text-white/70 hover:text-white transition-colors duration-300'
                >
                  {dictionary.links.services}
                </Link>
              </li>
              <li>
                <Link
                  href='#about'
                  className='text-white/70 hover:text-white transition-colors duration-300'
                >
                  {dictionary.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href='#contact'
                  className='text-white/70 hover:text-white transition-colors duration-300'
                >
                  {dictionary.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-white font-semibold mb-4'>
              {dictionary.contactInfo}
            </h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3 text-white/70'>
                <Link
                  href='https://wa.me/218928666458'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 hover:text-green-400 transition-colors duration-300'
                >
                  <Phone size={16} />
                  <span dir='ltr'>+218 92 8666 458</span>
                </Link>
              </li>

              <li className='flex items-center gap-3 text-white/70'>
                <Link
                  href='mailto:contact@styleratech.com'
                  className='flex items-center gap-3 hover:text-blue-400 transition-colors duration-300'
                >
                  <Mail size={16} />
                  <span>contact@styleratech.com</span>
                </Link>
              </li>

              <li className='flex items-center gap-3 text-white/70'>
                <MapPin size={16} />
                <span>{dictionary.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4'>
          <p
            className='text-white/60 text-xs font-semibold sm:text-sm'
            dir='ltr'
          >
            © {currentYear} StyleraTech. {dictionary.rights}
          </p>

          <div className='flex gap-6'>
            <Link
              href='#'
              className='text-white/60 hover:text-white text-sm transition-colors duration-300'
            >
              {dictionary.privacy}
            </Link>
            <Link
              href='#'
              className='text-white/60 hover:text-white text-sm transition-colors duration-300'
            >
              {dictionary.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
