import React from 'react';
import { AppProps } from 'next/app';

import '../styles/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-white dark:bg-black transition-all">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
