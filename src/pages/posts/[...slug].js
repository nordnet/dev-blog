import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import Link from '../../components/mdx/Link';
import Layout from '../../components/Layout'
import Title from '../../components/Title';
import MDXMapper from '../../components/MDXMapper';
import {loadPost, getSlugsFromPosts} from '../../utils/server/loadPosts'

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/">
            👈 Go back home
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <Title>{frontMatter.title}</Title>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXMapper {...source} />
      </main>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const source = loadPost(params.slug)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = getSlugsFromPosts()
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
