import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar(props) {
  return (
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
  )
}
