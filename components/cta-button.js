import styles from '../styles/CTAButton.module.css'

export default function CTAButton(props) {
  return (
    <a className={`${styles.cta_button} ${props.smallFont ? styles.small_font : ''} ${props.className ? props.className : ''}`} href={props.href}>
      {props.children}
    </a>
  )
}