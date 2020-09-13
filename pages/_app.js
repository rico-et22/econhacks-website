import '../styles/globals.css'
import 'normalize.css'
import Head from 'next/head'
import Router from "next/router";
import withGA from "next-ga";
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EconHacks 2020 - The largest economics hackathon</title>
      </Head>
      <div>
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default withGA("UA-177850400-1", Router)(MyApp)
