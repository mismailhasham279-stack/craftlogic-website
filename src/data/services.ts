import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Smartphone,
  ShoppingBag,
  Layers,
  Search,
  Bot,
} from "lucide-react";

export type ServiceStep = { title: string; detail: string };
export type ServiceFaq = { question: string; answer: string };

export type Service = {
  num: string;
  slug: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  heroImage: string;
  heroAlt: string;
  benefits: { title: string; detail: string }[];
  whoFor: string;
  whoForChips: string[];
  steps: ServiceStep[];
  deliverables: string[];
  faqs: ServiceFaq[];
};

const HOW_TO_START: ServiceFaq = {
  question: "How do we start?",
  answer:
    "Click Start a Project and tell us about your business. We will reply with the next steps.",
};

export const SERVICES: Service[] = [
  {
    num: "01",
    slug: "website-development",
    title: "Website Development",
    tag: "Websites & Landing Pages",
    description:
      "Modern business websites and high-converting landing pages built to turn visitors into paying clients.",
    highlights: [
      "Corporate & Agency Sites",
      "High-Converting Landing Pages",
      "100% Mobile Ready",
    ],
    icon: Globe,
    heroImage: "/service-images/website-development.jpg",
    heroAlt: "Website Development — CraftLogic",
    benefits: [
      {
        title: "More enquiries from Google",
        detail: "Your business shows up when people search for what you offer.",
      },
      {
        title: "A website that builds trust",
        detail:
          "A clean, professional design makes visitors trust your business.",
      },
      {
        title: "Works on every phone",
        detail:
          "Every page looks and works perfectly on mobile, tablet, and desktop.",
      },
    ],
    whoFor:
      "Small businesses, clinics, restaurants, real estate agencies, law firms, and online stores that need a professional website.",
    whoForChips: [
      "Clinics",
      "Restaurants",
      "Real Estate",
      "Law Firms",
      "Online Stores",
      "Small Businesses",
    ],
    steps: [
      {
        title: "Tell Us About Your Project",
        detail:
          "Share your business, your goals, and what you need on the website.",
      },
      {
        title: "Design & Plan Approval",
        detail:
          "We plan the pages and the design. You review it and approve it before we build.",
      },
      {
        title: "Professional Build & Testing",
        detail:
          "We build your website with clean code and test it on mobile, tablet, and desktop.",
      },
      {
        title: "Launch, Handover & Support",
        detail:
          "We launch your website, hand over everything, and stay in touch for support.",
      },
    ],
    deliverables: [
      "Custom-designed website",
      "Mobile-friendly pages",
      "Contact and enquiry forms",
      "Google-ready page structure",
      "Basic on-page SEO setup",
      "Launch and handover",
    ],
    faqs: [
      {
        question: "Will my website work on mobile phones?",
        answer:
          "Yes. Every website we build is mobile-first, so it looks and works perfectly on phones, tablets, and desktop.",
      },
      {
        question: "Do I own my website after launch?",
        answer:
          "Yes. The domain, the design, and the source code belong to you after launch.",
      },
      HOW_TO_START,
    ],
  },
  {
    num: "02",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tag: "iOS & Android",
    description:
      "Fast, easy-to-use iOS and Android apps for customer booking, ordering, loyalty, and daily engagement.",
    highlights: [
      "iOS & Android Apps",
      "Customer Booking Flows",
      "Push Notifications",
    ],
    icon: Smartphone,
    heroImage: "/service-images/mobile-app-development.jpg",
    heroAlt: "Mobile App Development — CraftLogic",
    benefits: [
      {
        title: "Your business in their pocket",
        detail: "Customers open your app in one tap, any time they need you.",
      },
      {
        title: "More bookings and orders",
        detail: "Easy booking and ordering inside the app bring more sales.",
      },
      {
        title: "Stay close to customers",
        detail:
          "Push notifications remind customers about offers, bookings, and updates.",
      },
    ],
    whoFor:
      "Restaurants, clinics, salons, gyms, and shops that want bookings, orders, and loyalty on their customers' phones.",
    whoForChips: ["Restaurants", "Clinics", "Salons", "Gyms", "Shops"],
    steps: [
      {
        title: "Tell Us About Your App",
        detail:
          "Share what your app should do — booking, ordering, loyalty, or all three.",
      },
      {
        title: "Design & Plan Approval",
        detail:
          "We plan the screens and the flow. You review the design and approve it.",
      },
      {
        title: "Professional Build & Testing",
        detail: "We build your app for iOS and Android and test it on real phones.",
      },
      {
        title: "Launch, Handover & Support",
        detail:
          "We help you launch the app, hand over everything, and stay in touch for support.",
      },
    ],
    deliverables: [
      "iOS and Android apps",
      "Booking and ordering flows",
      "Push notifications",
      "Customer accounts",
      "App store launch help",
      "Handover and support",
    ],
    faqs: [
      {
        question: "Will the app work on both iPhone and Android?",
        answer: "Yes. We build one app that works on iOS and Android.",
      },
      {
        question: "Do I own my app after launch?",
        answer:
          "Yes. The app, the design, and the source code belong to you after launch.",
      },
      HOW_TO_START,
    ],
  },
  {
    num: "03",
    slug: "ecommerce-online-stores",
    title: "E-Commerce & Online Stores",
    tag: "Online Sales",
    description:
      "Secure online shops with smooth product browsing, instant filtering, and mobile-first cart checkout.",
    highlights: [
      "Fast Product Catalogs",
      "Easy Cart & Checkout",
      "Order & Stock Control",
    ],
    icon: ShoppingBag,
    heroImage: "/service-images/ecommerce-online-stores.jpg",
    heroAlt: "E-Commerce & Online Stores — CraftLogic",
    benefits: [
      {
        title: "Sell day and night",
        detail: "Your shop stays open 24/7, so customers can buy any time.",
      },
      {
        title: "Easy checkout, fewer drop-offs",
        detail:
          "A smooth, mobile-first checkout helps more visitors finish their purchase.",
      },
      {
        title: "Full control of your shop",
        detail: "Manage products, orders, and stock from one simple place.",
      },
    ],
    whoFor:
      "Shops and brands that want to sell online with a secure store and easy checkout.",
    whoForChips: [
      "Fashion Stores",
      "Beauty Brands",
      "Electronics",
      "Home Goods",
      "Small Brands",
    ],
    steps: [
      {
        title: "Tell Us About Your Shop",
        detail:
          "Share your products, your customers, and how you want to sell online.",
      },
      {
        title: "Design & Plan Approval",
        detail:
          "We plan the shop pages, cart, and checkout. You review and approve the design.",
      },
      {
        title: "Professional Build & Testing",
        detail:
          "We build your secure store and test browsing, cart, and checkout on every device.",
      },
      {
        title: "Launch, Handover & Support",
        detail:
          "We launch your store, hand over everything, and stay in touch for support.",
      },
    ],
    deliverables: [
      "Secure online store",
      "Product catalog with filters",
      "Mobile-first cart and checkout",
      "Order and stock control",
      "Payment setup guidance",
      "Launch and handover",
    ],
    faqs: [
      {
        question: "Can customers pay safely on my store?",
        answer:
          "Yes. Your store uses secure checkout, and we guide you through the payment setup.",
      },
      {
        question: "Can I add products myself after launch?",
        answer:
          "Yes. You can add, edit, and remove products from your store after launch.",
      },
      HOW_TO_START,
    ],
  },
  {
    num: "04",
    slug: "saas-platforms-web-apps",
    title: "SaaS Platforms & Web Apps",
    tag: "Custom Software",
    description:
      "Custom online software with user logins, admin dashboards, role permissions, and monthly subscription billing.",
    highlights: [
      "User Accounts & Roles",
      "Subscription Billing",
      "Custom Admin Portals",
    ],
    icon: Layers,
    heroImage: "/service-images/saas-platforms-web-apps.jpg",
    heroAlt: "SaaS Platforms & Web Apps — CraftLogic",
    benefits: [
      {
        title: "Your own software, your rules",
        detail:
          "A system built for your business, not a tool you have to fit into.",
      },
      {
        title: "Save time every day",
        detail:
          "Automated logins, billing, and admin work replace slow manual tasks.",
      },
      {
        title: "Grows with your business",
        detail: "Add users, features, and plans as your business grows.",
      },
    ],
    whoFor:
      "Businesses that need custom software — bookings, billing, dashboards, and team tools in one place.",
    whoForChips: ["Startups", "Agencies", "Clinics", "Service Businesses"],
    steps: [
      {
        title: "Tell Us About Your Software",
        detail:
          "Share what the software should do — logins, dashboards, billing, and more.",
      },
      {
        title: "Design & Plan Approval",
        detail:
          "We plan the features, roles, and screens. You review and approve the plan.",
      },
      {
        title: "Professional Build & Testing",
        detail: "We build your software with clean code and test every feature carefully.",
      },
      {
        title: "Launch, Handover & Support",
        detail:
          "We launch your software, hand over everything, and stay in touch for support.",
      },
    ],
    deliverables: [
      "Custom web application",
      "User accounts and roles",
      "Admin dashboard",
      "Subscription billing",
      "Secure login system",
      "Launch and handover",
    ],
    faqs: [
      {
        question: "Is my software secure?",
        answer:
          "Yes. We build secure logins, role permissions, and safe data handling into your software.",
      },
      {
        question: "Can the software grow with my business?",
        answer:
          "Yes. We build it so you can add users, features, and plans as your business grows.",
      },
      HOW_TO_START,
    ],
  },
  {
    num: "05",
    slug: "seo-performance-optimization",
    title: "SEO & Performance Optimization",
    tag: "Google Ranking",
    description:
      "Technical SEO, Google schema, and speed tuning so customers find your business first on search.",
    highlights: [
      "Google Search Schema",
      "Core Web Vitals 95+",
      "On-Page SEO Structure",
    ],
    icon: Search,
    heroImage: "/service-images/seo-performance-optimization.jpg",
    heroAlt: "SEO & Performance Optimization — CraftLogic",
    benefits: [
      {
        title: "Found first on Google",
        detail: "Customers find your business before your competitors.",
      },
      {
        title: "A faster website",
        detail: "Fast pages keep visitors happy and help your Google ranking.",
      },
      {
        title: "More visitors, more enquiries",
        detail:
          "Better ranking brings more people to your website every week.",
      },
    ],
    whoFor:
      "Any business with a website that wants more visitors from Google and a faster site.",
    whoForChips: ["Local Businesses", "Online Stores", "Clinics", "Agencies"],
    steps: [
      {
        title: "Tell Us About Your Website",
        detail:
          "Share your website and your goals — more visitors, more calls, or more sales.",
      },
      {
        title: "Full Check & Plan",
        detail:
          "We check your website, speed, and Google ranking, then share a clear plan.",
      },
      {
        title: "Fixes & Improvements",
        detail:
          "We fix technical issues, improve speed, and set up the right page structure.",
      },
      {
        title: "Review & Ongoing Support",
        detail:
          "We share what improved and keep helping your website rank better.",
      },
    ],
    deliverables: [
      "Full website SEO check",
      "Google schema setup",
      "Speed improvements",
      "On-page SEO structure",
      "Core Web Vitals improvements",
      "Clear report of what changed",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO takes time. You will see steady progress as Google reads the improvements we make.",
      },
      {
        question: "Will my website rank first on Google?",
        answer:
          "No one can promise first place. We improve your website step by step so it ranks better and brings more visitors.",
      },
      HOW_TO_START,
    ],
  },
  {
    num: "06",
    slug: "ai-chatbots-whatsapp-automation",
    title: "AI Chatbots & WhatsApp Automation",
    tag: "Smart Growth",
    description:
      "Smart 24/7 website chatbots and instant WhatsApp inquiry flows that answer questions and capture leads automatically.",
    highlights: [
      "24/7 AI Support Bot",
      "Direct WhatsApp Leads",
      "Automated Booking Replies",
    ],
    icon: Bot,
    heroImage: "/service-images/ai-chatbots-whatsapp-automation.jpg",
    heroAlt: "AI Chatbots & WhatsApp Automation — CraftLogic",
    benefits: [
      {
        title: "Replies 24/7",
        detail: "Questions get answered even when your team is offline.",
      },
      {
        title: "No missed enquiries",
        detail: "Every visitor gets a reply, and every lead is captured.",
      },
      {
        title: "More bookings, less work",
        detail:
          "Automated replies handle booking questions so your team saves time.",
      },
    ],
    whoFor:
      "Businesses that get many questions on their website or WhatsApp and want fast replies, day and night.",
    whoForChips: [
      "Clinics",
      "Restaurants",
      "Real Estate",
      "Shops",
      "Service Businesses",
    ],
    steps: [
      {
        title: "Tell Us About Your Questions",
        detail:
          "Share the questions your customers ask most on your website and WhatsApp.",
      },
      {
        title: "Design & Plan Approval",
        detail:
          "We plan the answers and the chat flow. You review and approve it.",
      },
      {
        title: "Professional Build & Testing",
        detail:
          "We build your chatbot and WhatsApp replies and test them with real questions.",
      },
      {
        title: "Launch, Handover & Support",
        detail:
          "We launch your chatbot, hand over everything, and stay in touch for support.",
      },
    ],
    deliverables: [
      "24/7 website chatbot",
      "WhatsApp inquiry replies",
      "Automated booking answers",
      "Lead capture setup",
      "Simple admin controls",
      "Launch and handover",
    ],
    faqs: [
      {
        question: "Does the chatbot reply at night too?",
        answer:
          "Yes. The chatbot answers questions 24/7, even when your team is offline.",
      },
      {
        question: "Can it reply on WhatsApp as well?",
        answer:
          "Yes. We set up instant replies on WhatsApp so no enquiry is missed.",
      },
      HOW_TO_START,
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
