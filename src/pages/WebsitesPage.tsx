import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import Section from '../components/ui/Section'
import MetaBar from '../components/ui/MetaBar'
import Reveal from '../components/ui/Reveal'
import NumberedRowList from '../components/ui/NumberedRow'
import Stat from '../components/ui/Stat'
import Marquee from '../components/ui/Marquee'

const phases = [
  {
    num: '01',
    title: 'Positioning',
    text: 'We audit your business, your market, and your users — then define the message, audience, and conversion path the website must serve.',
    meta: 'Week 1',
  },
  {
    num: '02',
    title: 'Architecture',
    text: 'Information hierarchy, sitemap, narrative flow, and interaction rules — designed on a strict typographic grid before visuals are applied.',
    meta: 'Week 2',
  },
  {
    num: '03',
    title: 'Visual System',
    text: 'A custom type scale, colour system, and component language, built to feel deliberate and premium across every breakpoint.',
    meta: 'Week 3',
  },
  {
    num: '04',
    title: 'Engineering',
    text: 'React + TypeScript implementation with component-driven architecture, strict performance budgets, and maintainable code patterns.',
    meta: 'Week 4—5',
  },
  {
    num: '05',
    title: 'Launch',
    text: 'QA across real devices, Core Web Vitals tuning, SEO and AI-readiness baselines, and controlled rollout with monitoring in place.',
    meta: 'Week 6',
  },
]

const deliverables = [
  {
    num: '01',
    title: 'Design system',
    text: 'A documented visual language — type, spacing, motion, components — that can be extended by your team without drift.',
  },
  {
    num: '02',
    title: 'Production front-end',
    text: 'Clean, componentized React + TypeScript codebase. No unnecessary dependencies, no abandoned templates.',
  },
  {
    num: '03',
    title: 'Performance baseline',
    text: 'Core Web Vitals passing, image strategy defined, and monitoring hooks ready for ongoing tuning.',
  },
  {
    num: '04',
    title: 'SEO + AI readiness',
    text: 'Semantic structure, schema, and content patterns optimized for both traditional search and AI-driven discovery.',
  },
]

export default function WebsitesPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 md:pt-32">
        <div className="container-swiss">
          <div className="flex items-center justify-between pb-10">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              /Service · 01
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              Website Creation
            </span>
          </div>
          <h1 className="display-xl max-w-[14ch] text-white">
            Premium websites,
            <br />
            <span className="italic font-light text-neutral-500">built on a </span>
            system.
          </h1>
          <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
                We design and engineer websites the way Swiss engineers ship products —
                on a disciplined grid, with restrained motion, and with every section
                earning its place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Start a website <ArrowUpRight size={14} />
                </Link>
                <Link to="/ai-seo-optimization" className="btn-ghost">
                  Pair with AI SEO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Marquee items={['Design', 'Typography', 'Grid', 'Motion', 'Performance', 'Engineering']} duration={28} />
      </div>

      {/* PHILOSOPHY */}
      <Section>
        <MetaBar index="01" label="Philosophy" right="Less, but better" />
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="eyebrow">Principles</p>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="display-md text-white">
                A website should not look like every other website online.
                We design with a strict grid, a limited palette, and a purposeful
                hierarchy —{' '}
                <span className="italic font-light text-neutral-400">
                  so every scroll feels intentional.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* PHASES */}
      <Section className="pt-0">
        <MetaBar index="02" label="Engagement" right="05 — Phases" />
        <div className="mt-12">
          <NumberedRowList items={phases} />
        </div>
      </Section>

      {/* DELIVERABLES */}
      <Section className="pt-0">
        <MetaBar index="03" label="Deliverables" right="What you receive" />
        <div className="mt-12">
          <NumberedRowList items={deliverables} />
        </div>
      </Section>

      {/* STACK */}
      <Section className="pt-0">
        <MetaBar index="04" label="Stack" right="Tools we ship with" />
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          <Stat value="React" label="UI framework" />
          <Stat value="TS" label="Type safety" />
          <Stat value="Vite" label="Tooling" />
          <Stat value="Tailwind" label="Styling" />
        </div>
      </Section>

      {/* CLOSING */}
      <Section className="pt-0">
        <div className="border-t border-white/10 pt-16 md:pt-24">
          <Reveal>
            <h2 className="display-lg max-w-[22ch] text-white">
              Ready to replace a generic site
              <br />
              <span className="italic font-light text-neutral-500">
                with a real system?
              </span>
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Brief the project <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
