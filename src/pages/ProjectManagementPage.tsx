import { ArrowUpRight } from 'lucide-react'

import Section from '../components/ui/Section'
import MetaBar from '../components/ui/MetaBar'
import Reveal from '../components/ui/Reveal'
import Stat from '../components/ui/Stat'
import NumberedRowList from '../components/ui/NumberedRow'
import Marquee from '../components/ui/Marquee'
import PricingGrid, { PricingTierData } from '../components/ui/PricingTier'
import Faq from '../components/ui/Faq'
import MagneticButton from '../components/ui/MagneticButton'
import ServiceGlyph from '../components/ui/ServiceGlyph'
import { SplitLine } from '../components/ui/TextReveal'
import SEO from '../components/system/SEO'
import { faqJsonLd, serviceJsonLd } from '../components/system/seoHelpers'

const pillars = [
  {
    num: '01',
    title: 'Roadmap',
    text: 'Translate strategy into a realistic, phased execution plan with clear ownership, sequencing, and measurable milestones.',
  },
  {
    num: '02',
    title: 'Cadence',
    text: 'Design meeting rhythms and decision checkpoints that keep stakeholders aligned without creating process fatigue.',
  },
  {
    num: '03',
    title: 'Risk',
    text: 'Identify, score, and mitigate delivery risk early — so issues do not quietly compound into missed milestones.',
  },
  {
    num: '04',
    title: 'Reporting',
    text: 'Build reporting tied to business outcomes, not vanity metrics. Leadership sees what actually matters.',
  },
  {
    num: '05',
    title: 'Governance',
    text: 'Escalation paths, decision authority, and change control documented — so the team moves fast without chaos.',
  },
  {
    num: '06',
    title: 'Review',
    text: 'Post-sprint and post-release retrospectives feed into a continuous improvement loop you can actually sustain.',
  },
]

