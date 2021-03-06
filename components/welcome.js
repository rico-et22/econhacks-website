import styles from '../styles/Welcome.module.css'
import Container from './container'

export default function Welcome(props) {
  return (
    <section className={styles.welcome}>
      <Container>
        <div className={styles.welcome_header}>
          <h1>Welcome to EconHacks</h1>
          <p>
          EconHacks is a completely free 24 hours virtual hackathon that fosters hackers to solve problems in the field of economics.
          People from all over the world will gather around in the teams of 1-4 people and use code to solve some of the economic problems we are facing today, especially during this pandemic.
          </p>
        </div>
        <div className={styles.welcome_cards}>
          <div className={styles.welcome_cards_card}>
            <h2>Beginner Friendly</h2>
            <p>
              All students are welcomed! <br/> We have various videolists that will be distributed in our chat to enhance participants' skills and assist them throughout the hackathon
            </p>
          </div>
          <div className={styles.welcome_cards_card}>
            <h2>Network</h2>
            <p>
              Meet people from places all around the world! <br/> Virtual hackathon allows you sit back at home and network with passionate hackers just like you!
            </p>
          </div>
          <div className={styles.welcome_cards_card}>
            <h2>Win prizes</h2>
            <p>
              Earn the reward for your hard work and get support from our sponsors to continue grow your project after this hackathon! 
            </p>
          </div>
          <div className={styles.welcome_cards_card}>
            <h2>Learn & Explore</h2>
            <p>
              Gain insights and experience from guest speaker series! Our guest speakers have many years of experience in their field of expertise
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
