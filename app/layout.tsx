import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cireon.dev'),
  title: {
    default: 'Cireon — Digital studio: Web, AI, Motion',
    template: '%s — Cireon',
  },
  description: 'Cireon builds modern web and mobile products with rich motion and AI.',
  alternates: { canonical: '/' },
  keywords: [
    'Cireon', 'digital studio', 'web development', 'AI integrations', 'motion design', 'Next.js', 'TypeScript', 'Tailwind CSS',
  ],
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Cireon',
    title: 'Cireon — Digital studio: Web, AI, Motion',
    description: 'Cireon builds modern web and mobile products with rich motion and AI.',
    images: [{ url: '/cireon-studio.png', width: 1200, height: 630, alt: 'Cireon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cireon — Digital studio',
    description: 'Web, Mobile, Motion & AI',
    images: ['/cireon-studio.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
