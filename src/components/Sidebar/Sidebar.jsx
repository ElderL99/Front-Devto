'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// src/components/Sidebar/Sidebar.js
const navItems = [
    { label: 'Home', href: '/', icon: '/svg/home.svg' },
    { label: 'DEV++', href: '/++', icon: '/svg/DEV++.svg' },
    { label: 'Podcasts', href: '/podcasts', icon: '/svg/Potcast.svg' },
    { label: 'Videos', href: '/videos', icon: '/svg/videos.svg' },
    { label: 'Tags', href: '/tags', icon: '/svg/tags.svg' },
    { label: 'DEV Help', href: '/help', icon: '/svg/help.svg' },
    { label: 'Forem Shop', href: '/shop', icon: '/svg/shop.svg' },
    { label: 'Advertise on DEV', href: '/advertise', icon: '/svg/advertise.svg' },
    { label: 'DEV Challenges', href: '/challenges', icon: '/svg/challeng.svg' },
    { label: 'DEV Showcase', href: '/showcase', icon: '/svg/DEV show.svg' },
    { label: 'About', href: '/about', icon: '/svg/about.svg' },
    { label: 'Contact', href: '/contact', icon: '/svg/Contact.svg' },
    { label: 'Free Postgres Database', href: '/free-postgres-database-tier', icon: '/svg/elefante.svg' },
    { label: 'Software comparisons', href: '/software-comparisons', icon: '/svg/comparation.svg' },
]


export default function Sidebar() {
    const pathname = usePathname()

  

    return (
        <nav className=" flex flex-col gap-5 rounded-lg shadow">
            {/* —————— Card de cuenta —————— */}
      <div className="bg-white w-full p-4 rounded-lg shadow ">
        <h1 className="text-xl font-bold mb-2 text-black">
          DEV Community is a community of 3,171,657 amazing developers
        </h1>
        <p className="text-gray-500 mb-4">
          We're a place where coders share, stay up-to-date and grow their careers.
        </p>
        <div className="flex flex-col gap-2">
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
            Create account
          </button>
          <button className="w-full border border-blue-500 text-blue-500 px-4 py-2 rounded">
            Log in
          </button>
        </div>
      </div>

            <ul className=" bg-#f6f6f6 space-y-1 ">
                {navItems.map(({ href, label, icon }) => {
                    const active = pathname === href
                    return (
                        <li key={href}>
                            <Link
                                href={'/'}
                                className={
                                    `flex items-center gap-2 px-3 py-2 rounded transition-colors ` +
                                    (active
                                        // Active: fondo lila suave y borde izquierdo
                                        ? 'text-indigo-700 font-medium border-l-4 border-indigo-600'
                                        // Inactivo: gris oscuro, hover gris claro
                                        : 'text-gray-700 hover:bg-violet-100 hover:text-gray-900 hover:border-l-4 hover:border-indigo-600 hover:underline decoration-violet-500')
                                }
                            >
                                <img src={icon} alt={label} className="w-6 h-6 flex-shrink-0" />
                                <span>{label}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
