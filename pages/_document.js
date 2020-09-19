import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="EconHacks 2021 is a virtual hackathon that fosters hackers to solve problems in economics. Register today for 24 hours of coding, fun & learning!"/>
          <meta property="og:description" content="EconHacks 2021 is a virtual hackathon that fosters hackers to solve problems in economics. Register today for 24 hours of coding, fun & learning!"/>
          <meta property="og:url" content="https://econhacks.org"/>
          <meta property="og:image" content="/apple-touch-icon.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <meta name="msapplication-TileColor" content="#0C3F84"/>
          <meta name="theme-color" content="#0C3F84"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
