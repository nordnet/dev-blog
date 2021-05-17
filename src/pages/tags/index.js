
import Link from '../../components/mdx/Link'
import {OrderedList, Item} from '../../components/mdx/List';
import Layout from '../../components/Layout'
import {loadPosts} from '../../utils/server/loadPosts'
import Title from '../../components/Title';
import { getAllTags } from '../../utils/postHandling/getMeta';

export default function Index({ tags }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/">
            👈 Go back Home
          </Link>
        </nav>
      </header>
      <Title>Tags</Title>
      <OrderedList>
        {tags.map((tag) => (
          <Item key={tag}>
            <Link
              as={`/tags/${tag}`}
              href={`/tags/[tag]`}
            >
              {tag}
            </Link>
          </Item>
        ))}
      </OrderedList>
    </Layout>
  )
}

export function getStaticProps() {
  const tags = getAllTags(loadPosts());
  return { props: { tags } }
}