const pricingTiers: PricingTierData[] = [
  {
    num: '01',
    name: 'Advisory',
    price: '$6k',
    priceNote: '2—4 week sprint',
    blurb: 'Short diagnostic engagement with leadership — reset direction, align the plan, and hand back a clear 90-day roadmap.',
    features: [
      'Executive discovery',
      'Current-state diagnostic',
      'Prioritized 90-day roadmap',
      'Risk & dependency map',
    ],
    cta: { label: 'Start advisory', to: '/contact' },
  },
  {
    num: '02',
    name: 'Embedded',
    price: '$14k/mo',
    priceNote: 'Monthly · Minimum 3 months',
    blurb: 'Senior PM leadership plugged into your active program — running cadence, unblocking teams, reporting to leadership.',
    features: [
      'Everything in Advisory',
      'Weekly operating cadence',
      'Stakeholder reporting',
      'Risk tracking & mitigation',
      'Direct team unblocking',
    ],
    featured: true,
    cta: { label: 'Embed a PM', to: '/contact' },
  },
  {
    num: '03',
    name: 'Transformation',
    price: 'Custom',
    priceNote: '6+ month engagement',
    blurb: 'End-to-end delivery operating model redesign for organizations that need a durable execution system across programs.',
    features: [
      'Operating model design',
      'Governance architecture',
      'PMO standup & enablement',
      'Tooling & reporting standup',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
]

const faqs = [
  {
    q: 'Are you a PM or a consultant?',
    a: 'Both. We install an operating model and, when needed, we run it. You can engage us for diagnostic advisory, embedded delivery leadership, or full operating model transformation — depending on maturity and scope.',
  },
  {
    q: 'Do you bring in a team or work alone?',
    a: 'Engagements are senior-led by one accountable PM lead. For transformation-scale work we scale with additional support as needed. You never get a junior PM.',
  },
  {
    q: 'What tools do you work in?',
    a: 'Tool-agnostic — Jira, Linear, Asana, Notion, Monday, custom. We bring a proven operating cadence and adapt it to your stack rather than forcing a new one.',
  },
  {
    q: 'How do you measure success?',
    a: 'Every engagement starts by defining the 3—5 outcomes leadership wants to move. We measure progress against those outcomes, not activity or throughput metrics.',
  },
  {
    q: 'Will this create more process overhead?',
    a: 'The opposite. We typically reduce meetings and redundant reporting by 30—50% by replacing ad-hoc rituals with purposeful cadences. Less process, more momentum.',
  },
]

export default function ProjectManagementPage() {
  return (
    <>
      <SEO
        title="Project Management Consulting"
        description="Operating systems that turn strategy into predictable execution — governance, cadence, risk, and reporting that leadership can trust."
        path="/project-management-consulting"
        jsonLd={[
          serviceJsonLd(
            'Project Management Consulting',
            'Senior project delivery advisory, embedded PM leadership, and operating model transformation for businesses that need dependable execution.',
            '/project-management-consulting'
          ),
          faqJsonLd(faqs),
        ]}
      />

      {/* HERO */}
      <section className="pt-12 md:pt-32">
        <div className="container-swiss">
          <div className="flex items-center justify-between pb-10">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              /Service · 03
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              Project Management
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="hero-headline display-xl text-white">
                <SplitLine>Execution is</SplitLine>
                <SplitLine delay={0.08}>
                  <span className="italic font-light text-neutral-500">a system.</span>
                </SplitLine>
              </h1>
            </div>
            <div className="hidden md:col-span-4 md:block">
              <div className="text-white">
                <ServiceGlyph type="pm" className="h-28 w-28" />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
                We install project delivery operating models that keep strategic
                initiatives controlled, aligned, and measurable — without burying
                teams in process.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton to="/contact">
                  Discuss an initiative <ArrowUpRight size={14} />
                </MagneticButton>
                <MagneticButton to="/website-creation" variant="ghost">
                  See Website practice
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Marquee items={['Roadmap', 'Cadence', 'Risk', 'Reporting', 'Governance', 'Review']} duration={28} />
      </div>

      {/* POINT OF VIEW */}
      <Section>
        <MetaBar index="01" label="Point of View" right="Execution bias" />
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="eyebrow">Principle</p>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="display-md text-white">
                Strategy that cannot be executed is decoration. We build the
                operating system that translates leadership intent into
                dependable delivery —{' '}
                <span className="italic font-light text-neutral-400">
                  meeting after meeting, sprint after sprint.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* PILLARS */}
      <Section className="pt-0">
        <MetaBar index="02" label="Operating Model" right="06 — Pillars" />
        <div className="mt-12">
          <NumberedRowList items={pillars} />
        </div>
      </Section>

      {/* PRICING */}
      <Section className="pt-0">
        <MetaBar index="03" label="Pricing" right="03 — Engagement modes" />
        <div className="mt-12">
          <PricingGrid tiers={pricingTiers} />
        </div>
        <p className="mono mt-6 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          All prices in USD · Scope and billing structure flexible per engagement
        </p>
      </Section>

      {/* FAQ */}
      <Section className="pt-0">
        <MetaBar index="04" label="Frequently Asked" right="Answers" />
        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </Section>

      {/* STATS */}
      <Section className="pt-0">
        <MetaBar index="05" label="Delivery" right="How we operate" />
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          <Stat value="Senior" label="Led, not delegated" />
          <Stat value="06" label="Operating pillars" />
          <Stat value="03" label="Engagement modes" />
          <Stat value="100%" label="Execution bias" />
        </div>
      </Section>

      {/* CLOSING */}
      <Section className="pt-0">
        <div className="border-t border-white/10 pt-16 md:pt-24">
          <Reveal>
            <h2 className="display-lg max-w-[22ch] text-white">
              Stop firefighting.
              <br />
              <span className="italic font-light text-neutral-500">
                Start executing.
              </span>
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton to="/contact">
              Brief your program <ArrowUpRight size={14} />
            </MagneticButton>
          </div>
        </div>
      </Section>
    </>
  )
}
