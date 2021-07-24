import Head from 'next/head'
import RegisterHeader from '../components/Register/registerHeader'
import Footer from '../components/footer'
import Container from '../components/container'
import styles from '../styles/Register.module.css'
import { initializeApollo } from '../lib/apolloClient'
import { gql } from '@apollo/client'

export default function Register(props) {
  return (
    <div>
      <Head>
        <title>Register - {props.misc.headTitle}</title>
      </Head>
      <RegisterHeader/>
      <Container>
        <div className={styles.register_iframe_container}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSem0ULqwF5DPLYBdasMOuNGH9Jw0aCTzkXdNkaBA8qi1465AA/viewform?embedded=true"
            className={styles.register_iframe}
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: gql`
      {
        miscs {
          headTitle
        }
      }
    `,
  })

  return {
    props: {
      misc: apolloClient.cache.extract().ROOT_QUERY.miscs[0]
    }
  }
}
