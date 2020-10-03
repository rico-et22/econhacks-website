import Container from './container'
import styles from '../styles/Footer.module.css'
import Icon from '@hackclub/icons'

export default function Footer(props) {
  const getCopyrightYear = (year) => {
    const currentYear = new Date().getFullYear()
    if (currentYear > year) return `${year}-${currentYear}`
    return currentYear
  }
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_content}>
          <div>
            <img src='/logo.jpg' className={styles.footer_logo}/>
          </div>
          <div>
            <p className={styles.footer_content_paragraph}>
              &copy; {getCopyrightYear(2020)} EconHacks
            </p>
            <p className={styles.footer_content_paragraph}>
              <a
                href="mailto:info@econhacks.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              info@econhacks.org
              </a>
            </p>
            <p className={styles.footer_content_paragraph}>
              <a
                href="https://hackplus.io"
                target="_blank"
                rel="noopener noreferrer"
              >
              Hack+
              </a>
              &nbsp;EIN: 81-1543325
            </p>
            <div className={styles.footer_content_links}>
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
              <a
                href="mailto:info@econhacks.org"
                target="_blank"
                rel="noopener noreferrer"
                title="Our Email"
              >
                <Icon
                  glyph="email"
                  size={48}
                  alt="Email"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
