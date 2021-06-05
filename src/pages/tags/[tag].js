import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import {getAllTags} from '../../utils/postHandling/getMeta';
import Title from '../../components/Title';
import {sortPostsByDate} from '../../utils/postHandling/sortPosts';
import {filterPostsOnTag} from '../../utils/postHandling/filterPosts';
import {PostList} from '../../components/PostList';
import { Capitalize } from '../../components/Meta';

export default function Author({ posts, tag }) {
  return (
    <Layout>
      <Title textAlign="center"><Capitalize>{tag}</Capitalize></Title>
      <PostList posts={posts} />
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
