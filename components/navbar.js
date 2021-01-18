import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Container from './container'
import Icon from '@hackclub/icons'

export default function Navbar(props) {
  const router = useRouter()
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileListOpen, setIsMobileListOpen] = useState(false)
  const handleScroll=() => {
    const offset=window.scrollY;
    if (offset > 16){
      setIsSticky(true);
    }
    else{
      setIsSticky(false);
    }
  }
  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll',handleScroll)
  })
  return (
    <div className={`${styles.nav_wrapper} ${isSticky ? styles.sticky : ''} ${isSticky || isMobileListOpen ? styles.hasBackground : ''}`}>
      <Container>
        <nav className={styles.nav}>
          <Link href="/">
            <img src="/logo.jpg" className={styles.logo}></img>
          </Link>
          <div className={styles.nav_right}>
            <div className={styles.desktop_only}>
              <Link href="/about">
                <a className={`${styles.nav_link} ${router.pathname === '/about' ? styles.active : ''}`}>About</a>
              </Link>
              <Link href="/#schedule">
                <a className={`${styles.nav_link} ${router.pathname === '/schedule' ? styles.active : ''}`}>Schedule</a>
              </Link>
              <Link href="/#faq">
                <a className={`${styles.nav_link} ${router.pathname === '/#faq' ? styles.active : ''}`}>FAQ</a>
              </Link>
              <Link href="/#sponsors">
                <a className={`${styles.nav_link} ${router.pathname === '/#sponsors' ? styles.active : ''}`}>Sponsors</a>
              </Link>
              <a
                href="https://www.bonfire.com/econhacks-2021-swag/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.nav_link}
              >
                Store
              </a>
            </div>
            <a
              href="https://econhacks.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.nav_link_cta} ${router.pathname === '/register' ? styles.active : ''}`}
            >
              Register
            </a>
            <button
              className={styles.nav_mobile_menu_button}
              onClick={() => setIsMobileListOpen(!isMobileListOpen)}
            >
              <Icon
                glyph="menu"
                size={64}
                fill="#fff"
                className={styles.nav_mobile_menu_button_icon}
              />
            </button>
          </div>
        </nav>
        <div className={`${styles.nav_mobile_links_wrapper} ${isMobileListOpen ? styles.open : ''}`}>
          <div className={`${styles.nav_mobile_links} ${isMobileListOpen ? styles.open : ''}`}>
            <Link href="/about">
              <a
                className={`${styles.nav_link} ${router.pathname === '/about' ? styles.active : ''}`}
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
              >
                About
              </a>
            </Link>
            <Link href="/#schedule">
              <a
                className={`${styles.nav_link} ${router.pathname === '/schedule' ? styles.active : ''}`}
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
              >
                Schedule
              </a>
            </Link>
            <Link href="/#faq">
              <a
                className={`${styles.nav_link} ${router.pathname === '/#faq' ? styles.active : ''}`}
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
              >
                FAQ
              </a>
            </Link>
            <Link href="/#sponsors">
              <a
                className={`${styles.nav_link} ${router.pathname === '/#sponsors' ? styles.active : ''}`}
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
              >
                Sponsors
              </a>
            </Link>
            <a
              href="https://www.bonfire.com/econhacks-2021-swag/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.nav_link}
              onClick={() => setIsMobileListOpen(!isMobileListOpen)}
            >
              Store
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
