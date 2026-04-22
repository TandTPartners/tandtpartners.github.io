import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

import Section from '../components/ui/Section'
import MetaBar from '../components/ui/MetaBar'
import Reveal from '../components/ui/Reveal'
import Stat from '../components/ui/Stat'
import Marquee from '../components/ui/Marquee'
import { aiSeoSteps } from '../data/aiSeoSteps'

const platforms = ['ChatGPT', 'Perplexity', 'Google AI Overviews', 'Microsoft Copilot', 'Claude', 'Gemini']

export default function AiSeoPage() {
  const [openStep, setOpenStep] = useState<number | null>(1)

  return (
    <>
      {/* HERO */}
      <section className="pt-24 md:pt-32">
        <div className="container-swiss">
          <div className="flex items-center justify-between pb-10">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              /Service · 02
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              AI SEO Optimization
            </span>
          </div>
          <h1 className="display-xl max-w-[14ch] text-white">
            Be cited.
            <br />
            <span className="italic font-light text-neutral-500">Not skipped.</span>
          </h1>
          <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
                A full technical and content methodology that makes your brand discoverable,
                understood, and cited by AI search platforms — from crawler access to
                continuous citation monitoring.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Request audit <ArrowUpRight size={14} />
                </Link>
                <Link to="/website-creation" className="btn-ghost">
                  Pair with website
                </Link>
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

      {/* STATS */}
      <Section className="pt-0">
        <MetaBar index="03" label="Coverage" right="Platforms tracked" />
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
            <Link to="/contact" className="btn-primary">
              Request the audit <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
