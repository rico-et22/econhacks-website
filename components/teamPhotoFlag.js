import styles from '../styles/TeamPhotoFlag.module.css'

export default function TeamPhotoFlag(props) {
  const countryList = [
    {
      name: 'USA',
      imageFileName: 'usa'
    },
    {
      name: 'Poland',
      imageFileName: 'poland',
      imageHasBorder: true
    },
    {
      name: 'India',
      imageFileName: 'india'
    },
    {
      name: 'Taiwan',
      imageFileName: 'taiwan'
    },
    {
      name: 'Hong Kong',
      imageFileName: 'hong-kong'
    },
    {
      name: 'Kenya',
      imageFileName: 'kenya'
    },
    {
      name: 'Canada',
      imageFileName: 'canada'
    },
    {
      name: 'Indonesia',
      imageFileName: 'indonesia',
      imageHasBorder: true
    }
  ]

  const getCountry = (countryName) => {
    return countryList.find(country => country.name === props.country)
  }

  const countryInfo = getCountry()

  if (countryInfo) return (
    <img
      src={`/flags/${countryInfo.imageFileName}.svg`} 
      className={`${styles.team_photo_flag} ${countryInfo.imageHasBorder ? styles.border : ''}`}
      alt={`From ${countryInfo.name}`}
      title={`From ${countryInfo.name}`}
    />
  )
  else return null
}