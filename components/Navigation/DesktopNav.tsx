import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ThemeButton } from '../ThemeButton';
import Logo from '../../public/Logo';

const NAV_ITEMS = [
  { id: 0, title: 'Home', route: '/' },
  { id: 1, title: 'About', route: '/about' },
  { id: 2, title: 'Interiors', route: '/interiors' },
  { id: 3, title: 'Exteriors', route: '/exteriors' },
];

const DesktopNav = () => {
  return (
    <nav className="z-50 border-b border-black dark:border-elite h-28 mx-[7vw] max-w-[1024px] w-full grid-cols-3 justify-center items-end grid pb-4 relative">
      <ul className="md:space-x-4 lg:space-x-8 flex hidden md:flex z-50">
        {NAV_ITEMS.map(({ id, title, route }) => (
          <li key={id}>
            <Link href={route} passHref>
              <a>
                <h5 className="hover:border-b hover:-mb-[1px]">{title}</h5>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" passHref>
        <a className="grid justify-items-center min-w-[150px]">
          <Logo />
        </a>
      </Link>
      <div className="flex justify-end items-end">
        <Link href="/" passHref>
          <a className="grid items-center pr-4">
            <h5>Contact Us</h5>
          </a>
        </Link>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default DesktopNav;
