import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'

export interface PricingTierData {
  num: string
  name: string
  price: string
  priceNote?: string
  blurb: string
  features: string[]
  featured?: boolean
  cta?: { label: string; to: string }
}

interface PricingGridProps {
  tiers: PricingTierData[]
}

export default function PricingGrid({ tiers }: PricingGridProps) {
  return (
    <div className="border-t border-white/10 md:grid md:grid-cols-3">
      {tiers.map((tier, i) => (
        <div
          key={tier.num}
          className={`relative flex flex-col justify-between border-b border-white/10 p-8 transition-colors duration-500 md:p-10 ${
            i > 0 ? 'md:border-l md:border-white/10' : ''
          } ${tier.featured ? 'bg-[#111]' : 'hover:bg-[#0d0d0d]'}`}
        >
          {tier.featured && (
            <span className="mono absolute -top-3 left-8 bg-[var(--accent)] px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
              Most requested
            </span>
          )}
          <div>
            <p className="mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              /{tier.num}
            </p>
            <h3 className="display-md mt-4 text-white">{tier.name}</h3>
            <p className="display-lg mt-6 text-white">{tier.price}</p>
            {tier.priceNote && (
              <p className="mono mt-1 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                {tier.priceNote}
              </p>
            )}
            <p className="mt-6 max-w-sm text-sm text-neutral-400">{tier.blurb}</p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-300">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={14} className="mt-[3px] shrink-0 text-[var(--accent)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          {tier.cta && (
            <Link
              to={tier.cta.to}
              data-cursor="Enquire"
              className={`mono mt-10 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                tier.featured
                  ? 'border-white bg-white text-black hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white'
                  : 'border-white/20 text-white hover:border-white'
              }`}
            >
              {tier.cta.label} <ArrowUpRight size={12} />
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}
