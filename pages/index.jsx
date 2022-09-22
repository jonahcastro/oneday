import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../layouts/Banner";
import About from "../layouts/About";
import Services from "../layouts/Services";
import Blog from "../layouts/Blog";
import Contact from "../layouts/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Estate planning for the new age. Setup digital asset trusts quickly, affordably and securely from the comfort of your own home."
        />
        <title>Oneday - Setup Digital Assets Trust Easily &Amp; Securely</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Header />
      <main>
        <Banner />
        <About />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
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
    </Fragment>
  );
}
