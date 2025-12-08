/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Connection",
          value: "close",
        },
      ],
    },
    {
      source: "/:all*(svg|jpg|png)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=2629743, must-revalidate",
        },
      ],
    },
  ],
  rewrites: async () => [
    {
      source: "/api/info",
      destination: "/info.json",
    },
  ],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL("https://life-coach-quotes.vercel.app"),
      new URL("https://what-to-read-nu.vercel.app"),
      new URL("https://movie-random-react.vercel.app"),
      new URL("https://next-food-random.vercel.app"),
    ],
  },
};

module.exports = nextConfig;
