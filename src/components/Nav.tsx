import { useState } from 'react'
import styles from '@/components/Nav.module.css'
import espyLogo from '@/assets/espylogo.svg'

const links = ['About', 'Portfolio', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav className={styles.nav}>
        <button className={styles.logo} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setOpen(false) }}>
          <img src={espyLogo} alt="Espy logo" className={styles.mark} />
          <div>
            <div className={styles.name}>James Espy</div>
            <div className={styles.sub}>Software Engineer</div>
          </div>
        </button>

        {/* Desktop */}
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
          ))}
        </ul>
        <button className={styles.cta} onClick={() => scrollTo('contact')}>
          Available for work
        </button>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        {links.map(l => (
          <button key={l} className={styles.mobileLink} onClick={() => scrollTo(l)}>{l}</button>
        ))}
        <button className={styles.mobileCta} onClick={() => scrollTo('contact')}>
          Available for work
        </button>
      </div>
    </>
  )
}
