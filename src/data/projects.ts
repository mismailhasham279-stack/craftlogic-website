import type { LucideIcon } from "lucide-react";
import {
  Layout,
  ShoppingBag,
  Sparkles,
  MessageCircle,
  Search,
  CalendarCheck,
  Images,
  Truck,
  HelpCircle,
  Tag,
  Mail,
  BookOpen,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

export const SITE_URL = "https://craftlogic.live";
export const BRAND_NAME = "CRAFTLOGIC";

export const PROJECT_ASSETS = {
  luxevia: {
    thumbnail: "/project-previews/luxevia.webp",
    desktop: "/project-previews/luxevia.webp",
    mobile: "/project-previews/luxevia.webp",
  },
  usaLuxe: {
    thumbnail: "/project-previews/usa-luxe.webp",
    desktop: "/project-previews/usa-luxe.webp",
    mobile: "/project-previews/usa-luxe.webp",
  },
  nailsByGrace: {
    thumbnail: "/project-previews/nails-by-grace.png",
    desktop: "/project-previews/nails-by-grace.png",
    mobile: "/project-previews/nails-by-grace.png",
  },
  skillbook: {
    thumbnail: "/project-previews/skillbook.webp",
    desktop: "/project-previews/skillbook.webp",
    mobile: "/project-previews/skillbook.webp",
  },
} as const;

const PROJECT_PREVIEWS = {
  luxevia: "/project-previews/luxevia.webp",
  aurevane: "/project-previews/aurevane.png",
  usaLuxe: "/project-previews/usa-luxe.webp",
  nailsByGrace: "/project-previews/nails-by-grace.png",
  shoptop: "/project-previews/shoptop.webp",
  skillbook: "/project-previews/skillbook.webp",
} as const;

export type GalleryImage = {
  src: string | null;
  alt: string;
  caption: string;
  device: "desktop" | "mobile";
};

export type AnatomyItem = {
  id: string;
  label: string;
  copy: string;
  view: "desktop" | "desktop2" | "mobile";
  rect: { top: number; left: number; width: number; height: number };
};

export type Project = {
  id: string;
  slug: string;
  index: string;
  name: string;
  category: string;
  clientIndustry: string;
  timeline: string;
  headline: string;
  description: string;
  impactMetric: string;
  businessChallenge: string;
  theProblem: string;
  solution: string;
  howWeBuiltIt: { title: string; detail: string }[];
  businessValue: string[];
  deliverables: string[];
  liveUrl: string;
  thumbnail: string | null;
  heroImage: string | null;
  imageSrc: string;
  fallbackSrc?: string;
  mobileImage: string | null;
  gallery: GalleryImage[];
  features: { icon: LucideIcon; title: string; copy: string }[];
  technologies: string[];
  stack: string[];
  projectType: string;
  services: string[];
  status: "live";
  anatomy: AnatomyItem[];
};

export type ProjectCaseStudy = Project;

export const projects: Project[] = [
  {
    id: "01",
    slug: "luxevia-purse",
    index: "01",
    name: "Luxevia Purse",
    category: "Luxury E-Commerce Storefront",
    clientIndustry: "Luxury Fashion & Accessories",
    timeline: "2 Weeks",
    headline: "From Instagram DM Orders to a High-Velocity Global Luxury Storefront",
    description:
      "Fast, mobile-first luxury e-commerce storefront with instant catalog filtering, currency switching, and friction-free checkout.",
    impactMetric: "4.2x Checkout Conversion",
    businessChallenge:
      "Before CraftLogic, Luxevia had no dedicated online store and relied entirely on manual Instagram DMs and WhatsApp replies to take orders. International buyers hesitated without a verified storefront, and sending product photos manually slowed down daily sales.",
    theProblem:
      "Before CraftLogic, Luxevia had no dedicated online store and relied entirely on manual Instagram DMs and WhatsApp replies to take orders. International buyers hesitated without a verified storefront, and sending product photos manually slowed down daily sales.",
    solution:
      "The website is structured as an editorial shopping journey. A curated hero introduces the collection, product discovery is organised by category, product cards carry clear imagery and pricing, and quick-view interactions let customers inspect a piece without leaving the flow.",
    howWeBuiltIt: [
      {
        title: "Editorial Luxury Storefront & Mobile UI",
        detail:
          "Designed a clean, high-trust digital flagship tailored for mobile shoppers with crisp product galleries and instant category filtering.",
      },
      {
        title: "Friction-Free Cart & Multi-Currency Flow",
        detail:
          "Built a zero-reload slide-out shopping bag with clear pricing breakdowns and instant checkout steps to eliminate cart abandonment.",
      },
      {
        title: "Edge CDN Image & Speed Optimization",
        detail:
          "Configured responsive image preloading and global edge caching so high-resolution handbag photos load in under 1.2 seconds.",
      },
      {
        title: "Google Product SEO & Social OpenGraph",
        detail:
          "Added structured product metadata and social preview cards so shared links display rich previews across WhatsApp and Instagram.",
      },
    ],
    businessValue: [
      "Presents a luxury catalogue with the visual quality customers expect from the category.",
      "Makes handbags, watches, footwear and accessories easy to browse and compare.",
      "Supports the buying decision with craftsmanship and unboxing storytelling.",
      "Offers a private concierge route for higher-intent customers.",
    ],
    deliverables: [
      "Custom E-Commerce UI/UX Design",
      "Mobile-First Product Catalog & Filter Engine",
      "Express Cart & Checkout Integration",
      "Sub-1.5s Speed & Google SEO Setup",
    ],
    liveUrl: "https://luxevia-edit-m964.vercel.app/",
    thumbnail: PROJECT_PREVIEWS.luxevia,
    heroImage: PROJECT_PREVIEWS.luxevia,
    imageSrc: PROJECT_PREVIEWS.luxevia,
    fallbackSrc: "/project-previews/luxevia.svg",
    mobileImage: PROJECT_PREVIEWS.luxevia,
    gallery: [
      {
        src: PROJECT_PREVIEWS.luxevia,
        alt: "Luxevia Purse homepage hero on desktop",
        caption: "Editorial hero",
        device: "desktop",
      },
    ],
    features: [
      {
        icon: ShoppingBag,
        title: "Curated Luxury Catalogue",
        copy: "High-trust storefront with instant category discovery and pricing clarity.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Edge CDN"],
    stack: ["React", "Tailwind CSS", "TypeScript", "Edge CDN"],
    projectType: "E-Commerce Website",
    services: ["UI Design", "Front-End Development", "Responsive Build"],
    status: "live",
    anatomy: [],
  },
  {
    id: "02",
    slug: "nailsbygrace",
    index: "02",
    name: "NailsByGrace Studio",
    category: "Booking & Studio Platform",
    clientIndustry: "Beauty, Wellness & Salon",
    timeline: "10 Days",
    headline: "Eliminating Manual Phone Bookings with a 24/7 Self-Serve Studio Portal",
    description:
      "Self-serve online appointment system allowing clients to pick services, select live time slots, and confirm bookings automatically.",
    impactMetric: "94% Bookings Automated",
    businessChallenge:
      "NailsByGrace previously had no website at all—every appointment was booked manually over phone calls and text messages. Staff spent hours replying to basic pricing questions, leading to double-booked slots and missed after-hours clients.",
    theProblem:
      "NailsByGrace previously had no website at all—every appointment was booked manually over phone calls and text messages. Staff spent hours replying to basic pricing questions, leading to double-booked slots and missed after-hours clients.",
    solution:
      "The website puts services, pricing and portfolio work in one place, then leads directly into an appointment request form that captures everything needed for a booking conversation: contact details, preferred date and time, service, nail length, and inspiration notes.",
    howWeBuiltIt: [
      {
        title: "Interactive Service Menu & Pricing Catalog",
        detail:
          "Built a clean, visual service menu displaying clear durations, transparent pricing, and treatment previews for first-time visitors.",
      },
      {
        title: "3-Step Self-Serve Appointment Booking",
        detail:
          "Engineered an intuitive slot-selection flow where clients choose their service, pick an available date/time, and reserve in under 45 seconds.",
      },
      {
        title: "Instant WhatsApp Booking Confirmation",
        detail:
          "Connected direct WhatsApp booking summaries so both the client and studio receive structured appointment details immediately.",
      },
      {
        title: "Local Google Search Optimization",
        detail:
          "Implemented LocalBusiness schema and mobile speed optimization so nearby clients searching for nail studios find NailsByGrace first.",
      },
    ],
    businessValue: [
      "Presents Gel-X full sets, custom nail art, add-ons and removals clearly.",
      "Shows real portfolio work in a gallery that builds confidence.",
      "Captures structured appointment requests instead of scattered messages.",
    ],
    deliverables: [
      "Bespoke Salon Brand Website",
      "Self-Serve Appointment Scheduling Flow",
      "Automated WhatsApp Lead & Booking Sync",
      "Local SEO & Mobile Performance Tuning",
    ],
    liveUrl: "https://grace-nails-studio.vercel.app/",
    thumbnail: PROJECT_PREVIEWS.nailsByGrace,
    heroImage: PROJECT_PREVIEWS.nailsByGrace,
    imageSrc: PROJECT_PREVIEWS.nailsByGrace,
    fallbackSrc: "/project-previews/nailsbygrace.svg",
    mobileImage: PROJECT_PREVIEWS.nailsByGrace,
    gallery: [
      {
        src: PROJECT_PREVIEWS.nailsByGrace,
        alt: "NailsByGrace homepage on desktop",
        caption: "Homepage & Booking",
        device: "desktop",
      },
    ],
    features: [
      {
        icon: CalendarCheck,
        title: "Self-Serve Booking",
        copy: "Clients select services and reserve time slots online 24/7.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "WhatsApp API"],
    stack: ["React", "Tailwind CSS", "TypeScript", "WhatsApp API"],
    projectType: "Business Website",
    services: ["UI Design", "Front-End Development", "Booking Form"],
    status: "live",
    anatomy: [],
  },
  {
    id: "03",
    slug: "skillbook",
    index: "03",
    name: "SkillBook",
    category: "EdTech & Learning Platform",
    clientIndustry: "Education & Digital Certification",
    timeline: "3 Weeks",
    headline: "Centralized Online Course Portal & Instant Student Verification System",
    description:
      "Modern online skill-building, student verification, and digital course management platform engineered for seamless learning.",
    impactMetric: "Instant Online Verification",
    businessChallenge:
      "SkillBook needed a unified digital platform where students could explore skill-based programs and employers or institutions could verify student credentials online—replacing slow, manual paper-based checks.",
    theProblem:
      "SkillBook needed a unified digital platform where students could explore skill-based programs and employers or institutions could verify student credentials online—replacing slow, manual paper-based checks.",
    solution:
      "Built a dedicated EdTech platform on skillbook786.com with structured course catalogs, mobile-first learning dashboards, and instant online student/certificate verification.",
    howWeBuiltIt: [
      {
        title: "Structured Course & Program Architecture",
        detail:
          "Designed a clear, distraction-free learning portal organizing skill tracks, enrollment details, and student resources on all screen sizes.",
      },
      {
        title: "Real-Time Student & Certificate Lookup",
        detail:
          "Built a fast verification interface allowing instant validation of student IDs and completion records with zero page lag.",
      },
      {
        title: "Mobile-First Low-Bandwidth Performance",
        detail:
          "Optimized bundle sizes and asset delivery so students accessing the portal on mobile data experience instant page transitions.",
      },
      {
        title: "Production Domain, SSL & SEO Indexing",
        detail:
          "Configured secure HTTPS routing on skillbook786.com alongside semantic HTML structure for clean Google Search indexing.",
      },
    ],
    businessValue: [
      "Provides instant online verification for student credentials and certificates.",
      "Delivers fast mobile performance even on standard cellular data connections.",
      "Centralizes course information and student onboarding on skillbook786.com.",
    ],
    deliverables: [
      "Full EdTech Web Platform (skillbook786.com)",
      "Student & Credential Verification System",
      "Mobile-Optimized Course Catalog UI",
      "SSL Security & Google Search Indexing",
    ],
    liveUrl: "https://skillbook786.com/",
    thumbnail: PROJECT_PREVIEWS.skillbook,
    heroImage: PROJECT_PREVIEWS.skillbook,
    imageSrc: PROJECT_PREVIEWS.skillbook,
    fallbackSrc: "/project-previews/skillbook.svg",
    mobileImage: PROJECT_PREVIEWS.skillbook,
    gallery: [
      {
        src: PROJECT_PREVIEWS.skillbook,
        alt: "SkillBook EdTech & Verification Portal",
        caption: "SkillBook Portal",
        device: "desktop",
      },
    ],
    features: [
      {
        icon: GraduationCap,
        title: "Course & Skill Portal",
        copy: "Structured digital courses and student learning resources.",
      },
      {
        icon: ShieldCheck,
        title: "Instant Verification",
        copy: "Online student ID and credential lookup in seconds.",
      },
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Verification Engine"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Verification Engine"],
    projectType: "EdTech Web Platform",
    services: ["Full-Stack Web Development", "Verification Portal", "SEO Setup"],
    status: "live",
    anatomy: [],
  },
  {
    id: "04",
    slug: "aurevane",
    index: "04",
    name: "Aurevane Timepieces",
    category: "Luxury Horology & Showcase",
    clientIndustry: "Fine Jewelry & Collector Watches",
    timeline: "2 Weeks",
    headline: "Bespoke 60 FPS Digital Vault for High-Ticket Watch Collectors",
    description:
      "Editorial luxury watch showcase paired with smooth 60 FPS animations and private collector inquiry workflows.",
    impactMetric: "60 FPS Fluid Experience",
    businessChallenge:
      "Standard e-commerce templates diluted Aurevane's exclusivity. High-net-worth watch collectors expect museum-grade visual storytelling, macro craftsmanship details, and private concierge inquiries rather than a generic 'Add to Cart' grid.",
    theProblem:
      "Standard e-commerce templates diluted Aurevane's exclusivity. High-net-worth watch collectors expect museum-grade visual storytelling, macro craftsmanship details, and private concierge inquiries rather than a generic 'Add to Cart' grid.",
    solution:
      "The experience introduces the seasonal edit with an editorial hero and a clear brand philosophy, then organizes the collection by category with craftsmanship storytelling and a private concierge route.",
    howWeBuiltIt: [
      {
        title: "Editorial Horology Storytelling Layout",
        detail:
          "Designed full-bleed showcase sections highlighting dial craftsmanship, movement specs, and limited-edition provenance.",
      },
      {
        title: "GPU-Accelerated 60 FPS Micro-Animations",
        detail:
          "Engineered silky-smooth scroll reveals and hover transitions using hardware-accelerated transforms with zero layout shift.",
      },
      {
        title: "Private Collector Concierge Flow",
        detail:
          "Replaced noisy popups with a discreet private viewing and acquisition inquiry flow tailored for high-ticket buyers.",
      },
      {
        title: "Retina-Ready Progressive Image Loading",
        detail:
          "Implemented progressive image decoding so ultra-sharp timepiece photography renders cleanly on both mobile and 4K displays.",
      },
    ],
    businessValue: [
      "Presents a coherent luxury identity across timepieces, handbags and accessories.",
      "Uses craftsmanship storytelling to elevate brand trust for high-ticket items.",
      "Connects product discovery with a private concierge experience.",
    ],
    deliverables: [
      "Luxury Editorial Brand Experience",
      "60 FPS Motion & Scroll Choreography",
      "Private Collector Inquiry System",
      "4K Retina Image Optimization",
    ],
    liveUrl: "https://aurevane-edit.vercel.app/",
    thumbnail: PROJECT_PREVIEWS.aurevane,
    heroImage: PROJECT_PREVIEWS.aurevane,
    imageSrc: PROJECT_PREVIEWS.aurevane,
    fallbackSrc: "/project-previews/aurevane.svg",
    mobileImage: PROJECT_PREVIEWS.aurevane,
    gallery: [
      {
        src: PROJECT_PREVIEWS.aurevane,
        alt: "AUREVANE luxury showcase",
        caption: "Seasonal edit",
        device: "desktop",
      },
    ],
    features: [
      {
        icon: Sparkles,
        title: "Craftsmanship Details",
        copy: "Material, construction and finishing receive dedicated editorial attention.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    stack: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    projectType: "Luxury E-Commerce / Brand Showcase",
    services: ["UI Design", "Front-End Development", "E-Commerce Experience"],
    status: "live",
    anatomy: [],
  },
  {
    id: "05",
    slug: "usa-luxe-import",
    index: "05",
    name: "USA Luxe Import",
    category: "Business Website",
    clientIndustry: "Luxury Imports & Sourcing",
    timeline: "2 Weeks",
    headline: "Luxury Finds, Sourced From the USA",
    description:
      "A business page directing visitors to Instagram for new arrivals, products and launches.",
    impactMetric: "Ready-to-Ship + Custom Sourcing",
    businessChallenge:
      "An import and sourcing business has two very different types of customer: people who want something that is ready to ship, and people who want a specific item sourced for them. Both need to understand what is available, how the process works and how to start a conversation quickly.",
    theProblem:
      "An import and sourcing business has two very different types of customer: people who want something that is ready to ship, and people who want a specific item sourced for them. Both need to understand what is available, how the process works and how to start a conversation quickly.",
    solution:
      "The website separates the ready-to-ship collection from custom sourcing. A product catalogue with imagery, details and pricing covers what is available now, while a custom order request flow covers everything else. WhatsApp enquiry keeps the conversation immediate, and process, delivery and FAQ sections explain how ordering works before a customer has to ask.",
    howWeBuiltIt: [
      {
        title: "Ready-to-Ship Collection Catalogue",
        detail:
          "A product catalogue with imagery, details and pricing covers what is available now.",
      },
      {
        title: "Custom Sourcing Request Flow",
        detail:
          "A custom order request flow covers everything else, for customers who want a specific item sourced.",
      },
      {
        title: "WhatsApp Enquiry, Built In",
        detail:
          "WhatsApp enquiry keeps the conversation immediate, so customers can start a conversation quickly.",
      },
      {
        title: "Process, Delivery & FAQ Sections",
        detail:
          "Process, delivery and FAQ sections explain how ordering works before a customer has to ask.",
      },
    ],
    businessValue: [
      "Presents the curated catalogue clearly to international customers.",
      "Separates ready-to-ship products from custom sourcing requests.",
      "Turns interest into direct conversations through WhatsApp enquiry.",
      "Explains the sourcing and delivery process up front.",
      "Reduces repetitive questions with a structured FAQ.",
      "Works comfortably on the phones most customers browse from.",
    ],
    deliverables: [
      "Business Website with Product Catalogue",
      "Custom Sourcing Request Flow",
      "WhatsApp Enquiry Integration",
      "Process, Delivery & FAQ Sections",
    ],
    liveUrl: "https://usa-luxe-curated.vercel.app/",
    thumbnail: PROJECT_PREVIEWS.usaLuxe,
    heroImage: PROJECT_PREVIEWS.usaLuxe,
    imageSrc: PROJECT_PREVIEWS.usaLuxe,
    fallbackSrc: "/project-previews/usa-luxe.svg",
    mobileImage: PROJECT_PREVIEWS.usaLuxe,
    gallery: [
      {
        src: PROJECT_PREVIEWS.usaLuxe,
        alt: "USA Luxe Import homepage on desktop",
        caption: "Homepage",
        device: "desktop",
      },
    ],
    features: [
      {
        icon: Images,
        title: "Instagram Updates",
        copy: "The live page points visitors to Instagram for new arrivals, products and launches.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    stack: ["React", "Tailwind CSS", "TypeScript"],
    projectType: "Business Website",
    services: ["UI Design", "Front-End Development", "Enquiry Flow"],
    status: "live",
    anatomy: [],
  },
  {
    id: "06",
    slug: "shoptop",
    index: "06",
    name: "ShopTop",
    category: "Fashion / Pre-Order Commerce",
    clientIndustry: "Fashion & Streetwear E-Commerce",
    timeline: "2 Weeks",
    headline: "Editorial Streetwear Drops, Built Around Pre-Orders",
    description:
      "An editorial streetwear experience designed around curated Asian fashion, pre-orders and direct customer reservations.",
    impactMetric: "Curated Drops, Direct Reservations",
    businessChallenge:
      "Pre-order commerce works differently from stock-on-hand retail. Customers need to understand what a drop is, what is available, how reserving works and what happens with shipping and payment — otherwise interest stalls before it becomes an order.",
    theProblem:
      "Pre-order commerce works differently from stock-on-hand retail. Customers need to understand what a drop is, what is available, how reserving works and what happens with shipping and payment — otherwise interest stalls before it becomes an order.",
    solution:
      "The site is built around drops. An editorial hero introduces the current pre-order, a drop index and category structure organise streetwear, knits and tops and accessories, and quick reserve plus WhatsApp concierge make reserving a piece immediate. Shipping, payment and delivery information is explicit, and email lead capture keeps interested customers connected to the next drop.",
    howWeBuiltIt: [
      {
        title: "Editorial Hero for the Current Drop",
        detail:
          "An editorial hero introduces the current pre-order.",
      },
      {
        title: "Drop Index & Category Structure",
        detail:
          "A drop index and category structure organise streetwear, knits and tops and accessories.",
      },
      {
        title: "Quick Reserve + WhatsApp Concierge",
        detail:
          "Quick reserve plus WhatsApp concierge make reserving a piece immediate.",
      },
      {
        title: "Shipping, Payment & Email Capture",
        detail:
          "Shipping, payment and delivery information is explicit, and email lead capture keeps interested customers connected to the next drop.",
      },
    ],
    businessValue: [
      "Frames pre-orders as a considered editorial experience rather than a risk.",
      "Organises drops and categories so browsing stays clear.",
      "Turns interest into reservations with quick reserve and concierge chat.",
      "Sets expectations with shipping, payment and delivery information.",
      "Builds an audience for future drops through email capture.",
      "Keeps the editorial presentation intact across devices.",
    ],
    deliverables: [
      "Editorial Pre-Order Storefront",
      "Drop Index & Category Structure",
      "Quick Reserve & Concierge Flow",
      "Shipping, Payment & Email Capture",
    ],
    liveUrl: "https://curated-streetwear-showcase.vercel.app/",
    thumbnail: PROJECT_PREVIEWS.shoptop,
    heroImage: PROJECT_PREVIEWS.shoptop,
    imageSrc: PROJECT_PREVIEWS.shoptop,
    fallbackSrc: "/project-previews/shoptop.svg",
    mobileImage: PROJECT_PREVIEWS.shoptop,
    gallery: [
      {
        src: PROJECT_PREVIEWS.shoptop,
        alt: "ShopTop homepage on desktop",
        caption: "Editorial hero",
        device: "desktop",
      },
    ],
    features: [
      {
        icon: Images,
        title: "Editorial Fashion Hero",
        copy: "A drop-led opening that frames the current pre-order.",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp Concierge",
        copy: "Direct chat for sizing, availability and reservation questions.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    stack: ["React", "Tailwind CSS", "TypeScript"],
    projectType: "E-Commerce Website",
    services: ["UI Design", "Front-End Development", "Reservation Flow"],
    status: "live",
    anatomy: [],
  },

];

/* Alias so both `projects` and `PROJECTS` work everywhere */
export const PROJECTS = projects;

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

/** Enable once genuine client testimonials are available. */
export const TESTIMONIALS_ENABLED = false;
export const testimonials: { quote: string; author: string; role: string }[] = [];

/* ---------------- Core Contact Identifiers ---------------- */
export const EMAIL = "info@craftlogic.live";
export const PHONE_DISPLAY = "+92 334 4957382";
export const PHONE_TEL = "+923344957382";
export const WHATSAPP_RAW = "923344957382";

/* ---------------- 7 Official Social Profiles ---------------- */
export const SOCIAL = {
  instagram: "https://www.instagram.com/craft_logics?obrf=d3NqYmY3ZmJyMm9w",
  facebook: "https://www.facebook.com/share/14mTT25RfBp/",
  tiktok: "https://www.tiktok.com/@craftlogics?_r=1&_t=ZP-9AibnwtdjRf",
  threads: "https://www.threads.com/@craftlogic.web",
  x: "https://x.com/web_developer92",
  linkedin:
    "https://www.linkedin.com/in/craft-logic-712857409?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  youtube: "https://youtube.com/@craft_logics?si=ugoevhrErI-Z7zwq",
} as const;

export const TECHNOLOGIES = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
];

export default projects;