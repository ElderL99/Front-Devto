import React from 'react'
import { notFound } from 'next/navigation'

import AuthorCard from '@/components/AuthorCard/AuthorCard'
import ReactionBar from '@/components/ReactionBar/ReactionBar'
import CommentsSection from '@/components/CommentsSection/CommentsSection'

export const dynamic = 'force-dynamic'

export default async function PostPage({ params }) {
  const { id } = await params

  // 1) Fetch del post
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`,
    { cache: 'no-store' }
  )
  if (!res.ok) return notFound()
  const post = await res.json()

  return (
    <div className=" md:max-w-screen-lg mx-auto px-4 py-8 w-full  ">
      <div className="grid grid-cols-1  md:grid-cols-[1fr_3fr_1fr] gap-6">
        {/* ───────────────────── SIDEBAR IZQ (vacío o contenido estático) ───────────────────── */}
        <aside className="hidden lg:block">
       
        </aside>

        {/* ───────────────────── CONTENIDO PRINCIPAL ───────────────────── */}
        <main className="w-[350px] mx-auto space-y-8 md:w-[800px]">
          <article className="bg-white p-6 rounded-lg shadow">
            {post.image && (
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api','')}${post.image}`}
                alt={post.title}
                className="w-full h-64 object-cover rounded-md mb-4"
                loading="lazy"
              />
            )}

            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            <div className="text-sm text-gray-500 mb-4">
              By <strong>{post.author.username}</strong> ·{' '}
              {new Date(post.createdAt).toLocaleDateString()}
            </div>

            <div className="prose max-w-none mb-4">{post.content}</div>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <ReactionBar postId={id} variant="detail" />

            {/* Línea divisoria */}
            <div className="mt-6 mb-4">
              <hr className="border-gray-200" />
            </div>

            {/* ─ Comentarios ─ */}
            <CommentsSection postId={id} className="w-full" />
          </article>
        </main>

        {/* ───────────────────── SIDEBAR DERECHO: AuthorCard ───────────────────── */}
        <aside className="hidden lg:flex justify-center md:w-[350px] h-[600px]">
          <AuthorCard
            className="w-full   bg-white rounded-lg shadow p-4 "
            author={post.author}
          />
        </aside>
      </div>
    </div>
  )
}
