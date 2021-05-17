
import Link from '../../components/mdx/Link'
import {OrderedList, Item} from '../../components/mdx/List';
import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import Title from '../../components/Title';
import { getAllAuthors } from '../../utils/postHandling/getMeta';

export default function Index({ authors }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/">
            👈 Go back Home
          </Link>
        </nav>
      </header>
      <Title>Authors</Title>
      <OrderedList>
        {authors.map((author) => (
          <Item key={author}>
            <Link
              as={`/authors/${author}`}
              href={`/authors/[author]`}
            >
              {author}
            </Link>
          </Item>
        ))}
      </OrderedList>
    </Layout>
  )
}

export function getStaticProps() {
  const authors = getAllAuthors(loadPosts());
  return { props: { authors } }
}
