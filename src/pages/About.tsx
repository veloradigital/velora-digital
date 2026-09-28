import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import CTASection from '../components/CTASection'
import { organizationSchema, localBusinessSchema } from '../lib/schema'
import { SITE } from '../lib/site'

export default function About() {
  return (
    <>
      <SEO
        title="About Velora Digital | Digital Marketing Agency in Chakan, Pune"
        description="Velora Digital is a Chakan, Pune-based digital marketing agency helping local businesses grow online with Local SEO, Google Business Profile, AI search optimization, reviews and WhatsApp automation."
        path="/about"
        structuredData={[organizationSchema, localBusinessSchema]}
      />
      <Breadcrumbs crumbs={[{ label: 'About' }]} />

      <section className="section" style={{ paddingTop: '24px' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="eyebrow">About Us</span>
              <h1>Helping Local Businesses in Chakan, Pune Grow Online</h1>
              <p className="lead" style={{ margin: '20px 0' }}>
                Velora Digital is a digital marketing agency based in Chakan, Pune. We exist for one
                reason — to help local businesses get found online, generate more enquiries and grow
                through practical, results-focused digital marketing.
              </p>
              <p style={{ color: 'var(--color-neutral-600)', marginBottom: '16px' }}>
                We are not a big corporate agency. We are a local team that understands the Chakan and
                Pune market. We know that what matters to you is not vanity metrics — it is phone calls,
                WhatsApp chats and customers walking through your door.
              </p>
              <p style={{ color: 'var(--color-neutral-600)', marginBottom: '32px' }}>
                That is why every service we offer — from Google Business Profile management to AI
                search optimization — is built around one goal: generating real, measurable leads for
                your business.
              </p>
              <Link to="/contact" className="btn btn-primary">Get a Free Consultation</Link>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-loc">📍</span>
                <strong>Chakan, Pune</strong>
                <span>Our home base</span>
              </div>
              <div className="stat-card">
                <span className="stat-loc">🎯</span>
                <strong>Local-First</strong>
                <span>Built for local businesses</span>
              </div>
              <div className="stat-card">
                <span className="stat-loc">💬</span>
                <strong>WhatsApp-Driven</strong>
                <span>Focus on real enquiries</span>
              </div>
              <div className="stat-card">
                <span className="stat-loc">🤖</span>
                <strong>AI Search Ready</strong>
                <span>Future-proof your presence</span>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px; align-items: center; }
          .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          .stat-card {
            background: var(--color-neutral-50);
            border: 1px solid var(--color-neutral-200);
            border-radius: var(--radius-lg);
            padding: 24px;
            text-align: center;
          }
          .stat-loc { font-size: 1.5rem; display: block; margin-bottom: 8px; }
          .stat-card strong { display: block; font-size: 1.0625rem; margin-bottom: 4px; }
          .stat-card span { font-size: 0.8125rem; color: var(--color-neutral-500); }
          @media (max-width: 880px) { .about-grid { grid-template-columns: 1fr; gap: 32px; } }
        `}</style>
      </section>

      <section className="section" style={{ background: 'var(--color-neutral-50)', paddingTop: '24px' }}>
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Transparency</h3>
              <p>You always know what we are doing, why and what results it brings. No black boxes, no jargon.</p>
            </div>
            <div className="card">
              <h3>Real Results</h3>
              <p>We measure success by enquiries, calls and customers — not impressions, likes or vanity metrics.</p>
            </div>
            <div className="card">
              <h3>Local Understanding</h3>
              <p>We know Chakan, Pune and PCMC. We optimize for the customers who are actually near you.</p>
            </div>
            <div className="card">
              <h3>Practical Solutions</h3>
              <p>We do not recommend strategies that sound impressive but do not work for local businesses.</p>
            </div>
            <div className="card">
              <h3>Honesty</h3>
              <p>We do not make unrealistic guarantees. We tell you what is achievable and deliver on it.</p>
            </div>
            <div className="card">
              <h3>Continuous Improvement</h3>
              <p>Search and AI are always evolving. We keep your business ahead of the curve.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
