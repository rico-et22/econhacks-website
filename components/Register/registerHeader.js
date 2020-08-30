import styles from '../../styles/Header.module.css'
import registerStyles from '../../styles/Register.module.css'
import Container from '../container'
import Navbar from '../navbar'

export default function RegisterHeader(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header_color_bg}>
        <Container>
          <Navbar />
          <div className={registerStyles.register_header_content}>
            <h1 className={registerStyles.register_header_title}>Register now</h1>
            <p className={registerStyles.register_header_description}>for 24 hours of fun and learning about economics!</p>
            <p className={`${registerStyles.register_header_description} ${registerStyles.bold}`}>It's free!</p>
          </div>
        </Container>
      </div>
    </header>
  )
}
