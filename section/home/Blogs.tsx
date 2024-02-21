import BlogGrid from 'app/blogs/BlogGrid';
import BlogFilter from 'app/blogs/BlogFilter';
import getBlogs from './getBlogs';

export const revalidate = 21600;

type Props = {
  header?: string;
  subHeader?: string;
  blogsToShow?: number;
  paginate?: boolean;
  category?: string;
  showFilters?: boolean;
};

export default async function Blogs({
  header,
  subHeader,
  blogsToShow,
  paginate,
  category,
  showFilters,
}: Props) {
  const { blogList, hasNextPage, receivedEndCursor } = await getBlogs({
    blogsToShow,
    category,
  });

  return (
    <div className="bg-secondary py-10">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto">
          <div className="px-4">
            <h2 className="header mb-2">
              {header || 'Discover Latest Trends'}
            </h2>
            <p className="mb-8">
              {subHeader
                || 'Explore the most recent advancements in React and Next js'}
            </p>
            {showFilters && (
              <div className="flex items-center mb-4 gap-2">
                <p className="font-medium">Filter blogs by category</p>
                <BlogFilter selectedCategory={category} />
              </div>
            )}
            <BlogGrid
              blogList={blogList}
              paginate={paginate}
              hasNextPage={hasNextPage}
              receivedEndCursor={receivedEndCursor}
              category={category}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
