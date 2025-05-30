'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { searchPosts } from '@/lib/api'

export default function SearchBar() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState([])
  const [open, setOpen] = useState(false)

  const inputRef = useRef(null)
  const timerRef = useRef(null)

  /* debounce */
  useEffect(() => {
    if (!query) {
      setHits([])
      return
    }
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(async () => {
      const data = await searchPosts(query)
      setHits(data)
      setOpen(true)
    }, 300)
    return () => clearTimeout(timerRef.current)
  }, [query])

  /* click-fuera */
  useEffect(() => {
    const h = (e) =>
      inputRef.current && !inputRef.current.contains(e.target) && setOpen(false)
    document.addEventListener('click', h)
    return () => document.removeEventListener('click', h)
  }, [])

  const submit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    setOpen(false)
  }

  return (
    <form onSubmit={submit} className="relative w-[650px] max-w-full">
      {/* input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => hits.length && setOpen(true)}
        className="w-full h-9 pl-10 pr-32 bg-white border border-gray-300 rounded-md text-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* icono lupa (svg) */}
      <img
        src="/svgHeader/search.svg"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60"
        alt=""
      />

      {/* powered by */}
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-500">
        Powered by <img src="/svgHeader/algolia.svg" alt="Algolia" className="inline-block w-4 h-4" /> Algolia
      </span>

      {/* dropdown */}
      {open && (
        <div className="absolute z-30 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
          {hits.length === 0 ? (
            <p className="px-4 py-3 text-sm text-gray-500">No results…</p>
          ) : (
            hits.map((hit) => (
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
                    year: '2-digit'
                  })}
                </p>
              </a>
            ))
          )}

          <button
            type="submit"
            className="w-full text-left px-4 py-2 bg-gray-100 text-sm hover:bg-gray-200 border-t border-gray-200"
          >
            Buscar «{query}»
          </button>
        </div>
      )}
    </form>
  )
}
