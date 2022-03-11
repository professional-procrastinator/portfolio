import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { SettingsProvider } from '../hooks/context/settings';
import { SessionProvider } from 'next-auth/react';
import { MainProvider } from '../hooks/context/main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
        <MainProvider>
          <SettingsProvider>
            <NextNProgress color="#ffffff" />
            <Component {...pageProps} />
          </SettingsProvider>
        </MainProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
