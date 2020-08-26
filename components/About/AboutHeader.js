import styles from '../../styles/Header.module.css'
import aboutStyles from '../../styles/About/AboutHeader.module.css'
import Container from '../Container'
import Link from 'next/link'
import Navbar from '../Navbar'

export default function AboutHeader(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header_color_bg}>
        <Container>
          <Navbar />
          <div className={aboutStyles.about_header_content}>
            <h1 className={aboutStyles.about_header_title}>EconHacks 2020</h1>
            <p className={aboutStyles.about_header_description}>About</p>
          </div>
        </Container>
      </div>
    </header>
  )
}
