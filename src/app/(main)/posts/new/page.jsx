// src/app/posts/new/page.jsx
'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import axios from '@/lib/api'
import {
  Bold,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Type,
  Quote,
  Code,
  Zap,
  Image as ImageIcon,
} from 'lucide-react'

export default function CreatePostPage() {
  const router = useRouter()
  const fileInputRef = useRef(null)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tagsArray, setTagsArray] = useState([])
  const [tagInput, setTagInput] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Abrir selector de imagen
  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImageFile(file)
    setPreviewUrl(URL.createObjectURL(file))
  }

  // Añadir tag al array
  const handleAddTag = () => {
    const t = tagInput.trim().replace(/,+$/, '')
    if (t && !tagsArray.includes(t)) {
      setTagsArray((prev) => [...prev, t])
    }
    setTagInput('')
  }

  // Al pulsar espacio o coma en el input de tags
  const handleTagKeyDown = (e) => {
    if (e.key === ' ' || e.key === ',') {
      e.preventDefault()
      handleAddTag()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('tags', tagsArray.join(','))
    if (imageFile) formData.append('image', imageFile)

    try {
      const token = localStorage.getItem('token')
      const res = await axios.post('/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      router.push(`/posts/${res.data._id}`)
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen  bg-[#F6F6F6] py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-[3fr_1fr] bg-white rounded-lg overflow-hidden ">
         
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Cover image */}
            <div>
              <button
                type="button"
                onClick={handleImageClick}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                {imageFile ? 'Change cover image' : 'Add a cover image'}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Cover preview"
                  className="mt-4 w-full h-48 object-cover rounded"
                />
              )}
            </div>

            {/* Title */}
            <div>
              <input
                type="text"
                placeholder="New post title here..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full text-5xl placeholder-[#525252]  font-bold focus:outline-none "
              />
            </div>

            {/* Tags */}
            <div>
              
              <div className="flex flex-wrap gap-2   rounded px-2 py-1">
                {tagsArray.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() =>
                        setTagsArray((prev) => prev.filter((t) => t !== tag))
                      }
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  onBlur={handleAddTag}
                  placeholder="Add another..."
                  className="flex-1 outline-none p-1 text-sm placeholder-gray-400"
                />
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center space-x-4 border-t border-b border-gray-200 py-2">
              {[Bold, Italic, LinkIcon, List, ListOrdered, Type, Quote, Code, Zap, ImageIcon].map(
                (Icon, i) => (
                  <button key={i} type="button" className="p-1 hover:bg-gray-100 rounded">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </button>
                )
              )}
            </div>

            {/* Content area */}
            <textarea
              rows={10}
              placeholder="Write your post content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full resize-none placeholder-gray-400 text-sm focus:outline-none"
            />

            
            {error && <p className="text-red-600">{error}</p>}
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Publishing...' : 'Publish'}
              </button>
              <button
                type="button"
                className="text-gray-600 hover:underline text-sm"
              >
                Save draft
              </button>
              <button
                type="button"
                className="ml-auto text-gray-500 hover:text-gray-700"
                onClick={() => router.back()}
              >
                ×
              </button>
            </div>
          </form>

          
          <aside className="p-6 bg-[#F6F6F6]">
            
            <h4 className="font-semibold mb-2">Writing a Great Post Title</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Think of your post title
                as a super short (but compelling!) description.
              </li>
              <li>
                Use keywords where appropriate to help ensure people can
                find your post by search.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}
