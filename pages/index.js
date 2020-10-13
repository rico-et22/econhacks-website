import Head from 'next/head'
import Header from '../components/header'
import Welcome from '../components/welcome'
import Faq from '../components/faq'
import Schedule from '../components/schedule'
import Workshops from '../components/workshops'
import Judges from '../components/judges'
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'
import Themes from '../components/About/themes'
import { initializeApollo } from '../lib/apolloClient'
import { gql } from '@apollo/client'

export function Home(props) {
  return (
    <div>
      <Head>
        <title>EconHacks 2021 - The largest economics hackathon</title>
        <meta name="description" content="EconHacks 2021 is a virtual hackathon that fosters hackers to solve problems in economics. Register today for 24 hours of coding, fun & learning!"/>
        <meta name="og:description" content="EconHacks 2021 is a virtual hackathon that fosters hackers to solve problems in economics. Register today for 24 hours of coding, fun & learning!"/>
      </Head>
      <Header />
      <Welcome />
      <Schedule />
      <Themes />
      <Workshops />
      <Faq />
      <Judges />
      <Sponsors sponsors={props.sponsors} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: gql`
      {
        sponsors {
          name
          logo {
            url
          }
          logoSize
          website
        }
      }
    `,
  })

  return {
    props: {
      sponsors: apolloClient.cache.extract().ROOT_QUERY.sponsors,
    }
  }
}

export default Home
