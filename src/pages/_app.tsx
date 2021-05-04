import { AppProps } from 'next/app';
import Head from 'next/head';
import { ShoppingListProvider } from 'hooks/use-shoppinglist';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingListProvider>
      <Head>
        <title>Shoppingify</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ShoppingListProvider>
  );
}

export default App;
