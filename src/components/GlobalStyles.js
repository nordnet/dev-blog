import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Nordnet Sans Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-regular.woff2') format('woff2'),
      url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Nordnet Sans Mono';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-regular-italic.woff2') format('woff2'),
      url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-regular-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Nordnet Sans Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-bold.woff2') format('woff2'),
      url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Nordnet Sans Mono';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-bold-italic.woff2') format('woff2'),
      url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-bold-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Nordnet Sans Mono';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-extrabold.woff2') format('woff2'),
      url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-extrabold.woff') format('woff');
  }

  @font-face {
    font-family: 'Nordnet Sans Mono';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-extrabold-italic.woff2') format('woff2'),
      url('https://cdn.test.nntech.io/webapp-next/static/fonts/nordnet-sans-mono/nordnet-sans-mono-extrabold-italic.woff') format('woff');
  }

  body {
    margin: 0;
    background: #f5f5f5;
    font-family: 'Nordnet Sans Mono', sans-serif;
  }`

  export default GlobalStyles;