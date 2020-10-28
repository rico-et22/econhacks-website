import styles from '../styles/Workshops.module.css'
import Container from './container'
import SpeakerCard from './speakerCard'

export default function Workshops(props) {
  return (
    <section className={styles.workshops}>
      <Container>
        <h1 className={styles.workshops_header}>Speaker Series</h1>
        <SpeakerCard />
      </Container>
    </section>
  )
}
