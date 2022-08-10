import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'


export default function Document() {

  
  return (
    <Html lang="en" dir="ltr" className="scroll-smooth">
       <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      <Head />
      <body className="bg-whiteantialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
