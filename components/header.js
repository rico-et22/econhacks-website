import styles from '../styles/Header.module.css'
import Container from './container'
import Link from 'next/link'
import CTAButton from './cta-button'
import { Parallax } from 'react-parallax'

export default function Header(props) {
  return (
    <Parallax
      bgImage='/bkg2.jpg'
      bgImageAlt="background"
      contentClassName={styles.header}
      strength={300}
    >
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
    </Parallax>
  )
}
