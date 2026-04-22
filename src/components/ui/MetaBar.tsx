interface MetaBarProps {
  index: string
  label: string
  right?: string
}

export default function MetaBar({ index, label, right }: MetaBarProps) {
  return (
    <div className="flex flex-col gap-2 border-y border-white/10 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="mono flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
        <span>/{index}</span>
        <span className="h-px w-8 bg-neutral-700" />
        <span>{label}</span>
      </div>
      {right && (
        <span className="mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">{right}</span>
      )}
    </div>
  )
}
