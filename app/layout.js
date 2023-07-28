import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Boos op Dierenkliniek Maastricht',
  description: 'Ik ben Mango en mijn baasje had mijn pootje bijna laten amputeren',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
