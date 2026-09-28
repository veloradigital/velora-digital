import { SERVICES } from '../lib/site'

export default function ContactForm() {
  return (
    <form className="contact-form" aria-label="Contact form">
      <p className="form-note">
        Fill in your details and we will get back to you on WhatsApp or phone. This form is ready for
        backend integration — your enquiry will be stored and sent once the backend is configured.
      </p>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="business">Business Name</label>
          <input type="text" id="business" name="business" autoComplete="organization" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone *</label>
          <input type="tel" id="phone" name="phone" required autoComplete="tel" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="email" />
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="service">Service Interested In</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="other">Other / Not sure yet</option>
          </select>
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell us about your business and what you need..."></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-lg" disabled>
        Submit Enquiry
      </button>
      <p className="form-status">Backend integration pending — form submission will be active once configured.</p>

      <style>{`
        .contact-form {
          background: #fff;
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: 36px;
          box-shadow: var(--shadow-md);
        }
        .form-note {
          font-size: 0.875rem;
          color: var(--color-neutral-500);
          margin-bottom: 24px;
          padding: 12px 16px;
          background: var(--color-primary-50);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-primary-400);
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }
        .form-field-full { grid-column: 1 / -1; }
        .form-field label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-neutral-700);
          margin-bottom: 6px;
        }
        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 1rem;
          color: var(--color-neutral-800);
          background: #fff;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          outline: none;
          border-color: var(--color-primary-500);
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
        }
        .form-field textarea { resize: vertical; }
        .contact-form .btn { width: 100%; justify-content: center; }
        .contact-form .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .form-status {
          text-align: center;
          font-size: 0.8125rem;
          color: var(--color-neutral-400);
          margin-top: 12px;
        }
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr; }
          .contact-form { padding: 24px; }
        }
      `}</style>
    </form>
  )
}
