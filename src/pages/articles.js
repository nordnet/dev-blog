import Layout from '../components/Layout'
import {loadPosts} from '../utils/server/loadPosts'
import {sortPostsByDate} from '../utils/postHandling/sortPosts';
import {PostList} from '../components/PostList';

import Title from '../components/Title';

export default function Index({ posts }) {
  return (
    <Layout>
      <Title>All Posts</Title>
      <PostList posts={posts} />
    </Layout>
  )
}

export function getStaticProps() {
  const posts = sortPostsByDate(loadPosts());
  return { props: { posts } }
}
