"use client";

import { useState } from "react";
import Link from "next/link";
import { trackLeadMagnetDownload } from "@/lib/analytics";

export default function ServiceBusinessBlueprintForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          business: formData.business,
          website: "",
          phone: "",
          _honeypot: "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send request");
      }

      trackLeadMagnetDownload("service_business_blueprint", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Blueprint form error:", error);
      setSubmitError(
        "Something went wrong. Please try again or email us at info@webloftstudio.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border body outline-none transition-colors";
  const inputStyle = {
    background: "var(--bg-elev-2)",
    borderColor: "var(--line)",
    color: "var(--ink)",
  };

  if (isSubmitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="ds-card p-8 md:p-12">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "var(--bg-elev-2)" }}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "var(--accent)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="h-2 mb-4">You&apos;re In!</h1>
            <p
              className="body-lg mb-6"
              style={{ color: "var(--ink-dim)" }}
            >
              Your Service Business Website Blueprint is on its way.
            </p>
            <p
              className="body mb-8"
              style={{ color: "var(--ink-dim)" }}
            >
              Check your inbox in the next few minutes. While you wait,
              here&apos;s what you can do next:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Book a Free Strategy Call
              </Link>
              <Link href="/" className="ds-btn ds-btn-ghost">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="pt-20 pb-16">
        <div className="ds-container">
          <div className="text-center mb-12">
            <div className="eyebrow mb-6">Free Guide</div>
            <h1 className="h-1 mb-6">
              The Service Business{" "}
              <span style={{ color: "var(--accent)" }}>Website Blueprint</span>
            </h1>
            <p
              className="body-lg max-w-4xl mx-auto mb-8"
              style={{ color: "var(--ink-dim)" }}
            >
              What separates a website that generates 5 leads a month from one
              that generates 50? This guide breaks down the exact structure,
              copy patterns, and conversion elements that{" "}
              <strong style={{ color: "var(--ink)" }}>
                actually move the needle
              </strong>{" "}
              for service businesses.
            </p>
            <div
              className="flex items-center justify-center gap-2 body"
              style={{ color: "var(--ink-mute)" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "var(--accent)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                Free Download &middot; Actionable Framework &middot; No Fluff
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="ds-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — Form */}
            <div className="order-2 lg:order-1">
              <div className="ds-card p-8 md:p-10">
                <h2 className="h-3 mb-4">Get Your Free Blueprint</h2>
                <p
                  className="body mb-8"
                  style={{ color: "var(--ink-dim)" }}
                >
                  Enter your details and we&apos;ll send the blueprint
                  straight to your inbox. No spam, no sales pitch &mdash;
                  just the framework.
                </p>

                {submitError && (
                  <div
                    className="mb-4 p-4 rounded-lg body text-sm"
                    style={{
                      background: "var(--bg-elev-2)",
                      borderLeft: "3px solid var(--error)",
                      color: "var(--ink)",
                    }}
                  >
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block body mb-2"
                      style={{ color: "var(--ink-dim)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block body mb-2"
                      style={{ color: "var(--ink-dim)" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="business"
                      className="block body mb-2"
                      style={{ color: "var(--ink-dim)" }}
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block body mb-2"
                      style={{ color: "var(--ink-dim)" }}
                    >
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="">Select your industry</option>
                      <option value="contracting">Contracting / Trades</option>
                      <option value="dental">Dental / Healthcare</option>
                      <option value="legal">Legal</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="fitness">Fitness / Wellness</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ds-btn ds-btn-primary w-full justify-center"
                    style={{
                      opacity: isSubmitting ? 0.6 : 1,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Download Free Blueprint
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>

                <p
                  className="body mt-4 text-center"
                  style={{ color: "var(--ink-mute)", fontSize: "0.75rem" }}
                >
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* Right — What's Inside */}
            <div className="order-1 lg:order-2">
              <h2 className="h-2 mb-8">What&apos;s Inside</h2>

              <div className="space-y-6 mb-12">
                {[
                  {
                    num: "1",
                    title: "The 5-Section Homepage Framework",
                    desc: "The exact layout that converts visitors into leads for contractors, clinics, studios, and professional services.",
                  },
                  {
                    num: "2",
                    title: "Copy That Sells Without Being Salesy",
                    desc: "Headline formulas, value proposition templates, and CTA language that works for service businesses specifically.",
                  },
                  {
                    num: "3",
                    title: "Trust Signals That Actually Matter",
                    desc: "Which testimonials, badges, and proof elements drive conversions\u2014and which ones visitors ignore.",
                  },
                  {
                    num: "4",
                    title: "The Service Page Template",
                    desc: "How to structure individual service pages so they rank on Google AND convert the traffic they get.",
                  },
                  {
                    num: "5",
                    title: "Lead Capture Playbook",
                    desc: "Forms, CTAs, chat widgets, and booking integrations\u2014where to place them and how to write them.",
                  },
                  {
                    num: "6",
                    title: "Local SEO Checklist",
                    desc: "The 15-point checklist we use on every client site to rank in \"near me\" searches and Google Maps.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex items-start">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                      style={{ background: "var(--accent)" }}
                    >
                      <span
                        className="body font-bold text-sm"
                        style={{ color: "var(--bg)" }}
                      >
                        {item.num}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="h-3 mb-2"
                        style={{ fontSize: "1.1rem" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="body"
                        style={{ color: "var(--ink-dim)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ds-card p-6">
                <h3 className="h-3 mb-4">Who This Is For</h3>
                <div className="space-y-3">
                  {[
                    "Contractors who get referrals but zero website leads",
                    "Clinics and practices losing patients to better-looking competitors",
                    "Service businesses spending on ads but converting poorly",
                    "Anyone who knows their website isn\u2019t pulling its weight",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "var(--accent)" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className="body"
                        style={{ color: "var(--ink-dim)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--bg-elev)" }}>
        <div className="ds-container max-w-4xl text-center">
          <h2 className="h-2 mb-6">
            Your Website Should Be Your Best Salesperson
          </h2>
          <p
            className="body-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "var(--ink-dim)" }}
          >
            Most service business websites are digital brochures. This
            blueprint shows you how to turn yours into a lead machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="ds-btn ds-btn-primary">
              Download the Blueprint
            </a>
            <Link href="/contact" className="ds-btn ds-btn-ghost">
              Or Talk to Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
