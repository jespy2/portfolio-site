import { ReactNode } from 'react'
import { useScrollPin } from '@/hooks'
import styles from '@/components/ScrollPin.module.css'

interface Frame {
  content: ReactNode
  bg?: string        // background image URL
  bgColor?: string   // fallback color
}

interface Props {
  frames: Frame[]
  textContent: ReactNode
  textSide?: 'left' | 'right'
}

/**
 * ScrollPin
 *
 * Creates the Aurora-style effect:
 * - Wrapper is tall (100vh × numFrames) to capture scroll
 * - Inner is sticky (100vh) so it stays in view
 * - Left col: text stays fixed the entire time
 * - Right col: frames sequence as you scroll
 * - When scroll exits wrapper, everything scrolls away normally
 */
export default function ScrollPin({ frames, textContent, textSide = 'left' }: Props) {
  const { wrapperRef, activeFrame } = useScrollPin(frames.length)

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      style={{ height: `calc(100vh * ${frames.length})` }}
    >
      <div className={styles.sticky}>
        <div className={`${styles.grid} ${textSide === 'right' ? styles.reversed : ''}`}>

          {/* Text column — never moves */}
          <div className={styles.textCol}>
            {textContent}
          </div>

          {/* Frame column — images sequence */}
          <div className={styles.frameCol}>
            {frames.map((frame, i) => {
              const diff = i - activeFrame
              let transform = ''
              let opacity = 0
              let zIndex = frames.length - i

              if (diff < 0) {
                // Already passed — slide off top
                transform = 'translateY(-105%)'
                opacity = 0
              } else if (diff === 0) {
                // Active — full size, front
                transform = 'scale(1) translateY(0)'
                opacity = 1
                zIndex = frames.length + 1
              } else if (diff === 1) {
                // Next — peeking behind
                transform = 'scale(0.94) translateY(24px)'
                opacity = 0.5
              } else if (diff === 2) {
                // Two back
                transform = 'scale(0.88) translateY(48px)'
                opacity = 0.25
              } else {
                // Further back
                transform = 'scale(0.82) translateY(64px)'
                opacity = 0.1
              }

              return (
                <div
                  key={i}
                  className={styles.frame}
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    backgroundImage: frame.bg ? `url(${frame.bg})` : undefined,
                    backgroundColor: frame.bgColor ?? '#111',
                  }}
                >
                  {frame.content}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
