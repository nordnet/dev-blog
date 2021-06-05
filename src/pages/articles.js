import Layout from '../components/Layout'
import {loadPosts} from '../utils/server/loadPosts'
import {sortPostsByDate} from '../utils/postHandling/sortPosts';
import {filterPostsOnPages} from '../utils/postHandling/filterPosts';
import {PostList} from '../components/PostList';

import Title from '../components/Title';
import Link from '../components/mdx/Link';

export default function Index({ posts }) {
  return (
    <Layout>
      <Title>All Posts</Title>
      <PostList posts={posts} />
      <Link></Link>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = sortPostsByDate(loadPosts());
  return { props: { posts } }
}
