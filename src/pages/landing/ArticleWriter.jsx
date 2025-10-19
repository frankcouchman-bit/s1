// src/pages/landing/ArticleWriter.jsx
import React, { useMemo } from "react";
import HeadTags from "@/components/seo/HeadTags"; // keep this path consistent with your alias config
import BackgroundFX from "@/components/BackgroundFX"; // your existing component
import Navbar from "@/components/Navbar"; // your existing component

export default function ArticleWriter() {
  // If your app provides region from context/hook, replace this with that source.
  const regionName = "Global";

  // JSON-LD (memoized)
  const json = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "SEOScribe Article Writer",
        applicationCategory: "BusinessApplication",
        areaServed: regionName,
        offers: { "@type": "Offer", price: "24.00", priceCurrency: "USD" },
      },
    ],
    [regionName]
  );

  // SSR/Prerender-safe canonical
  const canonicalUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/article-writer`
      : "/article-writer";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeadTags
        title="Article Writer — SEO-Optimized Long-Form Content | SEOScribe"
        description="Article writer that mirrors search intent with real-time SERP research. Generate long-form content with citations, images, and meta in 60 seconds."
        keywords={[
          "article writer",
          "seo article writer",
          "long form writer",
          "content generator",
          "writing tool",
        ]}
        canonical={canonicalUrl}
        jsonLd={json}
      />

      {/* Site chrome */}
      <BackgroundFX />
      <Navbar />

      {/* Page content (keep or replace with your existing sections) */}
      <main>
        <section className="pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              SEOScribe Article Writer
            </h1>
            <p className="mt-3 text-slate-600">
              Generate long-form, SEO-optimized drafts with citations, images,
              and metadata in minutes. Built to mirror search intent with
              real-time SERP research.
            </p>
          </div>
        </section>

        {/* Keep your original sections/components below if you have them */}
      </main>
    </div>
  );
}
