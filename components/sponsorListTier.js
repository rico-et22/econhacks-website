import styles from '../styles/SponsorListTier.module.css'
import Image from 'next/image'

export default function SponsorList(props) {
  const {sponsors, logoSize, title} = props
  return (
    <>
      { sponsors.length > 0 &&
        <div className={styles.sponsor_list_tier}>
          {sponsors.map((sponsor, index) => {
            return (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.sponsor_list_tier_item} ${styles[logoSize]}`}
                key={index}
              >
                <Image
                  src={sponsor.logo.url}
                  alt={sponsor.name}
                  title={sponsor.name}
                  className={`${styles.sponsor_list_tier_item_logo} ${styles[logoSize]}`}
                  layout="fill"
                />
              </a>
            )
          })}
        </div>
      }
  </>
  )
}