'use client'

import { useContext, useState } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/components/Auth/AuthContext'
import SearchBar from '@/components/SearchBar/SearchBar'
import Sidebar from '@/components/Sidebar/Sidebar'

export default function Header() {
  const { isAuth, username, logout } = useContext(AuthContext)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className=" bg-white w-full md:w-full md:bg-white md:shadow md:z-20">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center px-4 py-2">
        
        <div className="flex items-center gap-4 flex-1">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setDrawerOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href="/" aria-label="DEV Community Home">
            <img
              src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DEV"
              className="h-8"
              style={{ aspectRatio: '10/8' }}
            />
          </Link>

          <div className="hidden md:flex flex-1">
            <SearchBar />
          </div>
        </div>
    
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 md:hidden">
            {!isAuth ? (
              <Link
                href="/register"
                className="px-4 py-1 text-indigo-600 border border-indigo-600 rounded text-sm hover:bg-indigo-600 hover:text-white"
              >
                Create account
              </Link>
            ) : (
              <>
                <button className="p-1 rounded hover:bg-gray-100">
                  <img
                    src="/svgHeader/notificacion.svg"
                    alt="Notifications"
                    className="w-6 h-6"
                  />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen((prev) => !prev)}
                    className="p-1 rounded-full hover:ring-2 hover:ring-indigo-500"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${username}`}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </button>
                  {userMenuOpen && (
                    <div
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-30 overflow-hidden"
                      style={{ border: '1px solid rgba(0,0,0,0.05)' }}
                    >
                      <div className="px-4 py-3 bg-white">
                        <p className="font-semibold text-gray-800">{username}</p>
                        <p className="text-sm text-gray-500">@{username}</p>
                      </div>
                      <ul className="divide-y divide-gray-100 bg-white">
                        <li>
                          <Link
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                          >
                            Reading list
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                          >
                            Settings
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              logout()
                              setUserMenuOpen(false)
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
              </>
            )}
          </div>

          
          <div className="hidden md:flex items-center gap-4">
            {isAuth && (
              <>
                <Link
                  href="/posts/new"
                  className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
                >
                  Create Post
                </Link>
                <button className="p-1 rounded hover:bg-gray-100">
                  <img
                    src="/svgHeader/notificacion.svg"
                    alt="Notifications"
                    className="w-6 h-6"
                  />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen((prev) => !prev)}
                    className="p-1 rounded-full hover:ring-2 hover:ring-indigo-500"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${username}`}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </button>
                  {userMenuOpen && (
                    <div
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-30 overflow-hidden"
                      style={{ border: '1px solid rgba(0,0,0,0.05)' }}
                    >
                      <div className="px-4 py-3 bg-white">
                        <p className="font-semibold text-gray-800">{username}</p>
                        <p className="text-sm text-gray-500">@{username}</p>
                      </div>
                      <ul className="divide-y divide-gray-100 bg-white">
                        <li>
                          <Link
                            href="/dashboard"
                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/reading-list"
                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                          >
                            Reading list
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/settings"
                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                          >
                            Settings
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              logout()
                              setUserMenuOpen(false)
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
              </>
            )}

            {!isAuth && (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:underline hover:text-indigo-600 px-4 py-1 rounded-md text-sm"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-1 text-indigo-600 border border-indigo-600 rounded text-sm hover:bg-indigo-600 hover:text-white"
                >
                  Create account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

  
      {searchOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setSearchOpen(false)}
          />
          <div className="fixed inset-0 flex items-start justify-center z-50 pt-20 px-4">
            <div className="bg-white w-full rounded-lg shadow-md p-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  autoFocus
                  placeholder="Buscar…"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <span>✕</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

    
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setDrawerOpen(false)}
          />

          <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h2 className="text-lg font-semibold">DEV Community</h2>
              <button
                className="p-1 rounded hover:bg-gray-200"
                onClick={() => setDrawerOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-4 py-2 border-b">
              <SearchBar />
            </div>

            <nav className="flex-1 overflow-y-auto">
              <Sidebar className="w-full" hideExtras={true} />
            </nav>
          </aside>
        </>
      )}
    </header>
  )
}
