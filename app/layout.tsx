import type React from 'react'
import type { Metadata } from 'next'
import { Figtree, Cairo } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { LanguageProvider } from '@/contexts/language-context'
import FontDirectionWrapper from '@/contexts/FontWrapper'
import './globals.css'

// English font
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-english',
  display: 'swap',
})

// Arabic font
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StyleraTech | Software Solutions',
  description:
    'StyleraTech is a software development company specializing in modern web technologies and advanced IT solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${figtree.variable} ${cairo.variable} ${GeistMono.variable}`}
      >
        <LanguageProvider>
          <FontDirectionWrapper>{children}</FontDirectionWrapper>
        </LanguageProvider>
      </body>
    </html>
  )
}
