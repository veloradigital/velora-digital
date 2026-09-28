import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import CTASection from '../components/CTASection'
import FAQAccordion, { FAQItem } from '../components/FAQAccordion'
import { SERVICES, SITE, ServiceMeta } from '../lib/site'
import { serviceSchema, faqSchema } from '../lib/schema'

export interface ServiceContent {
  meta: ServiceMeta
  intro: string
  problems: string[]
  solutions: string[]
  features: { title: string; desc: string }[]
  process: { title: string; desc: string }[]
  faqs: FAQItem[]
}

export default function ServicePageTemplate({ content }: { content: ServiceContent }) {
  const { meta, intro, problems, solutions, features, process, faqs } = content
  const related = SERVICES.filter((s) => s.slug !== meta.slug).slice(0, 4)

  return (
    <>
      <SEO
        title={meta.seoTitle}
        description={meta.seoDescription}
        path={meta.path}
        structuredData={[serviceSchema(meta.title, meta.seoDescription, meta.path), faqSchema(faqs)]}
      />
      <Breadcrumbs crumbs={[{ label: 'Services', path: '/services' }, { label: meta.shortTitle }]} />

      {/* Hero */}
      <section className="section service-hero">
        <div className="container">
          <h1>{meta.title}</h1>
          <p className="lead">{intro}</p>
          <div className="service-hero-cta">
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Consultation</Link>
            <a href={SITE.whatsapp} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <style>{`
          .service-hero { padding-top: 24px; }
          .service-hero h1 { max-width: 720px; margin-bottom: 16px; }
          .service-hero .lead { max-width: 640px; margin-bottom: 28px; }
          .service-hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
          @media (max-width: 640px) { .service-hero-cta { flex-direction: column; } .service-hero-cta .btn { width: 100%; justify-content: center; } }
        `}</style>
      </section>

      {/* Problems */}
      <section className="section" style={{ paddingTop: '24px' }}>
        <div className="container">
          <div className="problem-grid">
            <div>
              <h2>Problems Local Businesses Face</h2>
              <p className="lead" style={{ marginTop: '12px' }}>
                If any of these sound familiar, {meta.shortTitle} from Velora Digital can help.
              </p>
            </div>
            <div className="problem-list">
              {problems.map((p, i) => (
                <div key={i} className="problem-item">
                  <span className="problem-x" aria-hidden="true">✕</span>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .problem-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 48px; align-items: start; }
          .problem-list { display: grid; gap: 14px; }
          .problem-item { display: flex; gap: 14px; align-items: flex-start; }
          .problem-x {
            width: 28px; height: 28px; border-radius: 50%;
            background: #fee2e2; color: var(--color-error-500);
            display: flex; align-items: center; justify-content: center;
            font-size: 0.875rem; font-weight: 700; flex-shrink: 0;
          }
          .problem-item p { color: var(--color-neutral-600); padding-top: 3px; }
          @media (max-width: 880px) { .problem-grid { grid-template-columns: 1fr; gap: 24px; } }
        `}</style>
      </section>

      {/* What We Provide */}
      <section className="section solution-section">
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">What Velora Digital Provides</span>
            <h2 className="section-title">Our {meta.shortTitle} Includes</h2>
          </div>
          <div className="grid grid-3">
            {solutions.map((s, i) => (
              <div key={i} className="card">
                <div className="solution-check" aria-hidden="true">✓</div>
                <p>{s}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .solution-section { background: var(--color-primary-50); }
          .solution-section .card { display: flex; gap: 14px; align-items: flex-start; padding: 20px; }
          .solution-check {
            width: 24px; height: 24px; border-radius: 50%;
            background: var(--color-primary-600); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
          }
          .solution-section .card p { color: var(--color-neutral-700); font-size: 0.9375rem; }
        `}</style>
      </section>

      {/* Features & Benefits */}
      <section className="section">
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">Key Features & Benefits</span>
            <h2 className="section-title">Why This Matters for Your Business</h2>
          </div>
          <div className="grid grid-3">
            {features.map((f, i) => (
              <div key={i} className="card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .card h3 { font-size: 1.0625rem; margin-bottom: 8px; }
          .card p { font-size: 0.875rem; color: var(--color-neutral-500); }
        `}</style>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">Our Process</span>
            <h2 className="section-title">How We Deliver {meta.shortTitle}</h2>
          </div>
          <div className="grid grid-4">
            {process.map((p, i) => (
              <div key={i} className="process-step">
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .process-section { background: var(--color-neutral-50); }
          .process-step { text-align: center; padding: 20px; }
          .step-num { display: inline-block; font-size: 2rem; font-weight: 800; color: var(--color-primary-200); margin-bottom: 12px; }
          .process-step h3 { font-size: 1.125rem; margin-bottom: 8px; }
          .process-step p { font-size: 0.875rem; color: var(--color-neutral-500); }
        `}</style>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">{meta.shortTitle} – Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '24px' }}>Related Services</h2>
          <div className="grid grid-4">
            {related.map((s) => (
              <Link to={s.path} key={s.slug} className="card related-card">
                <h3>{s.shortTitle}</h3>
                <span className="service-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .related-card h3 { font-size: 1rem; margin-bottom: 8px; }
        `}</style>
      </section>

      <CTASection />
    </>
  )
}
