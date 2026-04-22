import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

import Section from '../components/ui/Section'
import MetaBar from '../components/ui/MetaBar'
import Reveal from '../components/ui/Reveal'
import Stat from '../components/ui/Stat'
import Marquee from '../components/ui/Marquee'
import PricingGrid, { PricingTierData } from '../components/ui/PricingTier'
import Faq from '../components/ui/Faq'
import MagneticButton from '../components/ui/MagneticButton'
import ServiceGlyph from '../components/ui/ServiceGlyph'
import { SplitLine } from '../components/ui/TextReveal'
import SEO from '../components/system/SEO'
import { faqJsonLd, serviceJsonLd } from '../components/system/seoHelpers'
import { aiSeoSteps } from '../data/aiSeoSteps'

const platforms = ['ChatGPT', 'Perplexity', 'Google AI Overviews', 'Microsoft Copilot', 'Claude', 'Gemini']

const pricingTiers: PricingTierData[] = [
  {
    num: '01',
    name: 'Audit',
    price: '$3.5k',
    priceNote: 'One-time · 2-week delivery',
    blurb: 'Full diagnostic of crawler access, rendering, schema coverage, and citation footprint.',
    features: [
      'AI crawler + rendering audit',
      'Schema & citability scoring',
      'Competitive citation benchmark',
      'Prioritized action plan',
    ],
    cta: { label: 'Request audit', to: '/contact' },
  },
  {
    num: '02',
    name: 'Implementation',
    price: '$9—18k',
    priceNote: '4—8 week build',
    blurb: 'We execute the audit recommendations end-to-end — robots.txt, schema, content structure, verification.',
    features: [
      'Everything in Audit',
      'Robots & rendering fixes',
      'JSON-LD schema deployment',
      'Content citability upgrades',
      'Post-implementation rescore',
    ],
    featured: true,
    cta: { label: 'Start project', to: '/contact' },
  },
  {
    num: '03',
    name: 'Monitoring',
    price: '$1.8k/mo',
    priceNote: 'Monthly retainer',
    blurb: 'Continuous tracking across ChatGPT, Perplexity, and AI Overviews with monthly competitive reporting.',
    features: [
      'Monthly Share of AI Voice report',
      'Citation drop alerts',
      'Competitor movement tracking',
      'Quarterly optimization cycle',
    ],
    cta: { label: 'Enquire', to: '/contact' },
  },
]

const faqs = [
  {
    q: 'How is AI SEO different from traditional SEO?',
    a: 'Traditional SEO optimizes for ranking on a search results page. AI SEO optimizes for being cited inside an AI-generated answer. The signals are different — JavaScript rendering, schema structure, passage self-containment, and E-E-A-T matter far more than backlinks and keyword density.',
  },
  {
    q: 'Do you guarantee I will be cited by ChatGPT?',
    a: 'No honest consultant can guarantee citations — the models change constantly. What we can guarantee is a measurable improvement in your readiness score, a documented reduction in gaps, and a tracking system that quantifies your visibility month over month.',
  },
  {
    q: 'How long before I see results?',
    a: 'Technical fixes (crawler access, schema) are picked up within days. Content citability changes typically show up in AI responses within 4—8 weeks as models re-index. Competitive share of voice is a 90+ day trend.',
  },
  {
    q: 'Will this hurt my traditional SEO?',
    a: 'No. Every change we make also strengthens traditional SEO — clean semantic HTML, valid schema, faster page response, and better content hierarchy all serve both channels.',
  },
  {
    q: 'Can you work with an agency that already handles our SEO?',
    a: 'Yes. We often run alongside an existing SEO team focused on a different layer. We coordinate with them on implementation cadence so changes deploy cleanly.',
  },
]

