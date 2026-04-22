import { ArrowUpRight } from 'lucide-react'

import Section from '../components/ui/Section'
import MetaBar from '../components/ui/MetaBar'
import Reveal from '../components/ui/Reveal'
import NumberedRowList from '../components/ui/NumberedRow'
import Stat from '../components/ui/Stat'
import Marquee from '../components/ui/Marquee'
import PricingGrid, { PricingTierData } from '../components/ui/PricingTier'
import Faq from '../components/ui/Faq'
import Timeline, { TimelineWeek } from '../components/ui/Timeline'
import MagneticButton from '../components/ui/MagneticButton'
import ServiceGlyph from '../components/ui/ServiceGlyph'
import { SplitLine } from '../components/ui/TextReveal'
import SEO from '../components/system/SEO'
import { faqJsonLd, serviceJsonLd } from '../components/system/seoHelpers'

const deliverables = [
  {
    num: '01',
    title: 'Design System',
    text: 'A documented visual language — type, spacing, motion, components — that can be extended by your team without drift.',
  },
  {
    num: '02',
    title: 'Production Frontend',
    text: 'Clean, componentized React + TypeScript codebase. No unnecessary dependencies, no abandoned templates.',
  },
  {
    num: '03',
    title: 'Performance Baseline',
    text: 'Core Web Vitals passing, image strategy defined, and monitoring hooks ready for ongoing tuning.',
  },
  {
    num: '04',
    title: 'SEO + AI Readiness',
    text: 'Semantic structure, schema, and content patterns optimized for both traditional search and AI-driven discovery.',
  },
]

const timeline: TimelineWeek[] = [
  {
    label: 'Week 01',
    title: 'Positioning & Discovery',
    deliverable: 'Brief doc, audience map, conversion objectives',
    review: 'Thursday · 30 min walkthrough',
  },
  {
    label: 'Week 02',
    title: 'Information Architecture',
    deliverable: 'Sitemap, wireflow, narrative hierarchy',
    review: 'Friday · Async Figma comments',
  },
  {
    label: 'Week 03',
    title: 'Visual Direction',
    deliverable: 'Type, colour, grid, component system',
    review: 'Mid-week · 45 min direction call',
  },
  {
    label: 'Week 04 — 05',
    title: 'Engineering & Build',
    deliverable: 'Production-ready React + TypeScript build',
    review: 'Staging URL · Ongoing review',
  },
  {
    label: 'Week 06',
    title: 'QA & Launch',
    deliverable: 'Cross-device QA, Core Web Vitals, DNS cutover',
    review: 'Launch checklist · Live monitoring',
  },
]

