'use client'

// src/components/Auth/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react'

// Contexto de autenticación con token y username
export const AuthContext = createContext({
  isAuth: false,
  token: null,
  username: null,
  login: () => {},
  logout: () => {}
})

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState(null)

  // Al iniciar, carga token y username desde localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedUser = localStorage.getItem('username')
    if (storedToken && storedUser) {
      setToken(storedToken)
      setUsername(storedUser)
      setIsAuth(true)
    }
  }, [])

  // Función para iniciar sesión (guarda en estado y localStorage)
  const login = ({ token: newToken, username: newUser }) => {
    localStorage.setItem('token', newToken)
    localStorage.setItem('username', newUser)
    setToken(newToken)  
    setUsername(newUser)
    setIsAuth(true)
  }

  // Función para cerrar sesión (limpia es  tado y localStorage)
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setToken(null)
    setUsername(null)
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, token, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
