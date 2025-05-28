// src/app/login/page.jsx
'use client'

import LoginForm from '@/components/Auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F6F6] p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Log in to your account
        </h1>
        <LoginForm />
      </div>
    </div>
  )
}
