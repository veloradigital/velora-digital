import { Link } from 'react-router-dom'

interface Crumb {
  label: string
  path?: string
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.path ? { item: `https://veloradigital.com${c.path}` } : {}),
    })),
  }

  return (
    <>
      <nav className="breadcrumbs container" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        {crumbs.map((c, i) => (
          <span key={i}>
            ›
            {c.path ? <Link to={c.path}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  )
}
