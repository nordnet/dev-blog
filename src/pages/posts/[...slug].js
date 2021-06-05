import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import {lightFormat} from 'date-fns';
import Image from 'next/image';
import { Box } from '@nordnet/ui';
import Layout from '../../components/Layout'
import Title from '../../components/Title';
import MDXMapper from '../../components/MDXMapper';
import {loadPost, getSlugsFromPosts} from '../../utils/server/loadPosts'
import {MetaItem, MetaRow, MetaLink, Capitalize, UpperCase} from '../../components/Meta';


export default function PostPage({ source, frontMatter }) {
  return (
    <Layout {...frontMatter} pageType="article" >
      <Box my={4}>
        <MetaRow>
          {frontMatter.category ? (
            <MetaItem><MetaLink href="/categories/[category]" as={`/categories/${frontMatter.category}`} ><UpperCase>{frontMatter.category}</UpperCase></MetaLink></MetaItem>
          ) : null}
          {frontMatter.author ? (
            <MetaItem><MetaLink href="/authors/[author]" as={`/authors/${frontMatter.author}`} ><Capitalize>{frontMatter.author}</Capitalize></MetaLink></MetaItem>
          ) : null}
          {frontMatter.date ? (
            <MetaItem>{lightFormat(new Date(frontMatter.date), 'yyyy-MM-dd')}</MetaItem>
          ) : null}
        </MetaRow>
        <Title textAlign="center">{frontMatter.title}</Title>
        
        <MetaRow><Box p={5}>{frontMatter.image ? <Image src={frontMatter.image} width={500} height={500} />  : null}</Box></MetaRow>
      </Box>
      <main>
        <MDXMapper {...source} />
      </main>
      {frontMatter.tags ? (
        <MetaRow>
          <MetaItem>Tags:</MetaItem>
            {frontMatter.tags.map((tag) => 
              <MetaItem key={tag}><MetaLink href="/tags/[tag]" as={`/tags/${tag}`} >{tag}</MetaLink></MetaItem>)
            }
        </MetaRow>
      ) : null}
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
