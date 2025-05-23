/** @type {import('next').NextConfig} */
// Aqui precisei adicionar o dominio para que o
// Next/Image funcionasse corretamente. Como o Next, não reconhece o fakestoreapi como domínio confiável,
// precisamos dizer para ele que podemos confiar neste domínio.
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
