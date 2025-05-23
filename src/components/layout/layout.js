import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
