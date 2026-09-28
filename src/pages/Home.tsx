import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CTASection from '../components/CTASection'
import FAQAccordion, { FAQItem } from '../components/FAQAccordion'
import ServiceIcon from '../components/ServiceIcon'
import { SERVICES, INDUSTRIES, SITE } from '../lib/site'
import { organizationSchema, localBusinessSchema, websiteSchema, faqSchema } from '../lib/schema'

const localSeoFactors = [
  { icon: 'map-pin', title: 'Google Business Profile', desc: 'Complete, optimized profile with accurate details and photos.' },
  { icon: 'search', title: 'Local Keywords', desc: 'Targeting searches like "near me" and location-based queries.' },
  { icon: 'star', title: 'Reviews & Ratings', desc: 'Generating and managing reviews to strengthen local signals.' },
  { icon: 'navigation', title: 'Local Citations', desc: 'Consistent name, address and phone across all directories.' },
]

const reviewSteps = [
  { num: '01', title: 'Request Reviews', desc: 'Automated WhatsApp or SMS requests sent to happy customers at the right moment.' },
  { num: '02', title: 'Monitor & Alert', desc: 'Real-time alerts when a new review is posted so nothing goes unanswered.' },
  { num: '03', title: 'Respond Professionally', desc: 'Every review — positive or negative — gets a thoughtful, professional reply.' },
  { num: '04', title: 'Track & Improve', desc: 'Monitor your rating and review volume to strengthen your local reputation.' },
]

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

        </div>
        <style>{`
          .hero {
            background: linear-gradient(170deg, var(--color-primary-50) 0%, #fff 60%);
            padding: 64px 0 80px;
            overflow: hidden;
          }
          .hero-inner {
            max-width: 720px;
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
          @media (max-width: 880px) {
            .hero-inner { max-width: 100%; }
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
              <div className="info-card-grid">
                {localSeoFactors.map((f) => (
                  <div key={f.title} className="info-card-item">
                    <div className="service-icon-wrap">
                      <ServiceIcon name={f.icon} size={22} />
                    </div>
                    <div>
                      <strong>{f.title}</strong>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
          .info-card-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .info-card-item {
            background: #fff;
            border: 1px solid var(--color-neutral-200);
            border-radius: var(--radius-lg);
            padding: 20px;
            display: flex;
            gap: 14px;
            align-items: flex-start;
          }
          .info-card-item strong { display: block; font-size: 0.9375rem; color: var(--color-neutral-900); margin-bottom: 4px; }
          .info-card-item p { font-size: 0.8125rem; color: var(--color-neutral-500); line-height: 1.5; }
          .info-card-item .service-icon-wrap { width: 40px; height: 40px; margin-bottom: 0; flex-shrink: 0; }
          @media (max-width: 880px) {
            .feature-grid { grid-template-columns: 1fr; gap: 32px; }
            .info-card-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      {/* Google Reviews Section */}
      <section className="section reviews-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-visual">
              <div className="review-process-card">
                {reviewSteps.map((step) => (
                  <div key={step.num} className="review-step">
                    <span className="review-step-num">{step.num}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
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
          .review-process-card {
            background: #fff;
            border: 1px solid var(--color-neutral-200);
            border-radius: var(--radius-xl);
            padding: 28px;
            box-shadow: var(--shadow-lg);
            display: grid;
            gap: 20px;
          }
          .review-step { display: flex; gap: 16px; align-items: flex-start; }
          .review-step-num {
            width: 36px; height: 36px; border-radius: 50%;
            background: var(--color-primary-100); color: var(--color-primary-700);
            display: flex; align-items: center; justify-content: center;
            font-weight: 800; font-size: 0.875rem; flex-shrink: 0;
          }
          .review-step strong { display: block; font-size: 0.9375rem; color: var(--color-neutral-900); margin-bottom: 4px; }
          .review-step p { font-size: 0.8125rem; color: var(--color-neutral-500); line-height: 1.5; }
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
