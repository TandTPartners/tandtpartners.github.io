import { motion } from 'framer-motion'

export interface TimelineWeek {
  label: string
  title: string
  deliverable: string
  review: string
}

interface TimelineProps {
  weeks: TimelineWeek[]
}

export default function Timeline({ weeks }: TimelineProps) {
  return (
    <ol className="relative border-t border-white/10">
      {weeks.map((week, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
          className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-12 md:gap-8 md:py-10"
        >
          <div className="md:col-span-2">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              {week.label}
            </p>
            <p className="display-md mt-3 text-white">
              {String(i + 1).padStart(2, '0')}
            </p>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-xl font-medium text-white">{week.title}</h3>
          </div>
          <div className="md:col-span-3">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
              Deliverable
            </p>
            <p className="mt-2 text-sm text-neutral-300">{week.deliverable}</p>
          </div>
          <div className="md:col-span-3">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
              You review
            </p>
            <p className="mt-2 text-sm text-neutral-300">{week.review}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
