
import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import {getAllAuthors} from '../../utils/postHandling/getMeta';
import Title from '../../components/Title';
import {sortPostsByDate} from '../../utils/postHandling/sortPosts';
import {filterPostsOnAuthor} from '../../utils/postHandling/filterPosts';
import {PostList} from '../../components/PostList';
import { Capitalize } from '../../components/Meta';

export default function Author({ posts, author }) {
  return (
    <Layout>
      <Title textAlign="center"><Capitalize>{author}</Capitalize></Title>
      <PostList posts={posts} />
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
