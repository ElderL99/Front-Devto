import React from 'react'
import { notFound } from 'next/navigation'
import ReactionBar from '@/components/ReactionBar/ReactionBar'
import CommentsSection from '@/components/CommentsSection/CommentsSection'

export const dynamic = 'force-dynamic'

export default async function PostPage({ params }) {
  const { id } = params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`,
    { cache: 'no-store' }
  )
  if (!res.ok) return notFound()
  const post = await res.json()

  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4 space-y-8">
      <article className="bg-white p-6 rounded-lg shadow">
        {/* imagen principal si existe */}
        {post.image && (
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${post.image}`}
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

        {/* Barra de reacciones */}
        <ReactionBar postId={id} variant="detail" />
      </article>

      <div className="bg-white p-6 rounded-lg shadow">
        <CommentsSection postId={id} />
      </div>
    </div>
  )
}
