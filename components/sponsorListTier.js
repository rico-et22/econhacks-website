import styles from '../styles/SponsorListTier.module.css'

export default function SponsorList(props) {
  const {sponsors, logoSize, title} = props
  return (
    <>
      <h3 className={`${styles.sponsor_list_tier_header} ${styles[logoSize]}`}>{title}</h3>
      { sponsors.length > 0 &&
        <div className={styles.sponsor_list_tier}>
          {sponsors.map((sponsor, index) => {
            return (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sponsor_list_tier_item}
                key={index}
              >
                <img
                  src={sponsor.logo.url}
                  alt={sponsor.name}
                  title={sponsor.name}
                  className={`${styles.sponsor_list_tier_item_logo} ${styles[logoSize]}`}
                />
              </a>
            )
          })}
        </div>
      }
  </>
  )
}