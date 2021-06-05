import {Flexbox, Card, Box, Typography} from '@nordnet/ui';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import Link from '../components/mdx/Link'
import {getPostPath} from '../utils/postHandling/getPostPath';
import {PREFIX} from '../utils/constants';
import {UpperCase, Capitalize, MetaRow, MetaItem} from './Meta';

const darkenAnimation = keyframes`
0% {
  filter: brightness(1);
}
100% {
  filter: brightness(0.9);
}
`

const Container = styled(Box)`
cursor: pointer;
`

const FadedImage = styled(Image)`
  filter: brightness(100%);
  ${Container}:hover &{
    animation-name: ${darkenAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards; 
  }
` 

const TitleLink = styled.span`
${Container}:hover & {
  text-decoration: underline;
}
`

const defaultLinkGenerator = (post) => {
  return {
    as: getPostPath(post),
    href: `/${PREFIX}/[...slug]`
  }
}

export const PostList = ({posts, linkGenerator = defaultLinkGenerator}) => {
  return (
    <Flexbox container
      wrap="wrap"
      gutter={5}
    >
    {posts.map((post) => (
      <Flexbox item key={post.filePath} gutter={5} sm={{flex: "0 0 100%"}} md={{flex: "0 0 50%"}} lg={{flex: "0 0 33.333%"}}>
        <Container p={4}>
          <Link {...linkGenerator(post)}>
            <Flexbox container justifyContent="center">
                <FadedImage src={post.data.image} width={300} height={300}/>
            </Flexbox>
            <MetaRow justifyContent="left">
              <MetaItem><UpperCase>{post.data.category}</UpperCase></MetaItem>
              <MetaItem>{post.data.date}</MetaItem>
            </MetaRow>
            <Box>
              <Typography type="title2" as="h3">
                <TitleLink>
                    {post.data.title}
                </TitleLink>
              </Typography>
            </Box>
            <MetaRow justifyContent="left">
                <MetaItem>{post.data.description}</MetaItem>
            </MetaRow>
            <Box py={4}>
              <MetaItem><Capitalize>{post.data.author}</Capitalize></MetaItem>
            </Box>
          </Link>
        </Container>
      </Flexbox>
    ))}
  </Flexbox>)
}