import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactForm from '../components/ContactForm'
import { SITE } from '../lib/site'
import { localBusinessSchema } from '../lib/schema'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Velora Digital | Free Consultation in Chakan, Pune"
        description="Contact Velora Digital for a free digital marketing consultation. We help local businesses in Chakan, Pune and PCMC grow online. Reach us via WhatsApp, phone or our enquiry form."
        path="/contact"
        structuredData={[localBusinessSchema]}
      />
      <Breadcrumbs crumbs={[{ label: 'Contact' }]} />

      <section className="section" style={{ paddingTop: '24px' }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">Get in Touch</span>
              <h1>Get a Free Consultation</h1>
              <p className="lead" style={{ margin: '20px 0 32px' }}>
                Fill in the form or reach us directly on WhatsApp. We will review your current online
                presence and show you exactly how to attract more local customers.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">{SITE.phone}</span>
                </div>
                <div className="contact-method">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{SITE.email}</span>
                </div>
                <div className="contact-method">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{SITE.location}</span>
                </div>
                <div className="contact-method">
                  <span className="contact-label">Service Area</span>
                  <span className="contact-value">{SITE.area}</span>
                </div>
              </div>

              <a href={SITE.whatsapp} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer" style={{ marginTop: '32px' }}>
                Chat on WhatsApp
              </a>
            </div>

            <ContactForm />
          </div>
        </div>
        <style>{`
          .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 48px; align-items: start; }
          .contact-methods { display: grid; gap: 20px; }
          .contact-method { display: flex; flex-direction: column; gap: 4px; }
          .contact-label { font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-neutral-400); }
          .contact-value { font-size: 1.0625rem; color: var(--color-neutral-800); font-weight: 500; }
          @media (max-width: 880px) { .contact-grid { grid-template-columns: 1fr; gap: 32px; } }
        `}</style>
      </section>
    </>
  )
}
