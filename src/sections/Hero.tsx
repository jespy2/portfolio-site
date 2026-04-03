import styles from '@/sections/Hero.module.css'
import pathBg from '@/assets/path.jpg'
import profileImg from '@/assets/profile.jpg'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} style={{ backgroundImage: `url(${pathBg})` }} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Full-stack engineer · UI specialist</p>
        <h1 className={styles.headline}>
          Building interfaces<br />
          <span className={styles.dim}>that feel as good</span><br />
          as they perform.
        </h1>
        <h4 className={styles.sub}>
          I&apos;m a product-focused engineer with a passion for crafting exceptional
          user experiences through elegant full-stack development. 10+ years of
          turning complex problems into clean, scalable solutions.
        </h4>
        <p className={styles.body}>
          What sets me apart is a rare blend of technical depth and business fluency —
          I&apos;ve shipped polished interfaces and reliable backends across startups and
          enterprises alike, while bridging the gap between technical and non-technical
          stakeholders. I believe great software is a team sport, and I bring the
          communication and empathy to prove it. Let&apos;s build something incredible together.
        </p>
        <div className={styles.ctas}>
          <button
            className={styles.btnPrimary}
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View portfolio
          </button>
          <button
            className={styles.btnOutline}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in touch
          </button>
        </div>
      </div>

      <div className={styles.photoCol}>
        <img src={profileImg} alt="James Espy" className={styles.photo} />
      </div>
    </section>
  )
}
