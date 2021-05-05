import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import Head from 'next/head';
import { ShoppingListProvider } from 'hooks/use-shoppinglist';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ShoppingListProvider>
        <Head>
          <title>Shoppingify</title>
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ShoppingListProvider>
    </Provider>
  );
}

export default App;
