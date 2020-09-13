import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Container from './container'

export default function Navbar(props) {
  const router = useRouter()
  const [isSticky, setIsSticky] = useState(false)
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 16 ){
      setIsSticky(true);
    }
    else{
      setIsSticky(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  return (
    <div className={`${styles.nav_wrapper} ${isSticky ? styles.sticky : ''}`}>
      <Container>
        <nav className={styles.nav}>
          <Link href="/">
            <img src="logo.jpg" className={styles.logo}></img>
          </Link>
          <div className={styles.nav_right}>
            <Link href="/about">
              <a className={`${styles.nav_link} ${router.pathname === '/about' ? styles.active : ''}`}>About</a>
            </Link>
            <Link href="#">
              <a className={`${styles.nav_link} ${router.pathname === '/schedule' ? styles.active : ''}`}>Schedule</a>
            </Link>
            <Link href="/#faq">
              <a className={`${styles.nav_link} ${router.pathname === '/#faq' ? styles.active : ''}`}>FAQ</a>
            </Link>
            <Link href="/register">
              <a className={`${styles.nav_link_cta} ${router.pathname === '/register' ? styles.active : ''}`}>
                Register
              </a>
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  )
}
