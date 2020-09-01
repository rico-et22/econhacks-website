import styles from '../../styles/About/Themes.module.css'
import Container from '../container'

export default function Themes(props) {
  return (
    <section className={styles.themes}>
      <Container>
        <h1 className={styles.themes_header}>Themes</h1>
        <div className={styles.themes_tba}>
          <p>To be announced during opening ceremony</p>
        </div>
      </Container>
    </section>
  )
}
