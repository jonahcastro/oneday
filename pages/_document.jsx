import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" dir="ltr" className="scroll-smooth">
      <Head />
      <body className="bg-white antialiased 3xl:mx-auto 3xl:max-w-screen-2xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
