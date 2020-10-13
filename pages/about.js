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
        <title>About - EconHacks 2021 - The largest economics hackathon</title>
      </Head>
      <AboutHeader />
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
      }
    `,
  })

  return {
    props: {
      teamMembers: apolloClient.cache.extract().ROOT_QUERY.teamMembers,
    }
  }
}

export default About
