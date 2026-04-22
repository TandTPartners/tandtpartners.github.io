import { MouseEvent, ReactNode, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'

interface MagneticButtonProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'ghost'
  className?: string
  strength?: number
}

export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className,
  strength = 0.22,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { damping: 18, stiffness: 220 })
  const sy = useSpring(y, { damping: 18, stiffness: 220 })

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const classes = clsx(variant === 'primary' ? 'btn-primary' : 'btn-ghost', className)

  const inner = <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">{children}</motion.span>

  const wrapperClass = 'inline-block'

  if (to) {
    return (
      <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={wrapperClass}>
        <Link to={to} className={classes}>
          {inner}
        </Link>
      </motion.div>
    )
  }
  if (href) {
    return (
      <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={wrapperClass}>
        <a href={href} className={classes}>
          {inner}
        </a>
      </motion.div>
    )
  }
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={wrapperClass}>
      <button type={type} onClick={onClick} className={classes}>
        {inner}
      </button>
    </motion.div>
  )
}
