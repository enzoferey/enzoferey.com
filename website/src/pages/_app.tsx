import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* Search engines */}
        <title>Enzo Ferey</title>
        <meta
          name="description"
          content="Learning to be the developer you want to work with | React.js lover | Maker"
        />
        <meta name="image" content="https://enzoferey.com/og-image.png" />
        {/* Schema.org for Google */}
        <meta itemProp="name" content="Enzo Ferey" />
        <meta
          itemProp="description"
          content="Learning to be the developer you want to work with | React.js lover | Maker"
        />
        <meta itemProp="image" content="https://enzoferey.com/og-image.png" />
        {/* Twitter */}
        <meta name="twitter:title" content="Enzo Ferey" />
        <meta
          name="twitter:description"
          content="Learning to be the developer you want to work with | React.js lover | Maker"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@enzo_ferey" />
        <meta name="twitter:creator" content="@enzo_ferey" />
        <meta
          name="twitter:image"
          content="https://enzoferey.com/og-image.png"
        />
        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta name="og:title" content="Enzo Ferey" />
        <meta
          name="og:description"
          content="Learning to be the developer you want to work with | React.js lover | Maker"
        />
        <meta name="og:site_name" content="Enzo Ferey" />
        <meta name="og:image" content="https://enzoferey.com/og-image.png" />
        <meta name="og:url" content="https://enzoferey.com" />
        <meta name="og:type" content="website" />

        {/* Webmentions */}
        <link
          rel="webmention"
          href="https://webmention.io/enzoferey.com/webmention"
        />
        <link
          rel="pingback"
          href="https://webmention.io/enzoferey.com/xmlrpc"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
