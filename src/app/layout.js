// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google"
import Header from "@/components/Header/Header"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata = {
  title: "Devto Clone",
  description: "Clon de Dev.to",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F6F6F6]`}
      >
        <Header />
        {/* Aquí va **solo** el contenido de cada ruta */}
        {children}
      </body>
    </html>
  )
}
