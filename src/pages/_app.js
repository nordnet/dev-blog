// import App from 'next/app'
import { ThemeProvider } from 'styled-components';
import { theme } from '@nordnet/ui';
import GlobalStyles from '../components/GlobalStyles';
import { DefaultSeo } from 'next-seo';
import SEO from '../utils/defaultSEO';

function MyApp({ Component, pageProps }) {
  
  return <ThemeProvider theme={theme} >
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
}

export default MyApp