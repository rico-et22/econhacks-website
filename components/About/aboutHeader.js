import styles from '../../styles/Header.module.css'
import aboutStyles from '../../styles/About/AboutHeader.module.css'
import Container from '../container'
import { Parallax } from 'react-parallax'

export default function AboutHeader(props) {
  return (
    <Parallax
      bgImage='/bkg2.jpg'
      bgImageAlt="background"
      contentClassName={`${styles.header} ${aboutStyles.about_header}`}
      strength={300}
    >
      <div className={styles.header_color_bg}>
        <Container>
          <div className={styles.navbar_filler}/>
          <div className={aboutStyles.about_header_content}>
            <h1 className={aboutStyles.about_header_title}>EconHacks 2021</h1>
            <p className={aboutStyles.about_header_description}>About</p>
          </div>
        </Container>
      </div>
    </Parallax>
  )
}
