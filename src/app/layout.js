import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import Section3 from '@/components/Section3/Section3'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
