// import App from 'next/app'
import { ThemeProvider } from 'styled-components';
import { theme } from '@nordnet/ui';
import GlobalStyles from '../components/GlobalStyles';

function MyApp({ Component, pageProps }) {
  
  return <ThemeProvider theme={theme} >
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
}

export default MyApp