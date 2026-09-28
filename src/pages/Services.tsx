import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import CTASection from '../components/CTASection'
import ServiceIcon from '../components/ServiceIcon'
import { SERVICES, SITE } from '../lib/site'
import { organizationSchema } from '../lib/schema'

export default function Services() {
  return (
    <>
      <SEO
        title="Digital Marketing Services in Chakan, Pune | Velora Digital"
        description="Full range of digital marketing services in Chakan and Pune — Google Business Profile, Local SEO, SEO, GEO/AEO/AI Search, Google Reviews, WhatsApp automation, landing pages and more."
        path="/services"
        structuredData={[organizationSchema]}
      />
      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      <section className="section" style={{ paddingTop: '24px' }}>
        <div className="container">
          <div className="header-center">
            <span className="eyebrow">Our Services</span>
            <h1 className="section-title">Digital Marketing Services for Local Businesses</h1>
            <p className="section-subtitle">
              From Google Business Profile to AI search optimization — everything you need to get found
              online and turn searches into customers in Chakan, Pune and PCMC.
            </p>
          </div>
          <div className="grid grid-3">
            {SERVICES.map((s, i) => (
              <Link to={s.path} key={s.slug} className={`card service-card animate-in animate-delay-${(i % 3) + 1}`}>
                <div className="service-icon-wrap">
                  <ServiceIcon name={s.icon} size={24} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <span className="service-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .service-card h3 { font-size: 1.125rem; margin-bottom: 10px; }
          .service-card p { font-size: 0.9375rem; color: var(--color-neutral-500); line-height: 1.5; margin-bottom: 14px; }
          .service-icon-wrap {
            width: 48px; height: 48px; border-radius: var(--radius-md);
            background: var(--color-primary-50); color: var(--color-primary-700);
            display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
          }
          .service-link { font-size: 0.875rem; font-weight: 600; color: var(--color-primary-700); }
        `}</style>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        subtitle="Get a free consultation and we will recommend the best digital marketing strategy for your business and budget."
      />
    </>
  )
}
