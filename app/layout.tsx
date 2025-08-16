import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CookieConsent } from '@/components/cookie-consent';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Destinova AI Labs | AI Chatbots for eCommerce Product Recommendations',
  description: 'Boost eCommerce conversions with agentic AI chatbots that provide personalized product recommendations. Integrate with Shopify, WooCommerce, Magento & more.',
  keywords: ['AI chatbots', 'eCommerce', 'product recommendations', 'conversions', 'Shopify', 'WooCommerce'],
  authors: [{ name: 'Destinova AI Labs' }],
  creator: 'Destinova AI Labs',
  publisher: 'Destinova AI Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://destinova-ai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Destinova AI Labs | AI Chatbots for eCommerce Product Recommendations',
    description: 'Boost eCommerce conversions with agentic AI chatbots that provide personalized product recommendations.',
    url: 'https://destinova-ai.com',
    siteName: 'Destinova AI Labs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Destinova AI Labs - AI Chatbots for eCommerce',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destinova AI Labs | AI Chatbots for eCommerce Product Recommendations',
    description: 'Boost eCommerce conversions with agentic AI chatbots that provide personalized product recommendations.',
    images: ['/twitter-image.jpg'],
  },
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Destinova AI Labs',
  description: 'Agentic AI chatbots that boost eCommerce conversions with on-site product recommendations.',
  url: 'https://destinova-ai.com',
  logo: 'https://destinova-ai.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://twitter.com/destinovaai',
    'https://linkedin.com/company/destinova-ai-labs'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Toaster />
      </body>
    </html>
  );
}