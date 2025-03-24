import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Issa Mohamed - Portfolio",
  description: "Personal portfolio website of Issa Mohamed",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div 
          className="min-h-screen relative"
          style={{
            backgroundImage: `url('/images/blue_wisp.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}