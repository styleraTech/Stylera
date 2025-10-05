'use client'

import { useLanguage } from '@/contexts/language-context'
import LanguageSwitcher from './language-switcher'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const { t, isRTL } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.services', href: '/services' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.contact', href: '/contact' },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className='relative z-50 flex items-center justify-between p-6'>
      {/* Logo */}
      <Link
        href='/'
        className='text-white font-semibold text-xl tracking-tight hover:opacity-80 transition-opacity'
      >
        <span className='font-light'>Stylera</span>
        <span className='text-accent'>Tech</span>
      </Link>

      {/* Desktop Nav */}
      <nav className='hidden md:flex items-center space-x-2'>
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`text-sm font-light px-4 py-2 rounded-full transition-all duration-200 ${
              isActive(item.href)
                ? 'text-white bg-white/10'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>

      {/* Desktop Extras */}
      <div className='hidden md:flex items-center gap-4'>
        <LanguageSwitcher />
        <Link
          href='/contact'
          className='px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:bg-primary/90'
        >
          {t('hero.cta.primary')}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-white p-2 z-[60]'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className='fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col justify-center items-center space-y-6 md:hidden'
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-xl font-light transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}

            {/* Lang + CTA column */}
            <div className='flex flex-col items-center gap-4 mt-10'>
              <LanguageSwitcher />
              <Link
                href='/contact'
                className='px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-base hover:bg-primary/90 transition-all'
                onClick={() => setIsMenuOpen(false)}
              >
                {t('hero.cta.primary')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
