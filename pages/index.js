import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/help");
  }, [router]);

  return <div>Loading chat…</div>;
}
