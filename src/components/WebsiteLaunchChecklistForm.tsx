"use client";

import { useState } from "react";
import Link from "next/link";
import { trackLeadMagnetDownload } from "@/lib/analytics";

export default function WebsiteLaunchChecklistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
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

      trackLeadMagnetDownload("website_launch_checklist", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Launch checklist form error:", error);
      setSubmitError(
        "Something went wrong. Please try again or email us at info@webloftstudio.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <h1 className="h-2 mb-4">Checklist on Its Way!</h1>
            <p
              className="body-lg mb-6"
              style={{ color: "var(--ink-dim)" }}
            >
              Your Website Launch Checklist is heading to your inbox now.
            </p>
            <p
              className="body mb-8"
              style={{ color: "var(--ink-dim)" }}
            >
              Use it before and after every launch to make sure nothing
              slips through the cracks. And if you want us to handle the
              whole thing:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Let Us Handle Your Launch
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
            <div className="eyebrow mb-6">Free Checklist</div>
            <h1 className="h-1 mb-6">
              The Website{" "}
              <span style={{ color: "var(--accent)" }}>Launch Checklist</span>
            </h1>
            <p
              className="body-lg max-w-4xl mx-auto mb-8"
              style={{ color: "var(--ink-dim)" }}
            >
              47 items we check before every site goes live. The same list
              our team uses internally &mdash; now yours for free.{" "}
              <strong style={{ color: "var(--ink)" }}>
                Never launch with a broken link, missing redirect, or
                un-optimized image again.
              </strong>
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
                Free Download &middot; 47 Items &middot; Pre-Launch + Post-Launch
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
                <h2 className="h-3 mb-4">Get Your Free Checklist</h2>
                <p
                  className="body mb-8"
                  style={{ color: "var(--ink-dim)" }}
                >
                  Drop your email and we&apos;ll send the checklist
                  instantly. Use it for your next launch, redesign, or site
                  audit.
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
                        Download Free Checklist
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
              <h2 className="h-2 mb-8">What&apos;s Covered</h2>

              <div className="space-y-8 mb-12">
                {[
                  {
                    category: "Pre-Launch (27 items)",
                    items: [
                      "Content & copy review across all pages",
                      "Image optimization and alt text",
                      "Form testing and submission flows",
                      "Mobile responsiveness on real devices",
                      "Cross-browser testing (Chrome, Safari, Firefox, Edge)",
                      "Page speed optimization (target: 95+ PageSpeed)",
                      "SSL certificate and HTTPS redirects",
                      "SEO meta titles, descriptions, and canonical tags",
                      "Analytics and conversion tracking setup",
                    ],
                  },
                  {
                    category: "Post-Launch (20 items)",
                    items: [
                      "301 redirects from old URLs",
                      "Google Search Console submission",
                      "Google Business Profile update",
                      "Social media link verification",
                      "Email deliverability testing",
                      "Backup schedule configuration",
                      "Performance monitoring setup",
                      "First-week analytics review",
                    ],
                  },
                ].map((section) => (
                  <div key={section.category}>
                    <h3
                      className="h-3 mb-4"
                      style={{ color: "var(--accent)" }}
                    >
                      {section.category}
                    </h3>
                    <div className="space-y-2">
                      {section.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <svg
                            className="w-4 h-4 flex-shrink-0 mt-1"
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
                            className="body-sm"
                            style={{ color: "var(--ink-dim)" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="ds-card p-6">
                <h3 className="h-3 mb-3">Why This Matters</h3>
                <p
                  className="body"
                  style={{ color: "var(--ink-dim)" }}
                >
                  We&apos;ve seen launches go sideways because of missed
                  redirects, broken forms, or forgotten tracking codes. This
                  checklist exists because we got tired of fixing preventable
                  problems. Now you can avoid them too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--bg-elev)" }}>
        <div className="ds-container max-w-4xl text-center">
          <h2 className="h-2 mb-6">
            Launch With Confidence
          </h2>
          <p
            className="body-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "var(--ink-dim)" }}
          >
            Or skip the checklist entirely and let us handle your next
            website from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="ds-btn ds-btn-primary">
              Download the Checklist
            </a>
            <Link href="/contact" className="ds-btn ds-btn-ghost">
              Let Us Handle It
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
