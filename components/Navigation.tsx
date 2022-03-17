import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ThemeButton } from './ThemeButton';
import Logo from '../public/Logo';
import { Sling as Hamburger } from 'hamburger-react';
const Navigation = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <nav className="border-b border-black h-28 mx-[7vw] max-w-[1024px] w-full flex justify-between items-end pb-4">
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
      </div>
      <ul className="space-x-8 flex items-center hidden md:flex">
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
        <ThemeButton />
      </ul>
      <Link href="/" passHref>
        <a>
          <Logo />
        </a>
      </Link>
      <Link href="/" passHref>
        <a>
          <h5>Schedule an Appointment</h5>
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
