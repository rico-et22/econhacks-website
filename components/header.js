import styles from '../styles/Header.module.css'
import Container from './container'
import { Parallax, Background } from 'react-parallax'
import ApplyButton from './applyButton'
import Image from 'next/image'

export default function Header(props) {
  const {title, description, date} = props
  return (
    <Parallax
      contentClassName={styles.header}
      strength={300}
      className={styles.header_parallax}
    >
      <Background>
        <Image src="/bkg2.jpg" alt="" layout="fill"/>
      </Background>
      <div className={styles.header_color_bg}>
        <Container>
          <div className={styles.navbar_filler}/>
          <div className={styles.header_content}>
            <div>
              <h1 className={styles.header_title}>{title}</h1>
              <p className={styles.header_description} dangerouslySetInnerHTML={{__html: description}}></p>
              <p className={styles.header_date}>{date}</p>
              <div className={styles.header_buttons}>
                <ApplyButton/>
              </div>
            </div>
            <iframe
              srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/rx4CigJ4Tmc?autoplay=1><img src=https://i3.ytimg.com/vi/rx4CigJ4Tmc/hqdefault.jpg><span>▶</span></a>"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.header_video}
              loading="lazy"
              title="Promo video"
            >

            </iframe>
          </div>
        </Container>
      </div>
    </Parallax>
  )
}
