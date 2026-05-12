export interface IndustryPageData {
  slug: string;
  industry: string;
  displayName: string;
  eyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroSubtext: string;
  ctaButtonText: string;
  ctaConsultationText: string;
  painPoints: Array<{
    problem: string;
    description: string;
    stat: string;
  }>;
  solutions: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  caseStudy: {
    company: string;
    industryLabel: string;
    challenge: string;
    solution: string;
    results: Array<{ label: string; value: string }>;
    quote: string;
    quoteName: string;
    quoteTitle: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  metaDescription: string;
}

const industryPages: IndustryPageData[] = [
  // ── Contractors ──────────────────────────────────────────────────────────
  {
    slug: "web-design-contractors",
    industry: "Contractors",
    displayName: "Contractors & Home Services",
    eyebrow: "Web Design for Contractors",
    heroTitle: "Your Next Job Is Searching for You Right Now.",
    heroAccent: "Make Sure They Find You.",
    heroSubtext:
      "Most contractor websites look like they were built in 2012 and haven't been touched since. Meanwhile, your competitors are showing up on Google, collecting leads while you're on the job site. We build websites that work as hard as you do.",
    ctaButtonText: "Get a Website That Gets Leads",
    ctaConsultationText: "Free Consultation for Contractors",
    painPoints: [
      {
        problem: "Invisible on Google",
        description:
          "Homeowners search \"roofer near me\" or \"kitchen renovation Toronto\" and your competitors show up first. You're losing jobs you never even knew about.",
        stat: "97% of customers search online first",
      },
      {
        problem: "Template Site That Screams Generic",
        description:
          "Your current website could belong to any contractor in the country. There's no personality, no portfolio, and nothing that says \"hire me over the other guy.\"",
        stat: "75% of users judge credibility by design",
      },
      {
        problem: "No Way to Get Leads After Hours",
        description:
          "You're on the job site all day. When a homeowner visits your site at 8 PM, there's no easy way to request a quote or book a consultation. That lead goes to whoever makes it easiest.",
        stat: "60% of leads come outside business hours",
      },
      {
        problem: "No Reviews or Social Proof",
        description:
          "You've done great work for dozens of clients, but your website doesn't show it. No testimonials, no project gallery, no reason for a stranger to trust you.",
        stat: "92% read reviews before hiring",
      },
      {
        problem: "Doesn't Work on Phones",
        description:
          "Homeowners are searching on their phone from the kitchen they want renovated. If your site is slow or hard to navigate on mobile, they'll hit the back button.",
        stat: "68% of contractor searches are on mobile",
      },
      {
        problem: "No Idea What's Working",
        description:
          "You have no analytics, no call tracking, no idea where your leads are actually coming from. You're flying blind.",
        stat: "Only 30% of contractor sites track leads",
      },
    ],
    solutions: [
      {
        step: "01",
        title: "Job-Winning Portfolio",
        description:
          "We build a project gallery that shows off your best work with before-and-after photos, project details, and client testimonials. Homeowners want to see what you can do before they call.",
      },
      {
        step: "02",
        title: "Lead-Capture System",
        description:
          "Quote request forms, click-to-call buttons, and a booking system that captures leads 24/7\u2014even when you're on a job site. Every page is designed to convert visitors into inquiries.",
      },
      {
        step: "03",
        title: "Local SEO That Ranks",
        description:
          "We optimize for the searches your customers are actually making: \"plumber in Hamilton,\" \"deck builder Burlington,\" \"bathroom renovation near me.\" You show up where it counts.",
      },
      {
        step: "04",
        title: "Trust-Building Design",
        description:
          "Licensing info, insurance badges, Google reviews, and client testimonials placed strategically throughout the site. We make it obvious that you're the safe, professional choice.",
      },
      {
        step: "05",
        title: "Mobile-First Build",
        description:
          "Your site loads fast and looks great on every phone, tablet, and desktop. Because most of your customers will find you on their phone first.",
      },
    ],
    caseStudy: {
      company: "Amigo Contracting Services",
      industryLabel: "General Contracting",
      challenge:
        "Amigo Contracting had a dated template website that wasn't generating leads. Homeowners couldn't see their work, and the site didn't rank for any local search terms.",
      solution:
        "We built a custom site with a project portfolio, quote request forms on every page, Google Reviews integration, and local SEO targeting their service areas.",
      results: [
        { label: "Lead Increase", value: "+180%" },
        { label: "Google Rankings", value: "Page 1" },
        { label: "Time to Build", value: "3 Weeks" },
        { label: "Monthly Inquiries", value: "40+" },
      ],
      quote:
        "Working with Webloft Studio transformed our online presence. Within 3 months, we saw a 150% increase in qualified leads.",
      quoteName: "Sergio Amigon",
      quoteTitle: "CEO, Amigo Contracting Services",
    },
    faqs: [
      {
        question: "How much does a contractor website cost?",
        answer:
          "Our contractor websites start at $2,500 for a professionally designed, lead-generating site. The exact cost depends on the number of service pages, portfolio size, and features like booking systems or quote calculators. We provide a detailed quote after our free consultation.",
      },
      {
        question: "How long does it take to build?",
        answer:
          "Most contractor websites are completed in 2\u20134 weeks from kickoff. We handle everything\u2014design, copywriting, development, and SEO setup. You just provide your project photos and we do the rest.",
      },
      {
        question: "Will my website show up on Google?",
        answer:
          "Yes. Every site we build includes local SEO fundamentals: optimized title tags, Google Business Profile integration, location-specific content, schema markup, and fast loading speeds. We target the exact searches your customers are making.",
      },
      {
        question: "Can I update the site myself?",
        answer:
          "Absolutely. We build on Webflow, which has a visual editor that's easy for non-technical users. You can update text, swap photos, and add new projects without touching any code. We also offer maintenance plans if you'd rather have us handle updates.",
      },
      {
        question: "Do you help with Google Business Profile?",
        answer:
          "Yes. We optimize your Google Business Profile as part of our local SEO setup, including proper categories, service areas, photos, and review management guidance. This is often where contractors get the most visibility.",
      },
      {
        question: "What if I already have a website?",
        answer:
          "We'll do a free audit of your current site and show you exactly what's working and what's costing you leads. If a full rebuild isn't necessary, we can optimize what you have. But most contractor sites we see need a fresh start to be competitive.",
      },
    ],
    metaDescription:
      "Web design for contractors and home service businesses. Custom websites that generate leads, rank on Google, and showcase your work. Get a free consultation.",
  },

  // ── Dental Practices ─────────────────────────────────────────────────────
  {
    slug: "web-design-dental-practices",
    industry: "Dental Practices",
    displayName: "Dental Practices",
    eyebrow: "Web Design for Dentists",
    heroTitle: "Patients Are Choosing Your Competitor",
    heroAccent: "Because Their Website Is Better.",
    heroSubtext:
      "When a patient searches \"dentist near me,\" they're comparing 3\u20134 practices before picking up the phone. If your website feels outdated, hard to navigate, or doesn't make booking easy, they'll choose someone else\u2014even if you're the better dentist.",
    ctaButtonText: "Get a Website That Books Patients",
    ctaConsultationText: "Free Consultation for Dental Practices",
    painPoints: [
      {
        problem: "Patients Can't Book Online",
        description:
          "If booking an appointment requires a phone call during office hours, you're losing patients who expect the convenience of online scheduling at 10 PM.",
        stat: "77% of patients prefer online booking",
      },
      {
        problem: "Your Website Looks Dated",
        description:
          "Patients associate your website quality with your practice quality. A site with stock photos and a 2015 design tells patients you haven't kept up.",
        stat: "94% of first impressions are design-related",
      },
      {
        problem: "Invisible in Local Search",
        description:
          "When someone searches \"family dentist [your city],\" your competitors show up and you don't. That's new patients walking into someone else's office every single day.",
        stat: "46% of Google searches are local",
      },
      {
        problem: "No New Patient Funnel",
        description:
          "Your website lists your services but doesn't guide visitors toward becoming patients. No special offers, no new patient information, no reason to choose you.",
        stat: "Only 2\u20133% of dental sites convert well",
      },
      {
        problem: "Not Mobile-Friendly",
        description:
          "Patients are searching for dentists on their phones during lunch breaks and commutes. A site that's hard to read or navigate on mobile sends them elsewhere.",
        stat: "61% of dental searches are on mobile",
      },
      {
        problem: "No Reviews or Trust Signals",
        description:
          "Patients want to see that others had a good experience before they commit. Without visible reviews and credentials, you're asking strangers to trust you blindly.",
        stat: "84% trust online reviews like referrals",
      },
    ],
    solutions: [
      {
        step: "01",
        title: "Online Booking Integration",
        description:
          "We integrate your existing booking software or set up a new system so patients can schedule appointments 24/7. Fewer phone calls for your front desk, more appointments on your calendar.",
      },
      {
        step: "02",
        title: "Trust-Building Design",
        description:
          "Professional photography direction, team bios, patient testimonials, and a warm, welcoming design that makes patients feel comfortable before they even walk through the door.",
      },
      {
        step: "03",
        title: "New Patient Conversion Pages",
        description:
          "Dedicated landing pages for new patients with special offers, what-to-expect guides, insurance information, and clear calls-to-action. We make the decision easy.",
      },
      {
        step: "04",
        title: "Local SEO for Dentists",
        description:
          "We target the searches your patients are making: \"teeth whitening near me,\" \"emergency dentist [city],\" \"family dentist accepting new patients.\" You rank where it matters.",
      },
      {
        step: "05",
        title: "Service-Specific Pages",
        description:
          "Individual pages for each service\u2014cleanings, implants, cosmetic dentistry, Invisalign\u2014each optimized for search and designed to educate patients and drive bookings.",
      },
    ],
    caseStudy: {
      company: "Flowga Yoga Studio",
      industryLabel: "Health & Wellness",
      challenge:
        "Flowga had low online bookings and a website that didn't reflect the quality of their in-studio experience. New clients were visiting but not converting.",
      solution:
        "We built a mobile-first site with integrated class booking, instructor profiles, testimonials, and SEO targeting local wellness searches.",
      results: [
        { label: "Online Bookings", value: "+300%" },
        { label: "Mobile Experience", value: "Complete" },
        { label: "Time to Build", value: "4 Weeks" },
        { label: "New Clients/Month", value: "60+" },
      ],
      quote:
        "The team at Webloft Studio didn't just build us a website\u2014they built us a lead generation machine. Our booking rate increased by 200%.",
      quoteName: "Sarah Mitchell",
      quoteTitle: "Founder, Bloom Wellness",
    },
    faqs: [
      {
        question: "How much does a dental practice website cost?",
        answer:
          "Our dental practice websites typically range from $3,000\u2013$6,000 depending on the number of service pages, booking integration complexity, and custom features. We provide an exact quote after understanding your practice's specific needs.",
      },
      {
        question: "Can you integrate with my existing booking software?",
        answer:
          "Yes. We integrate with popular dental booking platforms including Dentrix, Open Dental, and third-party schedulers. If you don't have online booking yet, we'll help you set one up.",
      },
      {
        question: "How do you help with patient reviews?",
        answer:
          "We integrate your Google Reviews directly into your website and can set up automated review request systems that encourage satisfied patients to leave feedback. We also optimize your Google Business Profile for maximum visibility.",
      },
      {
        question: "Do you write the website copy?",
        answer:
          "Yes. We write all website copy based on interviews with your team. We know how to communicate dental services in a way that's professional but approachable\u2014not clinical jargon that confuses patients.",
      },
      {
        question: "Will my website be HIPAA compliant?",
        answer:
          "We build all forms with security best practices and can ensure your contact and booking forms meet compliance requirements. For patient portals or health record access, we recommend integrating with your existing HIPAA-compliant software.",
      },
      {
        question: "How long before I see new patients from my website?",
        answer:
          "Most practices start seeing increased inquiries within 30\u201360 days of launch, especially if combined with Google Business Profile optimization. SEO results build over 3\u20136 months as your pages gain authority for local search terms.",
      },
    ],
    metaDescription:
      "Web design for dental practices. Custom websites with online booking, patient reviews, and local SEO that help you attract and convert more patients. Free consultation.",
  },

  // ── Law Firms ─────────────────────────────────────────────────────────────
  {
    slug: "web-design-law-firms",
    industry: "Law Firms",
    displayName: "Law Firms & Legal Practices",
    eyebrow: "Web Design for Law Firms",
    heroTitle: "Your Website Should Be Your Best",
    heroAccent: "Referral Source.",
    heroSubtext:
      "People in legal trouble don't browse\u2014they search, compare 2\u20133 firms, and call the one that looks the most credible. If your website doesn't immediately communicate trust, expertise, and a clear way to get help, they're calling someone else.",
    ctaButtonText: "Get a Website That Wins Clients",
    ctaConsultationText: "Free Consultation for Law Firms",
    painPoints: [
      {
        problem: "Looks Like Every Other Firm",
        description:
          "Gavels, scales of justice, handshake photos\u2014your website looks identical to every other law firm's template site. Potential clients can't tell you apart from the competition.",
        stat: "75% of law firms use template designs",
      },
      {
        problem: "No Clear Call-to-Action",
        description:
          "Visitors read your practice area descriptions but have no obvious next step. No \"Free Consultation\" button, no intake form, no urgency to act now.",
        stat: "70% of law firm sites lack clear CTAs",
      },
      {
        problem: "Poor Mobile Experience",
        description:
          "Someone in a stressful legal situation is searching from their phone. If your site is slow to load or hard to navigate, they'll find a firm whose site works.",
        stat: "65% of legal searches are on mobile",
      },
      {
        problem: "No Practice Area Depth",
        description:
          "A single paragraph for each practice area doesn't answer the questions potential clients have. They want to know you understand their specific situation.",
        stat: "People spend 2 min evaluating firm websites",
      },
      {
        problem: "Missing Trust Signals",
        description:
          "No case results, no client testimonials, no bar association badges, no super lawyers recognition. Nothing that tells a stressed-out potential client they're in safe hands.",
        stat: "85% of clients check credentials online",
      },
      {
        problem: "Not Ranking for Practice Areas",
        description:
          "When someone searches \"personal injury lawyer [city]\" or \"divorce attorney near me,\" your competitors show up and you don't. That's cases walking out the door.",
        stat: "96% of people seeking legal help use search",
      },
    ],
    solutions: [
      {
        step: "01",
        title: "Authority-Building Design",
        description:
          "A clean, professional design that communicates credibility without looking like every other firm. Real photography, attorney bios that tell a story, and a visual identity that sets you apart.",
      },
      {
        step: "02",
        title: "Practice Area Pages That Convert",
        description:
          "Deep, informative pages for each practice area that answer potential clients' questions, demonstrate expertise, and guide them toward a free consultation. Each page targets specific search terms.",
      },
      {
        step: "03",
        title: "Client Intake System",
        description:
          "Streamlined consultation request forms, click-to-call buttons, and live chat integration that make it easy for potential clients to reach you\u2014especially in urgent situations.",
      },
      {
        step: "04",
        title: "Results & Testimonials",
        description:
          "Prominently displayed case results, client testimonials, and professional credentials that build trust before the first phone call. We make your track record visible.",
      },
      {
        step: "05",
        title: "Legal SEO Strategy",
        description:
          "Keyword-targeted content for your practice areas and locations, schema markup for attorneys and legal services, and Google Business Profile optimization to capture local search traffic.",
      },
    ],
    caseStudy: {
      company: "Aeries",
      industryLabel: "Professional Services",
      challenge:
        "Aeries had a functional but outdated web presence that didn't reflect the quality of their professional services or make it easy for new clients to engage.",
      solution:
        "We designed a modern, trust-focused site with clear service pages, streamlined contact forms, and a professional brand identity that matches their expertise.",
      results: [
        { label: "User Experience", value: "Transformed" },
        { label: "Lead Quality", value: "Improved" },
        { label: "Time to Build", value: "3 Weeks" },
        { label: "Client Inquiries", value: "+120%" },
      ],
      quote:
        "From strategy to execution, everything was seamless. They understood our market and built a website that actually brings in customers.",
      quoteName: "David Chen",
      quoteTitle: "Owner, Aeries",
    },
    faqs: [
      {
        question: "How much does a law firm website cost?",
        answer:
          "Our law firm websites range from $3,500\u2013$8,000 depending on the number of practice area pages, attorney profiles, and features like intake forms or live chat integration. We provide a detailed quote after understanding your firm's needs.",
      },
      {
        question: "Do you understand legal marketing ethics?",
        answer:
          "Yes. We're familiar with Law Society advertising rules and ensure all website copy includes appropriate disclaimers and avoids misleading claims. We work with your compliance team to ensure everything meets professional conduct requirements.",
      },
      {
        question: "Can you help us rank for practice area keywords?",
        answer:
          "Absolutely. We build practice area pages that target specific searches like \"personal injury lawyer [city]\" or \"family law attorney near me.\" Each page is optimized with proper schema markup, internal linking, and content depth.",
      },
      {
        question: "How do you handle client testimonials for law firms?",
        answer:
          "We work within Law Society guidelines to display client feedback appropriately. This can include general testimonials about your service quality, case result summaries (where permitted), and peer endorsements.",
      },
      {
        question: "Do you offer content writing for legal topics?",
        answer:
          "Yes. We write clear, authoritative content that demonstrates your expertise without using legal jargon that confuses potential clients. Our copy is designed to answer the questions people actually have when they're searching for a lawyer.",
      },
      {
        question: "Can you integrate with our case management software?",
        answer:
          "We can integrate intake forms with popular legal CRM and case management systems including Clio, MyCase, and PracticePanther. This ensures leads from your website flow directly into your existing workflow.",
      },
    ],
    metaDescription:
      "Web design for law firms. Professional websites that build trust, rank for practice area keywords, and convert visitors into consultations. Free consultation available.",
  },

  // ── Real Estate ───────────────────────────────────────────────────────────
  {
    slug: "web-design-real-estate",
    industry: "Real Estate",
    displayName: "Real Estate Agents & Brokerages",
    eyebrow: "Web Design for Real Estate",
    heroTitle: "Stop Sending Leads to",
    heroAccent: "Zillow and Realtor.ca.",
    heroSubtext:
      "Every real estate professional knows the pain: you pay for portal leads that are shared with five other agents. Your own website should be your lead engine\u2014a place where buyers and sellers find you directly and trust you before the first showing.",
    ctaButtonText: "Build Your Lead Engine",
    ctaConsultationText: "Free Consultation for Realtors",
    painPoints: [
      {
        problem: "Relying on Portal Leads",
        description:
          "You're paying for leads from Realtor.ca and Zillow that are shared with multiple agents. By the time you call, they've already talked to three other people.",
        stat: "Portal leads convert at only 1\u20132%",
      },
      {
        problem: "Generic Brokerage Page",
        description:
          "Your \"website\" is a profile on your brokerage's site that looks identical to every other agent. There's no personal brand, no neighborhood expertise, no reason to choose you.",
        stat: "63% of agents lack a personal website",
      },
      {
        problem: "No Neighborhood Authority",
        description:
          "Buyers want to work with someone who knows the neighborhood. But your website doesn't have any local content, market reports, or community information.",
        stat: "78% of buyers research neighborhoods first",
      },
      {
        problem: "No Lead Capture Strategy",
        description:
          "Visitors browse your listings and leave without giving you their contact info. No home value tools, no buyer guides, no market reports to exchange for an email.",
        stat: "98% of website visitors leave without contact",
      },
      {
        problem: "Slow and Outdated Design",
        description:
          "Real estate is a visual business. If your site looks cheap, loads slowly, or has poor photography, buyers assume you'll market their home the same way.",
        stat: "39% leave if images don't load",
      },
      {
        problem: "No Seller-Focused Content",
        description:
          "Most agent sites focus on listings for buyers. But listing appointments\u2014the real revenue driver\u2014require different content: market expertise, marketing plans, sold data.",
        stat: "Sellers spend 3x longer researching agents",
      },
    ],
    solutions: [
      {
        step: "01",
        title: "Personal Brand Website",
        description:
          "A custom website that positions you as the local expert\u2014not just another agent with an IDX feed. Your story, your expertise, your track record front and center.",
      },
      {
        step: "02",
        title: "Lead Generation System",
        description:
          "Home value estimators, buyer guides, market reports, and neighborhood pages that capture contact information. Every visitor has a reason to give you their email.",
      },
      {
        step: "03",
        title: "Neighborhood & Market Pages",
        description:
          "Deep content pages for your target neighborhoods with market stats, community info, school data, and local insights. This is what builds your authority and captures search traffic.",
      },
      {
        step: "04",
        title: "Listing Presentation Pages",
        description:
          "Custom pages for your active listings with professional layouts, virtual tour integration, and lead capture. Plus seller-focused content that helps you win listing appointments.",
      },
      {
        step: "05",
        title: "Real Estate SEO",
        description:
          "Optimized for searches like \"homes for sale in [neighborhood],\" \"[city] real estate agent,\" and \"what's my home worth.\" Organic traffic that you own, not leads you rent.",
      },
    ],
    caseStudy: {
      company: "Amigo Contracting Services",
      industryLabel: "Service Business",
      challenge:
        "Like many service professionals, Amigo needed a website that would generate its own leads rather than relying on word-of-mouth and third-party platforms.",
      solution:
        "We built a lead-focused site with project portfolios, quote request forms, local SEO, and trust signals that positioned them as the go-to option in their market.",
      results: [
        { label: "Lead Increase", value: "+180%" },
        { label: "Google Ranking", value: "Page 1" },
        { label: "Time to Build", value: "3 Weeks" },
        { label: "Cost Per Lead", value: "Reduced 60%" },
      ],
      quote:
        "Working with Webloft Studio transformed our online presence. Within 3 months, we saw a 150% increase in qualified leads.",
      quoteName: "Sergio Amigon",
      quoteTitle: "CEO, Amigo Contracting Services",
    },
    faqs: [
      {
        question: "How much does a real estate website cost?",
        answer:
          "Our real estate websites range from $3,000\u2013$7,000 depending on features like IDX integration, neighborhood pages, home value tools, and lead capture systems. We provide a detailed quote after our free consultation.",
      },
      {
        question: "Can you integrate IDX/MLS listings?",
        answer:
          "Yes. We can integrate IDX feeds so your listings display directly on your website. We also build custom listing pages that look far better than standard IDX templates and are optimized for search engines.",
      },
      {
        question: "Will this replace my brokerage website?",
        answer:
          "Your personal website works alongside your brokerage site. It's your brand, your leads, and your content. If you ever change brokerages, your website and all its SEO authority comes with you.",
      },
      {
        question: "Do you create neighborhood pages?",
        answer:
          "Absolutely. Neighborhood authority pages are one of the most effective ways to capture organic search traffic. We create detailed pages with market data, community info, and local insights that position you as the neighborhood expert.",
      },
      {
        question: "Can I add my own listings and blog posts?",
        answer:
          "Yes. We build on Webflow with an easy-to-use CMS so you can add listings, blog posts, and market updates without any technical knowledge. We also offer content creation packages if you'd rather have us handle it.",
      },
      {
        question: "How do you help me get leads from my website?",
        answer:
          "We build multiple lead capture touchpoints: home value estimators, buyer guides, market reports, newsletter signups, and consultation request forms. Each is designed to offer value in exchange for contact information.",
      },
    ],
    metaDescription:
      "Web design for real estate agents and brokerages. Custom websites with IDX integration, lead capture, and neighborhood pages that generate your own leads. Free consultation.",
  },

  // ── Fitness & Wellness ────────────────────────────────────────────────────
  {
    slug: "web-design-fitness-wellness",
    industry: "Fitness & Wellness",
    displayName: "Fitness & Wellness Businesses",
    eyebrow: "Web Design for Fitness & Wellness",
    heroTitle: "Your Classes Are Full of Energy.",
    heroAccent: "Your Website Should Be Too.",
    heroSubtext:
      "You've built an amazing studio, gym, or practice. But your website doesn't match the experience people get when they walk through your door. New clients are choosing competitors with better online presence\u2014even if your offering is superior.",
    ctaButtonText: "Get a Website That Books Clients",
    ctaConsultationText: "Free Consultation for Fitness Businesses",
    painPoints: [
      {
        problem: "No Online Class Booking",
        description:
          "Members want to book a class from their phone while commuting. If they have to call or walk in, they'll sign up for the studio that lets them tap and go.",
        stat: "73% expect to book fitness online",
      },
      {
        problem: "Doesn't Capture the Vibe",
        description:
          "Your studio has energy, community, and personality. Your website is a flat page with a stock photo and a class schedule PDF. The disconnect loses potential members.",
        stat: "First impression forms in 0.05 seconds",
      },
      {
        problem: "No Free Trial or Offer Funnel",
        description:
          "Visitors land on your site, browse a bit, and leave. There's no compelling first-step offer\u2014no free class, no trial week, no intro package\u2014to get them through the door.",
        stat: "Only 5% of fitness sites have clear offers",
      },
      {
        problem: "Class Schedule Is Hard to Find",
        description:
          "Your schedule is buried three clicks deep or is a PDF that doesn't work on phones. If people can't instantly see when classes are, they won't come.",
        stat: "Schedule is the #1 thing visitors look for",
      },
      {
        problem: "Not Ranking for Local Searches",
        description:
          "When someone searches \"yoga studio near me\" or \"personal training [city],\" your competitors show up first. You're invisible to people actively looking for what you offer.",
        stat: "82% of fitness searches have local intent",
      },
      {
        problem: "No Social Proof on Site",
        description:
          "You have raving fans but none of their stories are on your website. No member transformations, no testimonials, no community photos to show what the experience is really like.",
        stat: "88% trust testimonials like personal recs",
      },
    ],
    solutions: [
      {
        step: "01",
        title: "Online Booking Integration",
        description:
          "We integrate your class booking software\u2014Mindbody, Momence, Glofox, or others\u2014directly into your website so members can browse the schedule and book in seconds.",
      },
      {
        step: "02",
        title: "Energy-Matching Design",
        description:
          "A website that captures the energy and personality of your studio. Real photography, dynamic layouts, and a design that makes people feel something before they even visit.",
      },
      {
        step: "03",
        title: "New Member Conversion Funnel",
        description:
          "Dedicated landing pages for intro offers, free trials, and special promotions with clear calls-to-action that guide visitors from \"just browsing\" to \"first class booked.\"",
      },
      {
        step: "04",
        title: "Instructor & Class Pages",
        description:
          "Individual pages for each class type and instructor with descriptions, photos, and booking links. Members and prospects can find exactly what they're looking for.",
      },
      {
        step: "05",
        title: "Local Fitness SEO",
        description:
          "Optimized for searches your future members are making: \"spin class near me,\" \"best yoga studio [city],\" \"personal trainer [neighborhood].\" Organic traffic from people ready to join.",
      },
    ],
    caseStudy: {
      company: "Flowga Yoga Studio",
      industryLabel: "Yoga & Wellness",
      challenge:
        "Flowga had low online bookings and a website that didn't reflect the quality of their in-studio experience. Potential members would visit the site but not convert to trial classes.",
      solution:
        "We built a mobile-first site with integrated class booking, instructor profiles, member testimonials, and a new member funnel with an intro offer landing page.",
      results: [
        { label: "Online Bookings", value: "+300%" },
        { label: "New Members/Month", value: "+250%" },
        { label: "Time to Build", value: "4 Weeks" },
        { label: "Mobile Bookings", value: "80% of Total" },
      ],
      quote:
        "The team at Webloft Studio didn't just build us a website\u2014they built us a lead generation machine. Our booking rate increased by 200%.",
      quoteName: "Sarah Mitchell",
      quoteTitle: "Founder, Bloom Wellness",
    },
    faqs: [
      {
        question: "How much does a fitness website cost?",
        answer:
          "Our fitness and wellness websites range from $2,500\u2013$5,500 depending on booking integration, number of class/service pages, and custom features like member portals. We provide a detailed quote after understanding your business.",
      },
      {
        question: "Can you integrate with Mindbody or Momence?",
        answer:
          "Yes. We have experience integrating with Mindbody, Momence, Glofox, Acuity, and other fitness booking platforms. We embed scheduling directly into your site so members never have to leave to book a class.",
      },
      {
        question: "Do you help with photography direction?",
        answer:
          "We provide guidance on what types of photos work best for fitness websites\u2014action shots, community moments, facility photos\u2014and can connect you with photographers who specialize in fitness and lifestyle imagery.",
      },
      {
        question: "Can I update the class schedule myself?",
        answer:
          "If your schedule is managed through your booking software (Mindbody, etc.), it updates automatically on your site. For any other content\u2014instructor bios, pricing, promotions\u2014we build on Webflow so you can edit everything visually.",
      },
      {
        question: "How do you help us get more trial sign-ups?",
        answer:
          "We build dedicated landing pages for your intro offers with compelling copy, social proof, and streamlined sign-up forms. Combined with Google Business Profile optimization and local SEO, this drives a steady stream of new member inquiries.",
      },
      {
        question: "Do you work with personal trainers too?",
        answer:
          "Absolutely. Whether you're a solo personal trainer, a boutique studio, or a multi-location gym, we tailor the site to your business model. Personal trainer sites focus more on your methodology, client transformations, and easy scheduling.",
      },
    ],
    metaDescription:
      "Web design for fitness studios, gyms, and wellness businesses. Custom websites with booking integration, class schedules, and local SEO that attract new members. Free consultation.",
  },
];

export function getIndustryPage(slug: string): IndustryPageData | undefined {
  return industryPages.find((p) => p.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industryPages.map((p) => p.slug);
}

export { industryPages };
