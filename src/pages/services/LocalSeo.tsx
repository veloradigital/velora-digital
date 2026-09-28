import ServicePageTemplate, { ServiceContent } from '../../components/ServicePageTemplate'
import { SERVICES } from '../../lib/site'

const content: ServiceContent = {
  meta: SERVICES[1],
  intro:
    'Local SEO helps your business rank in location-based searches on Google and Google Maps. If a customer in Chakan or Pune searches for your type of business, you need to be one of the top results they see.',
  problems: [
    'Your business does not appear in the Google Maps "local pack" for nearby searches.',
    'Competitors rank above you for "near me" and location-based searches.',
    'You get walk-in customers but few enquiries from online search.',
    'Your business information is inconsistent across directories.',
    'You do not know what keywords local customers are using to find businesses like yours.',
  ],
  solutions: [
    'Comprehensive local SEO audit and competitor analysis',
    'Google Business Profile optimization for local search',
    'Local keyword research targeting Chakan, Pune, PCMC and Pimpri-Chinchwad',
    'On-page local SEO — title tags, meta descriptions, location pages',
    'Local citation building and NAP consistency across directories',
    'Review generation strategy to boost local ranking signals',
    'Local link building and community engagement',
    'Monthly ranking and traffic reporting',
  ],
  features: [
    { title: 'Rank in the Local Pack', desc: 'Appear in the top 3 Google Maps results that customers see first for local searches.' },
    { title: 'Target Nearby Customers', desc: 'Optimize for "near me" and location-based searches specific to your service area.' },
    { title: 'Consistent Listings', desc: 'We ensure your name, address and phone are consistent across all directories and platforms.' },
    { title: 'Trackable Results', desc: 'Monthly reports show your ranking improvements, traffic growth and enquiry increases.' },
    { title: 'Mobile Optimization', desc: 'Most local searches happen on mobile. We ensure your presence is mobile-ready.' },
    { title: 'Long-Term Growth', desc: 'Local SEO compounds over time — the longer you invest, the stronger your local presence becomes.' },
  ],
  process: [
    { title: 'Audit', desc: 'We analyze your current local search presence, rankings and competitor landscape.' },
    { title: 'Optimize', desc: 'We optimize your Google Business Profile, website and local citations for local search.' },
    { title: 'Build', desc: 'We build local citations, generate reviews and create location-targeted content.' },
    { title: 'Grow', desc: 'We track rankings, refine strategy and report on results month after month.' },
  ],
  faqs: [
    { question: 'How long does Local SEO take to work?', answer: 'Google Business Profile optimization can show results in 4–8 weeks. Building local authority and ranking for competitive keywords typically takes 3–6 months. We focus on quick wins first, then long-term growth.' },
    { question: 'What is the difference between Local SEO and regular SEO?', answer: 'Local SEO targets location-based searches (e.g., "restaurant in Chakan") and Google Maps results. Regular SEO targets broader keyword rankings. Local businesses benefit most from a combined approach.' },
    { question: 'Do you serve businesses outside Chakan?', answer: 'Yes. While we are based in Chakan, we serve businesses across Pune, PCMC, Pimpri-Chinchwad and the wider Maharashtra region.' },
    { question: 'Can you guarantee a top 3 Google Maps ranking?', answer: 'No ethical agency can guarantee a specific ranking. We use proven, data-driven strategies that consistently improve local visibility, but results depend on your industry, competition and location.' },
  ],
}

export default function LocalSeo() {
  return <ServicePageTemplate content={content} />
}
