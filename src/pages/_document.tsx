import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full antialiased js-focus-visible dark">
      <Head>
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
