
'use client'

import RegisterForm from '@/components/Auth/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F6F6] p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Create your account
        </h1>
        <RegisterForm />
      </div>
    </div>
  )
}
