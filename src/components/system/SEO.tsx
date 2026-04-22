import { Helmet } from 'react-helmet-async'

import { SEO_DEFAULT_OG, SEO_SITE_URL } from './seoHelpers'

interface SEOProps {
  title: string
  description: string
  path?: string
  ogImage?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export default function SEO({
  title,
  description,
  path = '/',
  ogImage = SEO_DEFAULT_OG,
  jsonLd,
}: SEOProps) {
  const url = `${SEO_SITE_URL}${path}`
  const fullTitle = `${title} — T&T Partners`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="T&T Partners" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
