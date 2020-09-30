import styles from '../../styles/About/Team.module.css'
import Container from '../container'
import TeamMember from './teamMember'

export default function Team(props) {
  return (
    <section className={styles.team}>
      <Container>
        <h1 className={styles.team_header}>Team</h1>
        <div className={styles.team_cards}>
          {props.teamMembers.map((member, index) => {
            return <TeamMember member={member} key={index} />
          })}
        </div>
      </Container>
    </section>
  )
}
