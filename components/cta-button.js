import styles from '../styles/CTAButton.module.css'

export default function CTAButton(props) {
  return (
    <a
      className={`${styles.cta_button} ${props.smallFont ? styles.small_font : ''} ${props.className ? props.className : ''}`}
      href={props.href}
      target={props.openInNewTab ? '_blank' : ''}
      rel={props.openInNewTab ? 'noopener noreferrer' : ''}
    >
      {props.children}
    </a>
  )
}