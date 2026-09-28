export const SITE = {
  name: 'Velora Digital',
  tagline: 'Digital Marketing Agency in Chakan, Pune',
  description:
    'Velora Digital is a digital marketing agency in Chakan, Pune, helping local businesses grow online with Google Business Profile management, Local SEO, SEO, AI Search optimization, Google Reviews, WhatsApp automation and conversion-focused websites.',
  url: 'https://veloradigital.com',
  location: 'Chakan, Pune, Maharashtra, India',
  phone: '+91 89834 99404',
  phoneHref: 'tel:+918983499404',
  email: '[ADD EMAIL]',
  whatsapp: 'https://wa.me/918983499404',
  area: 'Chakan, Pune, PCMC and Maharashtra',
}

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Local SEO', path: '/local-seo' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

export interface ServiceMeta {
  slug: string
  title: string
  shortTitle: string
  path: string
  icon: string
  blurb: string
  seoTitle: string
  seoDescription: string
}

export const SERVICES: ServiceMeta[] = [
  {
    slug: 'google-business-profile',
    title: 'Google Business Profile Management',
    shortTitle: 'Google Business Profile',
    path: '/google-business-profile',
    icon: 'map-pin',
    blurb: 'Complete Google Business Profile setup, optimization and ongoing management so customers find you on Google Search and Maps.',
    seoTitle: 'Google Business Profile Management Chakan | Velora Digital',
    seoDescription:
      'Professional Google Business Profile management in Chakan, Pune. We set up, optimize and manage your GBP to increase visibility on Google Search and Maps.',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO Services',
    shortTitle: 'Local SEO',
    path: '/local-seo',
    icon: 'navigation',
    blurb: 'Rank higher in local search results across Chakan, Pune and PCMC with a data-driven Local SEO strategy built for local businesses.',
    seoTitle: 'Local SEO Agency in Chakan & Pune | Velora Digital',
    seoDescription:
      'Local SEO services in Chakan and Pune that help your business rank in the local pack and Google Maps. Get found by nearby customers searching for you.',
  },
  {
    slug: 'seo-services',
    title: 'SEO Services',
    shortTitle: 'SEO',
    path: '/seo-services',
    icon: 'search',
    blurb: 'On-page, technical and content-driven SEO that improves organic visibility and brings qualified traffic to your website.',
    seoTitle: 'SEO Services in Chakan & Pune | Velora Digital',
    seoDescription:
      'SEO services in Chakan and Pune covering on-page, technical and content SEO. Improve your organic rankings and attract qualified customers.',
  },
  {
    slug: 'geo-aeo-ai-search',
    title: 'GEO, AEO & AI Search Optimization',
    shortTitle: 'GEO / AEO / AI Search',
    path: '/geo-aeo-ai-search',
    icon: 'sparkles',
    blurb: 'Get your business recommended by AI search engines like ChatGPT, Perplexity and Google AI Overviews with GEO and AEO.',
    seoTitle: 'GEO & AEO – AI Search Optimization in Pune | Velora Digital',
    seoDescription:
      'Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) services in Pune. Get your business cited by AI search engines.',
  },
  {
    slug: 'google-review-management',
    title: 'Google Review Management & Reply Services',
    shortTitle: 'Google Reviews',
    path: '/google-review-management',
    icon: 'star',
    blurb: 'Build trust and win more customers with proactive Google review generation and professional review reply management.',
    seoTitle: 'Google Review Management in Chakan | Velora Digital',
    seoDescription:
      'Google review management and review reply services in Chakan, Pune. We help you collect more positive reviews and respond professionally.',
  },
  {
    slug: 'whatsapp-automation',
    title: 'WhatsApp Business Automation & Chatbots',
    shortTitle: 'WhatsApp Automation',
    path: '/whatsapp-automation',
    icon: 'message-circle',
    blurb: 'Automate customer conversations, lead capture and follow-ups with WhatsApp Business automation and chatbots.',
    seoTitle: 'WhatsApp Automation & Chatbots in Chakan | Velora Digital',
    seoDescription:
      'WhatsApp Business automation and chatbot services in Chakan, Pune. Automate lead capture, replies and follow-ups to convert more customers.',
  },
  {
    slug: 'landing-page',
    title: 'Landing Page & Business Website Creation',
    shortTitle: 'Landing Pages & Websites',
    path: '/landing-page',
    icon: 'layout',
    blurb: 'Conversion-focused landing pages and business websites built to turn visitors into enquiries, calls and WhatsApp chats.',
    seoTitle: 'Landing Page Design & Website Development in Chakan | Velora Digital',
    seoDescription:
      'Landing page design and business website development in Chakan, Pune. Fast, responsive, conversion-focused websites for local businesses.',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing Services',
    shortTitle: 'Digital Marketing',
    path: '/digital-marketing',
    icon: 'trending-up',
    blurb: 'End-to-end digital marketing services including Google Ads, Meta Ads, social media and content to grow your local business.',
    seoTitle: 'Digital Marketing Agency in Chakan & Pune | Velora Digital',
    seoDescription:
      'Digital marketing services in Chakan and Pune including Google Ads, Meta Ads, social media marketing and content marketing for local businesses.',
  },
]

export interface IndustryMeta {
  slug: string
  title: string
  icon: string
  blurb: string
}

export const INDUSTRIES: IndustryMeta[] = [
  { slug: 'hotels', title: 'Hotels', icon: 'bed', blurb: 'Increase direct bookings and visibility for your hotel with Local SEO and Google Maps optimization.' },
  { slug: 'restaurants', title: 'Restaurants', icon: 'utensils', blurb: 'Get found by diners searching nearby, manage reviews and showcase your menu with a conversion-ready website.' },
  { slug: 'hospitals-clinics', title: 'Hospitals & Clinics', icon: 'heart-pulse', blurb: 'Help patients find your practice, book appointments via WhatsApp and build trust through reviews.' },
  { slug: 'showrooms', title: 'Showrooms', icon: 'store', blurb: 'Drive footfall to your showroom with local listings, Google Maps ranking and targeted digital ads.' },
  { slug: 'retail-shops', title: 'Retail Shops', icon: 'shopping-bag', blurb: 'Attract nearby shoppers with Local SEO, Google Business Profile and WhatsApp promotions.' },
  { slug: 'local-services', title: 'Local Service Businesses', icon: 'wrench', blurb: 'Generate more calls and enquiries from local search for electricians, plumbers, salons and more.' },
  { slug: 'smes', title: 'Small & Medium Businesses', icon: 'building', blurb: 'Scale your SMB with a complete digital presence — website, SEO, ads and WhatsApp automation.' },
]
