import styles from '../styles/SpeakerSeries.module.css'
import Container from './container'
import SpeakerCard from './speakerCard'

export default function SpeakerSeries(props) {
  return (
    <section className={styles.speaker_series}>
      <Container>
        <h1 className={styles.speaker_series_header}>Speaker Series</h1>
        <div className={styles.speaker_series_cards}>
          {props.speakers.map((speaker, index) => {
            return <SpeakerCard speakerData={speaker} key={index}/>
          })}
        </div>
      </Container>
    </section>
  )
}
