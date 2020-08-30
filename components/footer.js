import Container from './container'
import styles from '../styles/Footer.module.css'
import Icon from '@hackclub/icons'

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_content}>
          <a
            href="https://www.instagram.com/econhacks/"
            target="_blank"
            rel="noopener noreferrer"
            title="Our Instagram"
          >
            <Icon
              glyph="instagram"
              size={48}
              alt="Instagram"
            />
          </a>
          <p className={styles.footer_content_hackplus}>
            EconHacks 2020 is a fiscally sponsored project of&nbsp;
            <a
              href="https://hackplus.io"
              target="_blank"
              rel="noopener noreferrer"
            >
            Hack+.
            </a>
            &nbsp;EIN: 81-1543325
          </p>
          <p className={styles.footer_content_photoCredits}>Background photo by&nbsp;
            <a
              href="https://unsplash.com/@m_b_m"
              target="_blank"
              rel="noopener noreferrer"
            >
              M. B. M.
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
