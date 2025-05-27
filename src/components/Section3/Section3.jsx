// src/components/Section3/Section3.jsx
'use client'

import { useState, useEffect } from 'react'
import api from '@/lib/api'
import Link from 'next/link'

export default function Section3() {
  const [jsPosts, setJsPosts] = useState([])
  const [swPosts, setSwPosts] = useState([])
  const [trendingTags, setTrendingTags] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAll() {
      setLoading(true)
      try {
        // 1) Llamadas en paralelo: tags, posts/javascript, posts/software
        const [{ data: tags }, { data: js }, { data: sw }] = await Promise.all([
          api.get('/posts/tags'),
          api.get('/posts/by-tag/javascript'),
          api.get('/posts/by-tag/software'),
        ])

        setTrendingTags(tags)

        // 2) Para cada post sacamos la cuenta de comentarios
        const attachCount = async (posts) => {
          return Promise.all(
            posts.map(async (p) => {
              const { data: comments } = await api.get('/comments', {
                params: { post: p._id },
              })
              return { ...p, commentCount: comments.length }
            })
          )
        }

        setJsPosts(await attachCount(js))
        setSwPosts(await attachCount(sw))
      } catch (err) {
        console.error('Error cargando Section3:', err)
      } finally {
        setLoading(false)
      }
    }

    loadAll()
  }, [])

  if (loading) {
    return <p className="text-gray-500">Cargando sidebar…</p>
  }

  return (
    <div className="space-y-6">
      {/* Javascript */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg mb-2">#javascript</h2>
        {jsPosts.length === 0 ? (
          <p className="text-gray-500">Sin posts.</p>
        ) : (
          <ul className="space-y-1">
            {jsPosts.map((p) => (
              <li key={p._id} className="flex justify-between">
                <Link
                  href={`/posts/${p._id}`}
                  className="text-gray-700 hover:underline"
                >
                  {p.title}
                </Link>
                <span className="text-xs text-gray-500">
                  {p.commentCount} comment{p.commentCount !== 1 && 's'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Software */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg mb-2">#software</h2>
        {swPosts.length === 0 ? (
          <p className="text-gray-500">Sin posts.</p>
        ) : (
          <ul className="space-y-1">
            {swPosts.map((p) => (
              <li key={p._id} className="flex justify-between">
                <Link
                  href={`/posts/${p._id}`}
                  className="text-gray-700 hover:underline"
                >
                  {p.title}
                </Link>
                <span className="text-xs text-gray-500">
                  {p.commentCount} comment{p.commentCount !== 1 && 's'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Trending tags */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg mb-2">Trending tags</h2>
        <ul className="space-y-1">
          {trendingTags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/tags/${tag}`}
                className="text-gray-700 hover:underline"
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
