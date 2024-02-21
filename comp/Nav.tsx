'use client';

import { isSidebarOpenAtom } from 'context/atoms';
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from 'framer-motion';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { route: '/', label: 'Home' },
  { route: '/about', label: 'About Us' },
  { route: '/services', label: 'Services' },
  { route: '/blogs', label: 'Blogs' },
  { route: '/portfolio', label: 'Portfolio' },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const [isTop, setIsTop] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);

  const pathname = usePathname();

  console.log('pathname', pathname);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  });

  return (
    <>
      <div
        className={`${
          !isTop && 'shadow-md bg-white'
        } fixed top-0 h-[4rem] w-full z-40 transition`}
      >
        <div className="max-w-7xl mx-auto h-full">
          <div className="container mx-auto flex justify-between gap-4 items-center h-full px-4">
            <Link href="/">
              <div className="flex gap-2 items-center">
                <div className="relative rounded-full overflow-hidden flex-none">
                  <img
                    className="h-10 w-10 sm:h-12 sm:w-12"
                    src="/global/logo.svg"
                    alt=""
                  />
                </div>
                <img
                  src="/global/logo-text-pry.svg"
                  alt="logo"
                  className="h-10"
                />
              </div>
            </Link>

            <div className="gap-4 items-center hidden md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.route}
                  className={`${
                    ((pathname.startsWith('/blogs')
                      && item.route === '/blogs')
                      || pathname === item.route)
                    && 'text-pry-700 font-bold'
                  } text-lg text-pry-700 hover:underline underline-offset-2`}
                  href={item.route}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsSidebarOpen(true)}
              type="button"
              className="md:hidden h-8 w-8"
              aria-label="menu"
            >
              <svg
                className="w-full h-full flex-none"
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="sync">
        {isSidebarOpen && (
          <motion.div
            initial={{
              x: '100%',
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
              // type: 'spring',
            }}
            exit={{
              x: '100%',
            }}
            className="fixed top-0 right-0 h-screen overflow-y-auto z-50 w-[16rem] bg-white py-8 shadow-md px-8 md:hidden"
          >
            <div className="relative">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute right-0"
                type="button"
                aria-label="close"
              >
                <svg
                  fill="none"
                  className="text-red-500 h-8 w-8"
                  strokeWidth={2}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              {navLinks.map((item) => (
                <Link
                  key={item.route}
                  className={`${
                    pathname === item.route && 'text-pry-700 font-bold'
                  } text-lg text-pry-700 hover:underline underline-offset-2`}
                  href={item.route}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
