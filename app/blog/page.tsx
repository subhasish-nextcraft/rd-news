import { Metadata } from 'next';
import BlogData from 'components/Blog/blogData';
import BlogItem from 'components/Blog/BlogItem';
import Categories from 'comp/Categories';
import Blogs from 'comp/Blogs';

export const metadata: Metadata = {
  title: 'Blog Page - Solid SaaS Boilerplate',
  description: 'This is Blog page for Solid Pro',
  // other metadata
};

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

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
  };
  try {
    const res = await fetch('http://localhost:1337/api/blogs?populate=*', options);
    const response = await res.json();
    return response;
  } catch (err) {
    console.log(err);
  }

  return null; // Add a return statement at the end of the function
}

async function BlogPage() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        {/* <Categories categories={categories} /> */}
        <Blogs blogs={blogs} />
        {/* <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.map((post, key) => (
            <BlogItem key={key} blog={post} />
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default BlogPage;
