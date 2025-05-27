// src/components/Header/Header.jsx
'use client'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2">
        {/* ← Grupo izq: hamburguesa, logo y buscador */}
        <div className="flex items-center gap-4">
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

          <Link href="/" aria-label="DEV Community Home">
            <img
              src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DEV Community"
              className="h-8"
              style={{ aspectRatio: '10/8' }}
            />
          </Link>

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

        {/* → Grupo der: auth buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden md:inline text-gray-700 hover:underline"
          >
            Log in
          </Link>
          <Link
            href="/enter?state=new-user"
            className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Create account
          </Link>
        </div>
      </div>
    </header>
  )
}
