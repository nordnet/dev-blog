
import Link from '../../components/mdx/Link'
import {OrderedList, Item} from '../../components/mdx/List';
import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import {getPostPath} from '../../utils/postHandling/getPostPath';
import {sortPostsByDate} from '../../utils/postHandling/sortPosts';
import {filterPostsOnAuthor} from '../../utils/postHandling/filterPosts';
import {getAllAuthors} from '../../utils/postHandling/getMeta';
import {PREFIX} from '../../utils/constants';
import Title from '../../components/Title';

export default function Index({ posts, author }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/authors">
            👈 Go back to authors
          </Link>
        </nav>
      </header>
      <Title>{author}</Title>
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
  const posts = sortPostsByDate(filterPostsOnAuthor(loadPosts(), params?.author));
  return { props: { posts, author: params?.author } }
}


export const getStaticPaths = async () => {
  const paths = getAllAuthors(loadPosts())
    .map((author) => ({ params: { author } }))

  return {
    paths,
    fallback: false,
  }
}
