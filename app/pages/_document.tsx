import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <title>Arcula</title>
        <meta name="title" content="Arcula" />
        <meta name="description" content="Treasure your privacy with Arcula." />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arcula" />
        <meta property="og:url" content="https://arcula.co/" />
        <meta property="og:title" content="Arcula" />
        <meta
          property="og:description"
          content="Treasure your privacy with Arcula."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://arcula.co/" />
        <meta property="twitter:title" content="Arcula" />
        <meta
          property="twitter:description"
          content="Treasure your privacy with Arcula."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
