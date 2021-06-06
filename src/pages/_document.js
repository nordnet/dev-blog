import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-java");
require("prismjs/components/prism-kotlin");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-css");
require("prismjs/components/prism-docker");
require("prismjs/components/prism-erlang");
require("prismjs/components/prism-git");
require("prismjs/components/prism-groovy");
require("prismjs/components/prism-groovy");
require("prismjs/components/prism-nginx");
require("prismjs/components/prism-toml");
require("prismjs/components/prism-yaml");

class MyDocument extends Document {
  static async getInitialProps(ctx) {
const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument