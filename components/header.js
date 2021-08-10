import styles from '../styles/Header.module.css'
import Container from './container'
import { Parallax, Background } from 'react-parallax'
import Image from 'next/image'
import CTAButton from './ctaButton'

export default function Header(props) {
  const {title, description, date} = props
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
          <div className={styles.header_content}>
            <div>
              <h1 className={styles.header_title}>{title}</h1>
              <p className={styles.header_description} dangerouslySetInnerHTML={{__html: description}}></p>
              <p className={styles.header_date}>{date}</p>
              <CTAButton href="https://forms.gle/iVduPAMDai8V8XyK8" openInNewTab>Apply</CTAButton>
            </div>
          </div>
        </Container>
      </div>
    </Parallax>
  )
}
