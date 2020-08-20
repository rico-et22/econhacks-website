import styles from '../styles/Header.module.css'
import Container from '../components/container'
import Link from 'next/link'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Link href="/">
            <img src="logo.png" className={styles.logo}></img>
          </Link>
          <div className={styles.nav_right}>
            <a href="#" className={styles.nav_link}>
              About
            </a>
            <a href="#" className={styles.nav_link_cta}>
              Register
            </a>
          </div>
        </nav>
        <div className={styles.header_content}>
          <h1 className={styles.header_title}>EconHacks 2020</h1>
          <p className={styles.header_description}>The first student-led <br/> economics hackathon.</p>
          <p className={styles.header_date}>Launch Date - End Date</p>
          <a href="#" className={styles.header_cta_button}>
            Register
          </a>
        </div>
      </Container>
    </header>
  )
}