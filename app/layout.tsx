import localFont from 'next/font/local'
import type React from 'react'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { LanguageProvider } from '@/contexts/language-context'
import FontDirectionWrapper from '@/contexts/FontWrapper'
import './globals.css'

// English font — Nasalization
const nasalization = localFont({
  src: './../public/fonts/FontsFree-Net-nasalization-rg.ttf',
  variable: '--font-english',
  display: 'swap',
})

// Arabic font — GE Dinar One
const geDinar = localFont({
  src: './../public/fonts/GE-Dinar-One-Medium.otf',
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
        className={`${nasalization.variable} ${geDinar.variable} ${GeistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <FontDirectionWrapper>{children}</FontDirectionWrapper>
        </LanguageProvider>
      </body>
    </html>
  )
}
