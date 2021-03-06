import styles from '../styles/Sponsors.module.css'
import Container from './container'
import CTAButton from './ctaButton'
import SponsorList from './sponsorList'

export default function Sponsors(props) {
  return (
    <section className={styles.sponsors} id="sponsors">
      <Container>
        <h1 className={styles.sponsors_header}>Sponsors</h1>
        <SponsorList sponsors={props.sponsors} />
        <div className={styles.sponsors_row}>
          <div className={styles.sponsors_col_info}>
            <h2>Sponsor our hackathon!</h2>
            <p>View our prospectus to get more information about our hackathon, <br/> sponsorship tiers & more.</p>
            <p>We are a 501(c)(3) nonprofit — all donations are tax-deductible!</p>
            <CTAButton
              href="/EconHacks_Sponsorship_Prospectus.pdf"
              className={styles.sponsors_col_info_cta}
              smallFont
            >
              View prospectus
            </CTAButton>
          </div>
          <div className={styles.sponsors_col_image}>
            <a
              href="/EconHacks_Sponsorship_Prospectus.pdf"
              className={styles.sponsors_image}
            >
              <img
                src="/prospectus.jpg"
                alt="Sponsorship prospectus cover page"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
