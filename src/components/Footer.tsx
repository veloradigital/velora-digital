import { Link } from 'react-router-dom'
import { NAV_LINKS, SERVICES, SITE } from '../lib/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="6" fill="#0f766e" />
                <path d="M8 9l4 14 4-10 4 10 4-14" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Velora Digital</span>
            </div>
            <p className="footer-desc">
              Digital marketing agency in Chakan, Pune. We help local businesses grow online with Local SEO, Google Business Profile management, AI search optimization, reviews and WhatsApp automation.
            </p>
            <p className="footer-loc">{SITE.location}</p>
          </div>

          <div>
            <h3 className="footer-heading">Services</h3>
            <ul>
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}><Link to={s.path}>{s.shortTitle}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">More Services</h3>
            <ul>
              {SERVICES.slice(5).map((s) => (
                <li key={s.slug}><Link to={s.path}>{s.shortTitle}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Company</h3>
            <ul>
              {NAV_LINKS.filter((l) => l.path !== '/services').map((link) => (
                <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Get in Touch</h3>
            <ul className="footer-contact">
              <li>Phone: {SITE.phone}</li>
              <li>Email: {SITE.email}</li>
              <li>{SITE.location}</li>
            </ul>
            <a href={SITE.whatsapp} className="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Velora Digital. All rights reserved.</p>
          <p className="footer-area">Serving {SITE.area}</p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--color-neutral-900);
          color: var(--color-neutral-400);
          padding: 64px 0 24px;
          margin-top: 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--color-neutral-800);
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 1.125rem;
          color: #fff;
          margin-bottom: 16px;
        }
        .footer-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 12px;
          color: var(--color-neutral-500);
        }
        .footer-loc {
          font-size: 0.875rem;
          color: var(--color-primary-400);
          font-weight: 500;
        }
        .footer-heading {
          color: #fff;
          font-size: 0.9375rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .footer-grid ul li {
          margin-bottom: 10px;
        }
        .footer-grid ul a {
          color: var(--color-neutral-400);
          font-size: 0.875rem;
        }
        .footer-grid ul a:hover {
          color: var(--color-primary-400);
        }
        .footer-contact li {
          font-size: 0.875rem;
          margin-bottom: 8px;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          font-size: 0.8125rem;
        }
        .footer-bottom p { color: var(--color-neutral-500); }
        @media (max-width: 968px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
