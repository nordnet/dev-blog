
import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import Title from '../../components/Title';
import { getAllAuthors, getFirstPostForEachAuthor } from '../../utils/postHandling/getMeta';
import { sortPostsByDate } from '../../utils/postHandling/sortPosts';
import {PostList} from '../../components/PostList';

export default function Index({ posts}) {
  return (
    <Layout>
      <Title>Authors</Title>
      <PostList posts={posts} linkGenerator={(post) => ({ href: `/authors/${post.data.author}`})} />
    </Layout>
  )
}

export function getStaticProps() {
  const authors = getAllAuthors(loadPosts());
  const posts = getFirstPostForEachAuthor(sortPostsByDate(loadPosts())) 
  return { props: { authors, posts } }
}
