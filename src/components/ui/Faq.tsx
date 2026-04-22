import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

export interface FaqItem {
  q: string
  a: string
}

interface FaqProps {
  items: FaqItem[]
}

export default function Faq({ items }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <ul className="border-t border-white/10">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={i} className="border-b border-white/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              data-cursor={isOpen ? 'Close' : 'Open'}
              className="group grid w-full grid-cols-[40px_1fr_auto] items-start gap-6 py-6 text-left transition-colors duration-500 hover:bg-[#111] md:py-8"
            >
              <span className="mono pt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                /{String(i + 1).padStart(2, '0')}
              </span>
              <span className="display-md text-white transition-colors duration-500 group-hover:text-[var(--accent)]">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="pt-2 text-white"
              >
                <Plus size={22} />
              </motion.span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-[40px_1fr_auto] gap-6 pb-8">
                <span />
                <p className="max-w-3xl text-base leading-relaxed text-neutral-300 md:text-lg">
                  {item.a}
                </p>
                <span />
              </div>
            </motion.div>
          </li>
        )
      })}
    </ul>
  )
}
