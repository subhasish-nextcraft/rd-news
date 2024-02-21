import Blogs from 'section/home/Blogs';
import CTA from 'section/home/CTA';

type Props = {
  searchParams: {
    category: string;
  };
};

export default function Page({ searchParams }: Props) {
  return (
    <div className="bg-secondary pt-[2.25rem] md:pt-[3rem] lg:pt-[4rem]">
      <Blogs
        header="Discover Our Blog Posts"
        subHeader="Stay updated with our latest blog posts"
        blogsToShow={10}
        paginate
        category={searchParams?.category}
        showFilters
      />
      <CTA />
    </div>
  );
}
