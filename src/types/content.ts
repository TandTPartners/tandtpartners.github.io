import { LucideIcon } from 'lucide-react'

export interface ServiceCardContent {
  title: string
  slug: string
  summary: string
  bullets: string[]
  icon: LucideIcon
}

export interface AiSeoStep {
  id: number
  title: string
  summary: string
  detail: string
  visualTag: string
}
