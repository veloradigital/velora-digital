import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Velora Digital"
        description="The page you are looking for does not exist. Explore our digital marketing services for local businesses in Chakan, Pune and PCMC."
        path="/404"
      />
      <section className="section" style={{ textAlign: 'center', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', color: 'var(--color-primary-200)' }}>404</h1>
          <h2>Page Not Found</h2>
          <p className="lead" style={{ margin: '16px auto 32px' }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
