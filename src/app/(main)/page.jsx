'use client'
import Sidebar from '@/components/Sidebar/Sidebar'
import SectionMain from '@/components/SectionMain/SectionMain'
import Section3 from '@/components/Section3/Section3'
export const dynamic = 'force-dynamic';   
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <>
      <aside className="hidden md:block"><Sidebar /></aside>

      <Suspense ><main><SectionMain /></main></Suspense>
      <aside className="hidden md:block"><Section3 /></aside>
    </>
  )
}
