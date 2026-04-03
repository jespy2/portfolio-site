import { useEffect, useRef, useState } from 'react'
import styles from '@/components/FadeCard.module.css'

export default function FadeCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${styles.card} ${visible ? styles.visible : ''} ${className ?? ''}`}>
      {children}
    </div>
  )
}
