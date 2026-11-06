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
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.published < b.published ? 1 : -1));
}
