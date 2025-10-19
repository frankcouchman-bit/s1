import { useState, useMemo } from 'react'
import Navbar from '../../components/Navbar'
import BackgroundFX from '../../components/effects/BackgroundFX'
import HeadTags from '../../components/seo/HeadTags'
import RegionPicker from '../../components/seo/RegionPicker'
import ArticleGeneratorDemo from '../../components/home/ArticleGeneratorDemo.jsx'
import { ArrowRight, Check } from 'lucide-react'
export default function WritingTool() {
  const [region, setRegion] = useState({ code:'US', name:'United States' })
  const json = useMemo(()=>[{'@context':'https://schema.org','@type':'SoftwareApplication',name:'SEOScribe Writing Tool',applicationCategory:'BusinessApplication',areaServed:region.name,offers:{'@type':'Offer','price':'24.00','priceCurrency':'USD'}}], [region])
  return (<div className="min-h-screen bg-white">
    <HeadTags title="Writing Tool — Research, Draft, Optimize | SEOScribe" description="Writing tool with built-in research and SEO optimization. Draft rank-ready articles with FAQs, images, and meta tags. Try the live demo." keywords=["writing tool", "ai writing tool", "seo writing tool", "content tool", "ai writer"] canonical={`${window.location.origin}/writing-tool`} jsonLd={json} />
    <BackgroundFX /><Navbar />
    <section className="pt-20 pb-8"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h1 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">Writing Tool for {region.name}</h1>
        <RegionPicker onChange={setRegion} /></div>
      <p className="mt-4 text-slate-600 text-lg">Writing tool with built-in research and SEO optimization. Draft rank-ready articles with FAQs, images, and meta tags. Try the live demo.</p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-violet-600 text-white shadow hover:bg-violet-500">Try Demo <ArrowRight className="w-4 h-4 ml-2" /></a>
        <a href="/dashboard" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-white border border-slate-200 hover:bg-slate-50 text-slate-900">Get Started Free</a>
      </div>
      <div className="mt-4 flex gap-4 text-sm text-slate-500"><div className="flex items-center gap-2"><Check className="w-4 h-4" /> No credit card required</div><div className="flex items-center gap-2"><Check className="w-4 h-4" /> Free forever plan</div></div>
    </div></section>
    <section id="demo" className="py-10 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><ArticleGeneratorDemo /></div></section>
  </div>) }
