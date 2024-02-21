import parse, { Element } from 'html-react-parser';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Blogs from 'section/home/Blogs';
import CTA from 'section/home/CTA';
import Pic from 'util/Pic';
import bloggers from '../bloggers';
import './blogs.css';
import getSingleBlog from './getSingleBlog';

export const revalidate = 21600;

type Props = {
  params: { slug: string };
};

export default async function page({ params }: Props) {
  const blog = await getSingleBlog(params.slug);

  if (!blog) {
    notFound();
  }
  const internalLinks: string[] = [];

  const wholeBlog = parse(blog?.bodyHTML!, {
    // @ts-ignore
    transform(reactNode, domNode) {
      if (
        domNode instanceof Element
        && domNode?.attribs?.id?.startsWith('user-content-')
      ) {
        if (domNode?.attribs?.id?.startsWith('user-content-video')) {
          return (
            <iframe
              // @ts-ignore
              title={`video ${domNode.children[0]?.data}`}
              className="min-h-[12rem] sm:min-h-[15rem] lg:min-h-[18rem] rounded-2xl"
              width="100%"
              height="100%"
              // @ts-ignore
              src={`https://www.youtube.com/embed/${domNode.children[0]?.data}`}
            />
          );
        }
        internalLinks.push(domNode?.attribs?.id);
      }
      return reactNode;
    },
  });

  const blogger = bloggers.filter(
    (item) => item.id === blog.metadata?.author,
  )[0];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto pt-[4rem]">
        <div className="container mx-auto pt-4 md:pt-8 pb-10">
          <p className="px-4 font-semibold text-base mt-3 mb-1 text-slate-500">
            {blog.category}
          </p>
          <h1 className="px-4 font-bold text-slate-600 text-2xl md:text-3xl mb-4 md:mb-6 lg:mb-8 font-open">
            {blog.title}
          </h1>
          <div className="mb-4 md:mb-6 flex gap-4 px-4 items-center">
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <Pic src={blogger?.profilePic} alt="author" objectFit="cover" />
            </div>
            <div className="">
              <p className="font-bold mb-0 text-sm md:text-base">
                {blogger?.name}
              </p>
              <p className="mb-0 text-sm md:text-base">
                {blog.metadata?.date}
                &nbsp; &#x2022; &nbsp;
                {blog.metadata?.timeToRead}
                {' '}
                read
              </p>
            </div>
          </div>
          {blog.metadata?.displayImg && (
            <div className="md:px-4">
              <div className="h-72 md:h-[22rem] lg:h-[25rem] xl:h-[27rem] w-full mb-6 md:mb-8 md:rounded-xl lg:rounded-2xl overflow-hidden">
                <Pic
                  src={blog.metadata?.displayImg}
                  objectFit="cover"
                  alt="display image"
                />
              </div>
            </div>
          )}
          <div className="blogContent px-4">
            <div className="flex flex-col items-start md:flex-row gap-4 md:gap-10 lg:gap-12">
              <div className="bg-secondary rounded-xl md:rounded-2xl p-4 md:p-6 w-full md:w-1/3 md:sticky md:top-24">
                <h2 className="md:mb-4">Table of Contents</h2>
                {internalLinks.map((item) => (
                  <Link href={`#${item}`}>
                    <p className="mt-2 md:mt-3 !mb-0 !text-pry-600 underline underline-offset-2">
                      {item?.split('user-content-')?.[1]}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="w-full md:w-2/3">{wholeBlog}</div>
            </div>
          </div>
        </div>
      </div>
      <Blogs
        header={`Discover More ${blog.category || 'Amazing'} Blogs`}
        subHeader="Explore our collection of insightful and engaging blog posts."
        category={blog.category}
      />
      <CTA />
    </div>
  );
}
