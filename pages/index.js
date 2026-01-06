// pages/index.js

export async function getServerSideProps({ res }) {
  const upstreamUrl = "https://www.chatbase.co/mNJrhtPVtz8wUEBvDmUo1/help";

  const upstream = await fetch(upstreamUrl, {
    headers: {
      // Keep it simple + avoid compressed edge cases
      "accept-encoding": "identity",
      "user-agent": "Mozilla/5.0"
    }
  });

  // Copy status + content type
  res.statusCode = upstream.status;
  const contentType = upstream.headers.get("content-type") || "text/html; charset=utf-8";
  res.setHeader("content-type", contentType);

  // Optional: avoid caching while you test
  res.setHeader("cache-control", "no-store");

  const body = await upstream.text();
  res.end(body);

  return { props: {} };
}

export default function Home() {
  return null;
}
