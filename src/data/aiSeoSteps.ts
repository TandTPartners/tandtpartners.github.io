import { AiSeoStep } from '../types/content'

export const aiSeoSteps: AiSeoStep[] = [
  {
    id: 1,
    title: 'AI Crawler Access Audit',
    summary: 'Audit robots.txt against major AI crawlers and open the right discovery channels safely.',
    detail:
      "We analyze your robots.txt against major AI crawlers including GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, and Amazonbot. We identify blocked, allowed, and unaddressed crawlers, then deliver a production-ready robots.txt configuration that improves AI discoverability without compromising security or server stability.",
    visualTag: 'Access',
  },
  {
    id: 2,
    title: 'JavaScript Rendering Analysis',
    summary: 'Measure how much critical content AI systems miss due to client-side rendering.',
    detail:
      "We compare server-delivered raw HTML with browser-rendered output after JavaScript execution. For React, Angular, or Vue-heavy sites, this reveals content invisibility for crawlers that don't fully execute JavaScript. We classify your rendering model and provide architecture guidance so key content remains machine-accessible.",
    visualTag: 'Rendering',
  },
  {
    id: 3,
    title: 'Structured Data & Schema Markup Assessment',
    summary: 'Evaluate and expand schema coverage with validated JSON-LD and connected entities.',
    detail:
      'We extract current schema markup, compare it against expected schema types for your page inventory, and map missing coverage across Organization, Product, Article, FAQPage, and HowTo entities. We then generate validated JSON-LD using a graph-based entity-linking approach that helps AI systems contextualize your brand, people, and content.',
    visualTag: 'Schema',
  },
  {
    id: 4,
    title: 'Content Citability Analysis',
    summary: 'Score your pages against empirically validated citation behavior dimensions.',
    detail:
      'We evaluate top-value pages across multiple citation signals such as answer-first formatting, statistical density, source attribution quality, E-E-A-T strength, passage self-containment, entity richness, and section structure. Each page receives a score and precise recommendations to improve selection probability in AI responses.',
    visualTag: 'Citability',
  },
  {
    id: 5,
    title: 'AI Platform Visibility Benchmarking',
    summary: 'Test real queries across major AI platforms and quantify your citation footprint.',
    detail:
      'Using customer-intent queries, we run live checks in ChatGPT, Perplexity, Google AI Overviews, and Microsoft Copilot. We capture generated responses, classify citation status, and calculate your Share of AI Voice so you can see where your brand appears versus competitors.',
    visualTag: 'Benchmark',
  },
  {
    id: 6,
    title: 'Competitive Intelligence Report',
    summary: 'Map who is being cited, why they are winning, and where you can overtake them.',
    detail:
      'For each tracked query, we identify which competitors are cited, which pages earn references, and which content characteristics are driving their visibility. This transforms optimization into a concrete competitive strategy with specific gaps and practical catch-up actions.',
    visualTag: 'Competition',
  },
  {
    id: 7,
    title: 'Prioritized Action Plan with Impact Estimates',
    summary: 'Translate findings into phased execution with effort and business-impact clarity.',
    detail:
      'We package findings into immediate fixes, short-term optimizations, and strategic improvements. Every action includes the problem, the fix, expected effort, and projected business impact, giving your team a clear implementation roadmap without ambiguity.',
    visualTag: 'Roadmap',
  },
  {
    id: 8,
    title: 'Implementation & Deployment',
    summary: 'Deploy technical and content improvements end-to-end with full validation.',
    detail:
      "When execution is delegated to us, we implement your robots.txt updates, schema markup, and content structure improvements directly. Every change is tested and validated with tools such as Google's Rich Results Test and live platform checks, then documented with before/after evidence.",
    visualTag: 'Deploy',
  },
  {
    id: 9,
    title: 'Post-Implementation Verification & Rescoring',
    summary: 'Re-audit the entire stack and prove measurable readiness improvement.',
    detail:
      'After deployment, we rerun the full audit to produce updated readiness scores and side-by-side comparisons against baseline. The report verifies crawler access, schema validity, and citation-ready structure while providing a clean benchmark for ongoing optimization.',
    visualTag: 'Verify',
  },
  {
    id: 10,
    title: 'Ongoing AI Visibility Monitoring',
    summary: 'Track volatility, detect drops early, and sustain visibility over time.',
    detail:
      'Because citation sources shift rapidly, we execute recurring multi-platform query checks, detect ranking/citation movement, and report trend changes monthly. This turns a one-time audit into continuous competitive intelligence that keeps your brand visible as AI search evolves.',
    visualTag: 'Monitoring',
  },
]
