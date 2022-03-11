import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { SettingsProvider } from '../hooks/context/settings';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
        <SettingsProvider>
          <NextNProgress color="#ffffff" />
          <Component {...pageProps} />
        </SettingsProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
