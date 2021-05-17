import {PageHeaderCard, PageWrapper, Card, Box} from '@nordnet/ui';

export default function Layout({ children }) {
  return (
    <>
      <PageHeaderCard title="Nordnet.Tech" />
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
