
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  basePath: '/loreal',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Configuración de paquetes externos para estabilidad
  serverExternalPackages: ['firebase'],
  // Ajuste de indicadores de desarrollo para compatibilidad con NextJS 15
  devIndicators: {
    position: 'bottom-right',
  },
};

export default nextConfig;
