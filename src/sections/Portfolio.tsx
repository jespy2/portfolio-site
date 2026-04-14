import { FadeCard } from '@/components'
import styles from '@/sections/Portfolio.module.css'

import motoscoreImg from '@/assets/motoscore.png'
import storialImg from '@/assets/storial.png'
import gomenuImg from '@/assets/gomenu.png'
import redisImg from '@/assets/redis-hawk.png'

const projects = [
  {
    company: 'Personal · Beta',
    title: 'MotoScore',
    img: motoscoreImg,
    desc: 'A motorcycle route analyzer that scores any road for riding enjoyment using a composite 0–100 fun score derived from six signals: curvature density, turn severity, elevation change rate, surface quality, flow consistency, and traffic — each weighted by rider profile (Sport, Touring, Adventure).',
    stack: ['Next.js 15', 'TypeScript', 'Mapbox GL JS', 'Zustand', 'Cloudflare Workers', 'Playwright', 'Vitest'],
    link: 'https://github.com/jespy2/motoscore-public',
    liveLink: 'https://motoscore.jamesespy.com/',
    designNotes: [
      'Six-signal scoring algorithm — curvature, elevation, surface, and flow weighted by rider profile',
      'Cloudflare Workers edge proxying — TomTom traffic and Mapbox API calls at the edge',
      'Garmin GPX export with 50m shaping points — prevents route divergence on device recalculation',
      'Tiered caching — 1min real-time traffic, 24hr historical patterns, indefinite elevation data',
      'This is a public mirror. Proprietary scoring implementation is excluded. Full codebase available for review under NDA for verified employer inquiries',
    ],
  },
  {
    company: 'Personal · Full-stack',
    title: 'Storial',
    img: storialImg,
    desc: 'Built for an engineering assessment, then rebuilt with enterprise-grade patterns. Redux Toolkit for scalable state, Next.js App Router for server-first architecture, Storybook + CVA variant system for a typed component library, and a full WCAG accessibility audit.',
    stack: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'MongoDB', 'Storybook', 'Tailwind'],
    link: 'https://github.com/jespy2/storial-3.0',
    designNotes: [
      'Redux over local state — demonstrates scalable architecture',
      'CVA variant system — type-safe, composable component APIs',
      'Declarative file structure — component/index.tsx pattern',
      'Light/dark mode + custom design tokens',
    ],
  },
  {
    company: 'Personal · In progress',
    title: 'GoMenu',
    img: gomenuImg,
    desc: 'A digital cookbook that scrapes LD+JSON recipe data from any URL, building a searchable, filterable cookbook with user notes, ratings, and mobile-first UX. Currently mid-refactor incorporating new mobile-centric ideas into the MVP.',
    stack: ['React', 'TypeScript', 'Node/Express', 'MongoDB Atlas', 'Material UI', 'SASS'],
    link: 'https://github.com/jespy2/gomenu',
    designNotes: [
      'LD+JSON scraping — captures structured recipe data from any site',
      'Atlas Search — server-side filtering middleware',
      'Mobile-first refactor in progress',
    ],
  },
  {
    company: 'Open source · Codesmith',
    title: 'redis-hawk',
    img: redisImg,
    desc: 'An open-source tool for monitoring Redis keyspace events and deployments in real time — granular key-level visibility across any number of Redis instances. My contribution focused on backend algorithms, data structures, and routing middleware.',
    stack: ['Node.js', 'Express', 'Redis', 'WebSockets', 'React'],
    link: 'https://github.com/oslabs-beta/redis-hawk',
    designNotes: [
      'Real-time keyspace monitoring across multiple Redis instances',
      'Custom algorithms and data structures for event visualization',
    ],
  },
]

