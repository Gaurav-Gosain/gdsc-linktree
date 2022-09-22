import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="GDSC Link Tree" />
        <title>GDSC Link Tree</title>
        <link rel="icon" href="/gdsc-logo.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}