// src/app/(main)/layout.jsx
'use client'

import Header from '@/components/Header/Header'

export default function MainLayout({ children }) {
  return (
    <>
   
      <Header />

      
      <div className="w-full lg:max-w-screen-xl lg:mx-auto lg:p-4 lg:grid lg:grid-cols-[1fr_3fr_1fr] lg:gap-4 ">
        {children}
      </div>
    </>
  )
}
