import Head from 'next/head'
import AboutHeader from '../components/About/AboutHeader'

export default function About(props) {
  return (
    <div>
      <Head>
        <title>About - EconHacks 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutHeader />
    </div>
  )
}
