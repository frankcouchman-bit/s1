import { useState, useMemo } from 'react'
import Navbar from '../../components/Navbar'
import BackgroundFX from '../../components/effects/BackgroundFX'
import HeadTags from '../../components/seo/HeadTags'
import RegionPicker from '../../components/seo/RegionPicker'
import ArticleGeneratorDemo from '../../components/home/ArticleGeneratorDemo.jsx'
import { ArrowRight, Check } from 'lucide-react'

export default function WritingTool() {
  const [region, setRegion] = useState({ code: 'US', name: 'United States' })

  const json = useMemo(() => ([
    { '@context':'https://schema.org','@type':'SoftwareApplication', name:'SEOScribe Writing Tool', applicationCategory:'BusinessApplication', operatingSystem:'Web', areaServed:region.name, offers:{'@type':'Offer','price':'24.00','priceCurrency':'USD'} },
    { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:`${window.location.origin}/` },
      { '@type':'ListItem', position:2, name:'Writing Tool', item:`${window.location.origin}/writing-tool` }
    ]},
    { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
      { '@type':'Question', name:'What does the writing tool include?', acceptedAnswer:{ '@type':'Answer', text:'Research, outline, draft, SEO scoring, images, FAQs, meta tags and social posts.' }},
      { '@type':'Question', name:'How is it optimized for the US?', acceptedAnswer:{ '@type':'Answer', text:'We localize SERP research, match entities and questions US users expect, and format for rich results.' }}
    ]}
  ]), [region])

  return (
    <div className="min-h-screen bg-white">
      <HeadTags
        title="Writing Tool — Research, Draft, Optimize | SEOScribe"
        description="Writing tool with built-in research and SEO optimization. Draft rank-ready articles with FAQs, images, citations and meta tags."
        keywords="writing tool, ai writing tool, seo writing tool, content tool, ai writer, article writer"
        canonical={`${window.location.origin}/writing-tool`}
        jsonLd={json}
      />
      <BackgroundFX />
      <Navbar />
      {/* page content… */}
    </div>
  )
}
