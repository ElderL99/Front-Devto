// app/search/page.jsx

import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import SectionMain from '@/components/SectionMain/SectionMain'
import Section3 from '@/components/Section3/Section3'
import { Suspense } from 'react'



export default function SearchPage() {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-[1fr_2fr_1fr] gap-4 p-4">
      {/* columna izquierda */}
      <aside>
        <Sidebar />
      </aside>

      {/* columna central: SectionMain detecta ?q= y hace la búsqueda */}
      <main>
        <Suspense><SectionMain /></Suspense>
      </main>

      {/* columna derecha */}
      <aside>
        <Section3 />
      </aside>
    </div>
  )
}
