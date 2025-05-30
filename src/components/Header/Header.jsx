'use client'

import { useContext, useState } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/components/Auth/AuthContext'
import SearchBar from '@/components/SearchBar/SearchBar'

export default function Header() {
  const { isAuth, username, logout } = useContext(AuthContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen((p) => !p)

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center px-4 py-2">
        {/* ───────────────────── Logo + búsqueda */}
        <div className="flex items-center gap-4 flex-1">
          <Link href="/" aria-label="DEV Community Home">
            <img
              src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DEV"
              className="h-8"
              style={{ aspectRatio: '10/8' }}
            />
          </Link>

          <SearchBar />
        </div>

        {/* ───────────────────── Zona derecha */}
        <div className="flex items-center gap-4">
          {isAuth && (
            <>
              {/* Create post */}
              <Link
                href="/posts/new"
                className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
              >
                Create Post
              </Link>

              {/* Ícono notificación */}
              <img
                src="/svgHeader/notificacion.svg"
                alt="Notifications"
                className="w-6 h-6 cursor-pointer"
              />
            </>
          )}

          {/* Auth / avatar */}
          {!isAuth ? (
            <>
              <Link href="/login" className="text-gray-700 hover:cursor-pointer hover:underline hover:text-indigo-600 hover:bg-indigo-50 px-4 py-1 rounded-md">
                Log in
              </Link>
              <Link
                href="/register"
                className="px-4 py-1  text-indigo-600 border border-indigo-600 rounded hover:bg-blue-900 hover:cursor-pointer hover:underline hover:text-white"
              >
                Create account
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="flex-shrink-0 p-1 rounded-full hover:ring-2 hover:ring-indigo-500"
              >
                <img
                  src="https://i.pravatar.cc/300"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  <div className="px-4 py-3 border-b">
                    <p className="font-semibold">{username}</p>
                    <p className="text-sm text-gray-500">@{username}</p>
                  </div>

                  <ul className="py-2">
                    <li>
                      <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                        Reading list
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          logout()
                          setMenuOpen(false)
                        }}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