const textContent = (activeFrame: number) => (
  <div className={styles.textInner}>
    <p className={styles.eyebrow}>Portfolio</p>
    <h2 className={styles.heading}>Selected work.</h2>
    <p className={styles.sub}>
      A mix of full-stack builds, open-source contributions, and architectural
      explorations — each one an opportunity to practice craft at scale.
    </p>

    {/* Active project detail */}
    <div className={styles.projectDetail}>
      <p className={styles.projectCompany}>{projects[activeFrame].company}</p>
      <h3 className={styles.projectTitle}>{projects[activeFrame].title}</h3>
      <p className={styles.projectDesc}>{projects[activeFrame].desc}</p>

      <div className={styles.designNotes}>
        {projects[activeFrame].designNotes.map((note, i) => (
          <div key={i} className={styles.noteRow}>
            <div className={styles.noteDot} />
            <span>{note}</span>
          </div>
        ))}
      </div>

      <div className={styles.stack}>
        {projects[activeFrame].stack.map(t => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>

      <div className={styles.projectLinks}>
        {projects[activeFrame].liveLink && (
          <a href={projects[activeFrame].liveLink} className={styles.codeLink} target="_blank" rel="noopener noreferrer">
            Live demo →
          </a>
        )}
        <a href={projects[activeFrame].link} className={styles.codeLink} target="_blank" rel="noopener noreferrer">
          Review the code →
        </a>
      </div>
    </div>

    {/* Project nav dots */}
    <div className={styles.dots}>
      {projects.map((_, i) => (
        <div key={i} className={`${styles.dot} ${i === activeFrame ? styles.dotActive : ''}`} />
      ))}
    </div>
  </div>
)

export default function Portfolio() {
  // We need activeFrame to drive text — lift it via a wrapper trick
  // ScrollPin handles this internally; we expose a version that accepts a render prop
  return (
    <PortfolioInner />
  )
}

// Inner component uses hook directly for activeFrame-aware text
import { useRef } from 'react'
import { useScrollPin } from '@/hooks'

function PortfolioInner() {
  const { wrapperRef, activeFrame } = useScrollPin(projects.length)

  return (
    <section id="portfolio" className={styles.section}>
      <div
        ref={wrapperRef}
        style={{ height: `calc(100vh * ${projects.length})` }}
        className={styles.wrapper}
      >
        <div className={styles.sticky}>
            <div className={styles.grid}>
            {/* Text col — driven by activeFrame */}
            <div className={styles.textCol}>
              {textContent(activeFrame)}
            </div>

            {/* Frame col — project screenshots */}
            <div className={styles.frameCol}>
              {projects.map((p, i) => {
                const diff = i - activeFrame
                let transform = ''
                let opacity = 0
                let zIndex = projects.length - i

                if (diff < 0) {
                  transform = 'translateY(-105%)'
                  opacity = 0
                } else if (diff === 0) {
                  transform = 'scale(1) translateY(0)'
                  opacity = 1
                  zIndex = projects.length + 1
                } else {
                  transform = 'scale(1) translateY(0)'
                  opacity = 0
                }

                return (
                  <div
                    key={p.title}
                    className={styles.frame}
                    style={{ transform, opacity, zIndex, backgroundImage: `url(${p.img})` }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile cards */}
      <div className={styles.mobileCards}>
        <div className={styles.mobileHeader}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h2 className={styles.heading}>Selected work.</h2>
          <p className={styles.sub}>
            A mix of full-stack builds, open-source contributions, and architectural
            explorations — each one an opportunity to practice craft at scale.
          </p>
        </div>
        {projects.map(p => (
          <FadeCard key={p.title} className={styles.mobileCard}>
            <img src={p.img} alt={p.title} className={styles.mobileCardImg} />
            <div className={styles.mobileCardBody}>
              <p className={styles.projectCompany}>{p.company}</p>
              <h3 className={styles.projectTitle}>{p.title}</h3>
              <p className={styles.projectDesc}>{p.desc}</p>
              <div className={styles.stack}>
                {p.stack.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              <div className={styles.projectLinks}>
                {p.liveLink && (
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className={styles.codeLink}>
                    Live demo →
                  </a>
                )}
                <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.codeLink}>
                  Review the code →
                </a>
              </div>
            </div>
          </FadeCard>
        ))}
      </div>
    </section>
  )
}
