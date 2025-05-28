// src/components/SearchBar.jsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { searchPosts } from '@/lib/api' // GET /posts/search?q=

export default function SearchBar() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState([])
  const [open, setOpen] = useState(false)

  const inputRef = useRef(null)
  const timerRef = useRef(null)

  // autocomplete con debounce
  useEffect(() => {
    if (!query) {
      setHits([])
      return
    }

    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(async () => {
      try {
        const data = await searchPosts(query) // /posts/search?q=
        setHits(data)
        setOpen(true)
      } catch (err) {
        console.error(err)
      }
    }, 300)

    return () => clearTimeout(timerRef.current)
  }, [query])

  // cerrar dropdown si hago click fuera
  useEffect(() => {
    const handler = e =>
      inputRef.current && !inputRef.current.contains(e.target) && setOpen(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  // enviar búsqueda completa
  const submit = e => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    setOpen(false)
  }

  return (
    <form onSubmit={submit} className="relative flex-1 max-w-md">
      <input
        ref={inputRef}
        type="text"
        name="q"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onFocus={() => hits.length && setOpen(true)}
        className="w-full h-10 pl-10 pr-32 border border-gray-300 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>

      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
        Powered by API
      </span>

      {open && (
        <div className="absolute z-30 mt-1 w-full bg-white border border-gray-200
                        rounded-md shadow-lg overflow-hidden">
          {hits.length === 0 && (
            <p className="px-4 py-3 text-sm text-gray-500">No results…</p>
          )}

          {hits.map(hit => (
            <a
              key={hit._id}
              href={`/posts/${hit._id}`}
              className="block px-4 py-3 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              <p className="text-xs text-gray-500">@{hit.username}</p>
              <p className="font-semibold">{hit.title}</p>
              <p className="text-xs text-gray-400">
                {new Date(hit.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: '2-digit',
                })}
              </p>
            </a>
          ))}

          <button
            type="submit"
            className="w-full text-left px-4 py-2 bg-gray-100 text-sm
                       hover:bg-gray-200 border-t border-gray-200"
          >
            Buscar «{query}»
          </button>
        </div>
      )}
    </form>
  )
}
