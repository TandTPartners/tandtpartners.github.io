import { FormEvent, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

import Section from '../components/ui/Section'
import MetaBar from '../components/ui/MetaBar'
import Reveal from '../components/ui/Reveal'
import MagneticButton from '../components/ui/MagneticButton'
import { SplitLine } from '../components/ui/TextReveal'
import SEO from '../components/system/SEO'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/tahir@tandtpartners.com'
const MAILTO_TO = 'tahir@tandtpartners.com'

const serviceOptions = [
  { value: 'website', label: 'Website Creation', num: '01' },
  { value: 'ai-seo', label: 'AI SEO Optimization', num: '02' },
  { value: 'pm', label: 'Project Management Consulting', num: '03' },
  { value: 'other', label: 'Something else', num: '04' },
]

const budgetOptions = ['<$10k', '$10k—$25k', '$25k—$50k', '$50k+']

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const [service, setService] = useState('website')
  const [budget, setBudget] = useState('$10k—$25k')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage(null)

    const formData = new FormData(event.currentTarget)

    const name = (formData.get('name') || '') as string
    const email = (formData.get('email') || '') as string
    const company = (formData.get('company') || '') as string
    const message = (formData.get('message') || '') as string
    const serviceLabel =
      serviceOptions.find((o) => o.value === service)?.label ?? service

    const payload = {
      _subject: `New brief from ${name || 'T&T Partners site'} — ${serviceLabel}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: email,
      Name: name,
      Email: email,
      Company: company || '—',
      Service: serviceLabel,
      Budget: budget,
      Message: message,
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`)
      }
      const data = await response.json().catch(() => ({}))
      if (data.success === 'false' || data.success === false) {
        throw new Error(data.message ?? 'Submission was not accepted.')
      }
      setStatus('success')
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  function buildMailtoHref(): string {
    // Fallback: open user's email client with everything prefilled.
    const serviceLabel =
      serviceOptions.find((o) => o.value === service)?.label ?? service
    const subject = encodeURIComponent(`New brief — ${serviceLabel}`)
    const body = encodeURIComponent(
      [
        `Service: ${serviceLabel}`,
        `Budget: ${budget}`,
        '',
        `Please include: Name, Company, and project details below.`,
      ].join('\n')
    )
    return `mailto:${MAILTO_TO}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Tell us what you need built. We respond within 1 business day with a clear, actionable next step — no generic sales deck."
        path="/contact"
      />

      {/* HERO */}
      <section className="pt-12 md:pt-32">
        <div className="container-swiss">
          <div className="flex items-center justify-between pb-10">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              /Contact · 04
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              Response within 1 business day
            </span>
          </div>
          <h1 className="hero-headline display-xl text-white">
            <SplitLine>Tell us</SplitLine>
            <SplitLine delay={0.08}>
              <span className="italic font-light text-neutral-500">what you </span>
              need built.
            </SplitLine>
          </h1>
          <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
                Share the context and we will respond with a clear, actionable next
                step. No generic sales deck, no wasted time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <Section>
        <MetaBar index="01" label="Brief" right="Structured intake" />

        {status === 'success' ? (
          <Reveal>
            <div className="mt-16 border border-white/10 bg-[#0f0f0f] p-10 md:p-16">
              <p className="eyebrow">Received · 00</p>
              <h2 className="display-md mt-6 max-w-[20ch] text-white">
                Brief received.
                <br />
                <span className="italic font-light text-neutral-500">
                  We will reply directly.
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-neutral-400">
                Expect a response within one business day with next-step recommendations
                and scope clarification.
              </p>
            </div>
          </Reveal>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8"
          >
            {/* Service selector */}
            <div className="md:col-span-12">
              <p className="eyebrow mb-4">Service of interest</p>
              <div className="grid gap-0 border-t border-white/10 md:grid-cols-4">
                {serviceOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setService(option.value)}
                    data-cursor="Select"
                    className={`flex items-baseline gap-3 border-b border-white/10 py-5 text-left transition-colors duration-300 md:border-r md:last:border-r-0 md:px-4 ${
                      service === option.value
                        ? 'bg-[var(--accent)]/10 text-white'
                        : 'text-neutral-500 hover:text-white'
                    }`}
                  >
                    <span className="mono text-[10px] tracking-[0.2em] text-neutral-500">
                      /{option.num}
                    </span>
                    <span className="text-sm">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Name + email */}
            <label className="block md:col-span-6">
              <span className="eyebrow">Name</span>
              <input
                required
                name="name"
                autoComplete="name"
                className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-lg text-white outline-none transition-colors focus:border-white"
                placeholder="Your name"
              />
            </label>
            <label className="block md:col-span-6">
              <span className="eyebrow">Email</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-lg text-white outline-none transition-colors focus:border-white"
                placeholder="you@company.com"
              />
            </label>

            {/* Company + budget */}
            <label className="block md:col-span-6">
              <span className="eyebrow">Company</span>
              <input
                name="company"
                autoComplete="organization"
                className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-lg text-white outline-none transition-colors focus:border-white"
                placeholder="Company name"
              />
            </label>
            <div className="md:col-span-6">
              <p className="eyebrow mb-3">Budget range</p>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBudget(option)}
                    data-cursor="Select"
                    className={`mono rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.18em] transition-colors ${
                      budget === option
                        ? 'border-white bg-white text-black'
                        : 'border-white/20 text-neutral-400 hover:border-white hover:text-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <label className="block md:col-span-12">
              <span className="eyebrow">Project detail</span>
              <textarea
                required
                rows={5}
                name="message"
                className="mt-3 w-full resize-none border-b border-white/20 bg-transparent py-3 text-lg text-white outline-none transition-colors focus:border-white"
                placeholder="Tell us the outcome, timeline, and key constraints."
              />
            </label>

            {/* Honeypot to deter bots (formsubmit-supported) */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="md:col-span-12 flex flex-col items-start justify-between gap-4 pt-4 md:flex-row md:items-center">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                No sales pitch · Direct reply · 1 business day
              </p>
              <MagneticButton type="submit">
                {status === 'sending' ? 'Sending…' : 'Submit brief'}
                <ArrowUpRight size={14} />
              </MagneticButton>
            </div>

            {status === 'error' && (
              <div className="md:col-span-12">
                <div className="border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-200">
                  <p className="font-medium">We couldn't send your brief automatically.</p>
                  <p className="mt-1 text-red-300/80">
                    {errorMessage ?? 'Please try again in a moment.'}
                  </p>
                  <a
                    href={buildMailtoHref()}
                    className="mono mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-red-200 underline underline-offset-4 hover:text-white"
                  >
                    Email us directly instead <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            )}
          </form>
        )}
      </Section>

      {/* DETAILS */}
      <Section className="pt-0">
        <MetaBar index="02" label="Coordinates" right="Direct channels" />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow">Email</p>
            <a
              href={`mailto:${MAILTO_TO}`}
              className="mt-3 inline-block text-lg text-white underline-offset-4 hover:underline"
            >
              {MAILTO_TO}
            </a>
          </div>
          <div>
            <p className="eyebrow">Location</p>
            <p className="mt-3 text-lg text-white">New York, USA</p>
          </div>
          <div>
            <p className="eyebrow">Availability</p>
            <p className="mt-3 text-lg text-white">Booking Q1 2026</p>
          </div>
        </div>
      </Section>
    </>
  )
}
