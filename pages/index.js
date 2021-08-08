import Head from 'next/head'
import Header from '../components/header'
import Welcome from '../components/welcome'
import SpeakersAndJudges from '../components/speakersAndJudges'
import Footer from '../components/footer'
import { initializeApollo } from '../lib/apolloClient'
import { gql } from '@apollo/client'
import Sponsors from '../components/sponsors'

export function Home(props) {
  return (
    <div>
      <Head>
        <title>{props.misc.headTitle}</title>
        <meta name="description" content={props.misc.metaDescription}/>
        <meta property="og:description" content={props.misc.metaDescription}/>
      </Head>
      <Header
        title={props.misc.hackathonTitle}
        description={props.misc.headerDescription}
        date={props.misc.headerDate}
      />
      <Sponsors sponsors={props.sponsors} />
      <Welcome />
      <SpeakersAndJudges people={props.speakersAndJudgesItems} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: gql`
      {
        sponsors(orderBy: publishedAt_ASC) {
          name
          logo {
            url
          }
          logoSize
          website
        }
        speakerSeriesItems {
          title
          description
          photo {
            url
          }
          logo {
            url
          }
          logoAltText
          priorityOrderId
        }
        miscs {
          hackathonTitle
          headerDescription
          headerDate
          headTitle
          metaDescription
        }
      }
    `,
  })

  return {
    props: {
      sponsors: apolloClient.cache.extract().ROOT_QUERY['sponsors({"orderBy":"publishedAt_ASC"})'],
      speakersAndJudgesItems: apolloClient.cache.extract().ROOT_QUERY.speakerSeriesItems,
      misc: apolloClient.cache.extract().ROOT_QUERY.miscs[0],
    }
  }
}

export default Home
