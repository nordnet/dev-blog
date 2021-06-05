
import {H1} from '../components/mdx/Typography'
import Layout from '../components/Layout'
import {loadPosts} from '../utils/server/loadPosts'
import {sortPostsByDate} from '../utils/postHandling/sortPosts';
import {filterPostsOnPages} from '../utils/postHandling/filterPosts';
import {PostList} from '../components/PostList';

import Title from '../components/Title';

export default function Index({ posts }) {
  return (
    <Layout>
      <Title>Blog</Title>
      <H1>Latest Posts</H1>
      <PostList posts={posts} />
    </Layout>
  )
}

export function getStaticProps() {
  const posts = filterPostsOnPages(sortPostsByDate(loadPosts()), 6, 0);
  return { props: { posts } }
}
