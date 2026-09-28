import ServicePageTemplate, { ServiceContent } from '../../components/ServicePageTemplate'
import { SERVICES } from '../../lib/site'

const content: ServiceContent = {
  meta: SERVICES[4],
  intro:
    'Google reviews are one of the most powerful trust signals for local businesses. We help you generate more positive reviews and respond to every review professionally — building trust and improving your local search ranking.',
  problems: [
    'You have few or no Google reviews, making customers hesitant to choose you.',
    'Happy customers do not leave reviews unless you ask them.',
    'You have negative reviews and do not know how to respond.',
    'You do not have time to monitor and reply to every review.',
    'Your competitors have more reviews and a higher rating than you.',
  ],
  solutions: [
    'Review generation strategy with WhatsApp and SMS request automation',
    'Professional review reply management for every review — positive and negative',
    'Review monitoring with alerts for new reviews',
    'Negative review response and reputation management',
    'Review analytics and rating improvement tracking',
    'QR code and direct link setup for easy review collection',
    'Staff training on asking for reviews at the right moment',
  ],
  features: [
    { title: 'More Reviews', desc: 'Automated requests make it easy for happy customers to leave reviews — increasing your volume naturally.' },
    { title: 'Higher Rating', desc: 'More positive reviews improve your overall rating, which influences both customers and Google ranking.' },
    { title: 'Professional Replies', desc: 'Every review gets a thoughtful, professional response that shows you care about customer feedback.' },
    { title: 'Reputation Protection', desc: 'We handle negative reviews professionally, turning potential damage into a demonstration of good service.' },
    { title: 'Local Ranking Boost', desc: 'Review quantity, recency and rating are key local SEO ranking factors. More reviews improve your Maps ranking.' },
    { title: 'Real-Time Alerts', desc: 'You know the moment a new review is posted, so nothing goes unanswered.' },
  ],
  process: [
    { title: 'Setup', desc: 'We create your review request system with WhatsApp or SMS automation and direct links.' },
    { title: 'Generate', desc: 'We help you ask happy customers for reviews at the right moment, growing your review volume.' },
    { title: 'Respond', desc: 'We monitor and respond to every review professionally within 24 hours.' },
    { title: 'Improve', desc: 'We track your rating, review volume and local ranking improvements over time.' },
  ],
  faqs: [
    { question: 'Can you remove negative Google reviews?', answer: 'No. We cannot remove legitimate reviews — and neither can any agency. What we can do is respond professionally to negative reviews, which shows other customers you care and often leads the reviewer to update their rating.' },
    { question: 'Is asking for reviews against Google policy?', answer: 'No. Google encourages businesses to ask customers for reviews. The policy prohibits paying for reviews, posting fake reviews or selectively asking only happy customers. We follow ethical review generation practices.' },
    { question: 'How many reviews do I need?', answer: 'There is no magic number, but businesses with 50+ recent reviews and a 4.5+ rating generally perform better in local search. We help you build reviews consistently over time.' },
    { question: 'How quickly do you respond to reviews?', answer: 'We aim to respond to every review within 24 hours. For negative reviews, we respond as quickly as possible to address the customer concern.' },
  ],
}

export default function GoogleReviewManagement() {
  return <ServicePageTemplate content={content} />
}
