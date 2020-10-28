import styles from '../styles/Workshops.module.css'
import Container from './container'

export default function Workshops(props) {
  return (
    <section className={styles.workshops}>
      <Container>
        <h1 className={styles.workshops_header}>Speaker Series</h1>
        <div className={styles.workshops_grid}>
          <div className={styles.workshops_grid_item}>To be announced!</div>
          <div className={styles.workshops_grid_item}>To be announced!</div>
        </div>
      </Container>
    </section>
  )
}
