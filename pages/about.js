import Head from 'next/head'
import AboutHeader from '../components/About/aboutHeader'
import Footer from '../components/footer'

export default function About(props) {
  return (
    <div>
      <Head>
        <title>About - EconHacks 2020 - The largest economics hackathon</title>
      </Head>
      <AboutHeader />
      <Footer />
    </div>
  )
}
