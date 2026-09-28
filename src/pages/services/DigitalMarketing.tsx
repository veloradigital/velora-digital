import ServicePageTemplate, { ServiceContent } from '../../components/ServicePageTemplate'
import { SERVICES } from '../../lib/site'

const content: ServiceContent = {
  meta: SERVICES[7],
  intro:
    'Digital marketing is how you reach customers beyond organic search. We run targeted Google Ads, Meta Ads and social media campaigns that put your business in front of the right people at the right time — and drive measurable enquiries and calls.',
  problems: [
    'You have tried running ads but wasted money with no results.',
    'You do not know which platform — Google, Facebook, Instagram — is right for your business.',
    'You get clicks but no calls, WhatsApp chats or walk-ins.',
    'You do not have time to manage campaigns and optimize them.',
    'You cannot track which marketing efforts are actually generating leads.',
  ],
  solutions: [
    'Google Ads management — Search, Display and Local campaigns',
    'Meta Ads (Facebook & Instagram) management',
    'Campaign strategy, audience targeting and ad creative',
    'Landing page optimization for ad traffic',
    'Conversion tracking and call/WhatsApp attribution',
    'Retargeting campaigns to re-engage visitors',
    'Social media content and management',
    'Monthly performance reporting and budget optimization',
  ],
  features: [
    { title: 'Targeted Reach', desc: 'We put your ads in front of people actively searching for your services in Chakan, Pune and PCMC.' },
    { title: 'Measurable Results', desc: 'Every rupee is tracked. You know exactly how many calls, WhatsApp chats and enquiries your ads generate.' },
    { title: 'Expert Management', desc: 'We continuously test and optimize your campaigns to improve performance and reduce cost per lead.' },
    { title: 'Multi-Platform', desc: 'We manage Google, Facebook and Instagram campaigns under one strategy — so they work together.' },
    { title: 'Conversion Focus', desc: 'We do not chase clicks — we chase enquiries, calls and customers walking through your door.' },
    { title: 'Budget Control', desc: 'You set the budget. We make sure it is spent efficiently on the campaigns that deliver results.' },
  ],
  process: [
    { title: 'Strategy', desc: 'We define your goals, target audience, platforms and budget allocation.' },
    { title: 'Launch', desc: 'We create ad creative, set up campaigns, landing pages and conversion tracking.' },
    { title: 'Optimize', desc: 'We monitor performance, test different ads and refine targeting to improve ROI.' },
    { title: 'Scale', desc: 'We scale what works, cut what does not and report on results every month.' },
  ],
  faqs: [
    { question: 'How much should I spend on ads?', answer: 'Ad spend depends on your industry, goals and competition. We recommend a minimum monthly budget and help you scale based on results. You set the budget — we make it work efficiently.' },
    { question: 'Which is better — Google Ads or Facebook Ads?', answer: 'It depends on your business. Google Ads captures people actively searching for your services. Facebook and Instagram Ads build awareness and reach new audiences. Many businesses benefit from both, and we can advise on the right mix.' },
    { question: 'How quickly will I see results from ads?', answer: 'Google Search Ads can generate enquiries within days of launch. Meta Ads typically take 1–2 weeks to optimize. We focus on quick wins while building toward consistent long-term performance.' },
    { question: 'Do you manage the ad budget or do I pay platforms directly?', answer: 'You pay Google and Meta directly for ad spend. Our fee is for strategy, management and optimization. This keeps your ad spend transparent and under your control.' },
  ],
}

export default function DigitalMarketing() {
  return <ServicePageTemplate content={content} />
}
