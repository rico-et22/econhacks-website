import styles from '../styles/ScheduleEvent.module.css'
import Image from 'next/image'

export default function ScheduleEvent(props) {
  let data = {}
  if (!props.isTba) data = props.eventData
  else {
    data = {
      dateTimeUtc: "TBA",
      title: "Schedule coming soon!",
      description: "<p>Stay tuned for updates</p>"
    }
  }
  const time = data.dateTimeUtc !== "TBA" ? new Date(data.dateTimeUtc).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone:"America/Los_Angeles" }) : "TBA"
  return (
    <div className={styles.schedule_event}>
      <div className={styles.desktop}>
        <div className={styles.schedule_event_time}>
          <p>{time}</p>
          <div className={styles.schedule_event_time_dot_wrapper}>
            <div className={styles.schedule_event_time_dot}/>
          </div>
        </div>
        <div className={styles.schedule_event_info}>
          <h4>{data.title}</h4>
          <div dangerouslySetInnerHTML={{__html:data.description}}/>
          {data.image && <div className={styles.schedule_event_image}><Image src={data.image.url} alt={`Image of ${data.title}`} layout='fill'/></div>}
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.schedule_event_time_dot_wrapper}>
          <div className={styles.schedule_event_time_dot}/>
        </div>
        <div className={styles.schedule_event_mobile_description}>
          <div className={styles.schedule_event_time}>
            <p>{time}</p>
          </div>
          <div className={styles.schedule_event_info}>
            <h4>{data.title}</h4>
            <div dangerouslySetInnerHTML={{__html:data.description}}/>
            {data.image && <div className={styles.schedule_event_image}><Image src={data.image.url} alt={`Image of ${data.title}`} width="359" height="190" layout="responsive"/></div>}
          </div>
        </div>
      </div>
    </div>
  )
}
