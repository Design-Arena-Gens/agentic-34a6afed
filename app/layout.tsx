import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Penggolongan Hukum di Indonesia',
  description: 'Penjelasan lengkap tentang penggolongan hukum menurut Soerjono Soekanto dan sistem hukum Indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
