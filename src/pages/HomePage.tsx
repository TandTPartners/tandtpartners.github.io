import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

import Section from '../components/ui/Section'
import Marquee from '../components/ui/Marquee'
import MetaBar from '../components/ui/MetaBar'
import Reveal from '../components/ui/Reveal'
import ServiceList, { ServiceItem } from '../components/ui/ServiceList'
import NumberedRowList from '../components/ui/NumberedRow'
import Stat from '../components/ui/Stat'

const services: ServiceItem[] = [
  {
    num: '01',
    title: 'Website Creation',
    summary:
      'Premium, conversion-focused websites built on a strict typographic grid, engineered for performance, and structured around your business narrative.',
    href: '/website-creation',
    tags: ['Design', 'React', 'Performance'],
  },
  {
    num: '02',
    title: 'AI SEO Optimization',
    summary:
      'A technical and content methodology that makes your brand discoverable, understood, and cited by AI search platforms — from crawler access to citation monitoring.',
    href: '/ai-seo-optimization',
    tags: ['Audit', 'Schema', 'Monitoring'],
  },
  {
    num: '03',
    title: 'Project Management',
    summary:
      'Execution operating systems that transform strategic ambition into controlled, measurable delivery across teams, timelines, and stakeholders.',
    href: '/project-management-consulting',
    tags: ['Operations', 'Delivery', 'Governance'],
  },
]

const approach = [
  {
    num: '01',
    title: 'Listen',
    text: 'We start with a deliberate discovery process to understand the business, the market, and the outcome you are trying to move.',
  },
  {
    num: '02',
    title: 'Architect',
    text: 'We design the system — information hierarchy, visual language, technical architecture, or operating model — before execution.',
  },
  {
    num: '03',
    title: 'Build',
    text: 'We implement with precision. Clean code, rigorous typography, and disciplined project execution. No shortcuts, no fluff.',
  },
  {
    num: '04',
    title: 'Measure',
    text: 'We verify the outcome and hand over a system you can run with confidence — or keep supporting you as you scale it.',
  },
]

const marqueeItems = [
  'Website Creation',
  'AI SEO Optimization',
  'Project Management',
  'Brand Systems',
  'UX Architecture',
  'Performance Engineering',
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative pt-24 md:pt-32">
        <div className="container-swiss">
          <div className="flex items-center justify-between pb-10">
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              /Index · 00
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              Toronto · Est. 2024
            </div>
          </div>

          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <h1 className="display-xl max-w-[14ch] text-white">
              Digital systems,
              <br />
              <span className="italic font-light text-neutral-500">built with </span>
              purpose.
            </h1>

            <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-5 md:col-start-7">
                <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
                  T&T Partners designs premium websites, engineers AI search visibility,
                  and installs project delivery systems for companies that take execution
                  seriously.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Start a project <ArrowUpRight size={14} />
                  </Link>
                  <Link to="/website-creation" className="btn-ghost">
                    View services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-24 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 md:mt-32">
            {services.map((s) => (
              <div key={s.num} className="flex items-baseline gap-2">
                <span className="mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {s.num}
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="mt-10">
        <Marquee items={marqueeItems} />
      </div>

      {/* MANIFESTO */}
      <Section>
        <MetaBar index="01" label="Manifesto" right="Philosophy" />
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="eyebrow">What we believe</p>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="display-md text-white">
                Generic websites are a tax on your credibility. Generic execution
                is a tax on your business. We design, build, and consult the way
                Swiss engineers ship products —{' '}
                <span className="italic font-light text-neutral-400">
                  with restraint, precision, and intent.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="pt-0">
        <MetaBar index="02" label="Services" right="03 — Practices" />
        <div className="mt-12">
          <ServiceList items={services} />
        </div>
      </Section>

      {/* APPROACH */}
      <Section className="pt-0">
        <MetaBar index="03" label="Approach" right="04 — Phases" />
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="display-lg text-white">
                A single
                <br />
                <span className="italic font-light text-neutral-500">execution</span>
                <br />
                loop.
              </h2>
              <p className="mt-8 max-w-xs text-neutral-400">
                We do not scatter deliverables. Every engagement moves through the
                same disciplined cycle.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <NumberedRowList items={approach} />
          </div>
        </div>
      </Section>

      {/* STATS */}
      <Section className="pt-0">
        <MetaBar index="04" label="Standards" right="Fixed · Never negotiable" />
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          <Stat value="100%" label="Senior-led delivery" />
          <Stat value="03" label="Integrated practices" />
          <Stat value="10" label="Step AI SEO method" />
          <Stat value="∞" label="Attention to detail" />
        </div>
      </Section>

      {/* CLOSING STATEMENT */}
      <Section className="pt-0">
        <div className="border-t border-white/10 pt-16 md:pt-24">
          <Reveal>
            <h2 className="display-lg max-w-[20ch] text-white">
              If your business
              <br />
              is serious,
              <br />
              <span className="italic font-light text-neutral-500">
                your digital presence
              </span>{' '}
              should be too.
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Book a strategy call <ArrowUpRight size={14} />
            </Link>
            <Link to="/ai-seo-optimization" className="btn-ghost">
              See AI SEO method
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
