import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-18CDB3VC1J"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-18CDB3VC1J');
            `,
          }}
        />
      </Head>

      <iframe
        src="https://www.chatbase.co/mNJrhtPVtz8wUEBvDmUo1/help"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
        allow="clipboard-write"
      />
    </>
  );
}
