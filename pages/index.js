import Head from 'next/head'
import Header from '../components/header'
import Welcome from '../components/welcome'
import Faq from '../components/faq'
import Schedule from '../components/schedule'
import Workshops from '../components/workshops'
import Judges from '../components/judges'
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>EconHacks 2020 - The largest economics hackathon</title>
        <meta name="description" content="EconHacks 2020 is a virtual hackathon that fosters hackers to solve problems in economics. Register today for 24 hours of coding, fun & learning!"/>
        <meta name="og:description" content="EconHacks 2020 is a virtual hackathon that fosters hackers to solve problems in economics. Register today for 24 hours of coding, fun & learning!"/>
      </Head>
      <Header />
      <Welcome />
      <Schedule />
      <Workshops />
      <Faq />
      <Judges />
      <Sponsors />
      <Footer />
    </div>
  )
}
