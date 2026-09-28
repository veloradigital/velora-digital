import { SITE } from './site'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  areaServed: SITE.area,
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  areaServed: SITE.area,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chakan',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Google Business Profile Management',
    'Local SEO',
    'SEO',
    'GEO - Generative Engine Optimization',
    'AEO - Answer Engine Optimization',
    'AI Search Optimization',
    'Google Review Management',
    'WhatsApp Business Automation',
    'Landing Page Design',
    'Digital Marketing',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE.url}${path}`,
    provider: {
      '@type': 'ProfessionalService',
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: SITE.area,
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}
