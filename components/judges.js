import styles from '../styles/Judges.module.css'
import Container from './container'

export default function Judges(props) {
  return (
    <section className={styles.judges}>
      <Container>
        <h1 className={styles.judges_header}>Judges</h1>
        <div className={styles.judges_grid}>
          <div className={styles.judges_grid_item}>
            <div className={styles.judges_grid_item_photo}/>
            <h3>Judge Name</h3>
          </div>
          <div className={styles.judges_grid_item}>
            <div className={styles.judges_grid_item_photo}/>
            <h3>Judge Name</h3>
          </div>
          <div className={styles.judges_grid_item}>
            <div className={styles.judges_grid_item_photo}/>
            <h3>Judge Name</h3>
          </div>
          <div className={styles.judges_grid_item}>
            <div className={styles.judges_grid_item_photo}/>
            <h3>Judge Name</h3>
          </div>
        </div>
      </Container>
    </section>
  )
}
