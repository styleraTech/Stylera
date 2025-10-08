'use client'

import { useLanguage } from '@/contexts/language-context'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-card/20 border-t border-border'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div
            className={`md:col-span-2 ${
              language === 'ar' ? 'text-right' : 'text-left'
            }`}
          >
            <div className='text-white font-semibold text-2xl tracking-tight mb-4'>
              <Image
                src='/styleraLOGO.PNG'
                alt='StyleraTech'
                width={200}
                height={200}
              ></Image>
            </div>
            <p className='text-white/70 font-light leading-relaxed mb-6 max-w-md'>
              {language === 'ar'
                ? 'شركة متخصصة في تطوير البرمجيات والحلول التقنية المتقدمة. نساعد الشركات على تحقيق أهدافها الرقمية.'
                : 'StyleraTech is a software development company specializing in modern web technologies and advanced IT solutions. We help businesses achieve their digital goals.'}
            </p>
            <div
              className={`flex gap-4 ${
                language === 'ar' ? 'justify-end md:justify-start' : ''
              }`}
            >
              <a
                href='#'
                className='w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
              >
                <Linkedin size={20} />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
              >
                <Github size={20} />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h4 className='text-white font-semibold mb-4'>
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-white/70 hover:text-white transition-colors duration-300'
                >
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-white/70 hover:text-white transition-colors duration-300'
                >
                  {language === 'ar' ? 'الخدمات' : 'Services'}
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-white/70 hover:text-white transition-colors duration-300'
                >
                  {language === 'ar' ? 'من نحن' : 'About'}
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-white/70 hover:text-white transition-colors duration-300'
                >
                  {language === 'ar' ? 'اتصل بنا' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h4 className='text-white font-semibold mb-4'>
              {language === 'ar' ? 'تواصل معنا' : 'Contact Info'}
            </h4>
            <ul
              className={`space-y-3 flex flex-col justify-center items-start text-sm`}
            >
              {/*  WhatsApp Link */}
              <li
                className={`flex items-center gap-3 text-white/70 ${
                  language === 'ar' ? 'flex-row-reverse' : ''
                }`}
              >
                <a
                  href='https://wa.me/218928666458'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 hover:text-green-400 transition-colors duration-300'
                >
                  <Phone size={16} />
                  <span>+218 92 8666 458</span>
                </a>
              </li>

              {/*  Email Link */}
              <li
                className={`flex items-center gap-3 text-white/70 ${
                  language === 'ar' ? 'flex-row-reverse' : ''
                }`}
              >
                <a
                  href='mailto:contact@ebtkar.tech'
                  className='flex items-center gap-3 hover:text-blue-400 transition-colors duration-300'
                >
                  <Mail size={16} />
                  <span>contact@ebtkar.tech</span>
                </a>
              </li>

              {/* Location */}
              <li
                className={`flex items-center gap-3 text-white/70 ${
                  language === 'ar' ? 'flex-row-reverse' : ''
                }`}
              >
                <MapPin size={16} />
                <span>
                  {language === 'ar' ? 'ليبيا، طرابلس' : 'Tripoli, Libya'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 ${
            language === 'ar' ? 'md:flex-row-reverse' : ''
          }`}
        >
          <p className='text-white/60 text-xs font-semibold sm:text-sm'>
            {language === 'ar'
              ? `© ${currentYear} ستايليرا تك. جميع الحقوق محفوظة.`
              : `© ${currentYear} StyleraTech. All rights reserved.`}
          </p>
          <div
            className={`flex gap-6 ${
              language === 'ar' ? 'flex-row-reverse' : ''
            }`}
          >
            <a
              href='#'
              className='text-white/60 hover:text-white text-sm transition-colors duration-300'
            >
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
            <a
              href='#'
              className='text-white/60 hover:text-white text-sm transition-colors duration-300'
            >
              {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
