
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
    <div className="max-w-screen-lg mx-auto grid grid-cols-[1fr_3fr_1fr] gap-6 py-8 px-4">
      {/* Sidebar izquierdo (estático) */}
      <aside className="hidden md:block">

      </aside>

     
      {/* Contenido principal */}
      <main className="space-y-8 w-[800px] max-w-3xl">
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
          <div className="w-full max-w-3xl bg-white p-5">  {/* 1px de separación */}
          <hr className="border-gray-200 w-full p-5 max-w-3xl bg-white" /></div>
         
        
           {/* Comentarios con estilo DEV.to */}
        <CommentsSection className="w-[800px] bg-white max-w-3xl" postId={id} /> 
        </article>

        

       
      </main>

      {/* Sidebar derecho: AuthorCard usa el avatar y nombre dinámico */}
      <aside className="hidden bg-[#f9f9f9] lg:block w-[350px]">
        
        <AuthorCard className="w-[350px] bg-white" author={post.author} />
        
      </aside>
    </div>
  )
}
