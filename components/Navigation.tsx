import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ThemeButton } from './ThemeButton';
import Logo from '../public/Logo';

const Navigation = () => {
  return (
    <nav className="h-20 mx-[7vw] max-w-[1440px] w-full flex justify-between items-center">
      <Link href="/" passHref>
        <a className="h-14">
          <Logo />
        </a>
      </Link>
      <ul className="flex space-x-4 flex items-center">
        <ThemeButton />
        <li>
          <Link href="/" passHref>
            About
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            Interior
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            Exterior
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
