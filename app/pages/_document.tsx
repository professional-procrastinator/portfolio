import { Html, Head, Main, NextScript } from 'next/document';
import Banner from '../public/banner.png';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nishit Jha" />
        <meta property="og:url" content="https://nishitjha.vercel.app" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nishitjha.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
