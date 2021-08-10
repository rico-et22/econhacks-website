import styles from '../styles/Chapter.module.css'
import Image from 'next/image'

export default function Chapter(props) {
  const { image, name, date, url, cssBackgroundColor } = props.chapter
  return (
    <a className={styles.chapter_card} href={url} target="_blank" rel="noopener noreferrer" style={{background: cssBackgroundColor ? cssBackgroundColor : "#1f2d3d"}}>
      <div className={styles.chapter_card_image_wrapper}>
        {
          image &&
          <div
            className={styles.chapter_card_image}
          >
            <Image
              src={image.url}
              alt={`${name}'s picture`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        }
      </div>
      <div className={styles.chapter_card_info}>
        <div className={styles.chapter_card_info_header}>
          <h2>{name}</h2>
        </div>
        <p>
          {date}
        </p>
      </div>
    </a>
  )
}