import styles from '../styles/Faq.module.css'
import Container from './container'

export default function Faq(props) {
  return (
    <section className={styles.faq} id="faq">
      <Container>
        <h1 className={styles.faq_header}>FAQ</h1>
        <div className={styles.faq_cards}>
          <div className={styles.faq_cards_card}>
            <h2>WHAT IS A HACKATHON?</h2>
            <p>
              A hackathon is an event where people gather around for a period of time and work with others to develop projects that helps the society.
            </p>
          </div>
          <div className={styles.faq_cards_card}>
            <h2>WHERE WILL THIS HACKATHON BE HOSTED?</h2>
            <p>
              EconHacks 2021 will be hosted virtually on Discord. <br/>
              More details to be announced!
            </p>
          </div>
          <div className={styles.faq_cards_card}>
            <h2>HOW MUCH DOES IT COST?</h2>
            <p>
              It is 100% free!
            </p>
          </div>
          <div className={styles.faq_cards_card}>
            <h2>WHO IS ELIGIBLE?</h2>
            <p>
              Anyone from 8th grade - 12th grade (or local equivalent) with a passion of economics!
            </p>
          </div>
          <div className={styles.faq_cards_card}>
            <h2>WHAT CAN I MAKE?</h2>
            <p>
              Anything in your preference! Notice that if it is a real life product participants should note it and make specific explanation during submission
            </p>
          </div>
          <div className={styles.faq_cards_card}>
            <h2>DO I NEED TO KNOW HOW TO CODE?</h2>
            <p>
              Nope! We have various workshops throughout the hackathon to enhance your coding skills. Additionally, people with economics knowledge could help with other parts of the team other than coding!
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
