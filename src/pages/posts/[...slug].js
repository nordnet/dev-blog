import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import {lightFormat} from 'date-fns';
import Link from '../../components/mdx/Link';
import Layout from '../../components/Layout'
import {H4} from '../../components/mdx/Typography';
import Title from '../../components/Title';
import MDXMapper from '../../components/MDXMapper';
import {loadPost, getSlugsFromPosts} from '../../utils/server/loadPosts'
import { UnorderedList, Item } from '../../components/mdx/List';
import { Box, Separator } from '@nordnet/ui';

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
      <Box my={4}>
        <Title>{frontMatter.title}</Title>
        {frontMatter.description && (
          <H4>Description: {frontMatter.description}</H4>
        )}
        {frontMatter.author && (
          <H4>Author: <Link href="/authors/[author]" as={`/authors/${frontMatter.author}`} >{frontMatter.author}</Link></H4>
        )}
        {frontMatter.category && (
          <H4>Category: <Link href="/categories/[category]" as={`/categories/${frontMatter.category}`} >{frontMatter.category}</Link></H4>
        )}
        {frontMatter.date && (
          <H4>Date: {lightFormat(new Date(frontMatter.date), 'yyyy-MM-dd')}</H4>
        )}
        {frontMatter.tags && (
          <>
            <H4>Tags:</H4>
            <Box mx={4}>
            <UnorderedList>
              {frontMatter.tags.map((tag) => 
                <Item key={tag}><Link href="/tags/[tag]" as={`/tags/${tag}`} >{tag}</Link></Item>)
              }
            </UnorderedList>
            </Box>
          </>
        )}
        <Separator />
      </Box>
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
