import Head from 'next/head'
import Header from '../components/header'
import Welcome from '../components/welcome'
import Faq from '../components/faq'
import Schedule from '../components/schedule'
import Workshops from '../components/workshops'
import Judges from '../components/judges'
import Sponsors from '../components/sponsors'

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
      <Sponsors />
    </div>
  )
}
