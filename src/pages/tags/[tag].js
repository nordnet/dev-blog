
import Link from '../../components/mdx/Link'
import {OrderedList, Item} from '../../components/mdx/List';
import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import {getPostPath} from '../../utils/postHandling/getPostPath';
import {sortPostsByDate} from '../../utils/postHandling/sortPosts';
import {filterPostsOnTag} from '../../utils/postHandling/filterPosts';
import {getAllTags} from '../../utils/postHandling/getMeta';
import {PREFIX} from '../../utils/constants';
import Title from '../../components/Title';

export default function Index({ posts, tag }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/tags">
            👈 Go back to tags
          </Link>
        </nav>
      </header>
      <Title>{tag}</Title>
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
  const posts = sortPostsByDate(filterPostsOnTag(loadPosts(), params?.tag));
  return { props: { posts, tag: params?.tag } }
}


export const getStaticPaths = async () => {
  const paths = getAllTags(loadPosts())
    .map((tag) => ({ params: { tag } }))

  return {
    paths,
    fallback: false,
  }
}
