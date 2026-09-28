import ServicePageTemplate, { ServiceContent } from '../../components/ServicePageTemplate'
import { SERVICES } from '../../lib/site'

const content: ServiceContent = {
  meta: SERVICES[0],
  intro:
    'Your Google Business Profile is the first thing most customers see when they search for you on Google or Google Maps. We set up, optimize and manage your profile so it attracts more calls, direction requests and visits.',
  problems: [
    'Your business does not appear on Google Maps when customers search nearby.',
    'Your Google Business Profile is incomplete, unverified or outdated.',
    'You are not getting enough calls or direction requests from Google.',
    'Your business hours, services or photos are missing or incorrect.',
    'You do not have time to keep your profile updated regularly.',
  ],
  solutions: [
    'Complete Google Business Profile setup and verification',
    'Optimized business description with local keywords for Chakan and Pune',
    'Service and product listing setup with accurate categories',
    'Regular photo and post updates to keep your profile active',
    'Business hours, contact details and attributes management',
    'Q&A monitoring and response management',
    'Performance insights review and optimization recommendations',
  ],
  features: [
    { title: 'More Visibility', desc: 'An optimized GBP appears higher in local search and Maps results, putting you in front of nearby customers.' },
    { title: 'More Calls & Visits', desc: 'Clear contact info, call buttons and directions make it easy for customers to reach you.' },
    { title: 'Professional Image', desc: 'Photos, posts and complete information build trust before a customer even contacts you.' },
    { title: 'Better Insights', desc: 'You see exactly how many people viewed, called and requested directions — and we use that data to improve.' },
    { title: 'Always Up to Date', desc: 'We keep your profile current with seasonal hours, offers and updates so information is never stale.' },
    { title: 'Local Competitive Edge', desc: 'Most local businesses in Chakan and Pune have unoptimized profiles. A well-managed GBP gives you an immediate advantage.' },
  ],
  process: [
    { title: 'Audit', desc: 'We review your current Google Business Profile — or set one up if you do not have one.' },
    { title: 'Optimize', desc: 'We complete every section, add keywords, upload photos and configure services and attributes.' },
    { title: 'Manage', desc: 'We post regular updates, monitor Q&A and keep your profile active and accurate.' },
    { title: 'Report', desc: 'You get monthly insights on views, calls and direction requests with recommendations.' },
  ],
  faqs: [
    { question: 'What is a Google Business Profile?', answer: 'A Google Business Profile (formerly Google My Business) is the free listing that appears when your business shows up on Google Search and Google Maps. It includes your name, address, phone, hours, photos, services and reviews.' },
    { question: 'Do I need a Google Business Profile if I already have a website?', answer: 'Yes. Most local searches on Google show the Business Profile before any website. Without an optimized profile, you miss the customers who search on Google Maps or the local pack.' },
    { question: 'How much does Google Business Profile management cost?', answer: 'Pricing depends on the level of service — one-time optimization vs. ongoing monthly management. Contact us for a free consultation and quote.' },
    { question: 'Can you verify my Google Business Profile?', answer: 'Yes, we guide you through the verification process. Google may verify by postcard, phone or video depending on your business type.' },
  ],
}

export default function GoogleBusinessProfile() {
  return <ServicePageTemplate content={content} />
}
