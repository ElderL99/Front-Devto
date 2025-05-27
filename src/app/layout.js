// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google"
import Header from "@/components/Header/Header"
import Sidebar from "@/components/Sidebar/Sidebar"
import Section3 from "@/components/Section3/Section3"
import "./globals.css"

// 1) Define las fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Devto",
  description: "Devto's Clone",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          // 2) Usa tus variables y aplica el gris de fondo
          `${geistSans.variable} ${geistMono.variable} antialiased bg-page-bg min-h-screen`
        }
      >
        <Header />

        <div className="max-w-screen-xl mx-auto grid grid-cols-[1fr_2fr_1fr] gap-4 p-4">
          <aside><Sidebar /></aside>
          <main className="bg-white p-4 rounded-lg">{children}</main>
          <aside><Section3 /></aside>
        </div>
      </body>
    </html>
  )
}
