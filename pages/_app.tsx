import "@/styles/globals.css";
import "@/styles/custom.scss";

import type { AppProps, AppContext } from "next/app";
import Head from "next/head";

import App from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://www.bottegaveneta.com/on/demandware.static/Sites-BV-R-WEUR-Site/-/default/dw47cf45e1/images/favicons/favicon-96x96.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
