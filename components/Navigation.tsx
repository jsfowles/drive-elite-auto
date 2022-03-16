import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ThemeButton } from './ThemeButton';
import Logo from '../public/Logo';
import { Sling as Hamburger } from 'hamburger-react';
const Navigation = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <nav className="h-20 mx-[7vw] max-w-[1440px] w-full flex justify-between items-center">
      <Link href="/" passHref>
        <a className="h-14">
          <Logo />
        </a>
      </Link>
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
      </div>
      <ul className="space-x-4 flex items-center hidden md:flex">
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
