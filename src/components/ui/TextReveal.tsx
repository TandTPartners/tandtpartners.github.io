import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface TextRevealProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  stagger?: number
  italicWords?: number[]
}

/**
 * Word-by-word text reveal using clip-path masks. Animates on mount.
 */
export default function TextReveal({
  children,
  className,
  as = 'h2',
  delay = 0,
  stagger = 0.045,
  italicWords = [],
}: TextRevealProps) {
  const words = children.split(' ')
  const Tag = as as keyof JSX.IntrinsicElements

  return (
    <Tag className={clsx('relative', className)}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * stagger,
            }}
            className={clsx(
              'inline-block',
              italicWords.includes(i) && 'italic font-light text-neutral-500'
            )}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

interface SplitLineProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Single-line clip-path reveal. Animates immediately on mount
 * (intended for above-the-fold hero text).
 */
export function SplitLine({ children, className, delay = 0 }: SplitLineProps) {
  return (
    <span className={clsx('block overflow-hidden', className)}>
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  )
}
