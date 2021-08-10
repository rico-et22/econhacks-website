import Head from 'next/head'
import Footer from '../components/footer'
import { initializeApollo } from '../lib/apolloClient'
import { gql } from '@apollo/client'
import ChapterList from '../components/chapterList'
import ChapterHeader from '../components/chapterHeader'

export function Chapters(props) {
  return (
    <div>
      <Head>
        <title>Chapters - {props.misc.headTitle}</title>
        <meta name="description" content={props.misc.metaDescription}/>
        <meta property="og:description" content={props.misc.metaDescription}/>
      </Head>
      <ChapterHeader title={props.misc.hackathonTitle}/>
      <ChapterList chapters={props.chapters}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: gql`
      {
        chapters {
          name
          image {
            url
          }
          date
          url
          cssBackgroundColor
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
      chapters: apolloClient.cache.extract().ROOT_QUERY.chapters,
      misc: apolloClient.cache.extract().ROOT_QUERY.miscs[0]
    }
  }
}

export default Chapters
