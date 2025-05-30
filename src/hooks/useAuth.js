
'use client'

import { useContext } from 'react'
import { AuthContext } from '@/components/Auth/AuthContext'

export default function useAuth() {
  return useContext(AuthContext)    
}
