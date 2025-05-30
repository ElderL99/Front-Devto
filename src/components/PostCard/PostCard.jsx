// src/components/PostCard/PostCard.jsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useAvatarUrl from '@/hooks/useAvatarUrl'
import useAuth from '@/hooks/useAuth'
import useComments from '@/hooks/useComments'
import ReactionBar from '@/components/ReactionBar/ReactionBar'

export default function PostCard({ post, showImage = false }) {
  const {
    _id,
    title,
    author,
    content,
    tags = [],
    createdAt,
    image,
  } = post

  /* Hooks */
  const avatarUrl = useAvatarUrl(author._id, 40)
  const { isAuth } = useAuth()
  const { comments: preview, isLoading } = useComments(_id, 2, isAuth)

  /* Fecha solo en cliente */
  const [dateStr, setDateStr] = useState('')
  useEffect(() => {
    setDateStr(
      new Date(createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    )
  }, [createdAt])

  const excerpt =
    content.length > 150 ? `${content.substring(0, 150)}…` : content

  return (
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
      {/* Imagen opcional */}
      {showImage && image && (
        <Link href={`/posts/${_id}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${image}`}
            alt={title}
            width={1280}
            height={640}
            className="w-full h-56 sm:h-64 object-cover"
            priority={false}
          />
        </Link>
      )}

      {/* Usuario + fecha */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Image
            src={avatarUrl}
            alt={author.username}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-gray-700">{author.username}</span>
          <Image src="/svg/DEV++.svg" alt="DEV++" width={16} height={16} />
        </div>
        <time className="text-sm text-gray-500 mb-2" suppressHydrationWarning>
          {dateStr}
        </time>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <Link
          href={`/posts/${_id}`}
          className="text-xl font-semibold mb-1 hover:underline inline-block"
        >
          {title}
        </Link>

        <p className="text-gray-800 mb-3">{excerpt}</p>

        {tags.length > 0 && (
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

{/* Contador + icono */}
            
        
        <div className="flex items-center gap-5 text-sm text-gray-600 mt-2">
          {/* Reacciones siempre visibles */}
          <ReactionBar postId={_id} variant="feed" />
          <div className="flex ">
              <Image
                src="/svg/coment.svg"
                alt="comments"
                width={25}
                height={25}
              />
              <span>{preview.length}</span>
            </div>
        </div>
       
        

        {/* Comentarios y preview SOLO si hay token */}
        {isAuth && (
          <>
            

           
            <div className="mt-2 space-y-3">
              {isLoading && (
                <p className="text-sm text-gray-400">Loading…</p>
              )}

              {preview.map((c) => (
                <div key={c._id} className="flex gap-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
                  <Image
                    
                    src={`https://i.pravatar.cc/32?u=${encodeURIComponent(c.author._id)}`}
                    alt={c.author.username}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover "
                  />
                  <div>
                    <p className="text-xs font-medium">{c.author.username}</p>
                    <p className="text-sm text-gray-700 hover:cursor-pointer">{c.content}</p>
                  </div>
                </div>
              ))}


              {preview.length > 0 && (
                <Link
                  href={`/posts/${_id}#comments`}
                  className="block text-sm font-medium text-brand hover:text-brand-dark hover:cursor-pointer"
                >
                  See all comments
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </article>
  )
}
