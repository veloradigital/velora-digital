import { useState, type FormEvent } from 'react'
import { SERVICES, SITE } from '../lib/site'

const WEB3FORMS_ACCESS_KEY = 'ef05f58f-b5b7-4ec5-9f61-f32ea476d456'

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Enquiry from Velora Digital Website',
          from_name: SITE.name,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setState('success')
        e.currentTarget.reset()
      } else {
        setState('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setState('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  if (state === 'success') {
    return (
      <div className="contact-form contact-form-success">
        <div className="success-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3>Enquiry Submitted!</h3>
        <p>Thank you for reaching out. We will get back to you on WhatsApp or phone shortly.</p>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => setState('idle')}
        >
          Send Another Enquiry
        </button>
        <style>{`
          .contact-form-success {
            text-align: center;
            padding: 48px 36px;
          }
          .success-icon {
            width: 72px; height: 72px;
            margin: 0 auto 20px;
            border-radius: 50%;
            background: var(--color-success-50);
            color: var(--color-success-600);
            display: flex; align-items: center; justify-content: center;
          }
          .contact-form-success h3 {
            font-size: 1.5rem;
            margin-bottom: 8px;
            color: var(--color-neutral-900);
          }
          .contact-form-success p {
            font-size: 1rem;
            color: var(--color-neutral-600);
            margin-bottom: 24px;
            max-width: 360px;
            margin-left: auto;
            margin-right: auto;
          }
          .contact-form-success .btn { display: inline-flex; }
        `}</style>
      </div>
    )
  }

  return (
    <form className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
      <p className="form-note">
        Fill in your details and we will get back to you on WhatsApp or phone.
      </p>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required autoComplete="name" disabled={state === 'loading'} />
        </div>
        <div className="form-field">
          <label htmlFor="business">Business Name</label>
          <input type="text" id="business" name="business" autoComplete="organization" disabled={state === 'loading'} />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone *</label>
          <input type="tel" id="phone" name="phone" required autoComplete="tel" disabled={state === 'loading'} />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="email" disabled={state === 'loading'} />
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="service">Service Interested In</label>
          <select id="service" name="service" defaultValue="" disabled={state === 'loading'}>
            <option value="" disabled>Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="other">Other / Not sure yet</option>
          </select>
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell us about your business and what you need..." disabled={state === 'loading'}></textarea>
        </div>
      </div>

      <input type="checkbox" name="botcheck" className="botcheck" tabIndex={-1} autoComplete="off" />

      <button type="submit" className="btn btn-primary btn-lg" disabled={state === 'loading'}>
        {state === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
      </button>

      {state === 'error' && (
        <p className="form-status form-status-error">{errorMessage}</p>
      )}

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
        .botcheck { display: none !important; }
        .contact-form .btn { width: 100%; justify-content: center; }
        .contact-form .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .form-status {
          text-align: center;
          font-size: 0.8125rem;
          margin-top: 12px;
        }
        .form-status-error {
          color: var(--color-error-500);
          background: var(--color-error-50);
          padding: 10px 16px;
          border-radius: var(--radius-sm);
        }
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr; }
          .contact-form { padding: 24px; }
        }
      `}</style>
    </form>
  )
}
