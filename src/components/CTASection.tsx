import { Link } from 'react-router-dom'
import { SITE } from '../lib/site'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export default function CTASection({
  title = 'Ready to Grow Your Local Business Online?',
  subtitle = 'Get a free consultation today. We will review your current online presence and show you exactly how to attract more local customers.',
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Consultation</Link>
            <a href={SITE.whatsapp} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .cta-section { padding: 64px 0; }
        .cta-box {
          background: linear-gradient(135deg, var(--color-primary-800), var(--color-primary-600));
          border-radius: var(--radius-xl);
          padding: 56px 40px;
          text-align: center;
        }
        .cta-box h2 { color: #fff; margin-bottom: 16px; }
        .cta-box p { color: rgba(255,255,255,0.85); font-size: 1.125rem; max-width: 560px; margin: 0 auto 32px; }
        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-box .btn-primary {
          background: #fff;
          color: var(--color-primary-800);
        }
        .cta-box .btn-primary:hover {
          background: var(--color-neutral-100);
          color: var(--color-primary-900);
        }
        @media (max-width: 640px) {
          .cta-box { padding: 40px 20px; }
          .cta-actions { flex-direction: column; }
          .cta-actions .btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
