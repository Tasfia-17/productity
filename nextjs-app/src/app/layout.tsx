import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Temple of Productivi-Tea',
  description: 'A satirical procrastination-themed productivity web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
