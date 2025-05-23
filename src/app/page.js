'use client'
import { useEffect } from 'react'
import api from '@/lib/api'

export default function Home() {
  useEffect(() => {
    // Prueba básica de conexión
    api.get('/posts')
      .then(response => console.log('✅ Datos recibidos:', response.data))
      .catch(error => console.error('❌ Error de conexión:', error))
  }, [])

  return <div>Mira la consola del navegador (F12 → Consola)</div>
}