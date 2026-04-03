import styles from '@/components/Nav.module.css'
import espyLogo from '@/assets/espylogo.svg'

const links = ['About', 'Portfolio', 'Contact']

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src={espyLogo} alt="Espy logo" className={styles.mark} />
        <div>
          <div className={styles.name}>James Espy</div>
          <div className={styles.sub}>Software Engineer</div>
        </div>
      </button>

      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)}>{l}</button>
          </li>
        ))}
      </ul>

      <button className={styles.cta} onClick={() => scrollTo('contact')}>
        Available for work
      </button>
    </nav>
  )
}
