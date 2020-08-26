import Head from 'next/head'
import AboutHeader from '../components/About/aboutHeader'

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
