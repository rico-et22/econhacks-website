import Container from './container'
import styles from '../styles/footer.module.css'

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_content}>
          <div>
            <p>Photo by&nbsp;
              <a
                href="https://unsplash.com/@m_b_m"
                target="_blank"
                rel="noopener noreferrer"
              >
                M. B. M.
              </a>
            </p>
          </div>
          <div>
            <p>
              Site designed by&nbsp;
              <a
                href="https://kamilpawlak.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kamil Pawlak
              </a> & Benjamin Chen
            </p>
            <p>
              Coded by&nbsp;
              <a
                href="https://kamilpawlak.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kamil Pawlak
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
