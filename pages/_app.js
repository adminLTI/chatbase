// pages/_app.js
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-18CDB3VC1J"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-18CDB3VC1J');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
