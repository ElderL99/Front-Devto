
'use client'

import LoginForm from '@/components/Auth/LoginForm'

const providers = [
  { name: 'Apple',    icon: '/SvgLogin/apple.svg' },
  { name: 'Facebook', icon: '/SvgLogin/facebook.svg' },
  { name: 'Forem',    icon: '/SvgLogin/forem.svg' },
  { name: 'GitHub',   icon: '/SvgLogin/github.svg' },
  { name: 'Google',   icon: '/SvgLogin/google.svg' },
  { name: 'Twitter',  icon: '/SvgLogin/x.svg' },
  { name: 'Email',    icon: '/SvgLogin/outlook.svg' },
]

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F6F6] p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-6">
          {/* Logo + título */}
          <div className="text-center">
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
              alt="DEV Logo"
              className="mx-auto h-12 w-12 mb-4"
            />
            <h1 className="text-2xl font-bold">
              Log in to your account
            </h1>
          </div>

          {/* botones de login */}
          <div className="space-y-2">
            {providers.map((prov) => (
              <button
                key={prov.name}
                className="w-full flex items-center justify-start border border-gray-200 rounded-lg px-4 py-2 hover:shadow transition-shadow"
              >
                <img
                  src={prov.icon}
                  alt={prov.name}
                  className="h-5 w-5 flex-shrink-0"
                />
                <span className="ml-4 flex-1 text-sm font-medium text-gray-700">
                  Sign in with {prov.name}
                </span>
              </button>
            ))}
          </div>

          {/* linea divisora */}
          <div className="flex items-center">
            <hr className="flex-1 border-gray-200" />
            <span className="px-2 text-xs text-gray-400">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* formulario de login */}
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
