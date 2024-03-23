import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from 'ui/Button';

function BlogItem({ blog }: any) {
  let imageUrl = '';
  if (
    blog?.attributes?.Image
      && blog?.attributes?.Image.data
      && blog?.attributes?.Image.data.length > 0
  ) {
    imageUrl = `http://localhost:1337${blog.attributes?.Image.data[0].attributes.url}`;
  }
  return (
    <div
      className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
    >
      <Link href={`/blog/${blog?.id}`} className="relative block aspect-[368/239]">
        <Image priority layout="fill" src={imageUrl} alt={blog?.attributes.Title} fill />
      </Link>

      <div className="px-4">
        <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
          <Link href={`/blog/${blog?.id}`}>
            {blog?.attributes.Title}
          </Link>
        </h3>
        <p className="line-clamp-3">
          {blog?.attributes.Description[0].children[0].text}
        </p>
        <Button clear className="mr-4 mt-4">
          <Link href={`/blog/${blog?.id}`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
}

export default BlogItem;
