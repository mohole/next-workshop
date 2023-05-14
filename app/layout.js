import './globals.css'

import { Header } from './components/header'
import { Footer } from './components/footer'

export const metadata = {
  title: 'Moholemon | catalogo',
  description: 'Una semplice app per imparare React e Next.js.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="it" data-theme="light">
      <body className="bg-base-200">
        <Header />
        <main className="container mx-auto py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
