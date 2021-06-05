import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import Title from '../../components/Title';
import { getAllCategories, getFirstPostForEachCategory } from '../../utils/postHandling/getMeta';
import { sortPostsByDate } from '../../utils/postHandling/sortPosts';
import {PostList} from '../../components/PostList';

export default function Index({ posts}) {
  return (
    <Layout>
      <Title>Categories</Title>
      <PostList posts={posts} linkGenerator={(post) => ({ href: `/categories/${post.data.category}`})} />
    </Layout>
  )
}

export function getStaticProps() {
  const categories = getAllCategories(loadPosts());
  const posts = getFirstPostForEachCategory(sortPostsByDate(loadPosts())) 
  return { props: { categories, posts } }
}
