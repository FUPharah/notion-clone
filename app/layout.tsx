import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion Clone',
  description: 'A clone of Notion.so',
  icons: [
    {
      media: '(prefers-color-scheme: dark)',
      url: "/logo.svg",
      href: "/logo.svg",
    },
    {
      media: '(prefers-color-scheme: light)',
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class"
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey="clone-theme">
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
