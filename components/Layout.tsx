import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navigation from './Navigation';
import { ThemeButton } from './ThemeButton';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="border-b border-gray-200 dark:border-gray-700 h-full w-full flex justify-center">
      <Navigation />
    </header>
    <section className="w-full mx-auto bg-white dark:bg-black flex justify-center">
      <div className="mx-[7vw] max-w-[1440px] w-full">{children}</div>
    </section>
  </div>
);

export default Layout;
