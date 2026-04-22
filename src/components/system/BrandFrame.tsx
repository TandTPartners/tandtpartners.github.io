const CORNER_CLASSES = [
  'top-4 left-4',
  'top-4 right-4 rotate-90',
  'bottom-4 left-4 -rotate-90',
  'bottom-4 right-4 rotate-180',
]

function RegistrationMark({ className }: { className: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={`absolute ${className} text-white/25`}
      fill="none"
      aria-hidden
    >
      <path d="M0 3V0H3" stroke="currentColor" strokeWidth="1" />
      <line x1="1.5" y1="6" x2="1.5" y2="1.5" stroke="currentColor" strokeWidth="0.5" />
      <line x1="6" y1="1.5" x2="1.5" y2="1.5" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  )
}

export default function BrandFrame() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 hidden md:block">
      {CORNER_CLASSES.map((pos, i) => (
        <RegistrationMark key={i} className={pos} />
      ))}
    </div>
  )
}
