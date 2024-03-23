import React from 'react';
import Link from 'next/link';

function Category({ cat }: any) {
  console.log('cat>>>>>>', cat.attributes.Title);
  return (
    <ul>
      <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
        <Link href="/blog">{cat.attributes.Title}</Link>
      </li>
    </ul>
  );
}

export default Category;
