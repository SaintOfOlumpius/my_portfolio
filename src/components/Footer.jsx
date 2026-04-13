import styles from '../styles/Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span>Sthembiso Mcira · Full-Stack Developer · ZA · {year}</span>
      </div>
      <div className={styles.centre}>
        <span className={styles.quote}>
          &ldquo;I&apos;m not waiting to be given the senior title.&rdquo;
        </span>
      </div>
      <div className={styles.right}>
        <span>Built with Django + React</span>
      </div>
    </footer>
  )
}