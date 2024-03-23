/* eslint-disable react/no-array-index-key */
import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import RelatedPost from 'components/Blog/RelatedPost';
import SharePost from 'components/Blog/SharePost';

async function fetchBlog(id: number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
  };

  try {
    const res = await fetch(`http://127.0.0.1:1337/api/blogs/${id}?populate=*`, options);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }

  return null; // Add a return statement at the end of the function
}

async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
  };
  try {
    const res = await fetch('http://localhost:1337/api/categories', options);
    const response = await res.json();
    return response;
  } catch (err) {
    console.log(err);
  }

  return null; // Add a return statement at the end of the function
}

export const metadata: Metadata = {
  title: 'Blog Details Page - Solid SaaS Boilerplate',
  description: 'This is Blog details page for Solid Pro',
  // other metadata
};

async function page({ params }: any) {
  const categories = await fetchCategories();
  const blog = await fetchBlog(params.id);

  let imageUrl = '';
  if (blog.data.attributes.Image && blog.data.attributes.Image.data && blog.data.attributes.Image.data.length > 0) {
    imageUrl = `http://localhost:1337${blog.data.attributes.Image.data[0].attributes.url}`;
  }
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="md:w-1/2 lg:w-[32%]">
            <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
              <form action="https://formbold.com/s/unique_form_id" method="POST">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                  />

                  <button
                    type="button"
                    className="absolute right-0 top-0 p-5"
                    aria-label="search-icon"
                  >
                    <svg
                      className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <Categories categories={categories} />
            
            {/* <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
              <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">Categories</h4>

              <ul>
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                  <Link href="/blog">Events</Link>
                </li>
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                  <Link href="/blog">Grids</Link>
                </li>
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                  <Link href="/blog">News</Link>
                </li>
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                  <Link href="/blog">Rounded</Link>
                </li>
              </ul>
            </div> */}

            {/* <RelatedPost /> */}
          </div>

          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <div className="mb-10 w-full overflow-hidden ">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={imageUrl}
                    alt={imageUrl}
                    fill
                    className="rounded-md object-cover object-center"
                  />
                </div>
              </div>

              <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {blog.data.attributes.Title}
              </h2>

              <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                <li>
                  <span className="text-black dark:text-white">Author: </span>
                  {' '}
                  Jhon Doe
                </li>
                <li>
                  <span className="text-black dark:text-white">
                    Published On:
                    {' '}
                    {new Date(blog.data.attributes.publishedAt).toLocaleString()}
                  </span>
                  {' '}
                </li>
                <li>
                  <span className="text-black dark:text-white">Category:</span>
                  Events
                </li>
              </ul>

              <div className="blog-details">
                <p>
                  {blog.data.attributes.Description.map((paragraph: any, index: number) => (
                    <p key={index}>
                      {paragraph.children.map((child: any, childIndex: number) => (
                        <span key={childIndex}>{child.text}</span>
                      ))}
                    </p>
                  ))}
                </p>

                <div className="flex flex-wrap gap-5">
                  <Image src={imageUrl} width={350} height={200} alt="image" />
                  <Image src={imageUrl} width={350} height={200} alt="image" />
                </div>

                <p>
                  {blog.data.attributes.Description.map((paragraph: any, index: number) => (
                    <p key={index}>
                      {paragraph.children.map((child: any, childIndex: number) => (
                        <span key={childIndex}>{child.text}</span>
                      ))}
                    </p>
                  ))}
                </p>
              </div>

              <SharePost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
