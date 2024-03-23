import { Metadata } from 'next';

import Hero from 'components/Hero/page';
import Brands from 'components/Brands/page';
import Feature from 'components/Features/page';
import About from 'components/About/page';
import FeaturesTab from 'components/FeaturesTab/page';
import FunFact from 'components/FunFact/page';
import Integration from 'components/Integration/page';
import CTA from 'components/CTA/page';
import FAQ from 'components/FAQ/page';
import Pricing from 'components/Pricing/page';
import Contact from 'components/Contact/page';
// import Blog from 'components/Blog/page';
import Testimonial from 'components/Testimonial';
// import Categories from 'comp/Categories';

export const metadata: Metadata = {
  title: 'Zinfo-Media News',
  description: 'This is Home page for Zinfo-Media',
};

// async function fetchCategories() {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
//     },
//   };
//   try {
//     const res = await fetch('http://localhost:1337/api/categories', options);
//     const response = await res.json();
//     return response;
//   } catch (err) {
//     console.log(err);
//   }

//   return null; // Add a return statement at the end of the function
// }

// async function fetchBlogs() {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch('http://localhost:1337/api/blogs?populate=*', options);
//     const response = await res.json();
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// }

export default async function Home() {
//   const categories = await fetchCategories();
  //   const blogs = await fetchBlogs();
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      {/* <Blogs blogs={blogs} /> */}
      {/* <Categories categories={categories} /> */}
    </main>
  );
}
