// next.config.mjs   (o next.config.js si usas CJS)
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
            // Avatares únicos de https://i.pravatar.cc
        {
          protocol: 'https',
          hostname: 'i.pravatar.cc',
          port: '',          
          pathname: '/**',   
        },
            // Imágenes subidas por mi API local (dev)
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '4000',
          pathname: '/uploads/**',
        },
        // voy a agregar aquí otros dominios/CDN que usaré en producción:
        // {
        //   protocol: 'https',
        //   hostname: 'tu-dominio.com',
        //   pathname: '/**',
        // },
      ],
    },
  };
  
  export default nextConfig;
  