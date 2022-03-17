import React from 'react';
import { AppProps } from 'next/app';

import '../styles/reset.css';
import '../styles/typography.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <div className="bg-white dark:bg-black transition-all">
    <Component {...pageProps} />
    // </div>
  );
}

export default MyApp;
