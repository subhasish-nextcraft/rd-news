'use server';

const singleBlogQuery = `query getSingleBlog($number: Int!){
  repository(owner: "subhasish-nextcraft", name: "nextcraft-site") {
    discussion(number: $number) {
      category {
        name
      }
      title
      bodyHTML
      number
      comments(first: 1) {
        nodes {
          body
        }
      }
    }
  }
}`;

const getSingleBlog = async (param: string) => {
  try {
    const dataStream = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GITHUB_BLOG_TOKEN}`,
      },
      body: JSON.stringify({
        query: singleBlogQuery,
        variables: { number: Number(param) },
      }),
    });

    const data: {
      data: {
        repository: {
          discussion: {
            category: { name: string };
            title: string;
            bodyHTML: string;
            number: number;
            comments: { nodes: { body: string }[] };
          };
        };
      };
    } = await dataStream.json();

    console.log('data', data);

    if (!data.data.repository.discussion) {
      return null;
    }

    const {
      data: {
        repository: {
          discussion: {
            title, bodyHTML, number, comments, category,
          },
        },
      },
    } = data;

    return {
      category: category?.name,
      title,
      bodyHTML,
      number,
      metadata: comments.nodes[0]?.body.split('\r\n')?.reduce(
        (acc, cur) => ({
          ...acc,
          [cur?.split('=')[0]]: cur?.split('=')[1],
        }),
        {
          category: '',
          author: '',
          date: '',
          timeToRead: '',
          header: '',
          oneLineSummary: '',
          displayImg: '',
        },
      ),
    };
  } catch (err) {
    console.log('err', err);
    return { title: '', bodyHTML: '' };
  }
};

export default getSingleBlog;
