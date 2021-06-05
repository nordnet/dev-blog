
import Link from '../components/mdx/Link'
import {H1} from '../components/mdx/Typography'
import {OrderedList, Item} from '../components/mdx/List';
import Layout from '../components/Layout'
import {loadPosts} from '../utils/server/loadPosts'
import {getPostPath} from '../utils/postHandling/getPostPath';
import {sortPostsByDate} from '../utils/postHandling/sortPosts';
import {filterPostsOnPages} from '../utils/postHandling/filterPosts';
import {PREFIX} from '../utils/constants';
import Title from '../components/Title';

export default function Index({ posts }) {
  return (
    <Layout>
      <Title>Welcome to Nordnet Tech Blog</Title>
      <H1>Latest Posts</H1>
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

export function getStaticProps() {
  const posts = sortPostsByDate(filterPostsOnPages(loadPosts(), 5, 0));
  return { props: { posts } }
}
