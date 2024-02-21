'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import getBlogs from 'section/home/getBlogs';
import Button from 'ui/Button';
import Spinner from 'ui/Spinner';
import { useIntersectionObserver } from 'usehooks-ts';
import Pic from 'util/Pic';
import bloggers from './bloggers';

const getBlogger = (author: string) => {
  const blogger = bloggers.filter((item) => item.id === author)[0];

  return blogger;
};

type BlogListType =
  | {
    category: string;
    metadata: {
      author: string;
      date: string;
      timeToRead: string;
      header: string;
      oneLineSummary: string;
      displayImg: string;
    };
    title: string;
    number: number;
    comments: {
      nodes: {
        body: string;
      }[];
    };
  }[]
  | never[];

type Props = {
  blogList: BlogListType;
  paginate?: boolean;
  hasNextPage: boolean;
  receivedEndCursor?: string;
  category?: string;
};

export default function BlogGrid({
  blogList,
  paginate,
  hasNextPage,
  receivedEndCursor,
  category,
}: Props) {
  const [clientBlogList, setClientBlogList] = useState(blogList);
  const [clienthasNextPage, setClienthasNextPage] = useState(hasNextPage);
  const [clientEndCursor, setClientEndCursor] = useState(receivedEndCursor);

  const scrollRef = useRef<HTMLDivElement>(null);

  const observer = useIntersectionObserver(scrollRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (!paginate) return;

    const viewMoreHandler = async () => {
      const {
        blogList: foundBlogList,
        hasNextPage: foundHasNextPage,
        receivedEndCursor: foundEndCursor,
      } = await getBlogs({
        blogsToShow: 10,
        endCursor: clientEndCursor,
        category,
      });

      setClientBlogList((prev) => [...prev, ...foundBlogList]);
      setClienthasNextPage(foundHasNextPage);
      setClientEndCursor(foundEndCursor);
    };
    if (observer?.isIntersecting && clienthasNextPage) {
      viewMoreHandler();
    }
  }, [
    category,
    clientEndCursor,
    clienthasNextPage,
    observer?.isIntersecting,
    paginate,
  ]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {clientBlogList.map((item) => (
          <div
            className="col-span-1 bg-white rounded-xl shadow h-full flex flex-col"
            key={item.number}
          >
            {item.metadata.displayImg && (
              <div className="overflow-hidden h-[15rem] w-full rounded-t-lg">
                <Pic src={item.metadata.displayImg} objectFit="cover" alt="" />
              </div>
            )}
            <div className="flex flex-col gap-4 justify-between px-4 py-2">
              <div className="">
                <p className="font-semibold text-base mt-3 mb-1 text-slate-500">
                  {item.category}
                </p>
                <p className="subheader mb-1 line-clamp-1">
                  {item.metadata?.header}
                </p>
                <p className="text-base line-clamp-2">
                  {item.metadata?.oneLineSummary}
                </p>
              </div>
              <div className="">
                <div className="flex gap-2 items-center mb-1">
                  <div className="rounded-full h-10 w-10 flex-none overflow-hidden">
                    <Pic
                      src={getBlogger(item.metadata.author).profilePic}
                      alt="profile pic"
                    />
                  </div>
                  <div className="">
                    <p className="text-sm font-semibold">
                      {getBlogger(item.metadata.author).name}
                    </p>
                    <p className="text-sm">
                      {item.metadata?.date}
                      &nbsp;•&nbsp;
                      {item.metadata?.timeToRead}
                      {' '}
                      read
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <Link href={`/blogs/${item.number}`}>
                    <Button clear>View</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12" ref={scrollRef}>
        {!paginate && (
          <Link href="/blogs">
            <Button>View all Blogs</Button>
          </Link>
        )}

        {paginate && clienthasNextPage ? (
          <div className="flex gap-2 items-center flex-nowrap">
            <p>Loading...</p>
            <Spinner clear />
          </div>
        ) : (
          paginate
          && !clienthasNextPage && (
            <p className="mt-6">
              You&apos;ve reached the end.
              {' '}
              <Button
                sm
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="flex gap-1 flex-nowrap items-center">
                  Go up
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    strokeWidth={3}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                    />
                  </svg>
                </div>
              </Button>
            </p>
          )
        )}
      </div>
    </>
  );
}
