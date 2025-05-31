'use client' 

import React from 'react'
import { X } from 'lucide-react'      
import PostCard from '../PostCard/PostCard'
import CommentsSection from '../CommentsSection/CommentsSection'

export default function PostModal({ post, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-start pt-16 bg-black/30"
      onClick={onClose}            
    >
      <div
        className="bg-white max-w-2xl w-full max-h-[90vh] overflow-auto rounded-lg shadow-lg relative"
        onClick={e => e.stopPropagation()}  
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {/* Detalle del post */}
        <div className="p-4">
          <PostCard post={post} />
        </div>

        {/* Sección de comentarios */}
        <div className="p-4 border-t">
          <CommentsSection postId={post._id} />
        </div>
      </div>
    </div>
  )
}
