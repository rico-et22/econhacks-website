import styles from '../styles/Schedule.module.css'
import Container from './container'
import { useState } from 'react'

export default function Schedule(props) {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <header className={styles.schedule}>
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
          <div className={styles.schedule_content}>
            <h3>November 14th</h3>
            <div className={styles.schedule_content_event}>
              <div className={styles.desktop}>
                <div className={styles.schedule_content_event_time}>
                  <p>9:00 AM</p>
                  <div className={styles.schedule_content_event_time_dot_wrapper}>
                    <div className={styles.schedule_content_event_time_dot}/>
                  </div>
                </div>
                <div className={styles.schedule_content_event_info}>
                  <h4>Event Name</h4>
                  <div>
                    <p>
                      Event Description <br/>
                      Event Description <br/>
                      Event Description <br/>
                    </p>
                    <p>
                      Event Description <br/>
                      Event Description <br/>
                      Event Description <br/>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.mobile}>
                <div className={styles.schedule_content_event_time_dot_wrapper}>
                  <div className={styles.schedule_content_event_time_dot}/>
                </div>
                <div className={styles.schedule_content_event_mobile_description}>
                  <div className={styles.schedule_content_event_time}>
                    <p>9:00 AM</p>
                  </div>
                  <div className={styles.schedule_content_event_info}>
                    <h4>Event Name</h4>
                    <div>
                      <p>
                        Event Description <br/>
                        Event Description <br/>
                        Event Description <br/>
                      </p>
                      <p>
                        Event Description <br/>
                        Event Description <br/>
                        Event Description <br/>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.schedule_content_event}>
              <div className={styles.desktop}>
                <div className={styles.schedule_content_event_time}>
                  <p>10:00 AM</p>
                  <div className={styles.schedule_content_event_time_dot_wrapper}>
                    <div className={styles.schedule_content_event_time_dot}/>
                  </div>
                </div>
                <div className={styles.schedule_content_event_info}>
                  <h4>Event Name</h4>
                </div>
              </div>
              <div className={styles.mobile}>
                <div className={styles.schedule_content_event_time_dot_wrapper}>
                  <div className={styles.schedule_content_event_time_dot}/>
                </div>
                <div className={styles.schedule_content_event_mobile_description}>
                  <div className={styles.schedule_content_event_time}>
                    <p>10:00 AM</p>
                  </div>
                  <div className={styles.schedule_content_event_info}>
                    <h4>Event Name</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.schedule_content_event}>
              <div className={styles.desktop}>
                <div className={styles.schedule_content_event_time}>
                  <p>12:00 AM</p>
                  <div className={styles.schedule_content_event_time_dot_wrapper}>
                    <div className={styles.schedule_content_event_time_dot}/>
                  </div>
                </div>
                <div className={styles.schedule_content_event_info}>
                  <h4>Event Name</h4>
                  <div>
                    <p>
                      Event Description <br/>
                      Event Description <br/>
                      Event Description <br/>
                    </p>
                    <p>
                      Event Description <br/>
                      Event Description <br/>
                      Event Description <br/>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.mobile}>
                <div className={styles.schedule_content_event_time_dot_wrapper}>
                  <div className={styles.schedule_content_event_time_dot}/>
                </div>
                <div className={styles.schedule_content_event_mobile_description}>
                  <div className={styles.schedule_content_event_time}>
                    <p>12:00 AM</p>
                  </div>
                  <div className={styles.schedule_content_event_info}>
                    <h4>Event Name</h4>
                    <div>
                      <p>
                        Event Description <br/>
                        Event Description <br/>
                        Event Description <br/>
                      </p>
                      <p>
                        Event Description <br/>
                        Event Description <br/>
                        Event Description <br/>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
