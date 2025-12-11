import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Namaste Rides - Local-First, Safe, and Scalable Ride Solutions',
  description: 'Local-first, safe, and scalable ride solutions — built for cities and enterprises. Making everyday travel simple, safe, and respectful.',
  keywords: ['ride sharing', 'transportation', 'corporate rides', 'safe travel', 'local drivers'],
  openGraph: {
    title: 'Namaste Rides - Our Story',
    description: 'Local-first, safe, and scalable ride solutions — built for cities and enterprises.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