const pricingTiers: PricingTierData[] = [
  {
    num: '01',
    name: 'Essentials',
    price: '$12k',
    priceNote: 'Starting · Fixed scope',
    blurb: 'A focused 5-page marketing site for businesses that need to look premium, fast.',
    features: [
      'Up to 5 pages',
      '4-week build',
      'Design system lite',
      'Performance + basic SEO baseline',
    ],
    cta: { label: 'Enquire', to: '/contact' },
  },
  {
    num: '02',
    name: 'Studio',
    price: '$22—38k',
    priceNote: '6-week engagement',
    blurb: 'Our most requested engagement. Full brand site with custom architecture and post-launch support.',
    features: [
      'Up to 10 pages + system',
      'Custom visual identity',
      'Interaction + motion system',
      'AI SEO baseline included',
      '30 days post-launch support',
    ],
    featured: true,
    cta: { label: 'Start project', to: '/contact' },
  },
  {
    num: '03',
    name: 'Platform',
    price: 'Custom',
    priceNote: '12+ weeks · Retainer available',
    blurb: 'For complex multi-brand or product-led sites requiring a dedicated design & engineering team.',
    features: [
      'Unlimited scope',
      'Dedicated team',
      'CMS architecture',
      'Ongoing iteration retainer',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
]

const faqs = [
  {
    q: 'How long does a website take?',
    a: 'A focused marketing site runs 4 weeks. Our standard Studio engagement is 6 weeks end-to-end. Platform builds run 12+ weeks depending on CMS and integration scope. We provide a precise weekly plan at kickoff.',
  },
  {
    q: 'Do you work with our existing brand?',
    a: 'Yes. If you have a defined brand system we build within it and extend it for web. If your brand is weak or undefined, we can develop a lightweight digital identity as part of the engagement.',
  },
  {
    q: 'What happens after launch?',
    a: 'Every Studio and Platform engagement includes 30 days of hands-on support covering bugs, small edits, and performance checks. After that, we offer a monthly retainer or hand off a documented system your team can run.',
  },
  {
    q: 'Can you work with our internal dev team?',
    a: 'Absolutely. We can deliver design-only, design + front-end, or full turnkey implementation. Our code is structured to be handed over cleanly — no opaque builds.',
  },
  {
    q: 'What stack do you build on?',
    a: 'React + TypeScript, Vite or Next.js, Tailwind for styling, Framer Motion for interactions. For content-heavy sites we pair with Sanity, Contentful, or a headless CMS of your choice.',
  },
]

export default function WebsitesPage() {
  return (
    <>
      <SEO
        title="Website Creation"
        description="Premium, conversion-focused websites built on a strict typographic grid. Engineered with React + TypeScript and a clean design system."
        path="/website-creation"
        jsonLd={[
          serviceJsonLd(
            'Website Creation',
            'Premium website creation with custom design system, narrative UX architecture, and production-ready React + TypeScript implementation.',
            '/website-creation'
          ),
          faqJsonLd(faqs),
        ]}
      />

      {/* HERO */}
      <section className="pt-12 md:pt-32">
        <div className="container-swiss">
          <div className="flex items-center justify-between pb-10">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              /Service · 01
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              Website Creation
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="display-xl max-w-[14ch] text-white">
                <SplitLine>Premium websites,</SplitLine>
                <SplitLine delay={0.08}>
                  <span className="italic font-light text-neutral-500">built on a </span>
                  system.
                </SplitLine>
              </h1>
            </div>
            <div className="hidden md:col-span-4 md:block">
              <div className="text-white">
                <ServiceGlyph type="web" className="h-28 w-28" />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
                We design and engineer websites the way Swiss engineers ship products —
                on a disciplined grid, with restrained motion, and with every section
                earning its place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton to="/contact">
                  Start a website <ArrowUpRight size={14} />
                </MagneticButton>
                <MagneticButton to="/ai-seo-optimization" variant="ghost">
                  Pair with AI SEO
                </MagneticButton>
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

      {/* TIMELINE */}
      <Section className="pt-0">
        <MetaBar index="02" label="Engagement Timeline" right="06 Weeks · Studio" />
        <div className="mt-12">
          <Timeline weeks={timeline} />
        </div>
      </Section>

      {/* DELIVERABLES */}
      <Section className="pt-0">
        <MetaBar index="03" label="Deliverables" right="What you receive" />
        <div className="mt-12">
          <NumberedRowList items={deliverables} />
        </div>
      </Section>

      {/* PRICING */}
      <Section className="pt-0">
        <MetaBar index="04" label="Pricing" right="03 — Engagement tiers" />
        <div className="mt-12">
          <PricingGrid tiers={pricingTiers} />
        </div>
        <p className="mono mt-6 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          All prices in USD · Custom scope available on request
        </p>
      </Section>

      {/* FAQ */}
      <Section className="pt-0">
        <MetaBar index="05" label="Frequently Asked" right="Answers" />
        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </Section>

      {/* STACK */}
      <Section className="pt-0">
        <MetaBar index="06" label="Stack" right="Tools we ship with" />
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
            <MagneticButton to="/contact">
              Brief the project <ArrowUpRight size={14} />
            </MagneticButton>
          </div>
        </div>
      </Section>
    </>
  )
}
