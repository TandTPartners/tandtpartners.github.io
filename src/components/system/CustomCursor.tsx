import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false)
  const [hover, setHover] = useState(false)
  const [label, setLabel] = useState<string | null>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { damping: 28, stiffness: 380, mass: 0.5 })
  const y = useSpring(rawY, { damping: 28, stiffness: 380, mass: 0.5 })
  const scale = useSpring(1, { damping: 22, stiffness: 320 })

  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouch(true)
      return
    }

    const onMove = (e: MouseEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        rawX.set(e.clientX)
        rawY.set(e.clientY)
      })
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const interactive = target.closest<HTMLElement>(
        'a, button, [role="button"], [data-cursor]'
      )
      if (interactive) {
        setHover(true)
        scale.set(3.5)
        setLabel(interactive.dataset.cursor ?? null)
      } else {
        setHover(false)
        scale.set(1)
        setLabel(null)
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [rawX, rawY, scale])

  if (isTouch) return null

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x, y, scale }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <div className="relative h-3 w-3 rounded-full bg-white">
          {hover && label && (
            <span className="mono absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white">
              {label}
            </span>
          )}
        </div>
      </motion.div>
    </>
  )
}
