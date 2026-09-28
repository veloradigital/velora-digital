import { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.question}</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
      <style>{`
        .faq-accordion {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          margin-bottom: 12px;
          overflow: hidden;
          transition: all var(--transition);
        }
        .faq-item.open {
          border-color: var(--color-primary-300);
          box-shadow: var(--shadow-sm);
        }
        .faq-question {
          width: 100%;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--color-neutral-900);
          text-align: left;
          background: #fff;
          transition: background var(--transition);
        }
        .faq-question:hover {
          background: var(--color-neutral-50);
        }
        .faq-icon {
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--color-primary-600);
          transition: transform var(--transition);
          flex-shrink: 0;
        }
        .faq-item.open .faq-icon {
          transform: rotate(45deg);
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition);
        }
        .faq-item.open .faq-answer {
          max-height: 500px;
        }
        .faq-answer p {
          padding: 0 24px 20px;
          color: var(--color-neutral-600);
          line-height: 1.7;
        }
      `}</style>
    </div>
  )
}
