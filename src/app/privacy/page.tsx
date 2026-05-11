import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Webloft Studio",
  description: "Privacy Policy for Webloft Studio. We do not sell, share, or trade your personal data. Learn how we handle the limited information we collect.",
  alternates: {
    canonical: "https://webloftstudio.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="wl-blog-post-page">
      <section className="wl-blog-post-hero">
        <div className="ds-container">
          <nav className="wl-blog-breadcrumb reveal" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="wl-blog-breadcrumb-sep" aria-hidden="true">/</span>
            <span className="wl-blog-breadcrumb-current" aria-current="page">Privacy Policy</span>
          </nav>

          <div className="reveal" style={{ maxWidth: 720 }}>
            <div className="wl-blog-post-meta">
              <span>Last updated: May 11, 2026</span>
            </div>
            <h1 className="h-display wl-blog-post-title">Privacy Policy</h1>
            <p className="body-lg wl-blog-post-excerpt">
              Webloft Studio respects your privacy. We do not sell, rent, or trade your personal information. This policy explains what limited data we collect and why.
            </p>
          </div>
        </div>
      </section>

      <article className="wl-blog-article-section">
        <div className="ds-container wl-blog-article-layout">
          <aside className="wl-blog-toc reveal" aria-label="Policy contents">
            <div className="wl-blog-toc-card">
              <span>In this policy</span>
              <a href="#overview">Overview</a>
              <a href="#what-we-collect">What we collect</a>
              <a href="#what-we-do-not-do">What we do not do</a>
              <a href="#cookies">Cookies and analytics</a>
              <a href="#third-party">Third-party services</a>
              <a href="#data-retention">Data retention</a>
              <a href="#your-rights">Your rights</a>
              <a href="#children">Children</a>
              <a href="#changes">Changes to this policy</a>
              <a href="#contact">Contact</a>
            </div>
          </aside>

          <div className="wl-blog-prose">
            <section id="overview" className="wl-blog-content-block reveal">
              <h2>Overview</h2>
              <p>
                Webloft Studio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website webloftstudio.com. This Privacy Policy describes how we handle personal information when you visit our website or use our services.
              </p>
              <p>
                The short version: we collect as little data as possible, we never sell or share it with third parties for marketing purposes, and we only use what we collect to respond to your enquiries and improve the website experience.
              </p>
            </section>

            <section id="what-we-collect" className="wl-blog-content-block reveal">
              <h2>What we collect</h2>
              <p>
                We only collect information that you voluntarily provide to us. This may include:
              </p>
              <ul>
                <li>Your name, email address, and phone number when you submit a contact form or request a quote</li>
                <li>Your email address when you subscribe to our newsletter</li>
                <li>Any project details or messages you include in a form submission</li>
              </ul>
              <p>
                We do not collect personal information passively, and we do not use tracking pixels, fingerprinting, or any form of invasive tracking.
              </p>
            </section>

            <section id="what-we-do-not-do" className="wl-blog-content-block reveal">
              <h2>What we do not do</h2>
              <p>
                To be clear about our practices:
              </p>
              <ul>
                <li>We do not sell your data to anyone, ever</li>
                <li>We do not rent, trade, or share your personal information with third parties for their marketing purposes</li>
                <li>We do not build advertising profiles based on your activity</li>
                <li>We do not use your data for automated decision-making or profiling</li>
                <li>We do not send unsolicited marketing emails unless you have opted in</li>
              </ul>
            </section>

            <section id="cookies" className="wl-blog-content-block reveal">
              <h2>Cookies and analytics</h2>
              <p>
                Our website may use essential cookies required for normal website functionality (such as remembering your theme preference). These are not used to track you across websites.
              </p>
              <p>
                We may use privacy-respecting analytics to understand general website usage patterns such as page views and referral sources. This data is aggregated and does not personally identify you.
              </p>
              <p>
                We do not use third-party advertising cookies. We do not participate in ad networks or retargeting programs.
              </p>
            </section>

            <section id="third-party" className="wl-blog-content-block reveal">
              <h2>Third-party services</h2>
              <p>
                We may use third-party tools to help operate our website and business. These may include:
              </p>
              <ul>
                <li>Hosting and infrastructure providers</li>
                <li>Email delivery services (for sending responses to your enquiries or newsletter updates)</li>
                <li>Form submission and spam protection services</li>
              </ul>
              <p>
                These services only process data as needed to perform their function and are not permitted to use your information for their own purposes. We choose providers that respect user privacy.
              </p>
            </section>

            <section id="data-retention" className="wl-blog-content-block reveal">
              <h2>Data retention</h2>
              <p>
                We keep your personal information only for as long as necessary to fulfil the purpose for which it was collected. Contact form submissions and project enquiries are retained for the duration of our business relationship. Newsletter subscriptions remain active until you unsubscribe.
              </p>
              <p>
                You can request deletion of your data at any time by contacting us.
              </p>
            </section>

            <section id="your-rights" className="wl-blog-content-block reveal">
              <h2>Your rights</h2>
              <p>
                Regardless of where you are located, you have the right to:
              </p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for communications at any time</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p>
                These rights apply whether you are covered by the GDPR (European Union), CCPA (California), PIPEDA (Canada), or any other privacy regulation. We honour all such requests promptly and free of charge.
              </p>
              <p>
                To exercise any of these rights, contact us at info@webloftstudio.com.
              </p>
            </section>

            <section id="children" className="wl-blog-content-block reveal">
              <h2>Children</h2>
              <p>
                Our website and services are not directed at children under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.
              </p>
            </section>

            <section id="changes" className="wl-blog-content-block reveal">
              <h2>Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this page periodically.
              </p>
            </section>

            <section id="contact" className="wl-blog-content-block reveal">
              <h2>Contact</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <ul>
                <li>Email: info@webloftstudio.com</li>
                <li>Website: <Link href="/contact">webloftstudio.com/contact</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <section className="wl-blog-post-cta-section">
        <div className="ds-container">
          <div className="wl-blog-post-cta reveal">
            <div>
              <p className="eyebrow">Questions?</p>
              <h2>Have a question about your privacy?</h2>
              <p>We are happy to answer any questions about how we handle your data. Reach out anytime.</p>
            </div>
            <Link href="/contact" className="ds-btn ds-btn-primary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
