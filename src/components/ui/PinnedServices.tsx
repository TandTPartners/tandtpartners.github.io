import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import ServiceGlyph from './ServiceGlyph'

type GlyphType = 'web' | 'ai-seo' | 'pm'

interface PinnedService {
  num: string
  title: string
  kicker: string
  description: string
  bullets: string[]
  href: string
  glyph: GlyphType
}

const services: PinnedService[] = [
  {
    num: '01',
    title: 'Website Creation',
    kicker: 'Service · Design & Build',
    description:
      'Premium, conversion-focused websites built on a strict typographic grid and engineered with clean React + TypeScript patterns.',
    bullets: ['Narrative-led IA', 'Custom type system', 'Performance baseline'],
    href: '/website-creation',
    glyph: 'web',
  },
  {
    num: '02',
    title: 'AI SEO Optimization',
    kicker: 'Service · Visibility',
    description:
      'A 10-step methodology that makes your business discoverable, understood, and cited by AI search platforms like ChatGPT and Perplexity.',
    bullets: ['Crawler audit', 'Schema + citability', 'Citation monitoring'],
    href: '/ai-seo-optimization',
    glyph: 'ai-seo',
  },
  {
    num: '03',
    title: 'Project Management',
    kicker: 'Service · Delivery',
    description:
      'Operating systems that turn strategy into predictable execution — governance, cadence, risk, and reporting that leadership can trust.',
    bullets: ['Roadmap design', 'Operating cadence', 'Execution reporting'],
    href: '/project-management-consulting',
    glyph: 'pm',
  },
]

export default function PinnedServices() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Slide through 3 panels (each is 100vw wide) → translate from 0 to -2/3
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.666%'])
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-[var(--bg)]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Top metadata bar */}
        <div className="absolute inset-x-0 top-0 z-20 pt-24 md:pt-28">
          <div className="container-swiss">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                /02 · Services
              </span>
              <span className="mono hidden text-[10px] uppercase tracking-[0.22em] text-neutral-500 md:inline">
                Scroll to advance · 03 frames
              </span>
            </div>
          </div>
        </div>

        {/* Horizontally sliding panels (full viewport width each) */}
        <motion.div
          style={{ x }}
          className="absolute inset-0 flex h-screen w-[300vw] items-center will-change-transform"
        >
          {services.map((s, i) => (
            <div key={s.num} className="relative h-screen w-screen shrink-0">
              <div className="container-swiss grid h-full w-full items-center gap-8 pt-20 md:grid-cols-12 md:gap-10 md:pt-28">
                <div className="md:col-span-5">
                  <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    {s.kicker}
                  </p>
                  <p className="mono mt-3 text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    Frame {String(i + 1).padStart(2, '0')} of 03
                  </p>
                  <div className="mt-10 text-white">
                    <ServiceGlyph type={s.glyph} className="h-32 w-32" />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    /{s.num}
                  </p>
                  <h3 className="display-lg mt-4 text-white">{s.title}</h3>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
                    {s.description}
                  </p>
                  <ul className="mt-8 grid max-w-md grid-cols-1 gap-3 md:grid-cols-3">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="mono border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.14em] text-neutral-400"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={s.href}
                    data-cursor="Open"
                    className="mono mt-10 inline-flex items-center gap-2 border-b border-white pb-1 text-xs uppercase tracking-[0.18em] text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Explore the service <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              <span className="mono absolute bottom-10 right-6 hidden text-[10px] uppercase tracking-[0.2em] text-neutral-500 md:block md:right-10">
                / {String(i + 1).padStart(2, '0')} — {String(services.length).padStart(2, '0')}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom progress bar */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-white/10">
          <motion.div
            style={{ scaleX: progressScale, transformOrigin: 'left' }}
            className="h-full w-full bg-[var(--accent)]"
          />
        </div>
      </div>
    </section>
  )
}
