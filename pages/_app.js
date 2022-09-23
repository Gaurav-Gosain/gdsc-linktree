import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="description" content="GDSC Link Tree" />
        <title>GDSC Link Tree</title>
        <link rel="icon" href="/gdsc-logo.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
