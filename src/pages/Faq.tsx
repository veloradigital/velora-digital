import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import CTASection from '../components/CTASection'
import FAQAccordion, { FAQItem } from '../components/FAQAccordion'
import { faqSchema } from '../lib/schema'

const faqs: FAQItem[] = [
  {
    question: 'What is a Google Business Profile and why do I need one?',
    answer:
      'A Google Business Profile is the free listing that appears when your business shows up on Google Search and Google Maps. It includes your name, address, phone, hours, photos, services and reviews. For local businesses, it is the single most important online asset — most customers find you through it before they ever visit your website.',
  },
  {
    question: 'What is Local SEO and how is it different from regular SEO?',
    answer:
      'Local SEO focuses on ranking your business in location-based searches (e.g., "restaurant near me" or "clinic in Chakan") and in the Google Maps local pack. Regular SEO targets broader organic keyword rankings. Local businesses benefit most from a combined approach, as both drive different types of traffic.',
  },
  {
    question: 'How can I improve my Google Maps ranking?',
    answer:
      'Google Maps ranking is influenced by your Google Business Profile completeness, review quantity and rating, citation consistency, website quality and proximity to the searcher. We optimize all of these factors as part of our Local SEO and Google Business Profile management services.',
  },
  {
    question: 'What is SEO and how long does it take?',
    answer:
      'SEO (Search Engine Optimization) is the process of improving your website to rank higher on Google for relevant keywords. It is a long-term strategy — you may see improvements in 2–3 months, but meaningful results typically take 3–6 months depending on your industry and competition.',
  },
  {
    question: 'What is AI search optimization and do I need it?',
    answer:
      'AI search optimization (GEO and AEO) ensures your business is recommended by AI search engines like ChatGPT, Perplexity and Google AI Overviews. As more people use AI tools for recommendations, this is increasingly important. We recommend combining it with traditional SEO so you appear in both regular and AI-powered search results.',
  },
  {
    question: 'What are GEO and AEO?',
    answer:
      'GEO (Generative Engine Optimization) is optimizing content for AI search engines to cite. AEO (Answer Engine Optimization) is structuring content so AI tools can easily extract and present your information as answers. Both help your business appear in AI-generated responses when customers ask for recommendations.',
  },
  {
    question: 'How do Google reviews help my business?',
    answer:
      'Google reviews build trust with potential customers, influence their decision to choose you and are a key local SEO ranking factor. More positive reviews with a high rating improve your visibility on Google Maps and local search, leading to more calls and enquiries.',
  },
  {
    question: 'Can you remove negative Google reviews?',
    answer:
      'No. We cannot remove legitimate reviews, and neither can any agency. What we can do is respond professionally to negative reviews, which demonstrates good customer service and often leads the reviewer to update their rating. We also help you generate more positive reviews to improve your overall rating.',
  },
  {
    question: 'What is WhatsApp Business automation?',
    answer:
      'WhatsApp Business automation uses the WhatsApp Business API and chatbots to automatically respond to customer messages, qualify leads, book appointments and send updates — without manual effort for every message. It ensures you never miss an enquiry, even outside business hours.',
  },
  {
    question: 'Do I need a website if I already have a Google Business Profile?',
    answer:
      'Yes. While a Google Business Profile is essential for local visibility, a website gives you a dedicated platform to showcase your services, build credibility, capture leads and rank for broader keywords. A conversion-focused website with WhatsApp and call buttons turns visitors into enquiries.',
  },
  {
    question: 'How much does a landing page cost?',
    answer:
      'Landing page and website costs depend on the scope — number of pages, features, content and design complexity. Contact us for a free consultation and we will provide a clear quote based on your needs.',
  },
  {
    question: 'Do you guarantee #1 ranking on Google?',
    answer:
      'No. No ethical agency can guarantee a specific ranking, as Google uses hundreds of ranking factors. What we guarantee is a systematic, data-driven approach that consistently improves your visibility, traffic and enquiries over time. Be cautious of any agency that promises guaranteed rankings.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in Chakan, Pune and serve businesses across Pune, PCMC, Pimpri-Chinchwad and the wider Maharashtra region. Our local expertise in these areas helps us create strategies that work for the local market.',
  },
  {
    question: 'How do I get started with Velora Digital?',
    answer:
      'Click "Get a Free Consultation" on any page or chat with us on WhatsApp. We will review your current online presence, understand your goals and recommend the best digital marketing strategy for your business — with no obligation.',
  },
]

export default function Faq() {
  return (
    <>
      <SEO
        title="FAQ – Digital Marketing for Local Businesses | Velora Digital"
        description="Frequently asked questions about Google Business Profile, Local SEO, Google Maps ranking, AI search, GEO/AEO, Google reviews, WhatsApp automation, landing pages and digital marketing for local businesses in Chakan and Pune."
        path="/faq"
        structuredData={[faqSchema(faqs)]}
      />
      <Breadcrumbs crumbs={[{ label: 'FAQ' }]} />

      <section className="section" style={{ paddingTop: '24px' }}>
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">FAQ</span>
            <h1 className="section-title">Frequently Asked Questions</h1>
            <p className="section-subtitle">
              Everything local business owners ask us about growing online in Chakan, Pune and PCMC.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Chat with us on WhatsApp or get a free consultation. We are happy to answer any questions about your specific business."
      />
    </>
  )
}
