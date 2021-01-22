import styles from '../styles/Header.module.css'
import Container from './container'
import { Parallax } from 'react-parallax'
import ApplyButton from './applyButton'

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
            <div>
              <h1 className={styles.header_title}>EconHacks 2021</h1>
              <p className={styles.header_description}>The largest <br/> economics hackathon.</p>
              <p className={styles.header_date}>February 13 - 14th</p>
              <div className={styles.header_buttons}>
                <ApplyButton/>
              </div>
            </div>
            <iframe src="https://www.youtube.com/embed/rx4CigJ4Tmc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={styles.header_video}></iframe>
          </div>
        </Container>
      </div>
    </Parallax>
  )
}
