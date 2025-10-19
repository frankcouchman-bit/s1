import { useState, useMemo } from 'react'
import Navbar from '../../components/Navbar'
import BackgroundFX from '../../components/effects/BackgroundFX'
import HeadTags from '../../components/seo/HeadTags'
import RegionPicker from '../../components/seo/RegionPicker'
import ArticleGeneratorDemo from '../../components/home/ArticleGeneratorDemo.jsx'
import { ArrowRight, Check } from 'lucide-react'

export default function AiWriter() {
  const [region, setRegion] = useState({ code: 'US', name: 'United States' })

  const json = useMemo(() => ([
    { '@context':'https://schema.org','@type':'SoftwareApplication', name:'SEOScribe AI Writer', applicationCategory:'BusinessApplication', operatingSystem:'Web', areaServed:region.name, offers:{'@type':'Offer','price':'24.00','priceCurrency':'USD'}, aggregateRating:{'@type':'AggregateRating','ratingValue':'4.9','ratingCount':5000} },
    { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:`${window.location.origin}/` },
      { '@type':'ListItem', position:2, name:'AI Writer', item:`${window.location.origin}/ai-writer` }
    ]},
    { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
      { '@type':'Question', name:'What is an AI writer?', acceptedAnswer:{ '@type':'Answer', text:'An AI writer generates and optimizes content using models like GPT, Claude, and Gemini with SERP research to match search intent.' }},
      { '@type':'Question', name:'Can I try it free?', acceptedAnswer:{ '@type':'Answer', text:'Yes. Generate a free demo and expand twice after sign-in on the Free plan.' }},
      { '@type':'Question', name:'Will content rank on Google?', acceptedAnswer:{ '@type':'Answer', text:'SEOScribe builds outlines from live SERPs, inserts entities/FAQs, and outputs metadata—giving you on-page best practices to rank.' }}
    ]}
  ]), [region])

  return (
    <div className="min-h-screen bg-white">
      <HeadTags
        title="AI Writer — Rank-Ready Articles in 60s | SEOScribe"
        description="AI writer with real-time SERP research. Create SEO-optimized articles with images, FAQs, citations, and meta tags in under a minute."
        keywords="ai writer, ai article writer, seo ai writer, content generator, writing tool, ai content, article generator"
        canonical={`${window.location.origin}/ai-writer`}
        jsonLd={json}
      />
      <BackgroundFX />
      <Navbar />

      {/* page content… (unchanged) */}
    </div>
  )
}
