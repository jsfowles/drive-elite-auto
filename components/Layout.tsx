import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import DesktopNav from './Navigation/DesktopNav';

import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';
import MobileNavigation from './Navigation/MobileNav';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Work+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="w-full bg-white dark:bg-black flex justify-center relative">
        {isTabletOrMobile ? <MobileNavigation /> : <DesktopNav />}
      </header>
      <main className=" w-full mx-auto bg-white dark:bg-black flex justify-center">
        <div className=" max-w-[1000px] mx-[7vw] w-full">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
