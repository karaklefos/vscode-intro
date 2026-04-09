import type React from "react"
import type { Metadata } from "next"
import { Instrument_Sans, Cormorant_Infant } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "@/app/globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kara Klefos | Product & UX/UI Designer",
  description: "UX/UI Designer specializing in workflow optimization and human-centered design.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${cormorantInfant.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}