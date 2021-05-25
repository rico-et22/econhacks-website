import styles from '../styles/Faq.module.css'
import Container from './container'

export default function Faq(props) {
  const {cardData} = props
  return (
    <section className={styles.faq} id="faq">
      <Container>
        <h1 className={styles.faq_header}>FAQ</h1>
        {cardData && (
          <div className={styles.faq_cards}>
            {cardData.map((card, index) => {
              return (
                <div className={styles.faq_cards_card}>
                  <h2>{card.header}</h2>
                  <p dangerouslySetInnerHTML={{__html: card.content}}/>
                </div>
              )
            })}
          </div>
        )}
      </Container>
    </section>
  )
}
