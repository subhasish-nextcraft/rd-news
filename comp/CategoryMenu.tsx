'use client';

import { isCategorybarOpenAtom } from 'context/atoms';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useState } from 'react';

const categoryLinks = [
  { route: '/category/For You', label: 'For You' },
  { route: '/category/Football', label: 'Football' },
  { route: '/category/Entertainment', label: 'Entertainment' },
  { route: '/category/Politics', label: 'Politics' },
  { route: '/category/technology', label: 'technology' },
  { route: '/category/spirituality', label: 'spirituality' },
];

export default function CategoryMenu() {
  // const [isCategorybarOpen, setIsCategorybarOpen] = useAtom(
  //   isCategorybarOpenAtom,
  // );
  const [isCategorybarOpen, setIsCategorybarOpen] = useState(true);

  return (
    <div className="relative">
      <AnimatePresence mode="sync">
        {isCategorybarOpen && (
          <motion.div
            initial={{
              x: '-5rem',
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            exit={{
              x: '-5rem',
            }}
            className="fixed top-0 left-0 h-screen w-[16rem] z-40 transition bg-blue-500 px-4"
          >
            <div className="mt-6">
              {categoryLinks.map((item) => (
                <div className="flex gap-2 mt-3">
                  <p className="bg-slate-400 rounded-full h-6 w-6 flex-none" />
                  <Link href={item.route}>
                    <p>{item.label}</p>
                  </Link>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="absolute -right-6 h-screen flex items-center bg-slate-200 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setIsCategorybarOpen((prev) => !prev)}
            >
              {isCategorybarOpen ? (
                <svg
                  fill="none"
                  strokeWidth={2}
                  className="h-6 w-6 flex-none text-pry-700"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  fill="none"
                  strokeWidth={2}
                  className="h-6 w-6 flex-none text-pry-700"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
