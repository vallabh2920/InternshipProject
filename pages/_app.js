import "../public/css/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dailybla</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
