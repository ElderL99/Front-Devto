'use client'
import Sidebar     from '@/components/Sidebar/Sidebar'
import SectionMain from '@/components/SectionMain/SectionMain'
import Section3    from '@/components/Section3/Section3'

export default function HomePage() {
  return (
    <>
      <aside className="hidden md:block"><Sidebar/></aside>
      <main><SectionMain/></main>
      <aside className="hidden lg:block"><Section3/></aside>
    </>
  )
}
