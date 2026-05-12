"use client";

import { useState } from "react";
import Link from "next/link";
import type { IndustryPageData } from "@/lib/industry-pages";

export default function IndustryLandingPage({
  data,
}: {
  data: IndustryPageData;
}) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Service + FAQPage + BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: `Web Design for ${data.industry}`,
              description: data.metaDescription,
              provider: {
                "@type": "LocalBusiness",
                name: "Webloft Studio",
                url: "https://webloftstudio.com",
                telephone: "+1-226-376-6326",
              },
              areaServed: {
                "@type": "Country",
                name: "Canada",
              },
              serviceType: "Web Design",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: data.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://webloftstudio.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: `Web Design for ${data.industry}`,
                  item: `https://webloftstudio.com/${data.slug}`,
                },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16" style={{ background: "var(--bg)" }}>
        <div className="ds-container">
          <div className="text-center">
            <p className="eyebrow mb-6 animate-fade-in-up">{data.eyebrow}</p>
            <h1 className="h-1 mb-6 animate-fade-in-up">
              {data.heroTitle}{" "}
              <span style={{ color: "var(--accent)" }}>{data.heroAccent}</span>
            </h1>
            <p
              className="body-lg max-w-4xl mx-auto mb-8 animate-fade-in-up stagger-1"
              style={{ color: "var(--ink-dim)" }}
            >
              {data.heroSubtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up stagger-2">
              <Link
                href="/contact"
                className="ds-btn ds-btn-primary text-lg px-8 py-4"
              >
                {data.ctaButtonText}
              </Link>
              <Link
                href="/projects"
                className="ds-btn ds-btn-ghost text-lg px-8 py-4"
              >
                See Our Work
              </Link>
            </div>
            <p
              className="body text-sm animate-fade-in-up stagger-3"
              style={{ color: "var(--ink-mute)" }}
            >
              Free 30-minute consultation &middot; No obligation &middot;
              Industry-specific recommendations
            </p>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* Pain Points Section */}
      <section className="py-20" style={{ background: "var(--bg-elev)" }}>
        <div className="ds-container">
          <div className="text-center mb-16">
            <h2 className="h-2 mb-6">
              Why Most {data.industry} Websites Fail to Convert
            </h2>
            <p
              className="body-lg max-w-3xl mx-auto"
              style={{ color: "var(--ink-dim)" }}
            >
              If any of these sound familiar, your website is costing you
              business:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.painPoints.map((pain, index) => (
              <div
                key={index}
                className="ds-card p-8"
                style={{ borderLeft: "3px solid var(--accent)" }}
              >
                <h3 className="h-3 mb-3">{pain.problem}</h3>
                <p
                  className="body mb-4"
                  style={{ color: "var(--ink-dim)" }}
                >
                  {pain.description}
                </p>
                <div
                  className="text-xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  {pain.stat}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="body mb-6" style={{ color: "var(--ink)" }}>
              <strong>Sound familiar?</strong>
            </p>
            <Link
              href="/contact"
              className="ds-btn ds-btn-primary text-lg px-8 py-4"
            >
              Fix My Website Now
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20" style={{ background: "var(--bg)" }}>
        <div className="ds-container">
          <div className="text-center mb-16">
            <h2 className="h-2 mb-6">
              How We Build {data.industry} Websites That{" "}
              <span style={{ color: "var(--accent)" }}>Actually Work</span>
            </h2>
            <p
              className="body-lg max-w-3xl mx-auto"
              style={{ color: "var(--ink-dim)" }}
            >
              Not templates. Not generic agency work. Websites built
              specifically for {data.industry.toLowerCase()} who want more
              leads.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {data.solutions.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                    style={{
                      background: "var(--accent)",
                      color: "var(--bg)",
                    }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h4 className="h-3 mb-2">{step.title}</h4>
                    <p
                      className="body"
                      style={{ color: "var(--ink-dim)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Results Card */}
            <div
              className="ds-card p-8 sticky top-24"
              style={{ background: "var(--bg-elev)" }}
            >
              <h4 className="h-3 mb-6 text-center">Average Client Results</h4>
              <div className="space-y-4">
                {[
                  { label: "Lead Generation Increase", value: "+250%" },
                  { label: "Conversion Rate Improvement", value: "+180%" },
                  { label: "Average ROI", value: "340%" },
                  { label: "Time to Results", value: "30 Days" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center p-4 rounded-lg"
                    style={{ background: "var(--bg-elev-2)" }}
                  >
                    <span
                      className="body"
                      style={{ color: "var(--ink-dim)" }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "var(--accent)" }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/contact"
                  className="ds-btn ds-btn-primary w-full py-3"
                >
                  Get Similar Results
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-20" style={{ background: "var(--bg-elev)" }}>
        <div className="ds-container max-w-4xl">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Case Study</p>
            <h2 className="h-2 mb-6">
              Real Results:{" "}
              <span style={{ color: "var(--accent)" }}>
                {data.caseStudy.company}
              </span>
            </h2>
            <p
              className="body"
              style={{ color: "var(--ink-mute)" }}
            >
              {data.caseStudy.industryLabel}
            </p>
          </div>

          <div className="ds-card p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4
                  className="eyebrow mb-3"
                  style={{ color: "var(--ink-mute)" }}
                >
                  THE CHALLENGE
                </h4>
                <p
                  className="body"
                  style={{ color: "var(--ink-dim)" }}
                >
                  {data.caseStudy.challenge}
                </p>
              </div>
              <div>
                <h4
                  className="eyebrow mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  OUR SOLUTION
                </h4>
                <p
                  className="body"
                  style={{ color: "var(--ink-dim)" }}
                >
                  {data.caseStudy.solution}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {data.caseStudy.results.map((result) => (
                <div
                  key={result.label}
                  className="text-center p-4 rounded-lg"
                  style={{ background: "var(--bg-elev-2)" }}
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {result.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--ink-mute)" }}
                  >
                    {result.label}
                  </div>
                </div>
              ))}
            </div>

            <blockquote
              className="border-l-4 pl-6 py-2"
              style={{ borderColor: "var(--accent)" }}
            >
              <p
                className="body-lg italic mb-4"
                style={{ color: "var(--ink-dim)" }}
              >
                &ldquo;{data.caseStudy.quote}&rdquo;
              </p>
              <footer>
                <p
                  className="font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  {data.caseStudy.quoteName}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--ink-mute)" }}
                >
                  {data.caseStudy.quoteTitle}
                </p>
              </footer>
            </blockquote>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="ds-btn ds-btn-primary text-lg px-8 py-4"
            >
              Get Similar Results for My Business
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ background: "var(--bg)" }}>
        <div className="ds-container max-w-4xl">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="h-2 mb-6">
              Common Questions About {data.industry} Web Design
            </h2>
          </div>

          <div className="space-y-0">
            {data.faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b"
                style={{ borderColor: "var(--line)" }}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300"
                      style={{
                        background:
                          openFaq === index
                            ? "var(--accent)"
                            : "var(--bg-elev-2)",
                        color:
                          openFaq === index
                            ? "var(--bg)"
                            : "var(--ink-mute)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="h-3 text-left"
                      style={{ color: "var(--ink)" }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className="flex-shrink-0 ml-4 text-2xl leading-none transition-transform duration-300"
                    style={{
                      color: "var(--accent)",
                      transform:
                        openFaq === index
                          ? "rotate(45deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: openFaq === index ? "500px" : "0",
                    opacity: openFaq === index ? 1 : 0,
                  }}
                >
                  <p
                    className="body pb-6 pl-12 max-w-2xl"
                    style={{ color: "var(--ink-dim)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: "var(--bg-elev)" }}>
        <div className="ds-container max-w-4xl text-center">
          <h2 className="h-2 mb-6">
            Ready to Get a Website That Actually{" "}
            <span style={{ color: "var(--accent)" }}>Works</span>?
          </h2>
          <p
            className="body-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "var(--ink-dim)" }}
          >
            Stop losing business to competitors with better websites. Get a
            free, no-obligation consultation and find out exactly what your{" "}
            {data.industry.toLowerCase()} website needs to generate more leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="ds-btn ds-btn-primary text-lg px-8 py-4"
            >
              {data.ctaConsultationText}
            </Link>
            <Link
              href="tel:+12263766326"
              className="ds-btn ds-btn-ghost text-lg px-8 py-4"
            >
              Call (226) 376-6326
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
