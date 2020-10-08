import styles from '../../styles/Header.module.css'
import registerStyles from '../../styles/Register.module.css'
import Container from '../container'
import { Parallax } from 'react-parallax'

export default function RegisterHeader(props) {
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
          <div className={registerStyles.register_header_content}>
            <h1 className={registerStyles.register_header_title}>Register now</h1>
            <p className={registerStyles.register_header_description}>for 24 hours of fun and learning about economics!</p>
            <p className={`${registerStyles.register_header_description} ${registerStyles.bold}`}>It's free!</p>
          </div>
        </Container>
      </div>
    </Parallax>
  )
}
