'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'src/lib/api'

export default function CreatePostPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('tags', tags)
    if (imageFile) {
      formData.append('image', imageFile)
    }

    try {
      const token = localStorage.getItem('token')
      const res = await axios.post('/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      router.push(`/posts/${res.data._id}`)
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-600">{error}</p>}

        <div>
          <label htmlFor="title" className="block font-medium mb-1">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="content" className="block font-medium mb-1">Body</label>
          <textarea
            id="content"
            rows={6}
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="tags" className="block font-medium mb-1">Tags (comma-separated)</label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder="e.g. javascript, webdev"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* ESTE BLOQUE ES PARA LA IMAGEN */}
        <div>
          <label htmlFor="image" className="block font-medium mb-1">Image (optional)</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={e => setImageFile(e.target.files[0])}
            className="w-full"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  )
}
