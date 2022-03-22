import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-IN">
        <Head>{/* This Head is used for Custom meta tags */}</Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
