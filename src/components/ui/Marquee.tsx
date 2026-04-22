import { motion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  separator?: string
  duration?: number
}

export default function Marquee({ items, separator = '·', duration = 32 }: MarqueeProps) {
  const sequence = [...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-white/10 py-4">
      <motion.div
        animate={{ x: ['0%', '-33.3333%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
        className="flex min-w-max items-center gap-8"
      >
        {sequence.map((item, i) => (
          <span key={i} className="mono flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>{item}</span>
            <span className="text-neutral-700">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
