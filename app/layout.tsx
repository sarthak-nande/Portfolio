import type React from "react"
import type { Metadata } from "next"
// Temporarily disable Google Fonts due to network issues in sandboxed environment
// import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sarthak Nande - Full Stack Developer",
  description: "Computer Science student and passionate web developer specializing in modern technologies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
