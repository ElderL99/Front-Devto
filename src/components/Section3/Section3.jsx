// src/components/Section3/Section3.jsx
'use client'

import { useState, useEffect } from 'react'
import api from '@/lib/api'
import Link from 'next/link'

export default function Section3() {
  const [jsPosts, setJsPosts] = useState([])
  const [swPosts, setSwPosts] = useState([])
  const [trendingTags, setTrendingTags] = useState([])
  const [trendingPosts, setTrendingPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAll() {
      setLoading(true)
      try {
        const [
          { data: tags },
          { data: js },
          { data: sw },
          { data: trending },           
        ] = await Promise.all([
          api.get('/posts/tags'),
          api.get('/posts/by-tag/javascript'),
          api.get('/posts/by-tag/software'),
          api.get('/posts/trending'),   
        ])

        const attachCount = async (posts) =>
          Promise.all(
            posts.map(async (p) => {
              const { data: comments } = await api.get('/comments', {
                params: { post: p._id },
              })
              return { ...p, commentCount: comments.length }
            })
          )

        setJsPosts(await attachCount(js))
        setSwPosts(await attachCount(sw))
        setTrendingTags(tags)
        setTrendingPosts(await attachCount(trending))
      } catch (err) {
        console.error('Error cargando Section3:', err)
      } finally {
        setLoading(false)
      }
    }

    loadAll()
  }, [])

  if (loading) {
    return <p className="text-gray-500 text-center">Cargando sección…</p>
  }


  const renderCard = (title, subtitle, items, isPosts) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden text-xs">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
        )}
      </div>
      <ul className="divide-y divide-gray-100">
        {items.length === 0 ? (
          <li className="px-4 py-2 text-center text-gray-500 text-xs">
            Sin elementos.
          </li>
        ) : (
          items.map((it) => (
            <li
              key={it._id}
              className="items-center px-4 py-2 hover:bg-gray-50"
            >
              <Link
                href={`/posts/${it._id}`}
                className="flex flex-1 truncate text-sm font-medium text-gray-600 hover:text-[#3B49DF] hover:cursor-pointer"
              >
                {it.title}
              </Link>
              <span className="ml-2 flex-shrink-0 text-xs text-gray-500 hover:cursor-pointer">
                {it.commentCount} comment{it.commentCount !== 1 && 's'}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  )

  return (
    <div className="space-y-10 ">
      {renderCard('#javascript 🔥', 'Posts etiquetados con javascript', jsPosts, true)}
      {renderCard('#software 🔥', 'Posts etiquetados con software', swPosts, true)}

      

      {/* Trending posts */}
      <div className="w-full px-4  bg-[#F6F6F6] ">
        <p className="text-xs  text-gray-600 tracking-wide mb-2 hover:cursor-pointer hover:text-black  ">
          trending postsck 
        </p>
        <ul className="space-y-2 w-[200px] h-[200px] overflow-y-auto ">
          {trendingPosts.map((p) => (
            <li key={p._id}>
              <Link
                href={`/posts/${p._id}`}
                className="bg-[#F6F6F6] text-md gap-4  text-gray-600 hover:text-[#3B49DF] hover:cursor-pointer hover:text-blue-900 "
              >
                {p.title}
              </Link>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
