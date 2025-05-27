// src/components/SectionMain/SectionMain.js
'use client'
import { useState, useEffect } from 'react'
import api from '@/lib/api'
import PostCard from '@/components/PostCard/PostCard'

export default function SectionMain() {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)

  // Helper para cargar posts
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

  // Carga inicial
  useEffect(() => {
    fetchPosts('/posts')
  }, [])

  return (
    <div className="space-y-6">
      {/* Botones de filtro */}
      <div className="bg-[#F6F6F6] p-4 rounded-lg flex gap-4">
        <button
          onClick={() => fetchPosts('/posts/relevant')}
          className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100"
        >
          Relevant
        </button>
        <button
          onClick={() => fetchPosts('/posts/latest')}
          className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100"
        >
          Latest
        </button>
        <button
          onClick={() => fetchPosts('/posts')}
          className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100"
        >
          Top
        </button>
      </div>

      {/* Lista de posts */}
      {loading ? (
        <p>Cargando…</p>
      ) : posts.length === 0 ? (
        <p>No hay posts</p>
      ) : (
        <div className="space-y-6">
          {posts.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
