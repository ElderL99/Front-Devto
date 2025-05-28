'use client'

import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'
import { AuthContext } from '@/components/Auth/AuthContext'

export default function LoginForm() {
  const router = useRouter()
  const { login } = useContext(AuthContext)
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data } = await api.post('/auth/login', form)
      // Guardamos el token en el contexto
      login(data.token)
      router.push('/')
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.error || 'Error en el login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          loading ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'
        } transition`}
      >
        {loading ? 'Logging in…' : 'Log in'}
      </button>
    </form>
  )
}