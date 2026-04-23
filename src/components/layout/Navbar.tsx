import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

const navLinks = [
  { to: '/', label: 'Index', num: '00' },
  { to: '/website-creation', label: 'Websites', num: '01' },
  { to: '/ai-seo-optimization', label: 'AI SEO', num: '02' },
  { to: '/project-management-consulting', label: 'PM Consulting', num: '03' },
  { to: '/contact', label: 'Contact', num: '04' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-white/10 bg-black/80 backdrop-blur' : 'border-b border-transparent'
      )}
    >
      <div className="container-swiss flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
          <span className="mono text-xs uppercase tracking-[0.2em] text-white">
            T&T Partners
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'mono flex items-baseline gap-3 text-xs uppercase tracking-[0.16em] transition-colors duration-300',
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                )
              }
            >
              <span className="text-[10px] text-neutral-500">{link.num}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="mono hidden items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black md:inline-flex"
        >
          Start Project <ArrowUpRight size={12} />
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex rounded-md border border-white/15 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-black md:hidden"
          >
            <div className="container-swiss flex flex-col divide-y divide-white/10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center justify-between py-5 transition-colors',
                      isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                    )
                  }
                >
                  <span className="flex items-baseline gap-3">
                    <span className="mono text-[10px] text-neutral-500">{link.num}</span>
                    <span className="display-md">{link.label}</span>
                  </span>
                  <ArrowUpRight size={18} />
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
