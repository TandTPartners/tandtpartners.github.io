import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={clsx('relative py-20 md:py-32', className)}>
      <div className="container-swiss">{children}</div>
    </section>
  )
}
