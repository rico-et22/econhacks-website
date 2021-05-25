import Head from 'next/head'
import Header from '../components/header'
import Welcome from '../components/welcome'
import Faq from '../components/faq'
import Impact from '../components/impact'
import Schedule from '../components/schedule'
import SpeakersAndJudges from '../components/speakersAndJudges'
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'
import Themes from '../components/About/themes'
import { initializeApollo } from '../lib/apolloClient'
import { gql } from '@apollo/client'

export function Home(props) {
  return (
    <div>
      <Head>
        <title>{props.misc.headTitle}</title>
        <meta name="description" content={props.misc.metaDescription}/>
        <meta name="og:description" content={props.misc.metaDescription}/>
      </Head>
      <Header
        title={props.misc.hackathonTitle}
        description={props.misc.headerDescription}
        date={props.misc.headerDate}
      />
      <Welcome />
      <Impact />
      <Schedule scheduleDays={props.scheduleDays}/>
      <Themes />
      <SpeakersAndJudges people={props.speakersAndJudgesItems} />
      <Faq cardData={props.faqCards}/>
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
        scheduleDays {
          scheduleEvents {
            title
            description
            image {
              url
            }
            dateTimeUtc
          }
          date
          dayNumber
        }
        miscs {
          hackathonTitle
          headerDescription
          headerDate
          headTitle
          metaDescription
        }
        faqCards {
          header
          content
        }
      }
    `,
  })

  return {
    props: {
      sponsors: apolloClient.cache.extract().ROOT_QUERY.sponsors,
      speakersAndJudgesItems: apolloClient.cache.extract().ROOT_QUERY.speakerSeriesItems,
      scheduleDays: apolloClient.cache.extract().ROOT_QUERY.scheduleDays,
      misc: apolloClient.cache.extract().ROOT_QUERY.miscs[0],
      faqCards: apolloClient.cache.extract().ROOT_QUERY.faqCards
    }
  }
}

export default Home
