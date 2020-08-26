import styles from '../styles/Sponsors.module.css'
import Container from './Container'

export default function Sponsors(props) {
  return (
    <section className={styles.sponsors}>
      <Container>
        <h1 className={styles.sponsors_header}>Sponsors</h1>
        <p style={{textAlign: 'center'}}>Add sponsors & tiers here...</p>
      </Container>
    </section>
  )
}
