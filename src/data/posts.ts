export type PostBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "list"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  published: string;
  readTime: string;
  author: string;
  blocks: PostBlock[];
}

export const POSTS: Post[] = [
  {
    slug: "how-a-professional-website-brings-more-customers",
    title: "How a Professional Website Brings More Customers to Your Business",
    description:
      "A professional website works for your business 24/7: it builds trust, answers customer questions, and turns visitors into paying customers. Here is how.",
    date: "October 29, 2026",
    published: "2026-10-29",
    readTime: "6 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "Before a customer calls you, they search for you. If they cannot find a proper website, most of them move on to a competitor who has one. A professional website is not decoration — it is a salesperson that works 24 hours a day, 7 days a week, without asking for a salary.",
      },
      { kind: "h2", text: "1. It builds trust in seconds" },
      {
        kind: "p",
        text: "People judge a business by its website within seconds. A clean, modern website with your services, photos of real work, and customer reviews tells a visitor one thing: this business is serious. Social media profiles help, but a profile is rented space — your website is property you own.",
      },
      { kind: "h2", text: "2. Your business stays open 24/7" },
      {
        kind: "p",
        text: "Your shop may close at night, but your website does not. Customers can view your services, check your prices, and send an inquiry at midnight. With WhatsApp buttons and a contact form, every visit can become a conversation — even while you sleep.",
      },
      { kind: "h2", text: "3. It answers questions before customers ask" },
      {
        kind: "p",
        text: "How much does it cost? Where are you located? Do you offer this service? A good website answers these questions upfront. That means fewer repetitive messages for you, and faster decisions for your customers.",
      },
      { kind: "h2", text: "4. Google sends you customers who are already looking" },
      {
        kind: "p",
        text: "When someone searches for a service in their city, Google shows them websites, not social media posts. A website optimized for search puts your business in front of people at the exact moment they want to buy. This is why businesses with websites keep getting inquiries long after their social media posts stop reaching people.",
      },
      { kind: "h2", text: "5. It makes your other marketing work harder" },
      {
        kind: "p",
        text: "Every Instagram post, every ad, every business card should send people somewhere. If that somewhere is a professional website with a clear booking or contact step, more of those visitors become customers. Without it, attention leaks away.",
      },
      { kind: "h2", text: "What every business website should include" },
      {
        kind: "list",
        items: [
          "A clear description of your services",
          "Photos of your real work",
          "Customer reviews",
          "A WhatsApp button and a simple contact form",
          "Your location and opening hours",
          "Fast loading on mobile phones",
        ],
      },
      { kind: "h2", text: "The bottom line" },
      {
        kind: "p",
        text: "A website does not replace your work — it multiplies it. It takes the quality you already deliver and shows it to more people, day and night. If your business still runs on social media alone, you are leaving customers on the table.",
      },
      {
        kind: "p",
        text: "At CRAFTLOGIC, we build fast, modern business websites — and we start with a free homepage concept, so you can see the design before you commit to anything. If you want more customers finding you online, that is the first step.",
      },
    ],
  },
  {
    slug: "how-much-does-a-business-website-cost-in-2026",
    title: "How Much Does a Business Website Cost in 2026? A Clear, Honest Price Guide",
    description:
      "How much does a business website cost in 2026? See real price ranges, what drives the cost, and how to avoid hidden fees — before you pay a cent.",
    date: "October 30, 2026",
    published: "2026-10-30",
    readTime: "5 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "Ask ten web designers what a business website costs and you will get ten different answers. One quotes $200, another quotes $10,000, and both insist they are right. No wonder so many business owners delay the decision — not because they doubt a website helps, but because nobody gives them a straight answer on price.",
      },
      {
        kind: "p",
        text: "Here is the straight answer: in 2026, a professional small-business website typically costs between $500 and $5,000. A simple, well-built site for a local business sits at the lower end. A larger site with online booking, many pages, or custom features sits higher. Anything far outside that range deserves a second look.",
      },
      {
        kind: "h2",
        text: "The Short Answer: Realistic Price Ranges",
      },
      {
        kind: "list",
        items: [
          "DIY website builders ($0–$30/month): Tools like Wix or Squarespace look cheap, but you build it yourself and the monthly fee never stops. Over three years, that \"cheap\" site often costs more than a professionally built one.",
          "Freelancer or small studio ($500–$3,000): The sweet spot for most small businesses. You get a custom design, proper pages, contact forms, and basic search optimisation, built by someone who does this every day.",
          "Agency ($3,000–$10,000+): Bigger teams and longer processes. That makes sense for large companies, but for a local med spa, dental clinic, or law firm, it is usually more than you need.",
          "Custom web application ($5,000+): If your site needs logins, dashboards, or complex tools built from scratch, the price rises — because you are no longer buying a website, you are buying software.",
        ],
      },
      {
        kind: "p",
        text: "Most of the businesses CRAFTLOGIC works with — med spas, dentists, realtors, wedding planners, interior designers, law firms, and contractors — land comfortably in the $500–$3,000 range.",
      },
      {
        kind: "h2",
        text: "What Actually Drives the Price?",
      },
      {
        kind: "p",
        text: "A website is not one product with one price — each decision below moves the number:",
      },
      {
        kind: "p",
        text: "Number of pages. A five-page site (home, services, about, gallery, contact) costs less than a twenty-page site. Every extra page needs design, writing, and testing.",
      },
      {
        kind: "p",
        text: "Design quality. A template tweaked with your logo is cheaper than a design built around your brand, photos, and customers. The difference shows in the first three seconds a visitor spends on your site.",
      },
      {
        kind: "p",
        text: "Features. A simple contact form is standard. Online booking, payment collection, a gallery, a blog, or a quote calculator each add work — and each can bring in real revenue. A booking system that fills empty slots pays for itself quickly.",
      },
      {
        kind: "p",
        text: "Content and photos. Someone has to write clear, persuasive text and prepare images that look professional. If that work is included, the price reflects it. If not, you will be doing it yourself late at night.",
      },
      {
        kind: "p",
        text: "Search optimisation (SEO). A site Google can find, read, and rank needs proper structure, fast loading, and local signals. That is the difference between a website and a website that brings customers.",
      },
      {
        kind: "h2",
        text: "The Hidden Costs Nobody Mentions",
      },
      {
        kind: "p",
        text: "The build price is only part of the story. Before you agree to anything, ask about:",
      },
      {
        kind: "list",
        items: [
          "Domain name: usually $10–$20 per year.",
          "Hosting: $5–$30 per month for a small business site.",
          "Maintenance and updates: software, security, and small fixes. Some providers charge monthly; others include a period of support.",
          "Changes after launch: adding a page or updating prices later should have a clear, small cost — not a surprise invoice.",
        ],
      },
      {
        kind: "p",
        text: "If a quote seems suspiciously cheap, one of these costs is usually hiding behind it.",
      },
      {
        kind: "h2",
        text: "What Does a Small Business Actually Need?",
      },
      {
        kind: "p",
        text: "Forget the biggest package. Most local businesses need the same solid foundation:",
      },
      {
        kind: "list",
        items: [
          "A homepage that says, in seconds, what you do, who you serve, and what to do next.",
          "A services page that answers the questions customers always ask.",
          "Proof — real photos, genuine reviews, and examples of your work.",
          "An easy way to contact or book you, on every page, on any phone.",
          "Speed and mobile-friendliness, because most of your customers will visit on their phones.",
        ],
      },
      {
        kind: "p",
        text: "Take a med spa. Its clients do not need a twenty-page website. They need treatments, prices, real results, and a booking button that works. A focused five-to-seven-page site does that job.",
      },
      {
        kind: "h2",
        text: "Cheap vs. Right: What a $100 Website Really Costs You",
      },
      {
        kind: "p",
        text: "A $100 website is not a bargain if it loads slowly, looks unfinished, and never appears on Google. Customers judge your business by your website in seconds. A site that looks cheap quietly tells visitors your service might be cheap too — and the customers you lose never tell you why they left.",
      },
      {
        kind: "p",
        text: "The real question is not \"what is the cheapest website?\" It is \"what does a website that brings customers cost?\" For most small businesses: a few hundred to a few thousand dollars, once — for an asset that works every day, all year.",
      },
      {
        kind: "h2",
        text: "How to Get an Exact Quote Without Surprises",
      },
      {
        kind: "p",
        text: "Before you pay anyone, ask for three things: a fixed, all-inclusive price in writing; a list of exactly which pages and features are included; and a preview of the design before the final build. If a provider cannot show you your homepage first, keep looking.",
      },
      {
        kind: "p",
        text: "That is exactly how CRAFTLOGIC works. You see a free homepage concept first — the real design for your business, not a generic mockup. Only when you like it do we agree on an exact, all-inclusive quote, with no hidden costs. You know the full price before you spend anything.",
      },
      {
        kind: "h2",
        text: "Final Word",
      },
      {
        kind: "p",
        text: "A business website in 2026 is not a luxury purchase. It is where customers check you, compare you, and decide whether to contact you. The right budget buys a fast, professional site that brings bookings — not the cheapest option, and not the most expensive one.",
      },
      {
        kind: "p",
        text: "Ready to see what your website could look like? Visit CRAFTLOGIC at https://craftlogic.live/ and get in touch through the contact page to claim your free homepage concept. You will see the design first, get an exact quote, and decide with zero pressure.",
      },
    ],
  }
  {
    slug: "5-pages-every-business-website-must-have",
    title: "5 Pages Every Business Website Must Have (And What Each One Should Say)",
    description:
      "Every business website needs these 5 pages: Home, Services, About, Proof, and Contact. Learn what each page must say to turn visitors into customers.",
    date: "October 31, 2026",
    published: "2026-10-31",
    readTime: "5 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "Most small business websites fail for a simple reason: they are missing the pages customers actually look for. A visitor lands on your site, cannot find what they need within seconds, and leaves — often to a competitor whose website answers their questions faster.",
      },
      {
        kind: "p",
        text: "You do not need twenty pages. You need five, done well. Here they are.",
      },
      {
        kind: "h2",
        text: "1. A Homepage That Says What You Do in Five Seconds",
      },
      {
        kind: "p",
        text: "Your homepage is your shop window. A new visitor should understand three things immediately: what you offer, who it is for, and what to do next.",
      },
      {
        kind: "p",
        text: "A dental clinic's homepage, for example, should not open with a vague slogan. It should say something like: \"Gentle family dentistry in Manchester — same-week appointments, all ages welcome,\" followed by one clear button: \"Book an Appointment.\"",
      },
      {
        kind: "p",
        text: "Three rules for a strong homepage:",
      },
      {
        kind: "list",
        items: [
          "One main headline that names your service and your area.",
          "One clear action button, visible without scrolling.",
          "A short trust signal — a review score, years in business, or number of happy customers.",
        ],
      },
      {
        kind: "p",
        text: "If a visitor has to guess what you do, your homepage is not working.",
      },
      {
        kind: "h2",
        text: "2. A Services Page That Answers Real Questions",
      },
      {
        kind: "p",
        text: "Customers do not search for \"services.\" They search for answers: \"How much does teeth whitening cost?\" \"Do you offer bridal makeup trials?\" \"Can a plumber fix a burst pipe on Sunday?\"",
      },
      {
        kind: "p",
        text: "Your services page should list each service separately, with a plain description of what it includes, who it is for, and what happens next. A med spa, for instance, should give each treatment its own section — what it does, how long it takes, and how to book — instead of hiding everything behind one vague \"Treatments\" heading.",
      },
      {
        kind: "p",
        text: "This page also does heavy work for Google. When each service has its own clear section, your website can show up for the exact searches your customers type. A page that simply says \"we do everything\" ranks for nothing.",
      },
      {
        kind: "h2",
        text: "3. An About Page That Builds Trust",
      },
      {
        kind: "p",
        text: "People buy from people they trust, especially for high-value services like law, dentistry, real estate, or wedding planning. Your About page is where that trust is built.",
      },
      {
        kind: "p",
        text: "It does not need your life story. It needs three things: who you are, why you do this work, and proof that you are real. Real photos of you and your team beat stock photos every time. A short story — why you started, what you care about — makes you memorable. Credentials, years of experience, and local roots make you believable.",
      },
      {
        kind: "p",
        text: "A wedding planner who writes \"I planned my first wedding in my own garden in 2016, and I have planned over 120 since\" will win more enquiries than one whose About page says only \"we create unforgettable moments.\"",
      },
      {
        kind: "h2",
        text: "4. A Proof Page: Reviews, Results, and Real Work",
      },
      {
        kind: "p",
        text: "Customers today check proof before they contact you. If your website has no reviews, no photos of real work, and no results, visitors assume there is nothing to show — even when your work is excellent.",
      },
      {
        kind: "p",
        text: "Dedicate one page to proof: genuine customer reviews, before-and-after photos where relevant, and short examples of past work. A contractor can show three finished kitchen renovations with a sentence about each. A realtor can show recently sold homes. An interior designer can show a room transformation with a note on what the client asked for.",
      },
      {
        kind: "p",
        text: "Keep it honest and specific. \"We helped a family dental practice in Leeds double its online bookings in four months\" is believable. \"We are the best in the country\" is not.",
      },
      {
        kind: "h2",
        text: "5. A Contact Page That Makes Reaching You Effortless",
      },
      {
        kind: "p",
        text: "This is the page that turns interest into enquiries — and it is the page most businesses get wrong. A contact page should never be just an email address buried at the bottom of the site.",
      },
      {
        kind: "p",
        text: "Every contact page needs:",
      },
      {
        kind: "list",
        items: [
          "A simple form (name, phone or email, message) that works on a mobile phone.",
          "A phone number or WhatsApp button for people who prefer to call.",
          "Your service area and opening hours, so nobody wonders whether you serve their town.",
          "A note on what happens next — for example, \"We reply within one working day.\"",
        ],
      },
      {
        kind: "p",
        text: "Test it yourself on your phone. If the form is hard to fill in, or you never receive the test message, you are losing customers silently.",
      },
      {
        kind: "h2",
        text: "The Mistake to Avoid: Pages Nobody Asked For",
      },
      {
        kind: "p",
        text: "Many businesses add pages they think look impressive — a long company history, a blog nobody updates, a gallery with no captions. Each extra page that adds no value dilutes the five that matter. Start with the five core pages, make them excellent, and add more only when customers actually ask for the information.",
      },
      {
        kind: "h2",
        text: "What This Looks Like in Practice",
      },
      {
        kind: "p",
        text: "Imagine a small law firm. Its homepage says \"Immigration lawyers in Birmingham — free 15-minute consultation.\" Its services page explains each visa route in plain language. Its About page introduces the two solicitors by name. Its proof page shows client reviews and successful case types. Its contact page has a working form and a promise to reply within one working day. That firm does not need a bigger website. It needs those five pages, done properly — and it will win enquiries over competitors with far larger sites.",
      },
      {
        kind: "h2",
        text: "Your Website Should Work as Hard as You Do",
      },
      {
        kind: "p",
        text: "A business website is not a brochure. It is a salesperson that works 24 hours a day, answers questions before customers ask, and turns visitors into enquiries while you are busy doing the actual work. If your site is missing any of these five pages, it is leaving customers on the table.",
      },
      {
        kind: "p",
        text: "At CRAFTLOGIC, we build fast, modern business websites around exactly this structure — clear, simple, and designed to bring enquiries, not just look good. We start with a free homepage concept, so you can see the design for your business before you commit to anything. If you would like that for your business, visit https://craftlogic.live/ and get in touch through the contact page — we would be glad to show you what your website could look like.",
      },
    ],
  }
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.published < b.published ? 1 : -1));
}
