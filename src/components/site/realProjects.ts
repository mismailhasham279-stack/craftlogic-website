export interface CaseStudyData {
  id: string;
  projectNumber: string;
  title: string;
  client: string;
  category: string;
  location: string;
  liveUrl?: string;
  thumbnail: string;
  accentColor: string;
  metrics: {
    value: string;
    label: string;
  };
  problem: {
    summary: string;
    painPoints: string[];
  };
  solution: {
    summary: string;
    features: string[];
  };
  techStack: string[];
}

export const realCaseStudies: CaseStudyData[] = [
  {
    id: "luxevia-purse",
    projectNumber: "#01",
    title: "Designer Luxury Made Easy",
    client: "Luxevia Purse",
    category: "High-Ticket Luxury E-Commerce",
    location: "Global / United States",
    liveUrl: "https://usa-luxe-curated.vercel.app",
    // Verified High-End Luxury Leather Bag Architecture Visual
    thumbnail:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#D4AF37", // Warm Gold
    metrics: {
      value: "4.2x",
      label: "Conversion Velocity",
    },
    problem: {
      summary:
        "High-ticket designer bags social media DMs aur personal chats ke zariye sell ho rahe the. Buyers authenticity verify nahi kar pa rahe the aur pricing inquiries par customer support ghanton manual reply karta tha.",
      painPoints: [
        "Customer drop-offs due to manual bank transfer / chat-based payment links",
        "High-friction inventory checks leading to double-booked luxury items",
        "Lack of authentic corporate trust signals and buyer protection guarantees",
      ],
    },
    solution: {
      summary:
        "Bespoke headless editorial storefront build kiya jisme high-resolution product inspection, sub-second checkout, automated Stripe processing, aur instant buyer authentication integrate kiye gaye.",
      features: [
        "Sub-second Vercel Edge hydration pipeline (< 24ms TTFB)",
        "Zero-friction automated payment settlement & instant order dispatch",
        "Editorial luxury visual layout designed specifically for high-ticket buyers",
      ],
    },
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "Vercel Edge", "Stripe API"],
  },
  {
    id: "nails-by-grace",
    projectNumber: "#02",
    title: "Gel-X Nails & Studio Booking Engine",
    client: "NailsByGrace",
    category: "Service Booking & Studio System",
    location: "Deanside, Victoria (Australia)",
    // Aesthetic Clean Nail Studio & Manicure Art Visual
    thumbnail:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#F472B6", // Rose Gold / Soft Pink Accent
    metrics: {
      value: "92%",
      label: "Manual DMs Reduced",
    },
    problem: {
      summary:
        "Clients Instagram comments aur direct messages me available slots poochte the. Timings miss hone, no-shows, aur double-booking ki wajah se studio ka weekly $800+ revenue waste ho raha tha.",
      painPoints: [
        "Answering repeated slot availability queries manually all day",
        "Zero deposit guarantee resulting in frequent client no-shows",
        "Nail design portfolio scattered across unindexed Instagram post feeds",
      ],
    },
    solution: {
      summary:
        "Self-serve studio booking platform deploy kiya jisme curated Gel-X visual portfolio, automated calendar slot reservations, aur automated deposit collection seamlessly connect hain.",
      features: [
        "Interactive nail art visual portfolio with service categorization",
        "Zero-overlap real-time booking calendar with automated SMS/email reminders",
        "Secure upfront deposit authorization to eliminate client no-shows",
      ],
    },
    techStack: ["React 19", "Tailwind CSS", "Calendar Sync API", "Zod Schema", "Lucide"],
  },
  {
    id: "shoptop-streetwear",
    projectNumber: "#03",
    title: "Curated Asian Streetwear Logistics",
    client: "ShopTop",
    category: "Cross-Border Streetwear Store",
    location: "Almaty / Astana, Kazakhstan",
    // High-Energy Dark Streetwear / Cyberpunk Urban Fashion Visual
    thumbnail:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#10B981", // Emerald Green
    metrics: {
      value: "+180%",
      label: "Drop Velocity",
    },
    problem: {
      summary:
        "Exclusive Asian streetwear drops ko Kazakhstan me sell karne ke liye manual Telegram groups aur spreadsheets use hoti theen. Sizing queries aur shipping tracking inquiries support staff ko overwhelm kar deti theen.",
      painPoints: [
        "Manual order taking resulting in sold-out items being purchased accidentally",
        "Customer anxiety regarding cross-border customs and package delivery times",
        "Slow mobile browsing speeds causing high bounce rates on product launches",
      ],
    },
    solution: {
      summary:
        "High-performance urban streetwear mobile storefront build kiya jisme dynamic drop countdowns, automated size conversion matrices, aur real-time parcel tracking dashboard shamil hai.",
      features: [
        "Mobile-first ultra-responsive architecture engineered for hype-drop spikes",
        "Integrated parcel tracking system with regional carrier status API",
        "Visual size recommendation tool eliminating sizing confusion",
      ],
    },
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "State Machine", "Edge CDN"],
  },
];
