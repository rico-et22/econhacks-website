import styles from '../styles/SpeakerCard.module.css'
import Image from 'next/image'

export default function SpeakerCard(props) {
  const {title, photo, logo, logoAltText, description} = props.speakerData
  return (
    <div className={styles.speaker_card_wrapper}>
      <div className={styles.speaker_card}>
        {photo && (
          <div className={styles.speaker_card_image}>
            <Image
              src={photo.url}
              alt={`Image of ${title}`}
              layout="fill"
            />
          </div>
        )}
        <div className={styles.speaker_card_description}>
          {logo && (
            <div className={styles.speaker_card_logo}>
              <Image
                src={logo.url}
                alt={`Logo of ${logoAltText}`}
                layout="fill"
              />
            </div>
          )}
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}