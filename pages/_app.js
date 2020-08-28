import '../styles/globals.css'
import 'normalize.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EconHacks 2020 - The largest economics hackathon</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
