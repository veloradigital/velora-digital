import ServicePageTemplate, { ServiceContent } from '../../components/ServicePageTemplate'
import { SERVICES } from '../../lib/site'

const content: ServiceContent = {
  meta: SERVICES[3],
  intro:
    'Search is evolving. Customers now ask AI engines like ChatGPT, Perplexity and Google AI Overviews for recommendations. GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) ensure your business is the one they recommend.',
  problems: [
    'Your business is not mentioned when customers ask AI tools for recommendations.',
    'You do not know how to structure content for AI search engines.',
    'Your competitors are getting cited in Google AI Overviews and you are not.',
    'You are only optimized for traditional search and missing the AI search wave.',
    'You do not have structured, authoritative content that AI engines can reference.',
  ],
  solutions: [
    'AI search audit — check if your business appears in ChatGPT, Perplexity and Google AI Overviews',
    'Content restructuring for AI readability and citation',
    'Schema markup and structured data implementation',
    'Authoritative content creation that AI engines prefer to cite',
    'Entity optimization — building your business as a recognized entity',
    'Digital PR and citation building on sources AI engines trust',
    'Ongoing AI search monitoring and optimization',
  ],
  features: [
    { title: 'AI Search Visibility', desc: 'Appear in AI-generated answers when customers ask for business recommendations in your industry.' },
    { title: 'Future-Proof', desc: 'As AI search grows, your business is already positioned to be recommended — ahead of competitors.' },
    { title: 'Structured Content', desc: 'We make your content easy for AI engines to understand, cite and recommend.' },
    { title: 'Authority Building', desc: 'We build your business as a trusted entity across the web so AI engines prefer you.' },
    { title: 'Dual Optimization', desc: 'We optimize for both traditional Google search and AI search — you do not have to choose.' },
    { title: 'Early Mover Advantage', desc: 'Most businesses are not optimizing for AI search yet. This is your chance to get ahead.' },
  ],
  process: [
    { title: 'Audit', desc: 'We check your visibility across AI search engines and identify content gaps.' },
    { title: 'Structure', desc: 'We restructure content, add schema markup and build entity signals for AI readability.' },
    { title: 'Create', desc: 'We create authoritative, citation-friendly content that AI engines prefer to reference.' },
    { title: 'Monitor', desc: 'We track your AI search visibility and refine the strategy as engines evolve.' },
  ],
  faqs: [
    { question: 'What is GEO (Generative Engine Optimization)?', answer: 'GEO is the practice of optimizing your content so that AI search engines like ChatGPT, Perplexity and Google AI Overviews cite and recommend your business in their generated answers.' },
    { question: 'What is AEO (Answer Engine Optimization)?', answer: 'AEO focuses on structuring your content so AI answer engines can easily extract and present your information as a direct answer to user questions.' },
    { question: 'Do I still need traditional SEO if I do GEO and AEO?', answer: 'Yes. Traditional SEO, GEO and AEO work together. Google still drives the majority of search traffic. We recommend a combined approach that covers all search channels.' },
    { question: 'Is AI search optimization relevant for local businesses?', answer: 'Absolutely. When someone asks ChatGPT or Perplexity for a local business recommendation, the AI references web content. If your business is well-optimized and cited online, you are more likely to be recommended.' },
  ],
}

export default function GeoAeoAiSearch() {
  return <ServicePageTemplate content={content} />
}
