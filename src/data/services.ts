import { Globe, SearchCode, Workflow } from 'lucide-react'

import { ServiceCardContent } from '../types/content'

export const services: ServiceCardContent[] = [
  {
    title: 'Modern Website Creation',
    slug: '/website-creation',
    summary:
      'Conversion-focused websites with clean architecture, fast performance, and premium UX that reflects your brand.',
    bullets: ['Strategy to launch roadmap', 'Responsive, polished UI', 'SEO and speed-first engineering'],
    icon: Globe,
  },
  {
    title: 'AI SEO Optimization',
    slug: '/ai-seo-optimization',
    summary:
      'AI search visibility audits and implementation that improves citation probability across ChatGPT, Perplexity, and AI Overviews.',
    bullets: ['Crawler and renderability audit', 'Schema and citability upgrades', 'Ongoing visibility monitoring'],
    icon: SearchCode,
  },
  {
    title: 'Project Management Consulting',
    slug: '/project-management-consulting',
    summary:
      'Structured delivery systems that turn strategy into measurable execution across teams, timelines, and stakeholders.',
    bullets: ['Roadmap and governance setup', 'Agile delivery cadence support', 'Risk and reporting optimization'],
    icon: Workflow,
  },
]
