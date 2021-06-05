import {PageHeaderCard, PageWrapper, Card, Box, Typography} from '@nordnet/ui';

import styled from 'styled-components';

const Menu = styled(PageHeaderCard)`
background-color: ${props => props.theme.color.backgroundBlack};
color: white;
`
const Title = styled(Typography)`
color: ${props => props.theme.color.textLight}
`

export default function Layout({ children }) {
  return (
    <>
      <Menu title={<Title type="title1" weight="bold">Nordnet.Tech</Title>} />
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
