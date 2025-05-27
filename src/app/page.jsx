// src/app/page.jsx
import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import SectionMain from '@/components/SectionMain/SectionMain'
import Section3 from '@/components/Section3/Section3'

export default function HomePage() {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-[1fr_2fr_1fr] gap-4 p-4">
      {/* Columna izquierda */}
      <aside>
        <Sidebar />
      </aside>

      {/* Columna central */}
      <main className="">
        <SectionMain />
      </main>

      {/* Columna derecha */}
      <aside>
        <Section3 />
      </aside>
    </div>
  )
}
