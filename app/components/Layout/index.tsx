import React from "react";
import Head from "next/head";

import styles from "./index.module.scss";
export default function Layout({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.main}>{children}</div>
    </>
  );
}
