/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2560],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      {
        source: "/get-a-quote",
        destination: "/book-a-consultation",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/who-we-are",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/landmark-cases",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
