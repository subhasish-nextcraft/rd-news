'use client';

import Link from 'next/link';
import { useState } from 'react';

import { isCategorybarOpenAtom } from 'context/atoms';
import { useAtom } from 'jotai';

const categoryLinks = [
  { route: '/category/For You', label: 'For You' },
  { route: '/category/Football', label: 'Football' },
  { route: '/category/Entertainment', label: 'Entertainment' },
  { route: '/category/Politics', label: 'Politics' },
  { route: '/category/technology', label: 'technology' },
  { route: '/category/spirituality', label: 'spirituality' },
];

function SidebarThreads() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="overflow-y-auto px-6 flex flex-col gap-4 scrollbar-thumb-gray-500 scrollbar-track-pry-800 scrollbar-thin scrollbar-thumb-rounded-full pb-10 h-screen">
        <div className="mt-20">
          {categoryLinks.map((item) => (
            <div className="flex gap-2 mt-4">
              <p className="bg-slate-400 rounded-full h-6 w-6 flex-none" />
              <Link href={item.route}>
                <p>{item.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CategoryMenu() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCategorybarOpen, setIsCategorybarOpen] = useAtom(
    isCategorybarOpenAtom,
  );

  return (
    <div
      className={`${
        isCategorybarOpen ? 'w-[16rem]' : 'w-6'
      } flex sticky h-full transition-all top-0 left-0`}
    >
      <div className="overflow-hidden bg-secondary">
        <SidebarThreads />
      </div>
      <button
        type="button"
        className="cursor-pointer flex items-center bg-slate-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsCategorybarOpen((prev) => !prev)}
      >
        <div className={`${!isHovered && 'opacity-30'} transition-opacity`}>
          {/* eslint-disable-next-line no-nested-ternary */}
          {!isCategorybarOpen ? (
            <svg
              fill="none"
              strokeWidth={4.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-6 w-6 text-pry-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          ) : isCategorybarOpen && isHovered ? (
            <svg
              fill="none"
              strokeWidth={4.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-6 w-6 text-pry-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          ) : (
            <div className="bg-black transition h-8 w-2 mx-2 rounded-full" />
          )}
        </div>
      </button>
    </div>
  );
}
