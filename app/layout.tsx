import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Session } from '@/components/Session'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohole Chat',
  description: 'Chat with your dev team!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <Session />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
