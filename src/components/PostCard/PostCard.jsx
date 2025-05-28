import React from 'react'
import Link from 'next/link'
import ReactionBar from '@/components/ReactionBar/ReactionBar'

/**
 *  showImage → true = muestra la imagen (solo el primer post del feed)
 */
export default function PostCard({ post, showImage = false }) {
  const { _id, title, author, content, tags, createdAt, image } = post

  const excerpt =
    content.length > 150 ? `${content.substring(0, 150)}…` : content
  const dateStr = new Date(createdAt).toLocaleDateString()

  return (
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
      {/* ─────────── Imagen encabezado ─────────── */}
      {showImage && image && (
        <Link href={`/posts/${_id}`}>
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${image}`}
            alt={title}
            className="w-full h-56 sm:h-64 object-cover"
            loading="lazy"
          />
        </Link>
      )}

    
      <div className="p-4">
        {/* Título clicable */}
        <Link
          href={`/posts/${_id}`}
          className="text-xl font-semibold mb-1 hover:underline inline-block"
        >
          {title}
        </Link>

        {/* Meta */}
        <div className="text-sm text-gray-500 mb-2">
          By <span className="font-medium">{author.username}</span> · {dateStr}
        </div>

        {/* Extracto */}
        <p className="text-gray-800 mb-3">{excerpt}</p>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Reacciones condensadas */}
        <ReactionBar postId={_id} variant="feed" />
      </div>
    </article>
  )
}
