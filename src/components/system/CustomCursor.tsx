import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false)
  const [visible, setVisible] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)
  // Tight spring so the dot stays essentially locked to the native pointer.
  const x = useSpring(rawX, { damping: 36, stiffness: 1400, mass: 0.12 })
  const y = useSpring(rawY, { damping: 36, stiffness: 1400, mass: 0.12 })
  const scale = useSpring(1, { damping: 22, stiffness: 420 })

  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouch(true)
      return
    }

    const onMove = (e: MouseEvent) => {
      if (!visible) setVisible(true)
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
        'a, button, [role="button"], input, textarea, select, label, [data-cursor]'
      )
      scale.set(interactive ? 2.4 : 1)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onFocus = () => setVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver)
    window.addEventListener('focus', onFocus)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('focus', onFocus)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [rawX, rawY, scale, visible])

  if (isTouch) return null

  return (
    <motion.div
      aria-hidden
      style={{ x, y, scale, opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    >
      <div className="h-2.5 w-2.5 rounded-full bg-white" />
    </motion.div>
  )
}
