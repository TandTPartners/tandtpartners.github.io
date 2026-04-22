import { motion } from 'framer-motion'

export interface NumberedRowItem {
  num: string
  title: string
  text: string
  meta?: string
}

interface NumberedRowListProps {
  items: NumberedRowItem[]
}

export default function NumberedRowList({ items }: NumberedRowListProps) {
  return (
    <ul className="border-t border-white/10">
      {items.map((item, index) => (
        <li key={item.num} className="border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
            className="py-8 md:grid md:grid-cols-12 md:gap-8 md:py-12"
          >
            <span className="mono block text-xs uppercase tracking-[0.2em] text-neutral-500 md:col-span-1">
              /{item.num}
            </span>
            <h3 className="display-md mt-3 text-white md:col-span-4 md:mt-0">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-neutral-400 md:col-span-6 md:mt-0">
              {item.text}
            </p>
            {item.meta && (
              <span className="mono mt-3 block text-[10px] uppercase tracking-[0.2em] text-neutral-500 md:col-span-1 md:mt-0 md:text-right">
                {item.meta}
              </span>
            )}
          </motion.div>
        </li>
      ))}
    </ul>
  )
}
