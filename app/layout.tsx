import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grand Junction Truck Repair — Roadside Service',
  description: '24/7 Commercial truck & trailer roadside repair in Grand Junction, CO.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
