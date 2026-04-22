import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import Section from '../components/ui/Section'
import MetaBar from '../components/ui/MetaBar'
import Reveal from '../components/ui/Reveal'
import Stat from '../components/ui/Stat'
import NumberedRowList from '../components/ui/NumberedRow'
import Marquee from '../components/ui/Marquee'

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

const engagements = [
  {
    num: '01',
    title: 'Advisory',
    text: 'Short strategic sprints with leadership to diagnose, reset, and set direction — without taking over execution.',
    meta: '2—4 weeks',
  },
  {
    num: '02',
    title: 'Embedded',
    text: 'Senior PM leadership plugged into your active programs — running cadence, unblocking teams, and reporting to leadership.',
    meta: '3—6 months',
  },
  {
    num: '03',
    title: 'Transformation',
    text: 'End-to-end delivery operating model redesign for organizations that need a durable execution system across programs.',
    meta: '6+ months',
  },
]

export default function ProjectManagementPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 md:pt-32">
        <div className="container-swiss">
          <div className="flex items-center justify-between pb-10">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              /Service · 03
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              Project Management
            </span>
          </div>
          <h1 className="display-xl max-w-[16ch] text-white">
            Execution is
            <br />
            <span className="italic font-light text-neutral-500">a system.</span>
          </h1>
          <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
                We install project delivery operating models that keep strategic
                initiatives controlled, aligned, and measurable — without burying
                teams in process.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Discuss an initiative <ArrowUpRight size={14} />
                </Link>
                <Link to="/website-creation" className="btn-ghost">
                  See Website practice
                </Link>
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

      {/* ENGAGEMENTS */}
      <Section className="pt-0">
        <MetaBar index="03" label="Engagements" right="03 — Modes" />
        <div className="mt-12">
          <NumberedRowList items={engagements} />
        </div>
      </Section>

      {/* STATS */}
      <Section className="pt-0">
        <MetaBar index="04" label="Delivery" right="How we operate" />
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
            <Link to="/contact" className="btn-primary">
              Brief your program <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
