import styles from '../../styles/Header.module.css'
import aboutStyles from '../../styles/About/AboutHeader.module.css'
import Container from '../container'
import { Parallax, Background } from 'react-parallax'
import Image from 'next/image'

export default function AboutHeader(props) {
  const {title} = props
  return (
    <Parallax
      contentClassName={`${styles.header} ${aboutStyles.about_header}`}
      strength={300}
      className={styles.header_parallax}
    >
      <Background>
        <Image src="/bkg.jpg" alt="" layout="fill" objectPosition="center"/>
      </Background>
      <div className={styles.header_color_bg}>
        <Container>
          <div className={styles.navbar_filler}/>
          <div className={aboutStyles.about_header_content}>
            <h1 className={aboutStyles.about_header_title}>{title}</h1>
            <p className={aboutStyles.about_header_description}>About</p>
          </div>
        </Container>
      </div>
    </Parallax>
  )
}
