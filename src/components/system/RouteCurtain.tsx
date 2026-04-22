import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default function RouteCurtain() {
  const location = useLocation()
  const [key, setKey] = useState(location.pathname)

  useEffect(() => {
    setKey(location.pathname)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: 'top' }}
        className="pointer-events-none fixed inset-0 z-[9998] bg-black"
      >
        <div className="container-swiss flex h-full items-end pb-10">
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Loading {key === '/' ? 'index' : key.replace('/', '').replace(/-/g, ' ')}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
