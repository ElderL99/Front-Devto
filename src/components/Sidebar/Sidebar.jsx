'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AuthContext } from '@/components/Auth/AuthContext'

// src/components/Sidebar/Sidebar.jsx
const navItems = [
  { label: 'Home', href: '/', icon: '/svg/home.svg' },
  { label: 'DEV++', href: '/++', icon: '/svg/DEV++.svg' },
  { label: 'Podcasts', href: '/podcasts', icon: '/svg/Podcasts.svg' },
  { label: 'Videos', href: '/videos', icon: '/svg/videos.svg' },
  { label: 'Tags', href: '/tags', icon: '/svg/tags.svg' },
  { label: 'DEV Help', href: '/help', icon: '/svg/help.svg' },
  { label: 'Forem Shop', href: '/shop', icon: '/svg/shop.svg' },
  { label: 'Advertise on DEV', href: '/advertise' },
  { label: 'DEV Challenges', href: '/challenges', icon: '/svg/challeng.svg' },
  { label: 'DEV Showcase', href: '/showcase', icon: '/svg/DEV show.svg' },
  { label: 'About', href: '/about', icon: '/svg/about.svg' },
  { label: 'Contact', href: '/contact', icon: '/svg/Contact.svg' },
  { label: 'Free Postgres Database', href: '/free-postgres-database-tier', icon: '/svg/elefante.svg' },
  { label: 'Software comparisons', href: '/software-comparisons', icon: '/svg/comparation.svg' },
]

const otherItems = [
  { label: 'Code of Conduct', href: '/code-of-conduct', emoji: '👍' },
  { label: 'Privacy Policy', href: '/privacy-policy', emoji: '🤓' },
  { label: 'Terms of use', href: '/terms-of-use', emoji: '👀' },
]

const socialItems = [
  { href: 'https://twitter.com/tu_usuario', icon: '/svgRedes/x.svg', alt: 'X' },
  { href: 'https://facebook.com/tu_pagina', icon: '/svgRedes/facebook.svg', alt: 'Facebook' },
  { href: 'https://github.com/tu_usuario', icon: '/svgRedes/git.svg', alt: 'GitHub' },
  { href: 'https://instagram.com/tu_usuario', icon: '/svgRedes/insta.svg', alt: 'Instagram' },
  { href: 'https://twitch.tv/tu_usuario', icon: '/svgRedes/twicht.svg', alt: 'Twitch' },
  { href: 'https://mastodon.social/@tu_usuario', icon: '/svgRedes/m.svg', alt: 'Mastodon' },
  { href: 'https://ejemplo.com', icon: '/svgRedes/mariposa.svg', alt: 'Mariposa' },
]

// Static popular tags as per design
const popularTags = [
  'webdev', 'programming', 'javascript', 'beginners',
  'ai', 'productivity', 'tutorial', 'devops', 'python', 'react'
]

export default function Sidebar() {
  const pathname = usePathname()
  const { isAuth } = useContext(AuthContext)

  return (
    <nav className="flex flex-col gap-5 rounded-lg  bg-[#f6f6f6]">
      {/* Cuenta (solo si no hay token) */}
      {!isAuth && (
        <div className="p-4 bg-white">
          <h1 className="text-xl font-bold mb-2 text-black">
            DEV Community is a community of 3,171,657 amazing developers
          </h1>
          <p className="text-gray-500 mb-4">
            We're a place where coders share, stay up-to-date and grow their careers.
          </p>
          <div className="flex flex-col gap-2">
            <Link href="/register" className="w-full bg-blue-500 text-white px-4 py-2 rounded text-center">
              Create account
            </Link>
            <Link href="/login" className="w-full border border-blue-500 text-blue-500 px-4 py-2 rounded text-center">
              Log in
            </Link>
          </div>
        </div>
      )}

      {/* Navegación principal */}
      <ul className="space-y-1 px-0">
        {navItems.map(({ href, label, icon }) => {
          const active = pathname === href
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
                  active
                    ? 'text-indigo-700 font-medium border-l-4 border-indigo-600'
                    : 'text-gray-700 hover:bg-violet-100 hover:text-gray-900 hover:border-l-4 hover:border-indigo-600 hover:underline decoration-violet-500'
                }`}
              >
                {icon && <img src={icon} alt={label} className="w-6 h-6 flex-shrink-0" />}
                <span>{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Other */}
      <div>
        <h2 className="px-3 mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase">Other</h2>
        <ul className="space-y-1 px-0">
          {otherItems.map(({ href, label, emoji }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-2 px-3 py-2 rounded transition-colors text-gray-700 hover:bg-violet-100 hover:text-gray-900 hover:border-l-4 hover:border-indigo-600 hover:underline decoration-violet-500"
              >
                <span className="w-6 h-6 flex-shrink-0 text-lg">{emoji}</span>
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Iconos sociales */}
      <div className="flex items-center gap-3 px-3 py-4 border-t border-gray-200">
        {socialItems.map(({ href, icon, alt }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img src={icon} alt={alt} className="w-6 h-6 hover:opacity-75" />
          </a>
        ))}
      </div>

      {/* Popular Tags (estático) */}
      <div>
        <h2 className="px-3 mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase">Popular Tags</h2>
        <ul className="space-y-1 max-h-64 overflow-auto px-0">
          {popularTags.map(tag => (
            <li key={tag}>
              <Link
                href={`/tags/${tag}`}
                className="block px-3 py-1 text-gray-700 hover:bg-violet-100 hover:text-gray-900 rounded transition-colors hover:underline-offset-4 hover:underline"
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-6 px-3 pt-4 border-t border-gray-200 text-sm text-gray-600 space-y-4">
        <p>
          <Link href="/" className="text-blue-600 font-medium hover:underline">
            DEV Community
          </Link>{' '}
          A space to discuss and keep up software development and manage your software career
        </p>
        <p>
          Built on{' '}
          <a href="https://www.forem.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Forem
          </a>{' '}
          — the{' '}
          <a href="https://dev.to/t/opensource" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            open source
          </a>{' '}
          software that powers{' '}
          <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            DEV
          </a>{' '}
          and other inclusive communities.
        </p>
        <p>
          Made with love and{' '}
          <a href="https://dev.to/t/rails" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Ruby on Rails
          </a>.
        </p>
        <p>DEV Community <span title="copyright">©</span> 2016 - 2025.</p>
      </div>
    </nav>
  )
}
