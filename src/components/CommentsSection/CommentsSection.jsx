  // src/components/CommentsSection/CommentsSection.jsx
  'use client'

  import { useState, useEffect } from 'react'
  import api from '@/lib/api'
  import useAvatarUrl from '@/hooks/useAvatarUrl'

  export default function CommentsSection({ postId }) {
    const [comments, setComments]   = useState([])
    const [newComment, setNewComment] = useState('')
    const [loading, setLoading]     = useState(true)

    // Subcomponente para renderizar cada comentario
    function CommentItem({ comment }) {
      const avatarUrl = useAvatarUrl(comment.author.username, 32)
      return (
        <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
          {/* Avatar */}
          <img
            src={avatarUrl}
            alt={comment.author.username}
            className="w-8 h-8 rounded-full flex-shrink-0"
          />
          <div className="flex-1">
            {/* Nombre */}
            <p className="text-sm font-medium">{comment.author.username}</p>
            {/* Contenido */}
            <p className="text-sm text-gray-800">{comment.content}</p>
          </div>
        </div>
      )
    }

    // Cargar comentarios
    useEffect(() => {
      if (!postId) return
      api.get('/comments', { params: { post: postId } })
        .then(res => setComments(res.data))
        .catch(console.error)
        .finally(() => setLoading(false))
    }, [postId])

    // Enviar comentario
    const handleSubmit = async () => {
      if (!newComment.trim()) return
      try {
        await api.post('/comments', { post: postId, content: newComment })
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

        {loading ? (
          <p>Cargando comentarios…</p>
        ) : (
          comments.map(c => (
            <CommentItem key={c._id} comment={c} />
          ))
        )}

        {/* Formulario */}
        <div className="mt-4 flex flex-col gap-2">
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Escribe tu comentario..."
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="self-end bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Comentar
          </button>
        </div>
      </div>
    )
  }
