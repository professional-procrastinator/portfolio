import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
