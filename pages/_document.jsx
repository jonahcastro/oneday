import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir="ltr" className="scroll-smooth">
      <Head />
      <body className="bg-whiteantialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
