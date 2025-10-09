import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import SiteHeader from '@/components/site-header'
import PageTransition from '@/components/page-transition'
import SiteFooter from '@/components/site-footer'
import Chatbot from '@/components/chatbot'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cireon.dev'),
  title: {
    default: 'Cireon — Digital Studio: Web Development, AI & Motion Design',
    template: '%s — Cireon',
  },
  description: 'Cireon — Modern digital studio. Web applications, mobile apps, AI integrations, 3D/AR projects. Next.js, React, TypeScript, Three.js. High quality and performance.',
  alternates: { 
    canonical: '/',
    languages: {
      'ru': '/ru',
      'en': '/en',
    }
  },
  keywords: [
    'Cireon', 'digital studio', 'web development', 'mobile development', 'AI integrations', 'artificial intelligence',
    'motion design', 'animations', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js', '3D development',
    'mobile apps', 'cross-platform', 'AR VR', 'web design', 'UI UX', 'frontend', 'backend',
    'fullstack', 'Vienna', 'Austria', 'Europe', 'startup', 'tech company', 'software development'
  ],
  authors: [{ name: 'Cireon Team' }],
  creator: 'Cireon',
  publisher: 'Cireon',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Cireon',
    title: 'Cireon — Digital Studio: Web Development, AI & Motion Design',
    description: 'Cireon — Modern digital studio. Web applications, mobile apps, AI integrations, 3D/AR projects. Next.js, React, TypeScript, Three.js.',
    images: [
      { 
        url: '/cireon-studio.png', 
        width: 1200, 
        height: 630, 
        alt: 'Cireon Digital Studio - Web Development, AI & Motion Design',
        type: 'image/png'
      }
    ],
    locale: 'en_US',
    alternateLocale: ['ru_RU'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cireon_dev',
    creator: '@cireon_dev',
    title: 'Cireon — Digital Studio: Web, AI & Motion',
    description: 'Modern digital studio. Web development, AI integrations, 3D/AR projects. Next.js, React, TypeScript.',
    images: ['/cireon-studio.png'],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cireon",
              "description": "Modern digital studio. Web applications, mobile apps, AI integrations, 3D/AR projects.",
              "url": "https://cireon.dev",
              "logo": "https://cireon.dev/logo_white.png",
              "image": "https://cireon.dev/cireon-studio.png",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vienna",
                "addressCountry": "AT"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@cireon.dev"
              },
              "sameAs": [
                "https://twitter.com/cireon_dev",
                "https://github.com/cireon",
                "https://linkedin.com/company/cireon"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Modern web application development with Next.js, React, TypeScript"
                },
                {
                  "@type": "Service", 
                  "name": "AI Integration",
                  "description": "Artificial intelligence integration into web and mobile applications"
                },
                {
                  "@type": "Service",
                  "name": "Motion Design",
                  "description": "Creating animations and interactive 3D/AR projects"
                },
                {
                  "@type": "Service",
                  "name": "Mobile Development", 
                  "description": "Mobile application development for iOS and Android"
                }
              ],
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js", 
                "TypeScript",
                "Three.js",
                "AI Integration",
                "Motion Design",
                "Mobile Development",
                "UI/UX Design"
              ]
            })
          }}
        />
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
          <PageTransition>
            <SiteHeader />
            <Chatbot />
            {children}
            <SiteFooter />
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
