import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export interface ServiceItem {
  num: string
  title: string
  summary: string
  href: string
  tags: string[]
}

interface ServiceListProps {
  items: ServiceItem[]
}

export default function ServiceList({ items }: ServiceListProps) {
  return (
    <ul className="border-t border-white/10">
      {items.map((item, index) => (
        <li key={item.num} className="border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
          >
            <Link
              to={item.href}
              className="group block transition-colors duration-500 hover:bg-[#111]"
            >
              <div className="grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
                <span className="mono col-span-2 text-xs uppercase tracking-[0.2em] text-neutral-500 md:col-span-1">
                  /{item.num}
                </span>
                <div className="md:col-span-6">
                  <h3 className="display-md text-white transition-colors duration-500 group-hover:text-[var(--accent)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
                    {item.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:col-span-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mono flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-500 transition-colors duration-500 group-hover:text-white md:col-span-1 md:justify-end">
                  Open
                  <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  )
}
