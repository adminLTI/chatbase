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

      // ✅ REQUIRED: proxy static assets
      {
        source: "/__cb/:path*",
        destination: "https://chatbase.co/__cb/:path*",
      },

      // ✅ REQUIRED: proxy chat API endpoints (scoped to your agent)
      {
        source: "/api/chat/mNJrhtPVtz8wUEBvDmUo1/:path*",
        destination: "https://chatbase.co/api/chat/mNJrhtPVtz8wUEBvDmUo1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
