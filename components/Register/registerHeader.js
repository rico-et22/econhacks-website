import styles from '../../styles/Header.module.css'
import registerStyles from '../../styles/Register.module.css'
import Container from '../container'
import { Parallax, Background } from 'react-parallax'
import Image from 'next/image'

export default function RegisterHeader(props) {
  return (
    <Parallax
      contentClassName={styles.header}
      strength={300}
      className={styles.header_parallax}
    >
      <Background>
        <Image src="/bkg.jpg" alt="" layout="fill" objectPosition="center"/>
      </Background>
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
