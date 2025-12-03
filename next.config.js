/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination:
          "https://www.chatbase.co/mNJrhtPVtz8wUEBvDmUo1/help/:path*"
      }
    ];
  }
};

module.exports = nextConfig;
