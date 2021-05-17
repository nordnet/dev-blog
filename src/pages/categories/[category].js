
import Link from '../../components/mdx/Link'
import {OrderedList, Item} from '../../components/mdx/List';
import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import {getPostPath} from '../../utils/postHandling/getPostPath';
import {sortPostsByDate} from '../../utils/postHandling/sortPosts';
import {filterPostsOnCategory} from '../../utils/postHandling/filterPosts';
import {getAllCategories} from '../../utils/postHandling/getMeta';
import {PREFIX} from '../../utils/constants';
import Title from '../../components/Title';

export default function Index({ posts, category }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/categories">
            👈 Go back to categories
          </Link>
        </nav>
      </header>
      <Title>{category}</Title>
      <OrderedList>
        {posts.map((post) => (
          <Item key={post.filePath}>
            <Link
              as={getPostPath(post)}
              href={`/${PREFIX}/[slug]`}
            >
              {post.data.title}
            </Link>
          </Item>
        ))}
      </OrderedList>
    </Layout>
  )
}

export function getStaticProps({ params }) {
  const posts = sortPostsByDate(filterPostsOnCategory(loadPosts(), params?.category));
  return { props: { posts, category: params?.category } }
}


export const getStaticPaths = async () => {
  const paths = getAllCategories(loadPosts())
    .map((category) => ({ params: { category } }))

  return {
    paths,
    fallback: false,
  }
}