export default function AiSeoPage() {
  const [openStep, setOpenStep] = useState<number | null>(1)

  return (
    <>
      <SEO
        title="AI SEO Optimization"
        description="A 10-step methodology that makes your brand discoverable, understood, and cited by AI search platforms — from crawler access to citation monitoring."
        path="/ai-seo-optimization"
        jsonLd={[
          serviceJsonLd(
            'AI SEO Optimization',
            'Technical and content methodology for AI search visibility including crawler audits, schema architecture, citability optimization, and competitive monitoring.',
            '/ai-seo-optimization'
          ),
          faqJsonLd(faqs),
        ]}
      />

      {/* HERO */}
      <section className="pt-12 md:pt-32">
        <div className="container-swiss">
          <div className="flex items-center justify-between pb-10">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              /Service · 02
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              AI SEO Optimization
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="hero-headline display-xl text-white">
                <SplitLine>Be cited.</SplitLine>
                <SplitLine delay={0.08}>
                  <span className="italic font-light text-neutral-500">Not skipped.</span>
                </SplitLine>
              </h1>
            </div>
            <div className="hidden md:col-span-4 md:block">
              <div className="text-white">
                <ServiceGlyph type="ai-seo" className="h-28 w-28" />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
                A full technical and content methodology that makes your brand discoverable,
                understood, and cited by AI search platforms — from crawler access to
                continuous citation monitoring.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton to="/contact">
                  Request audit <ArrowUpRight size={14} />
                </MagneticButton>
                <MagneticButton to="/website-creation" variant="ghost">
                  Pair with website
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Marquee items={platforms} duration={30} />
      </div>

      {/* WHY IT MATTERS */}
      <Section>
        <MetaBar index="01" label="The Problem" right="Invisible by default" />
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="eyebrow">Context</p>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="display-md text-white">
                AI search engines no longer read the web the way Google did in 2015.
                Sites that were perfectly indexed last year are now invisible to
                ChatGPT, Perplexity, and AI Overviews —{' '}
                <span className="italic font-light text-neutral-400">
                  while competitors get cited instead.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 10-STEP METHOD */}
      <Section className="pt-0">
        <MetaBar index="02" label="Methodology" right="10 — Steps" />
        <ul className="mt-12 border-t border-white/10">
          {aiSeoSteps.map((step, index) => {
            const isOpen = openStep === step.id
            const stepNum = String(step.id).padStart(2, '0')
            return (
              <li key={step.id} className="border-b border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenStep(isOpen ? null : step.id)}
                    data-cursor={isOpen ? 'Close' : 'Open'}
                    className="group block w-full py-8 text-left transition-colors duration-500 hover:bg-[#111] md:py-10"
                  >
                    <div className="grid gap-4 md:grid-cols-12 md:items-start md:gap-8">
                      <span className="mono text-xs uppercase tracking-[0.2em] text-neutral-500 md:col-span-1">
                        /{stepNum}
                      </span>
                      <h3 className="display-md text-white transition-colors duration-500 group-hover:text-[var(--accent)] md:col-span-6">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-400 md:col-span-4">
                        {step.summary}
                      </p>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="hidden text-neutral-400 transition-colors group-hover:text-white md:col-span-1 md:flex md:justify-end"
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-4 pb-10 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-1" />
                      <p className="text-base leading-relaxed text-neutral-300 md:col-span-10 md:text-lg">
                        {step.detail}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </li>
            )
          })}
        </ul>
      </Section>

      {/* PRICING */}
      <Section className="pt-0">
        <MetaBar index="03" label="Pricing" right="03 — Engagement tiers" />
        <div className="mt-12">
          <PricingGrid tiers={pricingTiers} />
        </div>
        <p className="mono mt-6 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          All prices in USD · Audit credited toward implementation
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
        <MetaBar index="05" label="Coverage" right="Platforms tracked" />
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          <Stat value="10" label="Step methodology" />
          <Stat value="4+" label="AI platforms tracked" />
          <Stat value="12" label="Crawler configurations" />
          <Stat value="∞" label="Monitoring cadence" />
        </div>
      </Section>

      {/* CLOSING */}
      <Section className="pt-0">
        <div className="border-t border-white/10 pt-16 md:pt-24">
          <Reveal>
            <h2 className="display-lg max-w-[22ch] text-white">
              Own the citation —
              <br />
              <span className="italic font-light text-neutral-500">
                not the disappointment.
              </span>
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton to="/contact">
              Request the audit <ArrowUpRight size={14} />
            </MagneticButton>
          </div>
        </div>
      </Section>
    </>
  )
}
