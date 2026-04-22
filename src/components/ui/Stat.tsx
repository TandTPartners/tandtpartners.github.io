import { ReactNode } from 'react'

interface StatProps {
  value: ReactNode
  label: string
}

export default function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col justify-between gap-8 border-t border-white/10 pt-6">
      <span className="mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
        {label}
      </span>
      <span className="display-lg text-white">{value}</span>
    </div>
  )
}
