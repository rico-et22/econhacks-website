import Head from 'next/head'
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import Faq from '../components/Faq'
import Schedule from '../components/Schedule'
import Workshops from '../components/Workshops'
import Judges from '../components/Judges'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>EconHacks 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Welcome />
      <Schedule />
      <Workshops />
      <Faq />
      <Judges />
    </div>
  )
}
