import { Fragment } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Blog() {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog</title>
      </Head>
      <Header />
      <main className="h-screen"></main>
      <Footer />
    </Fragment>
  );
}
