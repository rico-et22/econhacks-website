import styles from '../styles/Welcome.module.css'
import Container from './container'

export default function Welcome(props) {
  return (
    <section className={styles.welcome}>
      <Container>
        <div className={styles.welcome_header}>
          <h1>Welcome to EconHacks</h1>
          <p>
          We organized the largest youth-led economics hackathon named EconHacks last year, with over 350+ highschool students & undergraduates from 23+ countries competing for a 230k USD prize pool.
          </p>
          <p>
          We need more youths taking initiatives to spread the combination of CS and Economics together. That is why EconHacks is transfering to a chapter system based hackathon where we accept chapter applications from almost everywhere in the world. If you are a leader in your community whose interest aligns with us, click in "apply"!
          </p>
        </div>
        <h2 className={styles.welcome_subheader}>
          What you get
        </h2>
        <div className={styles.welcome_cards}>
          <div className={styles.welcome_cards_card}>
            <h3>legal work all settled.</h3>
            <p>
              <ul>
                <li>Our fiscally sponsored 501(c)(3) non-profit status</li>
                <li>Free banking services (with a certain rate for hackathons)</li>
              </ul>
            </p>
          </div>
          <div className={styles.welcome_cards_card}>
            <h3>Copy & Paste</h3>
            <p>
              Sponsorship & Outreach Templates all settled ; <br/> HR Logistics and every possible document that you need to host a complete hackathon provided for FREE
            </p>
          </div>
          <div className={styles.welcome_cards_card}>
            <h3>Speakers</h3>
            <p>
              Pre-recorded speakers videos to display during hackathon such as United Nations Secretary General Candidate or Harvard Economists. 
            </p>
          </div>
          <div className={styles.welcome_cards_card}>
            <h3>Learn & Explore</h3>
            <p>
              Gain insights and experience from our core team, many competed in 10+ hackathons with extensive experiences in different fields.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
