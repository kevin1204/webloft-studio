import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Insights & Resources - Webloft Studio",
  description: "Actionable advice, tips, and insights to grow your business online. Expert web development and digital marketing insights from Webloft Studio.",
  keywords: "web development blog, business website tips, SEO insights, Webflow tutorials, digital marketing advice",
};

const blogPosts = [
  {
    id: 1,
    title: "Why Webflow is the Best Platform for Small & Medium Businesses",
    excerpt: "Discover why Webflow outperforms WordPress, Wix, and Squarespace for growing businesses. Learn about speed, design flexibility, and client autonomy.",
    slug: "why-webflow-best-platform-small-medium-businesses",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Platform",
    featured: true,
    image: "/hero-bg.jpg"
  },
  {
    id: 2,
    title: "The Real ROI of a Great Website: Why It's an Investment, Not an Expense",
    excerpt: "Learn how a professionally designed website generates leads, builds trust, and delivers measurable returns on your investment.",
    slug: "real-roi-great-website-investment-not-expense",
    date: "January 12, 2025",
    readTime: "6 min read",
    category: "Business",
    featured: true,
    image: "/hero-bg.jpg"
  },
  {
    id: 3,
    title: "SEO & Local SEO: The Secret to Getting Found Online",
    excerpt: "Master the fundamentals of SEO and local search optimization to attract more customers and dominate your local market.",
    slug: "seo-local-seo-secret-getting-found-online",
    date: "January 10, 2025",
    readTime: "7 min read",
    category: "SEO",
    featured: false,
    image: "/hero-bg.jpg"
  },
  {
    id: 4,
    title: "5 Common Website Mistakes That Could Be Costing You Clients",
    excerpt: "Avoid these critical website design mistakes that drive customers away and learn how to convert more visitors into paying clients.",
    slug: "5-common-website-mistakes-costing-clients",
    date: "January 8, 2025",
    readTime: "4 min read",
    category: "Design",
    featured: false,
    image: "/hero-bg.jpg"
  },
  {
    id: 5,
    title: "How Often Should You Update Your Website? (And Why It Matters)",
    excerpt: "Discover the importance of regular website updates and maintenance for SEO, security, and user experience.",
    slug: "how-often-update-website-why-matters",
    date: "January 5, 2025",
    readTime: "5 min read",
    category: "Maintenance",
    featured: false,
    image: "/hero-bg.jpg"
  }
];

const categories = ["All", "Platform", "Business", "SEO", "Design", "Maintenance"];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              <span className="gradient-text-animated">Insights & Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up stagger-1">
              Actionable advice, tips, and insights to grow your business online.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 animate-fade-in-up stagger-2">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 animate-fade-in-up stagger-${index + 1} ${
                  category === "All" 
                    ? "bg-green-500 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular and impactful articles for growing your business online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <article key={post.id} className={`bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}>
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-700 mb-6">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="link-hover text-green-600 hover:text-green-700 font-medium"
                >
                  Read Full Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Articles
            </h2>
            <p className="text-lg text-gray-600">
              Complete collection of our web development and digital marketing insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.id} className={`bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${(index % 3) + 1}`}>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center text-xs text-gray-600 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-700 mb-4 text-sm">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="link-hover text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get weekly tips, industry insights, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
            />
            <button className="btn-primary px-6 py-3 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives real business results. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            className="btn-primary text-lg px-8 py-4"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
