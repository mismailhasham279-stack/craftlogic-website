export type PostBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "image"; src: string; alt: string }
  | { kind: "callout"; title?: string; text: string };

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
  },
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
  },
  {
    slug: "why-your-website-must-load-in-under-2-seconds",
    title: "Why Your Website Must Load in Under 2 Seconds (And How to Fix a Slow One)",
    description:
      "A slow website quietly loses customers every day. Learn why speed matters, what slows your site down, and the simple fixes that bring visitors back.",
    date: "November 1, 2026",
    published: "2026-11-01",
    readTime: "5 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "When someone searches for your business, they are usually ready to act — to book an appointment, get a quote, or find your opening hours. They tap your link — and then they wait.",
      },
      {
        kind: "p",
        text: "If your page takes too long to appear, most of them will not wait — they will go back and open a competitor instead. A fast website feels professional and reliable. A slow one feels careless, even if your real work is excellent.",
      },
      {
        kind: "h2",
        text: "Visitors Decide in Seconds, Not Minutes",
      },
      {
        kind: "p",
        text: "Most people visit websites on their phones, often while busy — on a lunch break or between jobs. They judge almost instantly: if the page loads quickly and looks clear, they stay; if it stalls or jumps around as it loads, they leave.",
      },
      {
        kind: "p",
        text: "This is true for every business. A patient with a toothache does not want to fight a slow dentist's page. A couple planning a wedding does not want to wait for a planner's gallery. A homeowner with a leaking roof certainly does not want to wait. In each case, speed is the first impression — before your services, prices, or reviews get a chance.",
      },
      {
        kind: "h2",
        text: "What a Slow Website Really Costs Your Business",
      },
      {
        kind: "p",
        text: "A slow website does not just feel annoying. It quietly costs you enquiries, bookings, and sales.",
      },
      {
        kind: "p",
        text: "Imagine a med spa. A visitor finds it on Google and wants to book a facial, but the booking page loads slowly and the photos appear one by one. The visitor gives up and books with another clinic whose site opened instantly — a customer the first clinic never even knew it lost.",
      },
      {
        kind: "p",
        text: "The same happens for a contractor. A homeowner compares two builders: one site opens fast, shows past work clearly, and has a simple contact form; the other is slow and looks broken on a phone. Guess which one gets the call.",
      },
      {
        kind: "p",
        text: "Every lost visitor is a lost enquiry you never see in your inbox. Over weeks and months, that adds up to real money — all because the website was too slow to do its job.",
      },
      {
        kind: "h2",
        text: "The 5 Most Common Reasons Websites Load Slowly",
      },
      {
        kind: "p",
        text: "Most slow websites suffer from the same few problems:",
      },
      {
        kind: "list",
        items: [
          "Images that are too large. Photos straight from a camera can be many times bigger than a website needs. A page full of them takes far longer to load, especially on mobile data.",
          "Too many plugins and add-ons. Each extra tool — pop-ups, chat widgets, sliders, tracking scripts — adds loading time, and many sites never remove the ones they no longer use.",
          "Slow or overcrowded hosting. Cheap shared hosting means your site shares resources with many others, so it slows down exactly when traffic rises.",
          "No caching. Caching lets a browser save parts of your site so repeat visitors do not have to download everything again. Without it, every visit starts from zero.",
          "Heavy design elements. Auto-playing videos, large animations, and complicated layouts look impressive, but they can cripple speed — especially on a phone.",
        ],
      },
      {
        kind: "p",
        text: "The good news is that none of these problems are permanent. All of them can be fixed.",
      },
      {
        kind: "h2",
        text: "How to Check Your Website Speed in 2 Minutes",
      },
      {
        kind: "p",
        text: "You do not need technical skills to check your speed. Open Google's free PageSpeed Insights tool, enter your website address, and run the test. It gives separate mobile and desktop scores, plus a list of what is slowing the page down.",
      },
      {
        kind: "p",
        text: "Do not chase a perfect score. Focus on the real experience: how long does the main content take to appear, and does it feel smooth on a phone? Also try opening your site on mobile data, not Wi-Fi — that is how many customers will see it first.",
      },
      {
        kind: "h2",
        text: "Simple Fixes That Make the Biggest Difference",
      },
      {
        kind: "p",
        text: "Here are the fixes that usually help the most:",
      },
      {
        kind: "list",
        items: [
          "Compress images before uploading, using modern formats. Keep photos sharp, but not oversized.",
          "Load images only when needed, so pictures lower down the page do not slow the first screen.",
          "Remove plugins and widgets you do not use, and keep only the tools that genuinely help customers.",
          "Use caching and a good hosting plan, so your site stays fast even when several people visit at once.",
          "Keep the design clean. A clear layout with one strong call to action loads faster — and converts better — than a cluttered page full of effects.",
        ],
      },
      {
        kind: "p",
        text: "Test again after each change — small improvements add up quickly.",
      },
      {
        kind: "h2",
        text: "Speed Is Also a Google Ranking Factor",
      },
      {
        kind: "p",
        text: "Speed matters for search rankings too. Google prefers websites that give a good experience, especially on mobile, so a fast site is more likely to rank well than a slow one with similar content.",
      },
      {
        kind: "p",
        text: "So speed and visibility work together: a faster site ranks better, gets found by more people, and keeps them because it loads quickly. A slow site does the opposite — it ranks lower and loses many of the visitors it does get.",
      },
      {
        kind: "p",
        text: "Speed alone will not bring customers — you still need clear services, real photos, and honest reviews.",
      },
      {
        kind: "h2",
        text: "The Bottom Line",
      },
      {
        kind: "p",
        text: "Your website should work as hard as you do: open fast, look professional on a phone, and make it easy to contact you within seconds. If it takes too long, customers will simply choose someone faster — no matter how good your work is.",
      },
      {
        kind: "p",
        text: "At CRAFTLOGIC, we build fast, modern business websites that are designed around one goal: turning visitors into enquiries. If you would like to see how fast and clear your new homepage could look, ask us for a free homepage concept — you can judge the design before you decide anything. Then get in touch through the contact page on craftlogic.live. There is no cost and no pressure, just a design you can see for yourself.",
      },
    ],
  },
  {
    slug: "how-a-booking-system-saves-hours-every-week",
    title: "How a Booking System Saves Hours Every Week for Your Business",
    description:
      "Discover how an online booking system saves hours every week, cuts phone tag and no-shows, and turns your website into a calendar that books while you work.",
    date: "November 3, 2026",
    published: "2026-11-03",
    readTime: "5 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "If you run a service business, you already know the pattern. The phone rings while you are with a client. A message arrives on Instagram asking for a price and a time slot. By Friday, you have spent hours just managing bookings — hours you could have spent serving customers or growing the business.",
      },
      {
        kind: "p",
        text: "An online booking system changes that. Your website takes the booking, confirms it, reminds the customer, and updates your calendar automatically. Below, we explain where those saved hours come from, what a good system must include, and how med spas, clinics, salons, planners, and contractors use it.",
      },
      {
        kind: "h2",
        text: "The Hidden Cost of Phone and Message Bookings",
      },
      {
        kind: "p",
        text: "Phone bookings look free, but they are expensive in time. Think about a single appointment booked by phone or direct message. You answer, discuss services, check your diary, suggest times, wait for a reply, confirm, and then write it down. If the customer misses your call, the whole cycle starts again. Ten bookings a week can easily eat five hours of back-and-forth.",
      },
      {
        kind: "p",
        text: "Messages are even slower. A customer asks on Instagram, \"Are you free on Saturday?\" You reply hours later, they ask about 2 pm, and by the time you agree, a day has passed — sometimes after the customer has already booked with a faster competitor.",
      },
      {
        kind: "p",
        text: "A booking system removes this entire conversation. The customer sees your real availability, picks a time, and books it in under a minute, even at 11 pm when your business is closed.",
      },
      {
        kind: "h2",
        text: "What an Online Booking System Actually Does",
      },
      {
        kind: "p",
        text: "An online booking system is simply a booking page on your website, connected to your calendar. It shows your services, their prices and durations, and the time slots that are actually free. The customer chooses a service, chooses a time, enters their name and phone number, and receives an instant confirmation.",
      },
      {
        kind: "p",
        text: "Behind the scenes, three things happen automatically: the slot is blocked so nobody else can book it, the customer gets a confirmation and a reminder, and you get a clean daily schedule without typing anything into a diary. Some systems also take a deposit at booking, which further reduces cancellations.",
      },
      {
        kind: "h2",
        text: "Where Those Saved Hours Come From",
      },
      {
        kind: "p",
        text: "The time savings are real because they come from several small jobs disappearing at once:",
      },
      {
        kind: "list",
        items: [
          "No more phone tag. Customers no longer need to call to ask, \"What times do you have?\" They see the answer themselves and book directly. For a busy med spa or dental clinic taking 20 to 30 bookings a week, this alone can save three to four hours.",
          "No double-bookings or diary errors. Hand-written bookings invite mistakes — two clients in one slot, a wrong date, a missed name. An automatic system blocks each slot the moment it is booked.",
          "Automatic reminders do the chasing. Many missed appointments happen simply because the customer forgot. Automatic reminders a day before cut no-shows sharply, so there are fewer empty chairs and fewer frantic calls to fill a gap.",
          "Less admin at the end of the day. There is no pile of messages to answer and no notebook to copy into a calendar. Your day starts with a ready-made appointment list.",
        ],
      },
      {
        kind: "p",
        text: "Take a wedding planner: instead of ten messages to arrange a consultation, she shares one booking link, the couple picks a slot, and her calendar fills itself. A contractor can do the same for site visits and quotes.",
      },
      {
        kind: "h2",
        text: "Fewer No-Shows, Fuller Calendars",
      },
      {
        kind: "p",
        text: "A booking system also protects your income. Empty appointments are lost money you cannot recover, but a customer who books online and receives a reminder is far more likely to turn up, or to reschedule in time for someone else to take the slot.",
      },
      {
        kind: "p",
        text: "A small deposit at booking separates serious customers from casual enquiries. For high-value services such as aesthetic treatments or renovation consultations, this alone can save a great deal of wasted appointment time over a year.",
      },
      {
        kind: "p",
        text: "It also captures evening bookings. Many customers search and book in the evening; if booking requires a phone call, they wait — or go elsewhere. If your website books for you, you can wake up to new appointments that arrived overnight.",
      },
      {
        kind: "h2",
        text: "What a Good Booking Page Must Include",
      },
      {
        kind: "p",
        text: "A good booking page is simple and trustworthy. It shows your services clearly, with honest prices and durations, so customers do not need to ask. It works perfectly on a phone, because most customers will book from one, and it asks only for name, phone number, and service — a long form puts people off.",
      },
      {
        kind: "p",
        text: "It confirms the booking instantly, sends a reminder before the appointment, and looks like part of your business, with your name and branding, so customers trust it — far more than a form on a stranger's platform.",
      },
      {
        kind: "p",
        text: "Social media is excellent for discovery, but a poor place to manage bookings: messages get buried, comments get missed, and nobody can see your real availability. Your website is always open and always accurate. You can read more about what we build for service businesses at CRAFTLOGIC (https://craftlogic.live/).",
      },
      {
        kind: "h2",
        text: "How to Start Without Changing How You Work",
      },
      {
        kind: "p",
        text: "You do not need to rebuild your business to add online booking. Start with your most-booked service and one rule: every new appointment for that service goes through the booking page. Keep the phone line for customers who prefer it, and let the system handle the rest.",
      },
      {
        kind: "p",
        text: "Then expand to your other services, reminders, and deposits for high-value appointments.",
      },
      {
        kind: "h2",
        text: "Stop Spending Your Week on Bookings",
      },
      {
        kind: "p",
        text: "Every hour spent chasing messages is an hour not spent with paying customers. A simple booking system gives those hours back, week after week, while reducing no-shows and capturing bookings while you sleep.",
      },
      {
        kind: "p",
        text: "If you would like to see how this could look for your business, we offer a free homepage concept — a preview of your new website, including a booking page designed around your services, before you commit to anything. Just visit our contact page and tell us about your business.",
      },
    ],
  },
  {
    slug: "how-to-get-more-customers-from-google",
    title: "How to Get More Customers From Google (Without Paying for Ads)",
    description:
      "Learn how small businesses get more customers from Google for free: a complete profile, a fast website, and honest reviews that turn searches into calls.",
    date: "November 4, 2026",
    published: "2026-11-04",
    readTime: "6 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "Before a customer calls you, they search for you. They type your service and their city into Google — 'salon near me', 'plumber in Islamabad', 'best dentist nearby' — and they pick from what Google shows them. The businesses that win those searches do not always pay for ads. They win because Google trusts them, and customers trust what they see. Here is how a small business gets more customers from Google, for free, step by step.",
      },
      {
        kind: "image",
        src: "/blog-images/how-to-get-more-customers-from-google.jpg",
        alt: "A happy customer who found a local shop on his phone is welcomed by the shop owner",
      },
      { kind: "h2", text: "1. Start with your free Google Business Profile" },
      {
        kind: "p",
        text: "When someone searches for a service nearby, Google first shows a map with three businesses. That map comes from your free Google Business Profile — not from your website, and not from social media. Fill it in completely: your correct phone number, opening hours, services, service area, and real photos of your work or your shop. A profile with missing hours or no photos tells Google — and customers — that the business may not be serious. A complete profile tells both that you are real and open for business.",
      },
      {
        kind: "p",
        text: "If you serve customers at their homes, like a contractor or a cleaning service, set a service area instead of a shop address. The goal is simple: when Google shows you, the customer should see everything they need to call you.",
      },
      {
        kind: "callout",
        title: "Key point",
        text: "Complete your free Google Business Profile first — it is the map result customers see before your website.",
      },
      { kind: "h2", text: "2. Your website must answer the search" },
      {
        kind: "p",
        text: "The map gets you noticed. Your website gets you chosen. When a customer clicks through, they want answers fast: what do you offer, how much does it cost, where do you work, and how do I contact you?",
      },
      {
        kind: "p",
        text: "One page per service works best. A salon should have a page for haircuts, a page for bridal, a page for facials — each one saying clearly what it includes and who it is for. A contractor should have a page for each service and each area served. Vague pages that say 'we do everything' answer nothing, so customers leave.",
      },
      {
        kind: "p",
        text: "Your website must also load fast and work perfectly on a phone, because most Google searches now happen on phones. A slow site loses the customer that the search just sent you.",
      },
      {
        kind: "image",
        src: "/blog-images/google-post-website.jpg",
        alt: "A customer browsing a local business website on her phone inside a bright shop",
      },
      { kind: "h2", text: "3. Reviews are your best salespeople" },
      {
        kind: "p",
        text: "When two businesses look similar, customers pick the one with better reviews. Reviews are proof from real people, and Google treats them as a sign of trust too.",
      },
      {
        kind: "p",
        text: "Ask for a review on the day the job is finished, while the customer is still happy. Send a short message with a direct link to your Google review page. Most happy customers will help if you simply ask — the mistake is never asking at all.",
      },
      {
        kind: "p",
        text: "Reply to every review, good or bad. A polite reply to a bad review shows future customers how you handle problems, and that often matters more than the complaint itself. Never pay for fake reviews: Google removes them, and one exposed fake review damages trust far more than a missing review ever could.",
      },
      {
        kind: "image",
        src: "/blog-images/google-post-reviews.jpg",
        alt: "A happy customer leaving a five-star Google review on her phone inside a salon",
      },
      {
        kind: "callout",
        title: "Remember",
        text: "Ask for the review on the day the job is finished, while the customer is still happy.",
      },
      { kind: "h2", text: "4. Write answers to the questions customers actually ask" },
      {
        kind: "p",
        text: "Customers do not search in business language. Nobody searches for 'bespoke solutions for your property needs'. They search for 'how much does a kitchen renovation cost', 'dentist open on Sunday near me', or 'best salon for bridal makeup'.",
      },
      {
        kind: "p",
        text: "Write pages that answer those real questions: prices, steps, worries, and what happens after booking. Each honest answer is a page Google can show to someone at the exact moment they want to buy. This is also how your website keeps working for you months after you publish it, without paying for every click.",
      },
      { kind: "h2", text: "5. Turn visits into enquiries" },
      {
        kind: "p",
        text: "Traffic alone is not customers. When a visitor arrives, the next step must be obvious and easy: a click-to-call button, a WhatsApp button, a short booking form, or a 'Get a quote' button. Ask only for name, phone number, and service — a long form puts people off.",
      },
      {
        kind: "p",
        text: "Then reply fast. A customer who messages three businesses usually hires the one that replies first. Speed is part of the service now.",
      },
      {
        kind: "callout",
        title: "Takeaway",
        text: "Traffic alone is not customers — make the next step obvious and reply fast.",
      },
      { kind: "h2", text: "How long does it take?" },
      {
        kind: "p",
        text: "Be honest with yourself: free Google traffic is not instant. Most businesses see early signs in one to three months, and steadier enquiries in three to six months of consistent work. Paid ads bring visitors within days, but the moment you stop paying, the visitors stop too. Free results keep working after the work is done — that is why they are worth building. You can read more about what we build for service businesses at CRAFTLOGIC (https://craftlogic.live/).",
      },
      { kind: "h2", text: "Start with the free step" },
      {
        kind: "p",
        text: "If you would like to see how this could look for your business, we offer a free homepage concept — a preview of your new website, designed around your services, before you commit to anything. Just visit our contact page and tell us about your business.",
      },
    ],
  },
  {
    slug: "how-patients-find-a-dentist-online",
    title: "How Patients Find a Dentist Online in 2026 (And What Your Practice Website Must Do)",
    description:
      "Most patients Google a dentist before they book. Learn how patients find a dentist online in 2026 — and what your practice website must do to win them.",
    date: "November 6, 2026",
    published: "2026-11-06",
    readTime: "6 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "A tooth hurts. A family moves to a new area. Someone finally decides to fix their smile.",
      },
      {
        kind: "p",
        text: "In 2026, almost none of these people start by walking past your clinic. They start with a search.",
      },
      {
        kind: "p",
        text: "A 2025 survey of nearly 4,000 US adults found that 56% began their search for a healthcare provider on Google. And the pattern is the same for dentists: patients search, compare a short list, and only then check the website before they book.",
      },
      {
        kind: "callout",
        text: "Your next patient is probably searching right now — 'dentist near me' — and your website decides whether they pick you or the practice next door.",
      },
      {
        kind: "image",
        src: "/blog-images/how-patients-find-a-dentist-online.jpg",
        alt: "A bright modern dental reception with a patient booking an appointment on her phone",
      },
      { kind: "h2", text: "Step 1: The search — 'dentist near me'" },
      {
        kind: "p",
        text: "Patients rarely search for a practice name. They search for a need and a place.",
      },
      {
        kind: "p",
        text: "Typical searches look like this: 'dentist near me', 'emergency dentist', 'dental implants cost', 'dentist accepting new patients', 'Invisalign near me'.",
      },
      {
        kind: "p",
        text: "Google answers with a map and three practices first, then a list of websites. This is the moment that decides everything. If your practice is not in that map pack, most searchers never scroll far enough to find you.",
      },
      {
        kind: "callout",
        text: "Patients search by problem and procedure ('implants cost', 'chipped tooth') as often as by the word 'dentist' — so each treatment needs its own page.",
      },
      { kind: "h2", text: "Step 2: The comparison — reviews decide in seconds" },
      {
        kind: "p",
        text: "Once Google shows three practices, patients compare them in seconds. The deciding factors are simple: star rating, recent reviews, distance, and price or insurance.",
      },
      {
        kind: "p",
        text: "The numbers are clear. In the same 2025 survey, 79% of adults read reviews before choosing a provider, and 53% would not even consider a practice with fewer than four stars. Google reviews carry the most weight of all.",
      },
      {
        kind: "p",
        text: "Recent reviews matter most. Patients trust a review written last month far more than one from two years ago. A steady flow of new reviews beats a big pile of old ones.",
      },
      {
        kind: "callout",
        text: "Ask every happy patient for a review on the day of their visit — a short text link right after the appointment works best.",
      },
      { kind: "h2", text: "Step 3: AI answers are the new front door" },
      {
        kind: "p",
        text: "Something new happened in 2026. Patients now ask AI tools to recommend a dentist — and the numbers jumped fast.",
      },
      {
        kind: "p",
        text: "A BrightLocal 2026 survey found 45% of US consumers had used ChatGPT or another AI tool for local business recommendations, up from just 6% a year earlier. ChatGPT was the most-used tool, followed by Google's AI Mode.",
      },
      {
        kind: "p",
        text: "Here is the good news: AI answers are built from the same things Google already rewards. A complete Google Business Profile, clear treatment pages, consistent practice details everywhere online, and real reviews. Fix the basics, and you show up in AI answers too.",
      },
      {
        kind: "callout",
        text: "AI tools can only recommend what they can read — if your treatments and prices exist only in a photo of a price list, AI cannot see them. Put them in real text on your website.",
      },
      { kind: "h2", text: "Step 4: The website check — where patients confirm their choice" },
      {
        kind: "p",
        text: "After the map and the reviews, patients open your website to confirm the decision. In the survey, 44% said a practice's website influences their choice.",
      },
      {
        kind: "p",
        text: "At this point they are looking for four things: proof you are real, the treatments they need, the cost or insurance you accept, and a fast way to book.",
      },
      {
        kind: "p",
        text: "A slow, outdated website breaks the trust your reviews just built. A clean, fast website with real photos of your team, your treatments, and your clinic closes the decision.",
      },
      { kind: "h2", text: "Step 5: The booking — make it easy, or lose them" },
      {
        kind: "p",
        text: "This is where most practices quietly lose patients. A patient who has already decided should never have to phone during office hours, wait for a callback, or fill in a long form before seeing a free time.",
      },
      {
        kind: "p",
        text: "Give every treatment its own page, in the words patients use, with the price or accepted plans and a way to book online. One dental practice tracked 360 of 821 enquiries coming through online booking alone — a channel that did not exist for them before.",
      },
      {
        kind: "callout",
        text: "Show real appointment times on your website. Patients who can pick a slot directly are far more likely to actually show up than patients waiting for a callback.",
      },
      { kind: "h2", text: "What your practice website must do in 2026" },
      {
        kind: "p",
        text: "Here is the short checklist. If your website does all six, you are ahead of most practices in your area.",
      },
      {
        kind: "list",
        items: [
          "A complete, accurate Google Business Profile, linked to your website.",
          "One page per treatment, written in the words patients type.",
          "Real reviews, asked for after every visit, and replied to.",
          "Prices or insurance information in real text, not in a photo.",
          "A fast website that loads in under two seconds on a phone.",
          "Online booking with real time slots — no phone tag, no waiting.",
        ],
      },
      {
        kind: "callout",
        text: "You cannot move your clinic closer to every patient. But you can be the most relevant, most trusted practice Google shows them — and that is a choice you control.",
      },
      { kind: "h2", text: "Your practice deserves to be found" },
      {
        kind: "p",
        text: "Patients are already searching for a dentist like you. The question is only whether they find you first — and whether your website turns that search into a booked appointment.",
      },
      {
        kind: "p",
        text: "A professional website works for your practice 24/7: it answers patient questions, shows your reviews, and books appointments while you are with patients.",
      },
      {
        kind: "p",
        text: "At CRAFTLOGIC (https://craftlogic.live/), we build fast, modern websites for dental practices and other local businesses — designed to be found on Google, trusted in seconds, and easy to book from.",
      },
      {
        kind: "p",
        text: "We start with a free homepage concept — a real preview of your new homepage, made for your practice, before you pay anything. If you like it, we build the full website. If not, you keep the idea and walk away.",
      },
      {
        kind: "p",
        text: "Visit our contact page (https://craftlogic.live/#contact) and tell us about your practice. Your next patient is already searching.",
      },
    ],
  },
  {
    slug: "how-a-salon-gets-found-on-google-maps",
    title: "How a Salon Gets Found on Google Maps (and Fills Its Appointment Book)",
    description:
      "How does a salon get found on Google Maps? A complete profile, real photos, fresh reviews and a working booking button turn 'salon near me' into appointments.",
    date: "November 6, 2026",
    published: "2026-11-06",
    readTime: "6 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "Picture this. A woman moves to a new area. She opens Google Maps, types 'hair salon near me', and picks from the three salons at the top.",
      },
      {
        kind: "p",
        text: "She never visits a website first. She never scrolls a feed. The map decides.",
      },
      {
        kind: "p",
        text: "Nearly half of all Google searches carry local intent — someone looking for something nearby. And the three map results at the top, the local 3-pack, take about 44% of all clicks on the first page.",
      },
      {
        kind: "p",
        text: "If your salon is not in those three, you are invisible to the person who was ready to book today.",
      },
      {
        kind: "image",
        src: "/blog-images/how-a-salon-gets-found-on-google-maps.jpg",
        alt: "A bright modern salon interior with a stylist working on a client's hair and a phone showing a Google Maps search",
      },
      { kind: "h2", text: "Why Google Maps decides who gets the booking" },
      {
        kind: "p",
        text: "Google ranks map results on three things: relevance, distance, and prominence.",
      },
      {
        kind: "p",
        text: "Relevance is how well your profile matches what the person searched. Distance is how close you are. Prominence is how well known your salon is — and Google says reviews count toward it.",
      },
      {
        kind: "p",
        text: "You cannot move your salon closer to every client. But relevance and prominence are fully in your hands.",
      },
      {
        kind: "p",
        text: "A salon two streets away with a complete profile, fresh photos, and fifty recent reviews will beat a closer salon with an empty listing every single time.",
      },
      {
        kind: "callout",
        text: "You cannot pay for a better spot on Google Maps. The free listing is earned — a complete profile, real photos, and honest reviews are what move you up.",
      },
      { kind: "h2", text: "Step 1 — Claim your free Google Business Profile" },
      {
        kind: "p",
        text: "Everything on Maps starts with one free listing: your Google Business Profile.",
      },
      {
        kind: "p",
        text: "Go to business.google.com and search for your salon name and town first. Many salons already have a listing that nobody has claimed — a customer or Google created it from public information.",
      },
      {
        kind: "p",
        text: "If one exists, claim it. If nothing exists, create it. It costs nothing and takes about an hour.",
      },
      {
        kind: "p",
        text: "Use your real salon name, exactly as it appears on your sign and your invoices. Do not add keywords like 'Best Hair Salon in Town' to the name — Google's own guidelines say that can get your profile suspended.",
      },
      { kind: "h2", text: "Step 2 — Pick the right category (this matters more than you think)" },
      {
        kind: "p",
        text: "Your primary category is the single strongest thing you type into the profile.",
      },
      {
        kind: "p",
        text: "Do not pick 'Beauty salon' if your real work is hair. Pick the most specific option Google offers — 'Hair salon', 'Nail salon', 'Barber shop' — whatever matches the service you want to be found for.",
      },
      {
        kind: "p",
        text: "Then add a few secondary categories for the other services you genuinely offer, like hair colouring or bridal styling. Only list services you really do. A wrong category brings the wrong enquiries — and eventually bad reviews.",
      },
      {
        kind: "p",
        text: "Not sure which category to pick? Search your main service plus your town, open the three salons already in the map results, and see which primary category they use.",
      },
      {
        kind: "callout",
        text: "Copy the category of the salon already ranking first for your service in your town — that is the category Google rewards for that search.",
      },
      { kind: "h2", text: "Step 3 — Fill in every service, with real prices" },
      {
        kind: "p",
        text: "An empty profile tells Google nothing. A full profile tells Google exactly who to show you to.",
      },
      {
        kind: "p",
        text: "List every service you offer, with a short description and a starting price where you can. Haircut, balayage, bridal hair, manicure, pedicure — each one is a separate chance to match a search.",
      },
      {
        kind: "p",
        text: "Add your real opening hours and keep them updated. Inaccurate hours are the worst mistake a salon can make on Google: they send a client to a locked door, and a locked door often becomes a one-star review.",
      },
      {
        kind: "p",
        text: "Add your phone number and your website link. Use the exact same name, address, and phone number on your profile as on your website, character for character. Google cross-checks them — if they do not match, Google trusts you less.",
      },
      { kind: "h2", text: "Step 4 — Photos of real work, not stock photos" },
      {
        kind: "p",
        text: "Clients choose a stylist with their eyes. Your photos are your portfolio, and they sit right on your listing.",
      },
      {
        kind: "p",
        text: "Upload photos of real work: a fresh balayage, a bridal updo, a clean fade, your chairs, your team at work. Ten or more photos is a good start — and keep adding new ones every month.",
      },
      {
        kind: "p",
        text: "Salons ranking in the local 3-pack average more than 50 reviews with a 4.5-star rating or higher. But photos are what make a client tap your listing instead of the one next to it.",
      },
      {
        kind: "p",
        text: "Stock photos of strangers do the opposite. Clients can tell, and so can Google.",
      },
      { kind: "h2", text: "Step 5 — Reviews are the tiebreaker" },
      {
        kind: "p",
        text: "When three salons sit side by side on the same street, reviews decide who gets the call.",
      },
      {
        kind: "p",
        text: "Almost half of consumers will not use a business with fewer than 20 reviews, and nearly a third only use businesses rated 4.5 stars or above (BrightLocal, 2026).",
      },
      {
        kind: "p",
        text: "The reviews that help most mention the service and the stylist by name: 'Sara did my balayage and it is perfect.' Those words tell Google what you are good at, and they tell the next client exactly what to expect.",
      },
      {
        kind: "p",
        text: "How do you get them? Ask at the right moment — right after the service, when the client is happiest, looking at her hair in the mirror.",
      },
      {
        kind: "callout",
        text: "Ask for the review on the day of the appointment, while the client is still smiling at the result. Two or three new reviews every week beat thirty old ones from last January.",
      },
      {
        kind: "p",
        text: "Never buy reviews, and never write your own. Google notices, and the punishment — lost visibility — is worse than having few reviews.",
      },
      {
        kind: "p",
        text: "And when a bad review arrives, answer it. The reply matters more than the review itself, because every client who comes after reads it. A calm, kind reply turns a complaint into proof that you care.",
      },
      { kind: "h2", text: "Step 6 — Add a booking button, so the booking happens on the spot" },
      {
        kind: "p",
        text: "Here is the part most salons miss. A client finds you on Maps, likes what she sees — and then has to leave Google, find your website, find your booking page, and start again. Most will not bother. The booking goes to the salon whose listing has a button.",
      },
      {
        kind: "p",
        text: "Google's Reserve with Google feature puts a Book button right on your listing, so clients can pick a service and a time without leaving Google. It connects to the booking software you already use, and the appointment lands straight in your calendar.",
      },
      {
        kind: "p",
        text: "It matters more than most owners realise: more than half of salon appointments are now booked outside standard working hours, and nearly half are made within 24 hours of the visit (Professional Beauty, August 2026). Your clients book at 10 pm on a Sunday. Your listing must be ready to take that booking while you sleep.",
      },
      { kind: "h2", text: "Your website still matters — it backs up everything on Maps" },
      {
        kind: "p",
        text: "A strong profile wins the tap. Your website wins the booking.",
      },
      {
        kind: "p",
        text: "When a client does click through, she wants to see your full price list, your gallery, and your stylists — and book in seconds, on her phone. A slow or messy website sends her straight back to the map, to your competitor.",
      },
      {
        kind: "p",
        text: "Your website and your Google profile must also agree with each other: same name, same address, same phone number, same services. Google checks, and so do your clients.",
      },
      {
        kind: "p",
        text: "That is exactly what we build at CRAFTLOGIC — fast, beautiful salon websites with online booking built in, designed to turn a Google search into a confirmed appointment. See what a website like that looks like at https://craftlogic.live/.",
      },
      { kind: "h2", text: "Your salon's 7-day Maps checklist" },
      {
        kind: "p",
        text: "You do not need a marketing budget. You need one focused week.",
      },
      {
        kind: "list",
        items: [
          "Claim your Google Business Profile and verify it.",
          "Set the most specific primary category for your main service.",
          "List every service with a short description and a starting price.",
          "Upload ten real photos of your work and your salon.",
          "Check your hours — and update them before every holiday.",
          "Ask three happy clients for a review this week, right after their appointment.",
          "Add your booking link so clients can book without leaving Google.",
        ],
      },
      {
        kind: "callout",
        text: "Start with the profile, then the reviews, then the photos. That order — profile, reviews, photos — is the cheapest source of new salon clients there is, and the only one that works while you sleep.",
      },
      { kind: "h2", text: "Get found before your competitor does" },
      {
        kind: "p",
        text: "Every salon in your town can claim the same free listing. The ones who fill it in properly are the ones who stay fully booked.",
      },
      {
        kind: "p",
        text: "If you want a website that backs up your Google Maps listing — fast, beautiful, with online booking that works on a phone — we can show you exactly what it would look like for your salon first. We build a free homepage concept, so you can see it before you decide anything.",
      },
      {
        kind: "p",
        text: "Visit our contact page (https://craftlogic.live/#contact) and tell us about your salon. Your next fully booked week could start with one search.",
      },
    ],
  },
  {
    slug: "how-a-real-estate-agents-website-turns-searches-into-viewings",
    title: "How a Real Estate Agent's Website Turns Google Searches Into Viewings (And Wins More Listings)",
    description:
      "46% of buyers start their home search online. Learn what buyers search for and what your real estate website must show to turn clicks into viewings.",
    date: "November 8, 2026",
    published: "2026-11-08",
    readTime: "6 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "A buyer does not walk into your office first anymore. They open Google first.",
      },
      {
        kind: "p",
        text: "They type '3 bed house for sale near me' from their sofa, often late at night. If your website answers that search well, you get the viewing. If it does not, the buyer clicks the next agent — and you never even know they were looking.",
      },
      {
        kind: "p",
        text: "Your website is not a brochure. It is your hardest-working salesperson, and it works while you sleep.",
      },
      {
        kind: "image",
        src: "/blog-images/how-a-real-estate-agents-website-turns-searches-into-viewings.jpg",
        alt: "A real estate agent in a navy blazer showing listings on a tablet to a young couple outside a modern home",
      },
      { kind: "h2", text: "Buyers Start on Google, Not at Your Office" },
      {
        kind: "p",
        text: "The numbers are clear. According to the National Association of Realtors' 2025 Profile of Home Buyers and Sellers, 46% of buyers said their first step was looking online at homes for sale — more than contacting an agent (20%) or speaking to a lender (11%).",
      },
      {
        kind: "p",
        text: "And 52% of buyers found the home they eventually bought on the internet. In total, 97% of buyers used online search at some point, and the median buyer spent 10 weeks searching before purchasing.",
      },
      {
        kind: "p",
        text: "That is 10 weeks in which your website can meet them — or lose them.",
      },
      {
        kind: "callout",
        text: "A buyer spends a median of 10 weeks searching before they buy. Your website has 10 weeks to win them — a portal listing gives you seconds.",
      },
      { kind: "h2", text: "What Buyers Actually Look For First" },
      {
        kind: "p",
        text: "Buyers are not impressed by fancy animations. They want answers, fast.",
      },
      {
        kind: "p",
        text: "In NAR's 2025 Generational Trends research, buyers rated website features as 'very useful' in this order: photos (83%), detailed property information (79%), floor plans (57%), agent contact information (47%), and virtual tours (41%).",
      },
      {
        kind: "p",
        text: "That order is your build order. Real photos first. Honest details second. Floor plans third. Everything else comes after.",
      },
      {
        kind: "p",
        text: "A listing page that hides the price, shows three dark photos, and says 'call for details' sends the buyer back to Google — straight to your competitor.",
      },
      {
        kind: "callout",
        text: "Photos first, facts second, floor plans third. That is the order buyers rated them — build your listing pages in that order.",
      },
      { kind: "h2", text: "The Searches That Bring You Seller Leads" },
      {
        kind: "p",
        text: "Buyers are only half the story. The most valuable leads for an agent are sellers — and sellers start with a question too.",
      },
      {
        kind: "p",
        text: "Google Keyword Planner data (September 2025 to August 2026) shows 'real estate agent near me' gets about 40,500 searches a month in the US. 'Home value estimator' gets about 33,100. 'How much is my home worth' gets about 8,100 — and other keyword tools put that number far higher.",
      },
      {
        kind: "p",
        text: "Every one of those searches is a homeowner wondering about their property's value. Most are not ready to list today — but they will remember the agent whose website gave them a straight answer.",
      },
      {
        kind: "p",
        text: "A simple 'What's my home worth?' page on your own website — a short form, an honest estimate, a named agent who replies — captures that curiosity and turns it into a lead.",
      },
      {
        kind: "callout",
        text: "72% of sellers interview only one agent before listing. If your website is the one they find first, it is usually the one they pick.",
      },
      { kind: "h2", text: "Your Website Must Work on a Phone" },
      {
        kind: "p",
        text: "Around 70% of real estate searches happen on a mobile phone. That means most buyers will meet your website on a small screen, on a slow connection, while standing in a street outside a house they just saw.",
      },
      {
        kind: "p",
        text: "If your listings take five seconds to load, if the photos are tiny, if the 'book a viewing' button is hidden at the bottom of the page — that buyer is gone.",
      },
      {
        kind: "callout",
        text: "70% of real estate searches happen on a phone. If your website is hard to use on mobile, most of your buyers never see it properly.",
      },
      { kind: "h2", text: "The 5 Things Every Listing Page Needs" },
      {
        kind: "p",
        text: "Every property on your website should answer the same five questions before the buyer has to ask:",
      },
      {
        kind: "list",
        items: [
          "The real price — never 'POA' if you can avoid it. Buyers skip listings without a price.",
          "10–20 real photos — bright, honest, in order: outside, living room, kitchen, bedrooms, bathroom, garden.",
          "The floor plan and size — buyers think in rooms and square metres, not in adjectives.",
          "The area, on a map — schools, transport, parks and shops near the property sell the location.",
          "One clear next step — a 'Book a viewing' button and a short form on the same page, not a phone number buried in the footer.",
        ],
      },
      { kind: "h2", text: "Why Portals Alone Are Not Enough" },
      {
        kind: "p",
        text: "Portals are useful, but they are rented ground, not your own.",
      },
      {
        kind: "p",
        text: "On a portal, your listing sits next to ten other agents' listings. The buyer compares you on price alone and forgets your name in a minute. Portal leads convert at around 0.4% — roughly 4 enquiries in every 1,000 views turn into a client.",
      },
      {
        kind: "p",
        text: "Your own website changes that maths. There, the buyer sees only you: your listings, your area guides, your reviews, your face. They learn your name before they ever call.",
      },
      {
        kind: "callout",
        text: "Portal leads convert at around 0.4%. Your own website keeps the buyer with you — and keeps the lead yours.",
      },
      { kind: "h2", text: "How to Turn a Search Into a Viewing" },
      {
        kind: "p",
        text: "A website does not sell houses. It starts conversations. The viewing is where the sale happens — so every page should make the next step easy:",
      },
      {
        kind: "list",
        items: [
          "A 'Book a viewing' button on every listing, not just the contact page.",
          "A short form — name, phone, preferred time. Nothing more. Long forms scare buyers away.",
          "A fast reply. When someone books a viewing at 9pm, a reply by 9am the next morning beats a reply two days later every time.",
        ],
      },
      { kind: "h2", text: "Your Website Should Be Your Best Agent" },
      {
        kind: "p",
        text: "The buyers are already searching. The sellers are already wondering what their home is worth. The only question is whether they find you — or the agent down the road.",
      },
      {
        kind: "p",
        text: "A fast, honest, mobile-friendly website with real photos, real prices, floor plans, a valuation page and a one-tap way to book a viewing turns Google searches into viewings. And viewings turn into listings, sales, and referrals.",
      },
      {
        kind: "p",
        text: "Want to see what your website could look like? CRAFTLOGIC builds a free homepage concept for real estate agents — your listings, your area, your style — so you can see the difference before you decide anything. Get in touch through the contact page (https://craftlogic.live/#contact) and tell us about your agency.",
      },
    ],
  },
  {
    slug: "how-clients-find-a-lawyer-online-in-2026",
    title: "How Clients Find a Lawyer Online in 2026 (And What Your Law Firm Website Must Do)",
    description:
      "Most clients Google a lawyer before they call. Learn how clients find a lawyer online in 2026 — and what your law firm website must do to win them.",
    date: "November 9, 2026",
    published: "2026-11-09",
    readTime: "6 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "Nobody walks into a law firm off the street anymore. They open Google first.",
      },
      {
        kind: "p",
        text: "A person with an injury claim, a visa problem, or a family matter types their problem into a search box, and the firms they find there are the firms they call. If your website answers their question clearly, you get the call. If it does not, they call the firm listed right below you.",
      },
      {
        kind: "p",
        text: "Your website is not a brochure. It is the first meeting with a client who has never met you.",
      },
      {
        kind: "image",
        src: "/blog-images/how-clients-find-a-lawyer-online-in-2026.jpg",
        alt: "A professional lawyer in a navy suit talking with a client over a laptop in a bright modern office",
      },
      { kind: "h2", text: "Clients Research First — They Google Before They Call" },
      {
        kind: "p",
        text: "Martindale-Avvo's State of the Legal Consumer report for 2026 found that 92.4% of legal consumers research their issue online before contacting an attorney.",
      },
      {
        kind: "p",
        text: "A Scorpion survey of 3,000 consumers (October 2025) found that 74% research a firm online even after a personal recommendation.",
      },
      {
        kind: "p",
        text: "The ABA Journal found that 38% of consumers turn to the internet first when searching for a lawyer, ahead of asking family and friends (29%) — and 97% of those who looked online used a search engine (FindLaw).",
      },
      {
        kind: "p",
        text: "The first question is not 'does my firm have a website?' It is 'does my website answer the question a worried person just typed?'",
      },
      {
        kind: "callout",
        text: "92.4% of legal consumers research first. Your website is where that research happens — or where it ends.",
      },
      { kind: "h2", text: "Reviews Decide Before You Do" },
      {
        kind: "p",
        text: "Hiring a lawyer is a high-trust decision, so clients read what other people said.",
      },
      {
        kind: "p",
        text: "In that survey, 57% of clients called online reviews their top deciding factor, and more than half will not hire a firm rated under four stars.",
      },
      {
        kind: "p",
        text: "UK research agrees: GrowWithQS found 63% of clients found their solicitor online, nearly a third reviewed three or more firms, and 70% contacted more than one firm before engaging.",
      },
      {
        kind: "p",
        text: "Your reviews are not decoration. They are the comparison a client makes before they ever speak to you.",
      },
      {
        kind: "callout",
        text: "57% of clients say reviews decide for them, and most will not hire a firm under four stars. Ask for a review on the day the case closes.",
      },
      { kind: "h2", text: "Speed of Reply Wins the Client" },
      {
        kind: "p",
        text: "A person who contacts a lawyer is usually in a hurry and messages two or three firms at once.",
      },
      {
        kind: "p",
        text: "Scorpion found 72% of clients will not wait more than 24 hours for a callback, and Clio found nearly 8 in 10 expect a reply within a day.",
      },
      {
        kind: "p",
        text: "But most firms are slow: only 25% respond to online leads in under five minutes (Hennessey Digital), and clients reach someone by phone at only 52% of firms (Clio).",
      },
      {
        kind: "p",
        text: "Harvard Business Review found that contacting a lead within five minutes makes a firm roughly 21 times more likely to qualify it than waiting 30 minutes.",
      },
      {
        kind: "p",
        text: "A short intake form — name, phone, what happened — plus a reply promise turns a searcher into a client while the next firm checks its voicemail.",
      },
      {
        kind: "callout",
        text: "72% of clients will not wait 24 hours for a callback. A reply within 5 minutes makes you about 21 times more likely to win them.",
      },
      { kind: "h2", text: "AI Search Is Now Part of the Hunt" },
      {
        kind: "p",
        text: "In 2026, clients do not only use Google. They ask AI tools too.",
      },
      {
        kind: "p",
        text: "iLawyer Marketing found 28.1% of people looking for a lawyer used ChatGPT in 2025 — triple its 9% share in 2023. BrightLocal found 45% of consumers used AI to find a local business in the past year, up from just 6% a year earlier.",
      },
      {
        kind: "p",
        text: "The good news: 94% of ChatGPT users still cross-check with Google, and AI answers by reading real pages — plain practice-area pages get quoted.",
      },
      {
        kind: "p",
        text: "A Whitespark study found AI Overviews now appear on 68% of local business searches — and the firms named there are the ones with clear pages saying who they are, what they do, and where they work.",
      },
      {
        kind: "callout",
        text: "28% of people looking for a lawyer now use ChatGPT too — but 94% of them still check Google. A clear website wins in both places.",
      },
      { kind: "h2", text: "What Your Website Must Show" },
      {
        kind: "p",
        text: "A client visiting your website wants four answers, fast — or they leave.",
      },
      {
        kind: "list",
        items: [
          "What you actually do. One page per practice area — injury, immigration, family, property — in plain words.",
          "What it costs. Only 38% of consumers saw price information before instructing a solicitor, and 55% now compare prices before choosing (Legal Services Consumer Panel). Even a 'free first consultation' and a clear fee range builds more trust than silence.",
          "How the process works. Only 30% of shoppers could easily understand how to hire a firm from its website (Clio). Three simple steps — call, consultation, next steps — remove that fear.",
          "Proof you are real. Real reviews, real results where the rules allow, and photos of the actual lawyers — not stock images. A client hires a person, not a logo.",
        ],
      },
      { kind: "h2", text: "The 5 Things Every Law Firm Website Needs" },
      {
        kind: "p",
        text: "Every page on your website should pass the same five tests before it goes live:",
      },
      {
        kind: "list",
        items: [
          "A plain first paragraph — who you are, what you do, where you work. Google and AI tools quote this.",
          "A short contact form on every page — name, phone, and the problem in their own words.",
          "A fast reply promise — 'We reply within one working day' — kept, every time.",
          "Fresh reviews — recent ones matter more than old ones. Ask every week.",
          "A mobile-friendly design — most clients search on a phone, in a stressful moment. If your form is hard to use on a small screen, they will not try twice.",
        ],
      },
      { kind: "h2", text: "Your Website Should Answer, Not Just Exist" },
      {
        kind: "p",
        text: "Most law firm websites fail quietly: they list services, look professional, and answer nothing.",
      },
      {
        kind: "p",
        text: "The client who just searched 'can I claim after a car accident' does not want your firm's history. They want to know: do I have a case, what does it cost, what happens next?",
      },
      {
        kind: "p",
        text: "A website that answers those three questions turns a stranger into a consultation. One that hides behind 'contact us for details' turns them into your competitor's client.",
      },
      {
        kind: "callout",
        text: "Only 30% of people could easily understand how to hire a firm from its website. Make your process simple enough to grasp in one minute.",
      },
      { kind: "h2", text: "The Client Is Already Searching" },
      {
        kind: "p",
        text: "The client is already online — they have researched their problem, read your reviews, and compared you with two other firms. The only question is whether your website answers them — quickly, honestly, and in words they understand.",
      },
      {
        kind: "p",
        text: "A fast, clear website with real practice-area pages, honest fees, a simple three-step process, fresh reviews, and a short form that gets a quick reply turns Google searches into consultations. And consultations turn into clients.",
      },
      {
        kind: "p",
        text: "Want to see what your website could look like? CRAFTLOGIC builds a free homepage concept for law firms — your practice areas, your city, your style. Get in touch through the contact page (https://craftlogic.live/#contact) and tell us about your firm.",
      },
    ],
  },
  {
    slug: "how-clients-find-an-interior-designer-online-in-2026",
    title: "How Clients Find an Interior Designer Online in 2026 (And What Your Studio Website Must Show)",
    description:
      "Most clients Google an interior designer before they call. Learn how clients find one online in 2026 — and what your studio website must show to win them.",
    date: "November 9, 2026",
    published: "2026-11-09",
    readTime: "6 min read",
    author: "Muhammad Ismail",
    blocks: [
      {
        kind: "p",
        text: "A homeowner finishes a long day, sits on the sofa, and opens their phone.",
      },
      {
        kind: "p",
        text: "They type 'interior designer near me' — or they open Instagram, save three beautiful living rooms, and then Google the studio behind one of them.",
      },
      {
        kind: "p",
        text: "That is how most interior design clients start in 2026. Not with a phone book. Not with a walk-in. With a search.",
      },
      {
        kind: "p",
        text: "If your studio does not show up in that moment — or shows up looking unfinished — the client moves on to the next name. They never call to tell you why.",
      },
      {
        kind: "image",
        src: "/blog-images/how-clients-find-an-interior-designer-online-in-2026.jpg",
        alt: "An interior designer showing a client a room design on a laptop, with fabric swatches and a floor plan on the table",
      },
      { kind: "h2", text: "1. The search starts with a picture, not a phone call" },
      {
        kind: "p",
        text: "For most design businesses, discovery is visual first.",
      },
      {
        kind: "p",
        text: "A client sees a kitchen on Instagram, a villa on Pinterest, or a friend's renovated living room. The picture creates the interest. Then Google does the checking.",
      },
      {
        kind: "p",
        text: "That means your website has two jobs. First, it must confirm that the beautiful work they saw was not a one-off. Second, it must make the next step easy.",
      },
      {
        kind: "callout",
        text: "Add every finished project to your website the same week it goes on Instagram — so the people checking you find your newest work, not your oldest.",
      },
      { kind: "h2", text: "2. 'Interior designer near me' is the search that matters most" },
      {
        kind: "p",
        text: "Over 1 million searches for interior designers happen in the United States every month. The single phrase 'interior designer near me' alone draws roughly 165,000 searches a month worldwide.",
      },
      {
        kind: "p",
        text: "And these are not casual browsers. Someone typing that phrase is ready to hire — they are comparing two or three nearby studios and will call the one that looks most trustworthy.",
      },
      {
        kind: "p",
        text: "Google shows the map first for these searches. A complete Google Business Profile — real project photos, recent reviews, clear services, correct hours — is what earns the call.",
      },
      {
        kind: "p",
        text: "But the profile alone is not enough. When a client clicks through to your website and finds a slow page or a broken gallery, the trust built by the profile disappears in seconds.",
      },
      {
        kind: "callout",
        text: "Your Google Business Profile gets the click. Your website closes the call. Both must be complete — one without the other loses the client.",
      },
      { kind: "h2", text: "3. Clients read your website like a job interview" },
      {
        kind: "p",
        text: "Before any discovery call, a serious client reads your website the way an employer reads a CV.",
      },
      {
        kind: "p",
        text: "They are looking for answers to questions they may never ask out loud:",
      },
      {
        kind: "list",
        items: [
          "Have you done a project like mine — a kitchen, a villa, an office?",
          "What does it cost, at least roughly?",
          "How does the process work, and how long does it take?",
          "Can I trust you with my home and my budget?",
        ],
      },
      {
        kind: "p",
        text: "Designers who book consistently in 2026 have websites that answer these questions before the first call. A beautiful portfolio gets the client in the door. Clear messaging closes the loop.",
      },
      { kind: "h2", text: "4. One page per service beats one long homepage" },
      {
        kind: "p",
        text: "A client searching for 'kitchen interior design' does not want your general homepage. They want a page about kitchens — with kitchen photos, kitchen pricing guidance, and kitchen projects.",
      },
      {
        kind: "p",
        text: "The same is true for villa design, office fit-outs, and e-design. Each service deserves its own page, written in the words clients actually type into Google.",
      },
      {
        kind: "p",
        text: "This is also how a small studio beats a big one. A large firm ranks for 'interior design.' A focused studio can rank for 'modern villa interior design in Dubai' — searches with fewer competitors and far more serious buyers.",
      },
      {
        kind: "callout",
        text: "Build one clear page for each service you offer. A client who lands on the exact page they searched for is far more likely to enquire than one who lands on a generic homepage.",
      },
      { kind: "h2", text: "5. Reviews and real photos are your strongest sales tool" },
      {
        kind: "p",
        text: "Nobody hires a designer they have never met without proof.",
      },
      {
        kind: "p",
        text: "Reviews are that proof. Ask for a review right after a project finishes — or right after a happy site visit — while the client is still excited. Give them the direct link so it takes ten seconds, and reply to every review you receive.",
      },
      {
        kind: "p",
        text: "Real photos matter just as much. Stock photos of rooms you did not design will be spotted, and they destroy trust faster than no photos at all.",
      },
      {
        kind: "callout",
        text: "Ask for the review on the day the job is finished. A fresh, specific review ('She redesigned our kitchen in six weeks') is worth ten vague ones.",
      },
      { kind: "h2", text: "6. Speed and mobile decide whether they stay" },
      {
        kind: "p",
        text: "Around 70% of design-related searches now happen on a phone. A client will open your site while standing in the very room they want redesigned.",
      },
      {
        kind: "p",
        text: "If the page takes more than a few seconds to load, or the gallery is hard to swipe on a small screen, they close it. They do not wait, and they do not come back later.",
      },
      { kind: "h2", text: "7. What your studio website must show — the checklist" },
      {
        kind: "p",
        text: "If you take one thing from this post, take this list:",
      },
      {
        kind: "list",
        items: [
          "Real projects, updated often — your newest work first, with the project type and location named.",
          "A page for each service — residential, kitchen and bath, commercial, e-design.",
          "A clear process — consultation, concept, design, delivery — in plain words.",
          "Honest pricing guidance — even a range builds more trust than silence.",
          "Reviews with real names — fresh, specific, and replied to.",
          "A simple next step — a 'Book a free discovery call' button on every page.",
          "A fast, mobile-first site — because the client is on their phone, in the room, right now.",
        ],
      },
      {
        kind: "callout",
        text: "Your website is not a portfolio. It is a sales system — the one that works while you are on site with another client.",
      },
      { kind: "h2", text: "The bottom line" },
      {
        kind: "p",
        text: "In 2026, clients find an interior designer the same way they find everything else: a picture catches their eye, a search checks the studio, and a website decides the call.",
      },
      {
        kind: "p",
        text: "Instagram brings the discovery. Google brings the intent. But it is your website — fast, honest, full of real work — that turns a searcher into a booked consultation.",
      },
      {
        kind: "p",
        text: "If your studio's website still shows old photos, hides its prices, and has no clear way to book a call, you are not losing to better designers. You are losing to designers whose websites answer first.",
      },
      {
        kind: "p",
        text: "At CRAFTLOGIC, we build fast, beautiful websites for design studios — sites that show your real work and turn searches into booked calls.",
      },
      {
        kind: "p",
        text: "Want to see what yours could look like? We will design a free homepage concept for your studio — no cost, no obligation. Just tell us about your work, and we will show you the first page. Visit our contact page (https://craftlogic.live/#contact) to start.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.published < b.published ? 1 : -1));
}
