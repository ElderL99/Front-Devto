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
    <div className="flex items-center justify-center bg-[#F6F6F6] p-4">
      <div className="w-full max-w-md bg-[#F6F6F6]">
        <div className="p-6 space-y-6">
          {/* Logo + título */}
          <div className="text-center">
            <Link href="/">
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
                alt="DEV Logo"
                className="mx-auto h-12 w-15 mb-4 hover:cursor-pointer"
              />
            </Link>
            <h2 className="text-3xl font-bold">
              Create your account
            </h2>
            <p className="text-gray-500">
              DEV Community is a community of 3,187,701 amazing developers
            </p>
          </div>

          {/* Botones de registro */}
          <div className="space-y-2 w-full mx-[-80px]">
            {providers.map((prov) => (
              <button
                key={prov.name}
                className="w-[600px] h-[50px] flex items-center justify-start border border-gray-200 rounded-lg px-4 py-2 hover:shadow transition-shadow"
              >
                <img
                  src={prov.icon}
                  alt={prov.name}
                  className="h-5 w-5 flex-shrink-0"
                />
                <span className="ml-4 flex-1 text-sm font-medium text-gray-700">
                  Sign up with {prov.name}
                </span>
              </button>
            ))}
          </div>

          {/* Línea divisora */}
          <div className="flex items-center">
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
