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
    domains: [
      "life-coach-quotes.vercel.app",
      "what-to-read-nu.vercel.app",
      "movie-random-react.vercel.app",
      "next-food-random.vercel.app",
    ],
  },
};

module.exports = nextConfig;
