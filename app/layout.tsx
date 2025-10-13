import type React from 'react'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'StyleraTech | Software Solutions',
  description:
    'StyleraTech is a software development company specializing in modern web technologies and advanced IT solutions.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={'en'}>
      <body>
        <Toaster richColors />
        {children}
      </body>
    </html>
  )
}
