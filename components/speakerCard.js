import styles from '../styles/SpeakerCard.module.css'

export default function SpeakerCard(props) {
  const {title, photo, logo, description} = props.speakerData
  return (
    <div className={styles.speaker_card_wrapper}>
      <div className={styles.speaker_card}>
        {photo && (
          <img
            src={photo.url}
            className={styles.speaker_card_image}
          />
        )}
        <div className={styles.speaker_card_description}>
          {logo && (
            <img
              src={logo.url}
              className={styles.speaker_card_logo}
            />
          )}
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}