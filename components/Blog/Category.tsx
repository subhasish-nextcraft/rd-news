import React from 'react';
import Link from 'next/link';

function Category({ cat }: any) {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li className="me-2">
        <Link
          href="/"
          aria-current="page"
          className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
        >
          {cat.attributes.Title}
        </Link>
      </li>
    </ul>
  );
}

export default Category;
