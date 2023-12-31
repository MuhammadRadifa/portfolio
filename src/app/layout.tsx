import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProviders from './provider/themeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Radifa - Portfolio',
  description: 'Radifa Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  )
}
