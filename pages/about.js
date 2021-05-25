import Head from 'next/head'
import AboutHeader from '../components/About/aboutHeader'
import Team from '../components/About/team'
import Footer from '../components/footer'
import { initializeApollo } from '../lib/apolloClient'
import { gql } from '@apollo/client'

export function About(props) {
  return (
    <div>
      <Head>
        <title>About - {props.misc.headTitle}</title>
        <meta name="description" content={props.misc.metaDescription}/>
        <meta name="og:description" content={props.misc.metaDescription}/>
      </Head>
      <AboutHeader title={props.misc.hackathonTitle}/>
      <Team teamMembers={props.teamMembers}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: gql`
      {
        teamMembers {
          name
          photo {
            url
          }
          country
          linkedInLink
          role
        }
        miscs {
          hackathonTitle
          headTitle
          metaDescription
        }
      }
    `,
  })

  return {
    props: {
      teamMembers: apolloClient.cache.extract().ROOT_QUERY.teamMembers,
      misc: apolloClient.cache.extract().ROOT_QUERY.miscs[0]
    }
  }
}

export default About
