import type React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best Rust Clips - Los Mejores Momentos de Rust',
  description: 'Épicas raids, PvP intenso, momentos increíbles y fails divertidos. Todo el contenido de Rust que necesitas en un solo lugar.',
  generator: 'v0.app',
  keywords: ['Rust', 'gaming', 'clips', 'PvP', 'raids', 'gameplay', 'best moments'],
  authors: [{ name: 'Best Rust Clips' }],
  openGraph: {
    title: 'Best Rust Clips - Los Mejores Momentos de Rust',
    description: 'Épicas raids, PvP intenso y momentos increíbles de Rust',
    type: 'website'
  },
  icons: {
    icon: [
      {
        url: '/Rust2.jpg'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
