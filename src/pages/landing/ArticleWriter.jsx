// src/pages/landing/ArticleWriter.jsx
import React, { useMemo } from "react";
import HeadTags from "@/components/seo/HeadTags";
import BackgroundFX from "@/components/BackgroundFX";
import Navbar from "@/components/Navbar";

export default function ArticleWriter() {
  // Graceful fallback if your app doesn't inject a region yet
  const region =
    (typeof window !== "undefined" && window.__REGION) || { name: "Global" };

  // JSON-LD (memoized)
  const json = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "SEOScribe Article Writer",
        applicationCategory: "BusinessApplication",
        areaServed: region?.name || "Global",
        offers: { "@type": "Offer", price: "24.00", priceCurrency: "USD" },
      },
    ],
    [region?.name]
  );

  // SSR/prerender-safe canonical
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

      <BackgroundFX />
      <Navbar />

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

        {/* Keep your existing sections/components below */}
      </main>
    </div>
  );
}
