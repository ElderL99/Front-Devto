
'use client'

import { useState, useEffect } from 'react'
import api from '@/lib/api'

export default function CommentsSection({ postId }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(true)

  // Carga  de comentarios
  useEffect(() => {
    if (!postId) return
    api.get('/comments', { params: { post: postId } })
      .then(res => setComments(res.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [postId])

  // Publicar un comentario
  const handleSubmit = async () => {
    if (!newComment.trim()) return
    try {
      await api.post('/comments', { post: postId, content: newComment })
      // recarga los comentarios
      const res = await api.get('/comments', { params: { post: postId } })
      setComments(res.data)
      setNewComment('')
    } catch (err) {
      console.error('Error al enviar comentario:', err)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Comentarios</h3>

      {loading
        ? <p>Cargando comentarios…</p>
        : comments.map(c => (
            <div key={c._id} className="p-3 bg-gray-50 rounded">
              <p className="font-medium">{c.author.username}</p>
              <p>{c.content}</p>
            </div>
          ))
      }

      {/* Formulario */}
      <div className="mt-4 flex flex-col gap-2">
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          placeholder="Escribe tu comentario..."
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="self-end bg-blue-500 text-white px-4 py-2 rounded"
        >
          Comentar
        </button>
      </div>
    </div>
  )
}
