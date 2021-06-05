import {PageHeaderCard, PageWrapper, Card, Box, Typography, Flexbox} from '@nordnet/ui';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import {Link} from './mdx/Link';
import {getMeta} from '../utils/defaultSEO';

const Menu = styled(PageHeaderCard)`
background-color: ${props => props.theme.color.backgroundBlack};
color: white;
`
const Title = styled(Typography)`
color: ${props => props.theme.color.textLight}
`

const MenuBar = (props) => {
  return <Flexbox container gutter={4} alignItems="center" justifyContent="space-between" {...props}/>
}

const MenuItem = (props) => {
  return <Flexbox item {...props} />
}

const MyLink = styled(Link)`
&:hover{
  text-decoration: underline;
}
`

const MenuLink = (props) => {
  return <MyLink color={(t) => t.color.background} {...props}/>
}




export default function Layout({ children, title, description, tags, pageType, image, readTime, author, date, category}) {
  return (
    <>
      <NextSeo {...getMeta({title, description, tags, pageType, image, readTime, author, date, category})}/>
      <Menu title={<Title type="title1" weight="bold"><MenuLink color={(t) => t.color.background} href="/">Nordnet.Tech</MenuLink></Title>} >
        <MenuBar>
          <MenuItem><MenuLink href="/authors">Authors</MenuLink></MenuItem>
          <MenuItem><MenuLink href="/categories">Categories</MenuLink></MenuItem>
          <MenuItem><MenuLink href="/tags">Tags</MenuLink></MenuItem>
        </MenuBar>
      </Menu>
      <Box mt={8}>
        <PageWrapper background={(t) => t.color.background}>
          <Card>
            <Box p={8}>
              {children}
            </Box>
          </Card>
        </PageWrapper>
      </Box>
    </>
  )
}
