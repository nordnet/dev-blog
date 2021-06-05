import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import {getAllCategories} from '../../utils/postHandling/getMeta';
import Title from '../../components/Title';
import {sortPostsByDate} from '../../utils/postHandling/sortPosts';
import {filterPostsOnCategory} from '../../utils/postHandling/filterPosts';
import {PostList} from '../../components/PostList';
import { Capitalize } from '../../components/Meta';

export default function Author({ posts, category }) {
  return (
    <Layout>
      <Title textAlign="center"><Capitalize>{category}</Capitalize></Title>
      <PostList posts={posts} />
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