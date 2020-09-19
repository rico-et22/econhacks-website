import Head from 'next/head'
import AboutHeader from '../components/About/aboutHeader'
import Themes from '../components/About/themes'
import Team from '../components/About/team'
import Footer from '../components/footer'

export default function About(props) {
  return (
    <div>
      <Head>
        <title>About - EconHacks 2021 - The largest economics hackathon</title>
      </Head>
      <AboutHeader />
      <Themes />
      <Team />
      <Footer />
    </div>
  )
}
