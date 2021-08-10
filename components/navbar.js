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
            <img src="/logo.svg" className={styles.logo} alt="EconHacks logo"></img>
          </Link>
          <div className={styles.nav_right}>
            <div className={styles.desktop_only}>
              <Link href="/about">
                <a className={`${styles.nav_link} ${router.pathname === '/about' ? styles.active : ''}`}>About</a>
              </Link>
              <Link href="/chapters">
                <a className={`${styles.nav_link} ${router.pathname === '/chapters' ? styles.active : ''}`}>Chapters</a>
              </Link>
            </div>
            <a className={`${styles.nav_link_cta} ${router.pathname === '/apply' ? styles.active : ''}`} href="https://forms.gle/iVduPAMDai8V8XyK8" target="_blank" rel="noopener noreferrer" >
              Apply
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
            <Link href="/chapters">
              <a
                className={`${styles.nav_link} ${router.pathname === '/chapters' ? styles.active : ''}`}
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
              >
                Chapters
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
