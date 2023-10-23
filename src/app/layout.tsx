import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'XOAICC',
  description: 'Trang cá nhân của XoaiCC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  )
}
