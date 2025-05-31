// src/app/(main)/layout.jsx
'use client'

import Header from '@/components/Header/Header'

export default function MainLayout({ children }) {
  return (
    <>
   
      <Header />

      
      <div className="max-w-screen-xl mx-auto grid grid-cols-[1fr_3fr_1fr] gap-4 p-4">
        {children}
      </div>
    </>
  )
}
