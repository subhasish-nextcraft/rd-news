'use server';

const BlogsQuery = `query getHomeBlogs($after: String, $first: Int, $categoryId: ID) {
      repository (owner:"subhasish-nextcraft", name: "nextcraft-site") {
        discussions(after: $after, first: $first, categoryId: $categoryId, orderBy: {field: CREATED_AT, direction: DESC}), {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            category {
              name
            }
            title
            number
            body
            comments(first: 1) {
              nodes {
                body
              }
            }
          }
        }
      }
    }`;

const categoryToID = {
  business: process.env.NEXT_PUBLIC_BUSINESS_BLOGS_ID!,
  marketing: process.env.NEXT_PUBLIC_MARKETING_BLOGS_ID!,
  optimization: process.env.NEXT_PUBLIC_OPTIMIZATION_BLOGS_ID!,
  technology: process.env.NEXT_PUBLIC_TECHNOLOGY_BLOGS_ID!,
  'ux-design': process.env.NEXT_PUBLIC_UX_DESIGN_BLOGS_ID!,
};

type GetBlogsProps = {
  blogsToShow?: number;
  endCursor?: string;
  category?: string;
};

const getBlogs = async ({
  blogsToShow,
  endCursor,
  category,
}: GetBlogsProps) => {
  const formattedCategory = category
    ?.toLowerCase()
    ?.split(' ')
    ?.join('-') as keyof typeof categoryToID;

  try {
    const dataStream = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GITHUB_BLOG_TOKEN}`,
      },
      body: JSON.stringify({
        query: BlogsQuery,
        variables: {
          after: endCursor,
          first: blogsToShow || 3,
          ...(category
            && categoryToID[formattedCategory] && {
            categoryId: categoryToID[formattedCategory],
          }),
        },
      }),
    });

    const data: {
      data: {
        repository: {
          discussions: {
            pageInfo: {
              hasNextPage: boolean;
              endCursor: string;
            };
            nodes: {
              category: {
                name: string;
              };
              title: string;
              number: number;
              comments: { nodes: { body: string }[] };
            }[];
          };
        };
      };
    } = await dataStream.json();

    const {
      data: {
        repository: {
          discussions: {
            nodes,
            pageInfo: { hasNextPage, endCursor: receivedEndCursor },
          },
        },
      },
    } = data;

    const formattedValue = nodes.map((nodeItem) => ({
      ...nodeItem,
      category: nodeItem?.category.name,
      metadata: nodeItem?.comments?.nodes[0]?.body?.split('\r\n')?.reduce(
        (acc, cur) => ({
          ...acc,
          [cur?.split('=')[0]]: cur?.split('=')[1],
        }),
        {
          author: '',
          date: '',
          timeToRead: '',
          header: '',
          oneLineSummary: '',
          displayImg: '',
        },
      ),
    }));

    return { blogList: formattedValue, hasNextPage, receivedEndCursor };
  } catch (err) {
    console.log('err', err);
    return { blogList: [], hasNextPage: false };
  }
};

export default getBlogs;
