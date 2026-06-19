import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aexvora.com'),
  title: {
    default: 'Aexvora | Digital Marketing & Website Development',
    template: '%s | Aexvora',
  },
  description:
    'Grow your business with Aexvora digital marketing, SEO, GEO, AEO, website design, website development and paid advertising services.',
  keywords: [
    'digital marketing services',
    'website development services',
    'website design services',
    'SEO services',
    'GEO services',
    'AEO services',
  ],
  applicationName: 'Aexvora',
  category: 'Digital Marketing',
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: 'Aexvora | Digital Marketing & Website Development',
    description: 'Digital marketing, SEO, GEO, AEO, website design and development services built to grow your business.',
    url: '/',
    siteName: 'Aexvora',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Aexvora | Digital Marketing & Website Development',
    description: 'Digital marketing, SEO, GEO, AEO, website design and development services built to grow your business.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <body
        className={`${geistMono.variable} ${cormorant.variable} font-serif antialiased bg-black text-white`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
