import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CTASection from '../components/CTASection'
import FAQAccordion, { FAQItem } from '../components/FAQAccordion'
import ServiceIcon from '../components/ServiceIcon'
import { SERVICES, INDUSTRIES, SITE } from '../lib/site'
import { organizationSchema, localBusinessSchema, websiteSchema, faqSchema } from '../lib/schema'

const homeFaqs: FAQItem[] = [
  {
    question: 'What does Velora Digital do for local businesses?',
    answer:
      'We help local businesses in Chakan, Pune and PCMC get found online through Google Business Profile management, Local SEO, SEO, AI search optimization, Google review management, WhatsApp automation and conversion-focused websites. The goal is simple — more calls, more WhatsApp enquiries and more walk-in customers.',
  },
  {
    question: 'How is Local SEO different from regular SEO?',
    answer:
      'Local SEO focuses on ranking your business in location-based searches and Google Maps results — for example, "restaurant near me" or "digital marketing agency in Chakan." Regular SEO targets broader organic search rankings. Most local businesses need both, and we build a combined strategy.',
  },
  {
    question: 'Do you guarantee #1 ranking on Google?',
    answer:
      "No. No ethical agency can guarantee a specific ranking, as Google's algorithm considers hundreds of factors. What we do guarantee is a systematic, data-driven approach that consistently improves your visibility, traffic and enquiries over time.",
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Google Business Profile optimization and local listing improvements can show results within 4–8 weeks. SEO and content-driven strategies typically take 3–6 months for meaningful improvements. WhatsApp automation and landing pages can generate enquiries almost immediately.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in Chakan, Pune and serve businesses across Pune, PCMC, Pimpri-Chinchwad and the wider Maharashtra region.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Click "Get a Free Consultation" or chat with us on WhatsApp. We will review your current online presence and recommend the best strategy for your business — no obligation.',
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Velora Digital | Digital Marketing Agency in Chakan, Pune"
        description={SITE.description}
        path="/"
        structuredData={[organizationSchema, localBusinessSchema, websiteSchema, faqSchema(homeFaqs)]}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="eyebrow animate-in">Digital Marketing Agency in Chakan, Pune</span>
            <h1 className="animate-in animate-delay-1">Grow Your Local Business Online with Velora Digital</h1>
            <p className="hero-sub animate-in animate-delay-2">
              Google Business Profile, Local SEO, SEO, AI Search Optimization, Reviews, WhatsApp Automation
              and conversion-focused websites for local businesses.
            </p>
            <div className="hero-cta animate-in animate-delay-3">
              <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Consultation</Link>
              <a href={SITE.whatsapp} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </div>
            <div className="hero-trust animate-in animate-delay-4">
              <span>Serving Chakan, Pune, PCMC & Maharashtra</span>
            </div>
          </div>
          <div className="hero-visual animate-in animate-delay-2">
            <div className="hero-card">
              <div className="hero-card-header">
                <ServiceIcon name="map-pin" size={20} />
                <span>Google Maps Ranking</span>
              </div>
              <div className="hero-card-body">
                <div className="ranking-row"><span className="rank-badge rank-1">1</span><span>Your Business</span><span className="rank-up">↑ 3</span></div>
                <div className="ranking-row"><span className="rank-badge rank-2">2</span><span>Competitor A</span><span className="rank-down">↓ 1</span></div>
                <div className="ranking-row"><span className="rank-badge rank-3">3</span><span>Competitor B</span><span className="rank-neutral">—</span></div>
              </div>
              <div className="hero-card-footer">
                <div><strong>+147%</strong><br /><span>Local impressions</span></div>
                <div><strong>+89%</strong><br /><span>Direction calls</span></div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .hero {
            background: linear-gradient(170deg, var(--color-primary-50) 0%, #fff 60%);
            padding: 64px 0 80px;
            overflow: hidden;
          }
          .hero-inner {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 56px;
            align-items: center;
          }
          .hero-sub {
            font-size: 1.25rem;
            color: var(--color-neutral-600);
            line-height: 1.6;
            max-width: 560px;
            margin: 20px 0 32px;
          }
          .hero-cta {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 24px;
          }
          .hero-trust {
            font-size: 0.875rem;
            color: var(--color-neutral-500);
          }
          .hero-visual { display: flex; justify-content: center; }
          .hero-card {
            background: #fff;
            border: 1px solid var(--color-neutral-200);
            border-radius: var(--radius-xl);
            padding: 28px;
            width: 100%;
            max-width: 380px;
            box-shadow: var(--shadow-lg);
          }
          .hero-card-header {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 700;
            color: var(--color-neutral-900);
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--color-neutral-100);
          }
          .hero-card-header svg { color: var(--color-primary-600); }
          .ranking-row {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 0;
            font-size: 0.9375rem;
            border-bottom: 1px solid var(--color-neutral-100);
          }
          .ranking-row:last-child { border-bottom: none; }
          .rank-badge {
            width: 28px; height: 28px;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 0.8125rem; font-weight: 700;
            flex-shrink: 0;
          }
          .rank-1 { background: var(--color-success-500); color: #fff; }
          .rank-2 { background: var(--color-neutral-300); color: var(--color-neutral-700); }
          .rank-3 { background: var(--color-accent-400); color: var(--color-neutral-800); }
          .ranking-row > span:nth-child(2) { flex: 1; color: var(--color-neutral-700); }
          .rank-up { color: var(--color-success-600); font-weight: 600; font-size: 0.8125rem; }
          .rank-down { color: var(--color-error-500); font-weight: 600; font-size: 0.8125rem; }
          .rank-neutral { color: var(--color-neutral-400); font-size: 0.8125rem; }
          .hero-card-footer {
            display: flex;
            gap: 24px;
            padding-top: 20px;
            margin-top: 8px;
            border-top: 1px solid var(--color-neutral-100);
          }
          .hero-card-footer div { text-align: center; flex: 1; }
          .hero-card-footer strong { font-size: 1.5rem; color: var(--color-primary-700); display: block; }
          .hero-card-footer span { font-size: 0.75rem; color: var(--color-neutral-500); }
          @media (max-width: 880px) {
            .hero-inner { grid-template-columns: 1fr; gap: 40px; }
            .hero-visual { order: -1; }
            .hero-card { max-width: 340px; }
          }
        `}</style>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title">Everything Your Local Business Needs to Grow Online</h2>
            <p className="section-subtitle">
              From Google Business Profile to AI search optimization, we cover every channel that brings
              local customers to your door.
            </p>
          </div>
          <div className="grid grid-4">
            {SERVICES.map((s, i) => (
              <Link to={s.path} key={s.slug} className={`card service-card animate-in animate-delay-${(i % 4) + 1}`}>
                <div className="service-icon-wrap">
                  <ServiceIcon name={s.icon} size={24} />
                </div>
                <h3>{s.shortTitle}</h3>
                <p>{s.blurb}</p>
                <span className="service-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .service-card h3 { font-size: 1.0625rem; margin-bottom: 8px; }
          .service-card p { font-size: 0.875rem; color: var(--color-neutral-500); line-height: 1.5; margin-bottom: 12px; }
          .service-icon-wrap {
            width: 48px; height: 48px;
            border-radius: var(--radius-md);
            background: var(--color-primary-50);
            color: var(--color-primary-700);
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 16px;
          }
          .service-link { font-size: 0.875rem; font-weight: 600; color: var(--color-primary-700); }
        `}</style>
      </section>

      {/* Why Velora Digital */}
      <section className="section why-section">
        <div className="container">
          <div className="why-grid">
            <div>
              <span className="eyebrow">Why Velora Digital</span>
              <h2 className="section-title">Built for Local Businesses, Not Corporations</h2>
              <p className="lead" style={{ marginBottom: '32px' }}>
                We are a Chakan-based agency that understands the local market. We focus on what actually
                matters — more calls, more WhatsApp chats and more customers walking through your door.
              </p>
              <Link to="/about" className="btn btn-outline">Learn About Us</Link>
            </div>
            <div className="grid grid-2">
              {[
                { title: 'Local-First Approach', desc: 'We know Chakan, Pune and PCMC. We optimize for the customers searching for you nearby.' },
                { title: 'Transparent Reporting', desc: 'You see exactly what we are doing and the results it brings. No hidden work, no jargon.' },
                { title: 'WhatsApp-Driven', desc: 'We focus on generating WhatsApp enquiries and calls — the channels local customers actually use.' },
                { title: 'AI Search Ready', desc: 'We optimize for the new era of AI search — ChatGPT, Perplexity and Google AI Overviews.' },
              ].map((item) => (
                <div key={item.title} className="why-card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .why-section { background: var(--color-neutral-50); }
          .why-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 56px; align-items: center; }
          .why-card {
            background: #fff;
            border-radius: var(--radius-lg);
            padding: 24px;
            border: 1px solid var(--color-neutral-200);
          }
          .why-card h3 { font-size: 1.0625rem; margin-bottom: 8px; }
          .why-card p { font-size: 0.875rem; color: var(--color-neutral-500); }
          @media (max-width: 880px) {
            .why-grid { grid-template-columns: 1fr; gap: 32px; }
          }
        `}</style>
      </section>

      {/* Who We Serve */}
      <section className="section">
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">Who We Serve</span>
            <h2 className="section-title">Helping Local Businesses Across Every Industry</h2>
            <p className="section-subtitle">
              Whether you run a restaurant, clinic, showroom or service business — we have a strategy for you.
            </p>
          </div>
          <div className="grid grid-4">
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.slug} className={`card industry-card animate-in animate-delay-${(i % 4) + 1}`}>
                <div className="service-icon-wrap">
                  <ServiceIcon name={ind.icon} size={24} />
                </div>
                <h3>{ind.title}</h3>
                <p>{ind.blurb}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '32px' }}>
            <Link to="/industries" className="btn btn-outline">View All Industries</Link>
          </div>
        </div>
        <style>{`
          .industry-card h3 { font-size: 1.0625rem; margin-bottom: 8px; }
          .industry-card p { font-size: 0.875rem; color: var(--color-neutral-500); line-height: 1.5; }
        `}</style>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">How We Work</span>
            <h2 className="section-title">A Simple, Transparent Process</h2>
            <p className="section-subtitle">No jargon, no black boxes. Here is exactly how we help you grow.</p>
          </div>
          <div className="grid grid-4">
            {[
              { step: '01', title: 'Free Consultation', desc: 'We review your current online presence and identify quick wins and long-term opportunities.' },
              { step: '02', title: 'Strategy & Setup', desc: 'We build a custom plan — Google Business Profile, Local SEO, website, WhatsApp automation.' },
              { step: '03', title: 'Execution', desc: 'We implement everything — optimizing listings, creating content, managing reviews, running campaigns.' },
              { step: '04', title: 'Growth & Reporting', desc: 'You get regular updates on calls, enquiries and rankings. We refine the strategy month after month.' },
            ].map((item) => (
              <div key={item.step} className="process-step">
                <span className="step-num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .process-section { background: var(--color-neutral-50); }
          .process-step { text-align: center; padding: 20px; }
          .step-num {
            display: inline-block;
            font-size: 2rem;
            font-weight: 800;
            color: var(--color-primary-200);
            margin-bottom: 12px;
          }
          .process-step h3 { font-size: 1.125rem; margin-bottom: 8px; }
          .process-step p { font-size: 0.875rem; color: var(--color-neutral-500); }
        `}</style>
      </section>

      {/* Local SEO / Google Maps Section */}
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            <div>
              <span className="eyebrow">Local SEO & Google Maps</span>
              <h2 className="section-title">Get Found by Customers Searching Near You</h2>
              <p className="lead" style={{ marginBottom: '24px' }}>
                When someone in Chakan or Pune searches for your type of business on Google or Google Maps,
                you need to show up. Our Local SEO services make that happen — from Google Business Profile
                optimization to local citations and review management.
              </p>
              <ul className="checklist" style={{ marginBottom: '28px' }}>
                <li>Google Business Profile setup and optimization</li>
                <li>Local keyword targeting for Chakan, Pune and PCMC</li>
                <li>Google Maps ranking improvement</li>
                <li>Local citations and directory listings</li>
                <li>Review generation and management</li>
              </ul>
              <Link to="/local-seo" className="btn btn-primary">Explore Local SEO Services</Link>
            </div>
            <div className="feature-visual">
              <div className="mock-map">
                <div className="mock-search-bar">
                  <span className="mock-search-icon">🔍</span>
                  <span>restaurant near Chakan Pune</span>
                </div>
                <div className="mock-results">
                  <div className="mock-result mock-result-featured">
                    <div className="mock-pin">📍</div>
                    <div>
                      <strong>Your Business</strong>
                      <span>⭐⭐⭐⭐⭐ 4.9 · Chakan</span>
                    </div>
                  </div>
                  <div className="mock-result">
                    <div className="mock-pin">📍</div>
                    <div><strong>Competitor</strong><span>⭐⭐⭐⭐ 4.2 · Pune</span></div>
                  </div>
                  <div className="mock-result">
                    <div className="mock-pin">📍</div>
                    <div><strong>Another Business</strong><span>⭐⭐⭐ 3.8 · PCMC</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
          .mock-map {
            background: #fff;
            border: 1px solid var(--color-neutral-200);
            border-radius: var(--radius-xl);
            padding: 24px;
            box-shadow: var(--shadow-lg);
          }
          .mock-search-bar {
            display: flex; align-items: center; gap: 10px;
            padding: 12px 16px;
            border: 1px solid var(--color-neutral-300);
            border-radius: 100px;
            font-size: 0.875rem;
            color: var(--color-neutral-600);
            margin-bottom: 20px;
          }
          .mock-results { display: grid; gap: 12px; }
          .mock-result {
            display: flex; align-items: center; gap: 14px;
            padding: 16px;
            border: 1px solid var(--color-neutral-200);
            border-radius: var(--radius-md);
          }
          .mock-result-featured {
            border-color: var(--color-primary-400);
            background: var(--color-primary-50);
          }
          .mock-pin { font-size: 1.25rem; }
          .mock-result strong { display: block; font-size: 0.9375rem; color: var(--color-neutral-900); }
          .mock-result span { font-size: 0.8125rem; color: var(--color-neutral-500); }
          @media (max-width: 880px) {
            .feature-grid { grid-template-columns: 1fr; gap: 32px; }
          }
        `}</style>
      </section>

      {/* Google Reviews Section */}
      <section className="section reviews-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-visual">
              <div className="review-mock">
                <div className="review-mock-header">
                  <span className="review-stars">★★★★★</span>
                  <span className="review-rating">4.9</span>
                </div>
                <div className="review-mock-item">
                  <div className="review-avatar">RS</div>
                  <div>
                    <strong>Rajesh S.</strong>
                    <p>"Great service and very professional team."</p>
                  </div>
                </div>
                <div className="review-mock-reply">
                  <strong>Owner response:</strong>
                  <p>"Thank you, Rajesh! We appreciate your feedback."</p>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow">Google Reviews</span>
              <h2 className="section-title">Build Trust and Win More Customers with Reviews</h2>
              <p className="lead" style={{ marginBottom: '24px' }}>
                Most customers check Google reviews before visiting a business. We help you generate more
                positive reviews and respond professionally to every one — building trust and improving
                your local ranking at the same time.
              </p>
              <ul className="checklist" style={{ marginBottom: '28px' }}>
                <li>Automated review request via WhatsApp or SMS</li>
                <li>Professional review reply management</li>
                <li>Review monitoring and alerts</li>
                <li>Google rating improvement strategy</li>
              </ul>
              <Link to="/google-review-management" className="btn btn-primary">Get Review Management</Link>
            </div>
          </div>
        </div>
        <style>{`
          .reviews-section { background: var(--color-neutral-50); }
          .review-mock {
            background: #fff;
            border: 1px solid var(--color-neutral-200);
            border-radius: var(--radius-xl);
            padding: 28px;
            box-shadow: var(--shadow-lg);
          }
          .review-mock-header { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
          .review-stars { color: var(--color-accent-500); font-size: 1.25rem; letter-spacing: 2px; }
          .review-rating { font-size: 1.5rem; font-weight: 800; color: var(--color-neutral-900); }
          .review-mock-item { display: flex; gap: 14px; padding: 16px 0; border-top: 1px solid var(--color-neutral-100); }
          .review-avatar {
            width: 40px; height: 40px; border-radius: 50%;
            background: var(--color-primary-100); color: var(--color-primary-700);
            display: flex; align-items: center; justify-content: center;
            font-weight: 700; font-size: 0.8125rem; flex-shrink: 0;
          }
          .review-mock-item strong { font-size: 0.9375rem; }
          .review-mock-item p { font-size: 0.875rem; color: var(--color-neutral-600); margin-top: 4px; }
          .review-mock-reply {
            background: var(--color-neutral-50);
            border-radius: var(--radius-md);
            padding: 16px;
            margin-top: 8px;
          }
          .review-mock-reply strong { font-size: 0.8125rem; color: var(--color-primary-700); }
          .review-mock-reply p { font-size: 0.8125rem; color: var(--color-neutral-600); margin-top: 4px; }
          @media (max-width: 880px) {
            .feature-grid { grid-template-columns: 1fr; }
            .feature-visual { order: -1; }
          }
        `}</style>
      </section>

      {/* SEO + GEO + AEO + AI Search Section */}
      <section className="section">
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">SEO · GEO · AEO · AI Search</span>
            <h2 className="section-title">Be Found on Google and AI Search Engines</h2>
            <p className="section-subtitle">
              Search is changing. We optimize your business for traditional Google search and the new wave
              of AI-powered search engines.
            </p>
          </div>
          <div className="grid grid-4">
            <div className="card seo-card">
              <div className="seo-badge">SEO</div>
              <h3>Search Engine Optimization</h3>
              <p>On-page, technical and content SEO to improve your organic Google rankings.</p>
              <Link to="/seo-services" className="service-link">Learn more →</Link>
            </div>
            <div className="card seo-card">
              <div className="seo-badge">GEO</div>
              <h3>Generative Engine Optimization</h3>
              <p>Get your business cited by AI search engines like ChatGPT and Perplexity.</p>
              <Link to="/geo-aeo-ai-search" className="service-link">Learn more →</Link>
            </div>
            <div className="card seo-card">
              <div className="seo-badge">AEO</div>
              <h3>Answer Engine Optimization</h3>
              <p>Structure your content so AI engines recommend your business in answers.</p>
              <Link to="/geo-aeo-ai-search" className="service-link">Learn more →</Link>
            </div>
            <div className="card seo-card">
              <div className="seo-badge">AI</div>
              <h3>AI Search Optimization</h3>
              <p>Prepare your business for Google AI Overviews and the future of search.</p>
              <Link to="/geo-aeo-ai-search" className="service-link">Learn more →</Link>
            </div>
          </div>
        </div>
        <style>{`
          .seo-card { text-align: center; }
          .seo-badge {
            display: inline-flex;
            align-items: center; justify-content: center;
            width: 56px; height: 56px;
            border-radius: var(--radius-md);
            background: linear-gradient(135deg, var(--color-primary-700), var(--color-secondary-600));
            color: #fff;
            font-weight: 800;
            font-size: 0.875rem;
            margin: 0 auto 16px;
          }
          .seo-card h3 { font-size: 1.0625rem; margin-bottom: 8px; }
          .seo-card p { font-size: 0.875rem; color: var(--color-neutral-500); margin-bottom: 12px; }
        `}</style>
      </section>

      {/* WhatsApp Automation Section */}
      <section className="section wa-section">
        <div className="container">
          <div className="feature-grid">
            <div>
              <span className="eyebrow">WhatsApp Automation</span>
              <h2 className="section-title">Turn WhatsApp Into Your Best Lead Channel</h2>
              <p className="lead" style={{ marginBottom: '24px' }}>
                WhatsApp is how local customers prefer to communicate. We set up WhatsApp Business
                automation and chatbots so you never miss an enquiry — even outside business hours.
              </p>
              <ul className="checklist" style={{ marginBottom: '28px' }}>
                <li>Automated replies and FAQ chatbots</li>
                <li>Lead capture forms on WhatsApp</li>
                <li>Appointment and booking automation</li>
                <li>Broadcast messages and promotions</li>
                <li>CRM integration for follow-ups</li>
              </ul>
              <Link to="/whatsapp-automation" className="btn btn-whatsapp">Explore WhatsApp Automation</Link>
            </div>
            <div className="feature-visual">
              <div className="wa-mock">
                <div className="wa-header">WhatsApp Business</div>
                <div className="wa-chat">
                  <div className="wa-msg wa-msg-in">
                    <p>Hi, do you have a table for 4 tonight?</p>
                    <span>7:32 PM</span>
                  </div>
                  <div className="wa-msg wa-msg-out">
                    <p>Hello! Yes, we have availability at 8:00 PM and 9:00 PM. Which would you prefer? 😊</p>
                    <span>7:32 PM ✓✓</span>
                  </div>
                  <div className="wa-msg wa-msg-in">
                    <p>8 PM works!</p>
                    <span>7:33 PM</span>
                  </div>
                  <div className="wa-msg wa-msg-out">
                    <p>Booked! Table for 4 at 8:00 PM. See you tonight 🍽️</p>
                    <span>7:33 PM ✓✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .wa-section { background: linear-gradient(170deg, var(--color-neutral-50), #fff); }
          .wa-mock {
            background: #e5ddd5;
            border-radius: var(--radius-xl);
            overflow: hidden;
            box-shadow: var(--shadow-lg);
            max-width: 400px;
            margin: 0 auto;
          }
          .wa-header {
            background: var(--whatsapp-dark);
            color: #fff;
            padding: 14px 20px;
            font-weight: 600;
            font-size: 0.9375rem;
          }
          .wa-chat { padding: 20px; display: grid; gap: 10px; }
          .wa-msg {
            max-width: 80%;
            padding: 10px 14px;
            border-radius: 10px;
            font-size: 0.875rem;
            position: relative;
          }
          .wa-msg p { margin-bottom: 4px; color: #111; }
          .wa-msg span { font-size: 0.6875rem; color: #667781; float: right; }
          .wa-msg-in { background: #fff; align-self: flex-start; border-radius: 10px 10px 10px 2px; }
          .wa-msg-out { background: #d9fdd3; align-self: flex-end; border-radius: 10px 10px 2px 10px; }
          @media (max-width: 880px) {
            .feature-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      {/* Website / Landing Page Section */}
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-visual">
              <div className="lp-mock">
                <div className="lp-mock-bar">
                  <span></span><span></span><span></span>
                </div>
                <div className="lp-mock-content">
                  <div className="lp-mock-hero">
                    <div className="lp-mock-line lp-mock-line-lg"></div>
                    <div className="lp-mock-line lp-mock-line-md"></div>
                    <div className="lp-mock-line lp-mock-line-sm"></div>
                    <div className="lp-mock-btn"></div>
                  </div>
                  <div className="lp-mock-grid">
                    <div className="lp-mock-card"></div>
                    <div className="lp-mock-card"></div>
                    <div className="lp-mock-card"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow">Websites & Landing Pages</span>
              <h2 className="section-title">Conversion-Focused Websites That Generate Enquiries</h2>
              <p className="lead" style={{ marginBottom: '24px' }}>
                A beautiful website is not enough. We build fast, mobile-friendly landing pages and
                business websites designed to convert visitors into calls, WhatsApp chats and enquiries.
              </p>
              <ul className="checklist" style={{ marginBottom: '28px' }}>
                <li>Mobile-first, fast-loading design</li>
                <li>WhatsApp and call buttons prominently placed</li>
                <li>SEO-optimized structure and content</li>
                <li>Lead capture forms ready for integration</li>
              </ul>
              <Link to="/landing-page" className="btn btn-primary">Get a Conversion Website</Link>
            </div>
          </div>
        </div>
        <style>{`
          .lp-mock {
            background: #fff;
            border: 1px solid var(--color-neutral-200);
            border-radius: var(--radius-xl);
            overflow: hidden;
            box-shadow: var(--shadow-lg);
          }
          .lp-mock-bar { display: flex; gap: 6px; padding: 14px 16px; border-bottom: 1px solid var(--color-neutral-100); }
          .lp-mock-bar span { width: 10px; height: 10px; border-radius: 50%; background: var(--color-neutral-300); }
          .lp-mock-bar span:first-child { background: #ff5f57; }
          .lp-mock-bar span:nth-child(2) { background: #febc2e; }
          .lp-mock-bar span:nth-child(3) { background: #28c840; }
          .lp-mock-content { padding: 28px; }
          .lp-mock-hero { margin-bottom: 28px; }
          .lp-mock-line { border-radius: 6px; margin-bottom: 12px; }
          .lp-mock-line-lg { height: 28px; background: var(--color-neutral-200); width: 70%; }
          .lp-mock-line-md { height: 14px; background: var(--color-neutral-100); width: 90%; }
          .lp-mock-line-sm { height: 14px; background: var(--color-neutral-100); width: 50%; }
          .lp-mock-btn { height: 36px; width: 140px; background: var(--color-primary-600); border-radius: var(--radius-sm); margin-top: 8px; }
          .lp-mock-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
          .lp-mock-card { height: 80px; background: var(--color-primary-50); border-radius: var(--radius-md); }
          @media (max-width: 880px) {
            .feature-grid { grid-template-columns: 1fr; }
            .feature-visual { order: -1; }
          }
        `}</style>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Questions Local Business Owners Ask Us</h2>
          </div>
          <FAQAccordion items={homeFaqs} />
          <div className="text-center" style={{ marginTop: '32px' }}>
            <Link to="/faq" className="btn btn-outline">View All FAQs</Link>
          </div>
        </div>
        <style>{`
          .faq-section { background: var(--color-neutral-50); }
        `}</style>
      </section>

      <CTASection />
    </>
  )
}
