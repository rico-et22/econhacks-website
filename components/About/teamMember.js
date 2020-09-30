import styles from '../../styles/About/Team.module.css'
import TeamPhotoFlag from '../../components/teamPhotoFlag'
import LinkedInIcon from '../../public/icons/linkedin.svg'

export default function TeamMember(props) {
  const { photo, country, name, role, linkedInLink } = props.member
  return (
    <div className={styles.team_cards_card}>
      <div className={styles.team_cards_card_image_wrapper}>
        {
          photo ?
          <img
            className={styles.team_cards_card_image}
            src={photo.url}
            alt={`${name}'s picture`}
          />
          :
          <div
            className={styles.team_cards_card_image}
            style={{backgroundColor: '#C4C4C4'}}
          />
        }
        <TeamPhotoFlag country={country} />
      </div>
      <div className={styles.team_cards_card_info}>
        <div className={styles.team_cards_card_info_header}>
          <h2>{name}</h2>
          {
            linkedInLink &&
            <a
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon height={28} width={28} className={styles.team_cards_card_info_header_linkedin}/>
            </a>
          }
        </div>
        <p>
          {role}
        </p>
      </div>
    </div>
  )
}