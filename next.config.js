/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/blog/:slug*",
        headers: [
          {
            key: "x-slug",
            value: ":slug*", // Matched parameters can be used in the value
          },
          {
            key: "x-slug-:slug*", // Matched parameters can be used in the key
            value: "my other custom header value",
          },
        ],
      },
      {
        source: "/",
        headers: [
          {
            key: "cache-control",
            value: "s-maxage=60, stale-while-revalidate=30",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
