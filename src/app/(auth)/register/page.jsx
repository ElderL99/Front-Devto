// src/app/(auth)/register/page.jsx
'use client'

import RegisterForm from '@/components/Auth/RegisterForm'
import Link from 'next/link'

const providers = [
  { name: 'Apple',    icon: '/SvgLogin/apple.svg' },
  { name: 'Facebook', icon: '/SvgLogin/facebook.svg' },
  { name: 'Forem',    icon: '/SvgLogin/forem.svg' },
  { name: 'GitHub',   icon: '/SvgLogin/github.svg' },
  { name: 'Google',   icon: '/SvgLogin/google.svg' },
  { name: 'Twitter',  icon: '/SvgLogin/x.svg' },
  { name: 'Email',    icon: '/SvgLogin/outlook.svg' },
]

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F6F6] px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 space-y-6">
          {/* Logo + título */}
          <div className="text-center">
            <Link href="/">
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
                alt="DEV Logo"
                className="mx-auto h-12 w-auto mb-4 cursor-pointer"
              />
            </Link>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Create your account
            </h2>
            <p className="text-gray-500">
              DEV Community is a community of 3,187,701 amazing developers
            </p>
          </div>

          {/* Botones de registro sociales */}
          <div className="space-y-2">
            {providers.map((prov) => (
              <button
                key={prov.name}
                className="w-full h-12 flex items-center justify-center border border-gray-200 rounded-lg px-4 py-2 hover:shadow-sm transition-shadow bg-white"
              >
                <img
                  src={prov.icon}
                  alt={prov.name}
                  className="h-5 w-5 flex-shrink-0"
                />
                <span className="ml-3 flex-1 text-sm font-medium text-gray-700 text-center">
                  Sign up with {prov.name}
                </span>
              </button>
            ))}
          </div>

          {/* Línea divisoria */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-200" />
            <span className="px-2 text-xs text-gray-400">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Formulario de registro */}
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
