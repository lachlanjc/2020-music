import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`
            :root { supported-color-schemes: light dark; }
            body { overflow-x: hidden; }
          `}</style>
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
