import styles from '@/components/AnnouncementBanner.module.css'

export default function AnnouncementBanner() {
  return (
    <div className={styles.banner}>
      <span className={styles.badge}>Beta</span>
      <p className={styles.text}>
        MotoScore — score any road for riding enjoyment across six signals. Final stages of beta.
      </p>
      <p className={styles.textMobile}>
        MotoScore — motorcycle route scorer. Final beta.
      </p>
      <div className={styles.links}>
        <a
          href="https://motoscore.jamesespy.com/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Try the demo →
        </a>
        <div className={styles.divider} />
        <a
          href="https://github.com/jespy2/motoscore"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
