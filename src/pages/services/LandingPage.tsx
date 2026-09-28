import ServicePageTemplate, { ServiceContent } from '../../components/ServicePageTemplate'
import { SERVICES } from '../../lib/site'

const content: ServiceContent = {
  meta: SERVICES[6],
  intro:
    'Your website should be your hardest-working salesperson. We build fast, mobile-first landing pages and business websites designed to turn visitors into calls, WhatsApp chats and enquiries — not just look pretty.',
  problems: [
    'Your website is slow, outdated or not mobile-friendly.',
    'You have a website but it does not generate enquiries or calls.',
    'Your website is hard to update and you cannot manage it yourself.',
    'You do not have a landing page for your ad campaigns.',
    'Your website does not rank on Google because it is not SEO-optimized.',
  ],
  solutions: [
    'Conversion-focused landing page design and development',
    'Complete business website creation with SEO-optimized structure',
    'Mobile-first, fast-loading design optimized for Core Web Vitals',
    'WhatsApp and call buttons prominently placed on every page',
    'Lead capture forms structured for future backend integration',
    'SEO-optimized content, meta tags and schema markup',
    'Google Analytics and tracking setup',
    'Ongoing maintenance and updates',
  ],
  features: [
    { title: 'Conversion-Focused', desc: 'Every element — headline, CTA, layout — is designed to drive calls, WhatsApp chats and form submissions.' },
    { title: 'Mobile-First', desc: 'Most local searches happen on mobile. Your site looks and works perfectly on every screen size.' },
    { title: 'Fast Loading', desc: 'We optimize for speed and Core Web Vitals, which improves both user experience and Google rankings.' },
    { title: 'SEO-Ready', desc: 'Clean code, semantic HTML, meta tags and schema markup give Google everything it needs to rank your site.' },
    { title: 'WhatsApp Integrated', desc: 'Floating WhatsApp button and CTA buttons throughout make it one click for customers to reach you.' },
    { title: 'Easy to Manage', desc: 'We build with clean, maintainable code and can set up content management for ongoing updates.' },
  ],
  process: [
    { title: 'Plan', desc: 'We discuss your business, goals and content to plan the right pages and structure.' },
    { title: 'Design', desc: 'We create a modern, conversion-focused design that matches your brand and industry.' },
    { title: 'Build', desc: 'We develop a fast, responsive, SEO-optimized website with WhatsApp and call CTAs.' },
    { title: 'Launch', desc: 'We test, optimize for speed and SEO, then launch — with ongoing support available.' },
  ],
  faqs: [
    { question: 'How long does it take to build a website?', answer: 'A single landing page can be ready in 1–2 weeks. A full business website typically takes 2–4 weeks depending on the number of pages and content requirements.' },
    { question: 'Will my website work on mobile?', answer: 'Yes. Every website we build is mobile-first and fully responsive, meaning it looks and works perfectly on phones, tablets and desktops.' },
    { question: 'Do you include SEO in the website?', answer: 'Yes. Every website we build includes SEO fundamentals — clean URLs, meta tags, schema markup, fast loading and semantic HTML. For ongoing SEO, we offer dedicated SEO services.' },
    { question: 'Can I update the website myself?', answer: 'Depending on the approach, we can set up a content management system so you can update text and images yourself. We also offer ongoing maintenance and update services.' },
  ],
}

export default function LandingPage() {
  return <ServicePageTemplate content={content} />
}
