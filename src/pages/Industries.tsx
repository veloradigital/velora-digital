import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import CTASection from '../components/CTASection'
import ServiceIcon from '../components/ServiceIcon'
import { INDUSTRIES } from '../lib/site'
import { organizationSchema } from '../lib/schema'

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve in Chakan, Pune | Velora Digital"
        description="We help hotels, restaurants, hospitals, clinics, showrooms, retail shops and local service businesses in Chakan, Pune and PCMC grow online with tailored digital marketing strategies."
        path="/industries"
        structuredData={[organizationSchema]}
      />
      <Breadcrumbs crumbs={[{ label: 'Industries' }]} />

      <section className="section" style={{ paddingTop: '24px' }}>
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">Industries We Serve</span>
            <h1 className="section-title">Digital Marketing for Every Local Business</h1>
            <p className="section-subtitle">
              We tailor our digital marketing strategies to the specific needs of your industry. Here is
              how we help different types of local businesses in Chakan, Pune and PCMC.
            </p>
          </div>
          <div className="grid grid-3">
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.slug} className={`card industry-detail animate-in animate-delay-${(i % 3) + 1}`}>
                <div className="service-icon-wrap">
                  <ServiceIcon name={ind.icon} size={24} />
                </div>
                <h3>{ind.title}</h3>
                <p>{ind.blurb}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .industry-detail h3 { font-size: 1.125rem; margin-bottom: 10px; }
          .industry-detail p { font-size: 0.9375rem; color: var(--color-neutral-500); line-height: 1.5; }
          .service-icon-wrap {
            width: 48px; height: 48px; border-radius: var(--radius-md);
            background: var(--color-primary-50); color: var(--color-primary-700);
            display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
          }
        `}</style>
      </section>

      <section className="section" style={{ background: 'var(--color-neutral-50)', paddingTop: '24px' }}>
        <div className="container">
          <div className="header-center">
            <h2 className="section-title">How We Tailor Our Approach</h2>
            <p className="section-subtitle">
              Every industry has different customer behaviors and search patterns. We customize our
              strategy accordingly.
            </p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>Hotels & Restaurants</h3>
              <p>We focus on Google Maps visibility, menu showcasing, review management and WhatsApp booking automation to drive direct reservations and walk-ins.</p>
            </div>
            <div className="card">
              <h3>Hospitals & Clinics</h3>
              <p>We optimize for patient searches, appointment booking via WhatsApp, doctor profiles and trust-building reviews to help patients find and choose your practice.</p>
            </div>
            <div className="card">
              <h3>Showrooms & Retail Shops</h3>
              <p>We drive footfall with local search visibility, product catalogs on Google Business Profile, targeted ads for nearby shoppers and WhatsApp promotions.</p>
            </div>
            <div className="card">
              <h3>Local Service Businesses</h3>
              <p>We generate calls and enquiries from "near me" searches, build trust with reviews and automate lead capture on WhatsApp so you never miss a job.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
