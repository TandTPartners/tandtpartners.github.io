interface GlyphProps {
  type: 'web' | 'ai-seo' | 'pm'
  className?: string
}

export default function ServiceGlyph({ type, className = 'h-20 w-20' }: GlyphProps) {
  const common = {
    className,
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (type === 'web') {
    return (
      <svg {...common}>
        {/* Browser frame */}
        <rect x="8" y="14" width="48" height="38" rx="2" />
        <line x1="8" y1="22" x2="56" y2="22" />
        <circle cx="13" cy="18" r="1" />
        <circle cx="17" cy="18" r="1" />
        <circle cx="21" cy="18" r="1" />
        {/* Grid */}
        <rect x="14" y="28" width="14" height="10" />
        <line x1="32" y1="30" x2="50" y2="30" />
        <line x1="32" y1="34" x2="46" y2="34" />
        <line x1="14" y1="44" x2="50" y2="44" />
        <line x1="14" y1="48" x2="42" y2="48" />
      </svg>
    )
  }

  if (type === 'ai-seo') {
    return (
      <svg {...common}>
        {/* Network graph */}
        <circle cx="32" cy="14" r="3" />
        <circle cx="14" cy="32" r="3" />
        <circle cx="50" cy="32" r="3" />
        <circle cx="24" cy="50" r="3" />
        <circle cx="40" cy="50" r="3" />
        <circle cx="32" cy="32" r="5" />
        <line x1="32" y1="17" x2="32" y2="27" />
        <line x1="17" y1="32" x2="27" y2="32" />
        <line x1="37" y1="32" x2="47" y2="32" />
        <line x1="29" y1="36" x2="25" y2="47" />
        <line x1="35" y1="36" x2="39" y2="47" />
      </svg>
    )
  }

  // pm
  return (
    <svg {...common}>
      {/* Timeline */}
      <line x1="8" y1="20" x2="56" y2="20" />
      <line x1="8" y1="32" x2="56" y2="32" />
      <line x1="8" y1="44" x2="56" y2="44" />
      <rect x="12" y="17" width="18" height="6" />
      <rect x="24" y="29" width="24" height="6" />
      <rect x="16" y="41" width="14" height="6" />
      <circle cx="12" cy="20" r="1.2" fill="currentColor" />
      <circle cx="24" cy="32" r="1.2" fill="currentColor" />
      <circle cx="16" cy="44" r="1.2" fill="currentColor" />
    </svg>
  )
}
