import React from 'react';
import Link from 'next/link';
import Logo from '../../public/Logo';
import { AnimatePresence, motion } from 'framer-motion';

const mobileMenuMotion = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.07,
      staggerDirection: 1,

      duration: 0.3,
      bounce: 0.25,
    },
  },
  closed: {
    opacity: 0,
    x: '-100vh',
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
};

const item = {
  open: { opacity: 1, y: 0, x: 0 },
  closed: { opacity: 0, y: -20, x: -10 },
};

const NavMenu = ({ setOpen, isOpen }) => {
  return (
    <motion.div
      variants={mobileMenuMotion}
      initial="closed"
      animate="open"
      exit="closed"
      className="absolute left-0 h-screen bg-black w-[90vw] z-10"
    >
      <div className="flex justify-between h-28 border-b-elite border-b-2 mx-4 items-end pb-6">
        <Link href="/" passHref>
          <a className="pl-3">
            <Logo />
          </a>
        </Link>

        <button
          onClick={() => setOpen(false)}
          className="text-elite w-6 h-6 mr-3 mb-3"
        >
          <svg
            viewBox="0 0 329.26933 329"
            fill="white"
            className="w-4 h-4 fill-elite"
          >
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
          </svg>
        </button>
      </div>
      <ul className="space-y-6 mx-4 mt-6">
        <motion.li variants={item}>
          <Link href="/" passHref>
            <a>
              <h6 className="hover:border-b hover:-mb-[1px]">About</h6>
            </a>
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href="/" passHref>
            <a>
              <h6>Interior</h6>
            </a>
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href="/" passHref>
            <a>
              <h6>Exterior</h6>
            </a>
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default NavMenu;
