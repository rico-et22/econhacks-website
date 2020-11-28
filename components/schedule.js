import styles from '../styles/Schedule.module.css'
import Container from './container'
import ScheduleEvent from './scheduleEvent'
import { useState } from 'react'

export default function Schedule(props) {
  const [activeTab, setActiveTab] = useState(1)
  const {scheduleDays} = props
  return (
    <section className={styles.schedule} id="schedule">
      <Container>
        <div className={styles.schedule_header}>
          <h1>Schedule</h1>
          <p>
            All times are in&nbsp;
            <a
              href="https://www.timeanddate.com/time/zones/pdt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pacific Time
            </a>
          </p>
        </div>
        <div className={styles.schedule_wrapper}>
          <div className={styles.schedule_navbar}>
            <button
              className={`${styles.schedule_navbar_button} ${activeTab === 1 ? styles.active : ''}`}
              onClick={() => setActiveTab(1)}
            >
              Day 1
            </button>
            <button
              className={`${styles.schedule_navbar_button} ${activeTab === 2 ? styles.active : ''}`}
              onClick={() => setActiveTab(2)}
            >
              Day 2
            </button>
          </div>
          {
            scheduleDays[activeTab - 1] && scheduleDays[activeTab - 1].scheduleEvents.length > 0 ? (
              <div className={styles.schedule_content}>
                <h3>{scheduleDays[activeTab - 1].date}</h3>
                {scheduleDays[activeTab - 1].scheduleEvents.map((scheduleEvent, index) => {
                  return <ScheduleEvent eventData={scheduleEvent} key={index}/>
                })}
              </div>
            ) : (
              <div className={styles.schedule_content}>
                {scheduleDays[activeTab - 1] && scheduleDays[activeTab - 1].date && <h3>{scheduleDays[activeTab - 1].date}</h3>}
                <ScheduleEvent isTba/>
              </div>
            )
          }
        </div>
      </Container>
    </section>
  )
}
