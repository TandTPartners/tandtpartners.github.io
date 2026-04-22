import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.3
      setVisible(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hide on the contact page itself
  if (location.pathname === '/contact') return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 px-4 py-3 backdrop-blur md:hidden"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Ready to start?
              </p>
              <p className="text-sm text-white">Book a strategy call</p>
            </div>
            <Link
              to="/contact"
              className="mono inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Contact <ArrowUpRight size={12} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
