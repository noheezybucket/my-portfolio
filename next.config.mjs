/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/article",
        destination: "/blog/boost-productivity-2024",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
