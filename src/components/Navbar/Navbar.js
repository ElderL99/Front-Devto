export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-3">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Contenedor izquierdo: logo + formulario */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    <img
                        src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                        alt="Logo"
                        className="h-8 flex-shrink-0"
                    />
                    <form
                        method="get"
                        action="/search"
                        role="search"
                        acceptCharset="UTF-8"
                        className="flex items-center px-3 py-2 border rounded w-full max-w-xl bg-white"
                    >
                        {/* Icono de lupa + input */}
                        <div className="flex items-center flex-1 gap-2 min-w-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="text-gray-600 flex-shrink-0"
                            >
                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z" />
                            </svg>
                            <input
                                type="text"
                                name="q"
                                placeholder="Search..."
                                className="w-full outline-none text-sm text-gray-800 min-w-0"
                                aria-label="Search term"
                            />
                        </div>

                        {/* Powered by Algolia */}
                        <a
                            href="https://www.algolia.com/developers/?utm_source=devto&utm_medium=referral"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs flex items-center gap-1 ml-3 text-gray-500 hover:text-black whitespace-nowrap"
                        >
                            Powered by
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 500 500.34"
                            >
                                <path d="M250,0C113.38,0,2,110.16,.03,246.32c-2,138.29,110.19,252.87,248.49,253.67,42.71,.25,83.85-10.2,120.38-30.05,3.56-1.93,4.11-6.83,1.08-9.52l-23.39-20.74c-4.75-4.22-11.52-5.41-17.37-2.92-25.5,10.85-53.21,16.39-81.76,16.04-111.75-1.37-202.04-94.35-200.26-206.1,1.76-110.33,92.06-199.55,202.8-199.55h202.83V407.68l-115.08-102.25c-3.72-3.31-9.43-2.66-12.43,1.31-18.47,24.46-48.56,39.67-81.98,37.36-46.36-3.2-83.92-40.52-87.4-86.86-4.15-55.28,39.65-101.58,94.07-101.58,49.21,0,89.74,37.88,93.97,86.01,.38,4.28,2.31,8.28,5.53,11.13l29.97,26.57c3.4,3.01,8.8,1.17,9.63-3.3,2.16-11.55,2.92-23.6,2.07-35.95-4.83-70.39-61.84-127.01-132.26-131.35-80.73-4.98-148.23,58.18-150.37,137.35-2.09,77.15,61.12,143.66,138.28,145.36,32.21,.71,62.07-9.42,86.2-26.97l150.36,133.29c6.45,5.71,16.62,1.14,16.62-7.48V9.49C500,4.25,495.75,0,490.51,0H250Z" />
                            </svg>
                            Algolia
                        </a>
                    </form>
                </div>

                {/* Contenedor derecho: botones */}
                <div className="flex gap-4 ml-6 flex-shrink-0">
                    <button className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-100 text-gray-200 hover:text-gray-800">
                        Login
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Create Account
                    </button>
                </div>
            </div>
        </nav>
    );
}
