import styles from '../styles/Chapter.module.css'
import Container from './container'
import Chapter from './chapter'

export default function ChapterList(props) {
  return (
    <section className={styles.chapter_list}>
      <Container>
        <div className={styles.chapter_list_cards}>
          {props.chapters.map((member, index) => {
            return <Chapter chapter={member} key={index} />
          })}
        </div>
      </Container>
    </section>
  )
}
