import styles from '../styles/SponsorList.module.css'

export default function SponsorList(props) {
  const mainSponsors = props.sponsors.filter(sponsor => sponsor.logoSize !== 'additionalSupport')
  const additionalSupport = props.sponsors.filter(sponsor => sponsor.logoSize === 'additionalSupport')

  return (
    <>
      { mainSponsors.length > 0 &&
        <div className={styles.sponsor_list}>
          {mainSponsors.map((sponsor, index) => {
            return (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sponsor_list_item}
                key={index}
              >
                <img
                  src={sponsor.logo.url}
                  alt={sponsor.name}
                  title={sponsor.name}
                  className={styles.sponsor_list_item_logo}
                />
              </a>
            )
          })}
        </div>
      }
      { additionalSupport.length > 0 &&
        <div>
          <h3>Additional support</h3>
          <div className={`${styles.sponsor_list} ${styles.sponsor_list_additional}`}>
            {additionalSupport.map((sponsor, index) => {
              return (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sponsor_list_item}
                  key={index}
                >
                  <img
                    src={sponsor.logo.url}
                    alt={sponsor.name}
                    title={sponsor.name}
                    className={styles.sponsor_list_item_logo}
                  />
                </a>
              )
            })}
          </div>
        </div>
      }
  </>
  )
}