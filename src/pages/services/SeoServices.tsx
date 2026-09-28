import ServicePageTemplate, { ServiceContent } from '../../components/ServicePageTemplate'
import { SERVICES } from '../../lib/site'

const content: ServiceContent = {
  meta: SERVICES[2],
  intro:
    'SEO is the foundation of your long-term online visibility. We optimize your website and content so it ranks higher on Google for the keywords your customers are actually searching for.',
  problems: [
    'Your website does not appear on the first page of Google for your services.',
    'You get traffic but it does not convert into enquiries or calls.',
    'Your website is slow, not mobile-friendly or has technical issues.',
    'You do not have a content strategy to attract organic traffic.',
    'You do not know which keywords to target or how your competitors rank.',
  ],
  solutions: [
    'Comprehensive SEO audit with technical, on-page and content analysis',
    'Keyword research and strategy for your industry and location',
    'On-page SEO — title tags, meta descriptions, headings, internal linking',
    'Technical SEO — site speed, mobile optimization, schema markup, crawlability',
    'Content strategy and creation for target keywords',
    'Backlink analysis and link building strategy',
    'Monthly SEO performance reporting and strategy refinement',
  ],
  features: [
    { title: 'Higher Rankings', desc: 'Climb Google search results for keywords that bring qualified, ready-to-buy traffic.' },
    { title: 'Technical Health', desc: 'We fix speed, indexing and mobile issues that hold your site back from ranking.' },
    { title: 'Content That Converts', desc: 'SEO-optimized content that ranks and turns visitors into enquiries.' },
    { title: 'Data-Driven', desc: 'Every decision is based on search data, competitor analysis and performance tracking.' },
    { title: 'Long-Term Asset', desc: 'SEO builds a compounding asset — traffic keeps growing even as you scale.' },
    { title: 'Local + Broad', desc: 'We combine SEO with Local SEO so you rank for both general and location-based searches.' },
  ],
  process: [
    { title: 'Audit', desc: 'Full technical, on-page and content audit with competitor benchmarking.' },
    { title: 'Strategy', desc: 'We build a keyword and content roadmap prioritized by impact and effort.' },
    { title: 'Execute', desc: 'We fix technical issues, optimize pages and create content that targets your keywords.' },
    { title: 'Scale', desc: 'We monitor rankings, build authority and expand your content to capture more traffic.' },
  ],
  faqs: [
    { question: 'How is SEO different from Local SEO?', answer: 'SEO targets organic keyword rankings on Google broadly, while Local SEO targets location-based searches and Google Maps results. Most local businesses need both. We offer both services and can combine them into one strategy.' },
    { question: 'How long does SEO take?', answer: 'SEO is a long-term strategy. You may see improvements in 2–3 months, but meaningful traffic and ranking growth typically takes 3–6 months or more depending on your industry and competition.' },
    { question: 'Do you guarantee first page rankings?', answer: 'No. Google considers hundreds of ranking factors and no agency can ethically guarantee specific rankings. We do guarantee a systematic, transparent approach that consistently improves visibility over time.' },
    { question: 'Will you change my website?', answer: 'We may recommend changes to content, structure and technical elements. We always discuss changes with you first and explain why each change helps your rankings.' },
  ],
}

export default function SeoServices() {
  return <ServicePageTemplate content={content} />
}
