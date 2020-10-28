import styles from '../styles/SpeakerCard.module.css'

export default function SpeakerCard(props) {
  return (
    <div className={styles.speaker_card}>
      <img
        src="/speaker-card-sample/photo.jpg"
        className={styles.speaker_card_image}
      />
      <div className={styles.speaker_card_description}>
        <img
          src="/speaker-card-sample/logo.png"
          className={styles.speaker_card_logo}
        />
        <h1>JD Schramm</h1>
        <p>A seasoned communicator and entrepreneur, JD Schramm teaches the theoretical and practical aspects of effective communication as a lecturer in management at Stanford's Graduate School of Business. At Stanford, he has led the development and launch of the Mastery in Communication Initiative to help GSB students improve their mastery of speaking and writing.</p>
      </div>
    </div>
  )
}