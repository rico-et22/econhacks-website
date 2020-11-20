import styles from '../styles/SpeakersAndJudges.module.css'
import Container from './container'
import SpeakerCard from './speakerCard'

export default function SpeakersAndJudges(props) {
  return (
    <section className={styles.speakers_judges}>
      <Container>
        <h1 className={styles.speakers_judges_header}>Speakers & Judges</h1>
        <div className={styles.speakers_judges_cards}>
          {props.speakers.map((speaker, index) => {
            return <SpeakerCard speakerData={speaker} key={index}/>
          })}
        </div>
      </Container>
    </section>
  )
}
