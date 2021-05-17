
import Link from '../../components/mdx/Link'
import {OrderedList, Item} from '../../components/mdx/List';
import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import Title from '../../components/Title';
import { getAllCategories } from '../../utils/postHandling/getMeta';

export default function Index({ categories }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/">
            👈 Go back Home
          </Link>
        </nav>
      </header>
      <Title>Categories</Title>
      <OrderedList>
        {categories.map((category) => (
          <Item key={category}>
            <Link
              as={`/categories/${category}`}
              href={`/categories/[category]`}
            >
              {category}
            </Link>
          </Item>
        ))}
      </OrderedList>
    </Layout>
  )
}

export function getStaticProps() {
  const categories = getAllCategories(loadPosts());
  return { props: { categories } }
}
