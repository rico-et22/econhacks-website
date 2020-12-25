import styles from '../styles/SpeakersAndJudges.module.css'
import Container from './container'
import SpeakerCard from './speakerCard'

export default function SpeakersAndJudges(props) {
  const { people } = props
  const priorityPeople = people.filter((person) => person.priorityOrderId).sort((a, b) => (a.priorityOrderId > b.priorityOrderId) ? 1 : -1)
  const regularPeople = people.filter((person) => !person.priorityOrderId)

  return (
    <section className={styles.speakers_judges}>
      <Container>
        <h1 className={styles.speakers_judges_header}>Speakers & Judges</h1>
        <div className={styles.speakers_judges_cards}>
          {priorityPeople.map((speaker, index) => {
            return <SpeakerCard speakerData={speaker} key={index}/>
          })}
          {regularPeople.map((speaker, index) => {
            return <SpeakerCard speakerData={speaker} key={index}/>
          })}
        </div>
      </Container>
    </section>
  )
}
