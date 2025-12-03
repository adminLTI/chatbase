/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/help",
        destination: "https://chatbase.co/mNJrhtPVtz8wUEBvDmUo1/help",
      },
      {
        source: "/help/:path*",
        destination: "https://chatbase.co/mNJrhtPVtz8wUEBvDmUo1/help/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
