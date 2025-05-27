import React from 'react'
import Link from 'next/link'

export default function PostCard({ post }) {
  const { _id, title, author, content, tags, createdAt } = post
  const excerpt = content.length > 150 
    ? `${content.substring(0, 150)}…` 
    : content
  const dateStr = new Date(createdAt).toLocaleDateString()

  return (
    <Link href={`/posts/${_id}`} className="block hover:shadow-lg transition-shadow">
      <article className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-1 hover:underline">{title}</h2>
        <div className="text-sm text-gray-500 mb-2">
          By <span className="font-medium">{author.username}</span> · {dateStr}
        </div>
        <p className="text-gray-800 mb-3">{excerpt}</p>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  )
}
