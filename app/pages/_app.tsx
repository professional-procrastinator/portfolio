import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

import { MainProvider } from '../hooks/context/main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <NextNprogress color="#ffffff" />
      <Component {...pageProps} />
    </MainProvider>
  );
}

export default MyApp;
