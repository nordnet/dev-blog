
import {H1} from '../components/mdx/Typography'
import Layout from '../components/Layout'
import {loadPosts} from '../utils/server/loadPosts'
import {sortPostsByDate} from '../utils/postHandling/sortPosts';
import {filterPostsOnPages} from '../utils/postHandling/filterPosts';
import {PostList} from '../components/PostList';
import {Flexbox} from '@nordnet/ui';

import Title from '../components/Title';
import Link from '../components/mdx/Link';

export default function Index({ posts }) {
  return (
    <Layout>
      <Title textAlign="center">Blog</Title>
      <H1>Latest Articles</H1>
      <PostList posts={posts} />
      <Flexbox container justifyContent="flex-end"><Flexbox item><Link href="/articles">See all articles</Link></Flexbox></Flexbox>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = filterPostsOnPages(sortPostsByDate(loadPosts()), 6, 0);
  return { props: { posts } }
}
