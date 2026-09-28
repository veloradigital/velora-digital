import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  path: string
  type?: string
  structuredData?: object[]
}

export default function SEO({ title, description, path, type = 'website', structuredData = [] }: SEOProps) {
  const canonical = `https://veloradigital.com${path}`

  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('canonical', canonical)

    // Open Graph
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:type', type, 'property')
    setMeta('og:site_name', 'Velora Digital', 'property')

    // Twitter
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)

    // Structured data
    const existing = document.querySelectorAll('script[data-structured]')
    existing.forEach((s) => s.remove())

    structuredData.forEach((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-structured', 'true')
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    })
  }, [title, description, canonical, type, structuredData])

  return null
}
