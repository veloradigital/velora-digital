import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../lib/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="Velora Digital home">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="6" fill="#0f766e" />
            <path d="M8 9l4 14 4-10 4 10 4-14" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Velora Digital</span>
        </Link>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <a
            href={SITE.whatsapp}
            className="btn btn-whatsapp btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.967-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        <button
          className={`menu-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-neutral-200);
          transition: box-shadow var(--transition);
        }
        .site-header.scrolled {
          box-shadow: var(--shadow-sm);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 24px;
          min-height: 64px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 1.125rem;
          color: var(--color-neutral-900);
          flex-shrink: 0;
        }
        .logo:hover { color: var(--color-primary-700); }
        .main-nav {
          display: flex;
          gap: 4px;
          margin-left: auto;
        }
        .main-nav a {
          padding: 8px 14px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-neutral-600);
          border-radius: var(--radius-sm);
          transition: all var(--transition);
        }
        .main-nav a:hover, .main-nav a.active {
          color: var(--color-primary-700);
          background: var(--color-primary-50);
        }
        .header-cta { flex-shrink: 0; }
        .btn-sm { padding: 10px 20px; font-size: 0.875rem; }
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
        }
        .menu-toggle span {
          width: 24px;
          height: 2px;
          background: var(--color-neutral-700);
          border-radius: 2px;
          transition: all var(--transition);
        }
        .menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .menu-toggle.open span:nth-child(2) { opacity: 0; }
        .menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        @media (max-width: 968px) {
          .menu-toggle { display: flex; }
          .header-cta { display: none; }
          .main-nav {
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            background: #fff;
            flex-direction: column;
            padding: 16px;
            border-bottom: 1px solid var(--color-neutral-200);
            box-shadow: var(--shadow-lg);
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all var(--transition);
            margin-left: 0;
          }
          .main-nav.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
          .main-nav a {
            padding: 14px;
            font-size: 1rem;
          }
          .main-nav a + a {
            border-top: 1px solid var(--color-neutral-100);
            border-radius: 0;
          }
        }
      `}</style>
    </header>
  )
}
