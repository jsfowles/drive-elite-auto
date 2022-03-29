import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ThemeButton } from '../ThemeButton';
import Logo from '../../public/Logo';
import { Sling as Hamburger } from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';

const DesktopNav = () => {
  return (
    <nav className="border-b border-black dark:border-elite h-28 mx-[7vw] max-w-[1024px] w-full grid-cols-3 justify-center items-end grid pb-4 relative">
      <ul className="md:space-x-4 lg:space-x-8 flex hidden md:flex">
        <li>
          <Link href="/" passHref>
            <a>
              <h5 className="hover:border-b hover:-mb-[1px]">About</h5>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a>
              <h5>Interior</h5>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a>
              <h5>Exterior</h5>
            </a>
          </Link>
        </li>
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
