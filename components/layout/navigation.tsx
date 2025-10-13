'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import LanguageSwitcher from './components/language-switcher'

interface NavigationProps {
  dictionary?: Dictionary['nav']
}

export default function Navigation({ dictionary }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { locale } = useParams() as { locale: string }

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  // Build nav items dynamically from dictionary
  const navItems = [
    { key: 'home', href: '/' },
    { key: 'services', href: '/services' },
    { key: 'about', href: '/who-we-are' },
    { key: 'contact', href: '/contact' },
    { key: 'join', href: '/join-our-team' },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === `/${locale}` : pathname === `/${locale}${href}`

  return (
    <header className='relative z-50 flex items-center justify-between p-6'>
      {/* Logo */}
      <Link href={`/${locale}`}>
        <Image
          src='/styleraLOGO.webp'
          alt='StyleraTech Logo'
          width={200}
          height={50}
          priority
          className='w-40 lg:w-48 xl:w-52 h-auto'
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className='hidden lg:flex items-center space-x-2'>
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={`/${locale}${item.href === '/' ? '' : item.href}`}
            className={`text-sm font-light px-4 py-2 rounded-full transition-all duration-200 ${
              isActive(item.href)
                ? 'text-white bg-white/10'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {dictionary?.[item.key as keyof typeof dictionary] ?? item.key}
          </Link>
        ))}
      </nav>

      {/* Desktop Extras */}
      <div className='hidden lg:flex items-center gap-4'>
        <LanguageSwitcher />
        <Link
          href={`/${locale}/contact`}
          className='px-6 hidden xl:block py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:bg-primary/90'
        >
          {locale === 'ar' ? 'ابدأ الآن' : 'Get Started'}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='lg:hidden text-white p-2 z-[60]'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label='Toggle menu'
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
            className='fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col justify-center items-center space-y-6 lg:hidden'
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href === '/' ? '' : item.href}`}
                className={`text-xl font-light transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {dictionary?.[item.key as keyof typeof dictionary] ?? item.key}
              </Link>
            ))}

            {/* Language Switcher + CTA */}
            <div className='flex flex-col items-center gap-4 mt-10'>
              <LanguageSwitcher />
              <Link
                href={`/${locale}/contact`}
                className='px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-base hover:bg-primary/90 transition-all'
                onClick={() => setIsMenuOpen(false)}
              >
                {locale === 'ar' ? 'ابدأ الآن' : 'Get Started'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
