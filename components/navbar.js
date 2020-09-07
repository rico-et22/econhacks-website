import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar(props) {
  const router = useRouter()
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <img src="logo.jpg" className={styles.logo}></img>
      </Link>
      <div className={styles.nav_right}>
        <Link href="/about">
          <a className={`${styles.nav_link} ${router.pathname === '/about' ? styles.active : ''}`}>About</a>
        </Link>
        <Link href="/register">
          <a className={`${styles.nav_link_cta} ${router.pathname === '/register' ? styles.active : ''}`}>
            Register
          </a>
        </Link>
      </div>
    </nav>
  )
}
