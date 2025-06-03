// src/app/(main)/layout.jsx
'use client'

import Header from '@/components/Header/Header'

export default function MainLayout({ children }) {
  return (
    <>
   
      <Header />

      
      <div className="w-[100%] h-[100%] lg:max-w-screen-xl lg:mx-auto lg:p-4 lg:grid lg:grid-cols-[1fr_3fr_1fr] lg:gap-4   md:grid md:grid-cols-[1fr_3fr_1fr]  md:gap-4 md:p-2 ">
        {children}
      </div>
    </>
  )
}
