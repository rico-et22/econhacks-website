import styles from '../styles/Sponsors.module.css'
import Container from './container'
import Image from 'next/image'

export default function Sponsors(props) {
  const {sponsors} = props

  return (
    <section className={styles.sponsors} id="sponsors">
      <Container>
        <h2 className={styles.sponsors_header}>Support from</h2>
        <div className={`${styles.sponsors_list}`}>
          {sponsors.map((sponsor, index) => {
            return (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.sponsors_list_item}`}
                key={index}
              >
                <Image
                  src={sponsor.logo.url}
                  alt={sponsor.name}
                  title={sponsor.name}
                  className={`${styles.sponsors_list_item_logo}`}
                  layout="fill"
                />
              </a>
            )
          })}
        </div>
        <div className={styles.sponsors_cards}>
          <div className={styles.sponsors_cards_card}>
            <h2>$230,000</h2>
            <p>
              prize pool
            </p>
          </div>
          <div className={styles.sponsors_cards_card}>
            <h2>3,000+</h2>
            <p>
              hackers
            </p>
          </div>
          <div className={styles.sponsors_cards_card}>
            <h2>20+</h2>
            <p>
              countries
            </p>
          </div>
        </div>
    </Container>
    </section>
  )
}
