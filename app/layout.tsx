import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js ChatGPT client',
  description: 'chatta con il modello GPT-3 di OpenAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" data-theme="light" className="bg-slate-100">
      <body>{children}</body>
    </html>
  )
}
