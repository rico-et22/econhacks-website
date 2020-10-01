import styles from '../styles/SponsorList.module.css'

export default function SponsorList(props) {
  return (
    <div className={styles.sponsor_list}>
      {props.sponsors.map((sponsor, index) => {
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
  )
}