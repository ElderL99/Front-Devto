'use client'

// src/components/Auth/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react'

// 1) Crea el contexto
export const AuthContext = createContext({
  isAuth: false,
  token: null,
  login: () => {},
  logout: () => {}
})

// 2) Proveedor del contexto
export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState(null)

  // Al montar, chequea localStorage
  useEffect(() => {
    const stored = localStorage.getItem('token')
    if (stored) {
      setToken(stored)
      setIsAuth(true)
    }
  }, [])

  // Función para iniciar sesión
  const login = (newToken) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
    setIsAuth(true)
  }

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
