import Head from 'next/head'
import RegisterHeader from '../components/Register/registerHeader'
import Footer from '../components/footer'
import Container from '../components/container'
import styles from '../styles/Register.module.css'

export default function Register(props) {
  return (
    <div>
      <Head>
        <title>Register - EconHacks 2021 - The largest economics hackathon</title>
      </Head>
      <RegisterHeader/>
      <Container>
        <div className={styles.register_iframe_container}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSem0ULqwF5DPLYBdasMOuNGH9Jw0aCTzkXdNkaBA8qi1465AA/viewform?embedded=true"
            className={styles.register_iframe}
            height="2638"
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
