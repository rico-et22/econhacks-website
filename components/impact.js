import styles from '../styles/Impact.module.css'
import Container from './container'

export default function Impact(props) {
  return (
    <section className={styles.impact} id="impact">
      <Container>
        <h1 className={styles.impact_header}>Our Impact</h1>
        <div className={styles.impact_cards}>
          <div className={styles.impact_cards_card}>
            <h2>23+</h2>
            <p>
              countries
            </p>
          </div>
          <div className={styles.impact_cards_card}>
            <h2>$230,000</h2>
            <p>
              funding in prizepool
            </p>
          </div>
          <div className={styles.impact_cards_card}>
            <h2>22+</h2>
            <p>
              sponsors
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
