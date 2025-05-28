'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/components/Auth/AuthContext'

export default function Header() {
  const { isAuth, logout } = useContext(AuthContext)

  return (
    <header className="bg-white shadow">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Grupo izq: hamburguesa, logo y buscador */}
        <div className="flex items-center gap-4">
          {/* Hamburguesa (mobile) */}
          <button className="md:hidden p-2 rounded hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" aria-label="DEV Community Home">
            <img
              src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DEV Community"
              className="h-8"
              style={{ aspectRatio: '10/8' }}
            />
          </Link>

          {/* Buscador */}
          <form
            action="/search"
            method="get"
            className="flex items-center max-w-md mx-4 relative"
          >
            <button
              type="submit"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617z" />
              </svg>
            </button>
            <input
              name="q"
              type="text"
              placeholder="Search..."
              className="w-full h-10 pl-10 pr-80 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">
              Powered by Algolia
            </span>
          </form>
        </div>

        {/* Grupo der: según autenticación */}
        <div className="flex items-center gap-4">
          {!isAuth ? (
            <>
              <Link
                href="/login"
                className="hidden md:inline text-gray-700 hover:underline"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Create account
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/posts/new"
                className="hidden md:inline px-4 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
              >
                Create Post
              </Link>
              <button
                onClick={logout}
                className="hidden md:inline px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Log out
              </button>
              <button className="p-2 rounded hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.07-1.639-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.64 5.36 6 7.929 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button className="p-1 rounded-full hover:ring-2 hover:ring-indigo-500">
                <img
                  src="/avatar-placeholder.png"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
