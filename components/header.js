import styles from '../styles/Header.module.css'
import Container from './container'
import Link from 'next/link'
import CTAButton from './cta-button'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header_color_bg}>
        <Container>
          <div className={styles.navbar_filler}/>
          <div className={styles.header_content}>
            <h1 className={styles.header_title}>EconHacks 2021</h1>
            <p className={styles.header_description}>The largest <br/> economics hackathon.</p>
            <p className={styles.header_date}>February 13 - 14th</p>
            <Link href="/register" passHref>
              <CTAButton>
                Register
              </CTAButton>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  )
}
