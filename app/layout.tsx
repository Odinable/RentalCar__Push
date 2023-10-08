import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rental Cars Toll',
  description: 'Browse the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='{relative}'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
