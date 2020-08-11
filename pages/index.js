import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EconHacks 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img src="logo.png" className={styles.logo}></img>
        <h1 className={styles.header}>EconHacks 2020 Draft Page</h1>
        <p className={styles.description}>just starting...</p>
      </div>
    </div>
  )
}
