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

        <meta name="title" content="Nishit Jha" />
        <meta name="description" content="My portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nishit Jha" />
        <meta property="og:url" content="https://nishitjha.vercel.app" />
        <meta property="og:title" content="Nishit Jha" />
        <meta property="og:description" content="My portfolio" />
        <meta
          property="og:image"
          content="https://media.discordapp.net/attachments/945275718793834526/948948146942259260/unknown.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nishitjha.vercel.app" />
        <meta property="twitter:title" content="Nishit Jha" />
        <meta property="twitter:description" content="My portfolio" />
        <meta
          property="twitter:image"
          content="https://media.discordapp.net/attachments/945275718793834526/948948146942259260/unknown.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
