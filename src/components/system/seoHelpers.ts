const SITE_URL = 'https://tandtpartners.com'

export const SEO_SITE_URL = SITE_URL
export const SEO_DEFAULT_OG = `${SITE_URL}/og-image.svg`

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'T&T Partners',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  slogan: 'Business Meets Innovation',
  description:
    'Premium website creation, AI SEO optimization, and project management consulting.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressCountry: 'USA',
  },
  sameAs: [],
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_URL,
    name: 'T&T Partners',
    description:
      'Premium websites, AI SEO visibility engineering, and project management consulting.',
  }
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    provider: {
      '@type': 'Organization',
      name: 'T&T Partners',
      url: SITE_URL,
    },
    areaServed: 'Global',
    description,
    url: `${SITE_URL}${path}`,
  }
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}
