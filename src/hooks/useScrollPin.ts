import { useEffect, useRef, useState } from 'react'

/**
 * useScrollPin
 *
 * Attach to a tall wrapper div (height: 100vh * numFrames).
 * Returns the currently active frame index (0-based) based on
 * how far the user has scrolled through the wrapper.
 *
 * The sticky inner element should be height: 100vh.
 * As the user scrolls, frames sequence 0 → numFrames-1.
 * When scroll exits the wrapper, normal page flow resumes.
 */
export function useScrollPin(numFrames: number) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [activeFrame, setActiveFrame] = useState(0)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const totalScroll = el.offsetHeight - window.innerHeight
      // How far we've scrolled INTO the wrapper (clamped 0–1)
      const progress = Math.min(1, Math.max(0, -rect.top / totalScroll))
      const frame = Math.min(numFrames - 1, Math.floor(progress * numFrames))
      setActiveFrame(frame)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [numFrames])

  return { wrapperRef, activeFrame }
}
