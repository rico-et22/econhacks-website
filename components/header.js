import styles from '../styles/Header.module.css'
import Container from './container'
import Link from 'next/link'
import Navbar from './navbar'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header_color_bg}>
        <Container>
          <Navbar />
          <div className={styles.header_content}>
            <h1 className={styles.header_title}>EconHacks 2020</h1>
            <p className={styles.header_description}>The largest <br/> economics hackathon.</p>
            <p className={styles.header_date}>November 14 - 15th</p>
            <Link href="/register">
              <a className={styles.header_cta_button}>
                Register
              </a>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  )
}
