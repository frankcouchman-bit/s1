import { useState, useMemo } from 'react'
import Navbar from '../../components/Navbar'
import BackgroundFX from '../../components/effects/BackgroundFX'
import HeadTags from '../../components/seo/HeadTags'
import RegionPicker from '../../components/seo/RegionPicker'
import ArticleGeneratorDemo from '../../components/home/ArticleGeneratorDemo.jsx'
import { ArrowRight, Check } from 'lucide-react'

export default function ArticleWriter() {
  const [region, setRegion] = useState({ code: 'US', name: 'United States' })

  const json = useMemo(() => ([
    { '@context':'https://schema.org','@type':'SoftwareApplication', name:'SEOScribe Article Writer', applicationCategory:'BusinessApplication', operatingSystem:'Web', areaServed:region.name, offers:{'@type':'Offer','price':'24.00','priceCurrency':'USD'} },
    { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:`${window.location.origin}/` },
      { '@type':'ListItem', position:2, name:'Article Writer', item:`${window.location.origin}/article-writer` }
    ]},
    { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
      { '@type':'Question', name:'What is an article writer tool?', acceptedAnswer:{ '@type':'Answer', text:'A tool that creates long-form drafts with headings, entities, images, FAQs, citations, and meta tags—ready to publish.' }},
      { '@type':'Question', name:'Does it include internal links?', acceptedAnswer:{ '@type':'Answer', text:'We suggest internal links to your existing posts and key pages to improve crawl paths and topical depth.' }}
    ]}
  ]), [region])

  return (
    <div className="min-h-screen bg-white">
      <HeadTags
        title="Article Writer — SEO-Optimized Long-Form Content | SEOScribe"
        description="Article writer that mirrors search intent with real-time SERP research. Generate long-form content with citations, images, internal links, and meta in 60 seconds."
        keywords="article writer, seo article writer, long form writer, content generator, writing tool, ai writer"
        canonical={`${window.location.origin}/article-writer`}
        jsonLd={json}
      />
      <BackgroundFX />
      <Navbar />
      {/* page content… */}
    </div>
  )
}
