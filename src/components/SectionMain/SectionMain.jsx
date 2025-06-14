 'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import api from '@/lib/api'
import PostCard from '@/components/PostCard/PostCard'

export default function SectionMain() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const fetchPosts = async (path) => {
    setLoading(true)
    try {
      const { data } = await api.get(path)
      setPosts(data)
    } catch {
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (query) {
      fetchPosts(`/posts/search?q=${encodeURIComponent(query)}`)
    } else {
      fetchPosts('/posts')
    }
  }, [query])

  return (
    <div className="space-y-2">
      {!query && (
        <div className="bg-[#F6F6F6] rounded-lg flex gap-4">
          <button
            onClick={() => fetchPosts('/posts/relevant')}
            className="px-4 py-2 font-bold  hover:text-[#3B49DF]"
          >
            Relevant
          </button>
          <button
            onClick={() => fetchPosts('/posts/latest')}
            className="px-4 py-2  hover:text-[#3B49DF]"
          >
            Latest
          </button>
          <button
            onClick={() => fetchPosts('/posts')}
            className="px-4 py-2  hover:text-[#3B49DF]"
          >
            Top
          </button>
        </div>
      )}

      {loading ? (
        <p>Cargando…</p>
      ) : posts.length === 0 ? (
        <p>{query ? 'No se encontraron resultados' : 'No hay posts'}</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post, idx) => (
            <PostCard
              key={post._id}
              post={post}
              showImage={idx === 0}   
            />
          ))}
        </div>
      )}
    </div>
  )
}
