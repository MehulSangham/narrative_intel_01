import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Narrative Intelligence | Strategic Insight for Purpose-Driven Organizations',
  description: 'We build the semantic intelligence layer for organizations working at the edge of culture, policy, and systems transformation. Map meaning, trace power, intervene with precision.',
  keywords: 'narrative intelligence, strategic insight, semantic analysis, organizational intelligence, narrative mapping',
  authors: [{ name: 'Narrative Intelligence' }],
  openGraph: {
    title: 'Narrative Intelligence | Strategic Insight for Purpose-Driven Organizations',
    description: 'Building the semantic intelligence layer for organizations working at the edge of culture, policy, and systems transformation.',
    url: 'https://narrative-intelligence.com',
    siteName: 'Narrative Intelligence',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narrative Intelligence | Strategic Insight for Purpose-Driven Organizations',
    description: 'Building the semantic intelligence layer for organizations working at the edge of culture, policy, and systems transformation.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-[88px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}