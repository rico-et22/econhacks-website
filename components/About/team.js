import styles from '../../styles/About/Team.module.css'
import Container from '../container'

export default function Team(props) {
  return (
    <section className={styles.team}>
      <Container>
        <h1 className={styles.team_header}>Team</h1>
        <div className={styles.team_cards}>
          <div className={styles.team_cards_card}>
            <img
              className={styles.team_cards_card_image}
              src="/team-images/benji.jpg"
              alt="Benjamin Chen's Picture"
            />
            <div className={styles.team_cards_card_info}>
              <h2>Benjamin Chen</h2>
              <p>
                Founder, Lead Director
              </p>
            </div>
          </div>
          <div className={styles.team_cards_card}>
            <img
              className={styles.team_cards_card_image}
              src="/team-images/Ashley Pandya.jpg"
              alt="Ashley Pandya's Picture"
            />
            <div className={styles.team_cards_card_info}>
              <h2>Ashley Pandya</h2>
              <p>
                Outreach Director
              </p>
            </div>
          </div>
          <div className={styles.team_cards_card}>
            <img
              className={styles.team_cards_card_image}
              src="/team-images/IshanP.jpg"
              alt="Ishan Panchamia's Picture"
            />
            <div className={styles.team_cards_card_info}>
              <h2>Ishan Panchamia</h2>
              <p>
                Outreach Director
              </p>
            </div>
          </div>
          <div className={styles.team_cards_card}>
            <div
              className={styles.team_cards_card_image}
              style={{backgroundColor: '#C4C4C4'}}
            />
            <div className={styles.team_cards_card_info}>
              <h2>Rishabh Varshney</h2>
              <p>
                Marketing Director
              </p>
            </div>
          </div>
          <div className={styles.team_cards_card}>
            <div
              className={styles.team_cards_card_image}
              style={{backgroundColor: '#C4C4C4'}}
            />
            <div className={styles.team_cards_card_info}>
              <h2>Trfee Dsc</h2>
              <p>
                Sponsorships Director
              </p>
            </div>
          </div>
          <div className={styles.team_cards_card}>
            <img
              className={styles.team_cards_card_image}
              src="/team-images/kamil.jpg"
              alt="Kamil Pawlak's Picture"
            />
            <div className={styles.team_cards_card_info}>
              <h2>Kamil Pawlak</h2>
              <p>
                Technology Director, Website Developer
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
