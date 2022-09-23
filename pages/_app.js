import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="GDSC Link Tree" />
        <title>GDSC Link Tree</title>
        <link rel="icon" href="/gdsc-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
