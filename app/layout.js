import { Header } from './components/Header'
import { Footer } from './components/footer'
import './globals.css'

export const metadata = {
  title: 'Moholemon | Catalogo',
  description: 'Una semplice app con React e Next.js',
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
