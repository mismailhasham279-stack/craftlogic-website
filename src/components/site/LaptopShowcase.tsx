import React, { useState, useEffect, useMemo } from "react";
import { Pause, Play, ArrowUpRight, Layers } from "lucide-react";

interface CapabilityTile {
  id: string;
  category: string;
  title: string;
  isSerif: boolean;
  href: string;
}

const CAPABILITY_TILES: CapabilityTile[] = [
  { id: "01", category: "Web", title: "Website Development", isSerif: false, href: "#services" },
  { id: "02", category: "iOS & Android", title: "Mobile Apps", isSerif: true, href: "#services" },
  { id: "03", category: "Online Sales", title: "E-Commerce Stores", isSerif: false, href: "#services" },
  { id: "04", category: "Web Apps", title: "SaaS Platforms", isSerif: true, href: "#services" },
  { id: "05", category: "Google Ranking", title: "SEO & Speed", isSerif: false, href: "#services" },
  { id: "06", category: "Smart Growth", title: "AI & Automation", isSerif: true, href: "#services" },
];

const FLIP_SEQUENCE = [0, 3, 1, 4, 2, 5];

function FlipCapabilityCard({
  tile,
  isFlipped,
}: {
  tile: CapabilityTile;
  isFlipped: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const showBack = hovered ? !isFlipped : isFlipped;

  return (
    <a
      href={tile.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block h-[72px] sm:h-[108px] lg:h-[120px] w-full focus-visible:outline-none"
    >
      <div className="relative h-full w-full">
        <div
          className={`absolute inset-0 flex items-center justify-center rounded-xl sm:rounded-2xl border border-neutral-200/80 bg-white px-3 text-center shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-opacity duration-200 group-hover:border-[#0AAA8C]/50 ${showBack ? "opacity-0" : "opacity-100"}`}
        >
          <span
            className={`text-[13.5px] sm:text-[18px] lg:text-[20px] leading-tight tracking-[-0.02em] text-[#0A0A0A] ${
              tile.isSerif
                ? "font-serif italic font-semibold"
                : "font-display font-bold"
            }`}
          >
            {tile.title}
          </span>
        </div>

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-neutral-200/90 bg-white px-3 text-center shadow-[0_4px_14px_-4px_rgba(0,0,0,0.07)] transition-opacity duration-200 group-hover:border-[#0AAA8C] ${showBack ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-[9px] sm:text-[11px] font-medium tracking-wide text-neutral-400">
            {tile.category}
          </span>
          <div className="mt-0.5 sm:mt-1 flex items-center justify-center gap-1">
            <span className="font-display text-[12px] sm:text-[15.5px] font-bold leading-tight tracking-[-0.02em] text-[#0A0A0A] group-hover:text-[#0AAA8C] transition-colors">
              {tile.title}
            </span>
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 text-[#0A0A0A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0AAA8C]" />
          </div>
        </div>
      </div>
    </a>
  );
}

interface BusinessShowcaseItem {
  id: string;
  businessName: string;
  industry: string;
  domain: string;
  brand: string;
  heroHeadline: string;
  ctaLabel: string;
  imageUrl: string;
  accentColor: string;
}

const BUSINESS_SHOWCASE_LIST: BusinessShowcaseItem[] = [
  {
    id: "01",
    businessName: "Real Estate & Property",
    industry: "Listings, virtual tours & CRM portal",
    domain: "primeestates.com",
    brand: "PRIME",
    heroHeadline: "Luxury Homes & Tours",
    ctaLabel: "Listings",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0AAA8C",
  },
  {
    id: "02",
    businessName: "Medical & Dental Clinic",
    industry: "Patient booking & digital records",
    domain: "medicareplus.com",
    brand: "MEDICARE",
    heroHeadline: "24/7 Specialist Care",
    ctaLabel: "Book Visit",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0284C7",
  },
  {
    id: "03",
    businessName: "E-Commerce & Retail",
    industry: "Custom online store & fast checkout",
    domain: "luxestore.shop",
    brand: "LUXE",
    heroHeadline: "New Season Collection",
    ctaLabel: "Shop Now",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0AAA8C",
  },
  {
    id: "04",
    businessName: "Restaurant & Cafe",
    industry: "Digital menu, delivery & reservations",
    domain: "saffronbistro.com",
    brand: "SAFFRON",
    heroHeadline: "Artisan Dining & Menu",
    ctaLabel: "Reserve",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
    accentColor: "#D97706",
  },
  {
    id: "05",
    businessName: "Pharmacy & Healthcare",
    industry: "Medicine delivery & stock inventory",
    domain: "carerx.pk",
    brand: "CARERX",
    heroHeadline: "30-Min Rx Delivery",
    ctaLabel: "Order Rx",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80",
    accentColor: "#059669",
  },
  {
    id: "06",
    businessName: "Fitness & Gym Studio",
    industry: "Memberships, trainers & class app",
    domain: "ironpulsefit.com",
    brand: "IRONPULSE",
    heroHeadline: "Strength & Training",
    ctaLabel: "Join Club",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
    accentColor: "#DC2626",
  },
  {
    id: "07",
    businessName: "Law Firm & Legal",
    industry: "Corporate advisory & consultation booking",
    domain: "sterlinglaw.com",
    brand: "STERLING",
    heroHeadline: "Trusted Legal Counsel",
    ctaLabel: "Consult",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    accentColor: "#1E293B",
  },
  {
    id: "08",
    businessName: "Travel & Tour Agency",
    industry: "Tour packages & instant hotel booking",
    domain: "horizontours.com",
    brand: "HORIZON",
    heroHeadline: "Curated Tours & Stays",
    ctaLabel: "Explore",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0AAA8C",
  },
  {
    id: "09",
    businessName: "Car Rental & Dealership",
    industry: "Fleet catalog & online reservations",
    domain: "elitomotors.com",
    brand: "ELITO",
    heroHeadline: "Certified Luxury Fleet",
    ctaLabel: "Book Car",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0F172A",
  },
  {
    id: "10",
    businessName: "Education & Academy",
    industry: "LMS video courses & student portal",
    domain: "nextgenacademy.edu",
    brand: "NEXTGEN",
    heroHeadline: "Master Digital Skills",
    ctaLabel: "Enroll",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
    accentColor: "#2563EB",
  },
  {
    id: "11",
    businessName: "Construction & Builders",
    industry: "Project portfolio & instant estimates",
    domain: "apexbuilders.com",
    brand: "APEXBUILD",
    heroHeadline: "Commercial & Custom",
    ctaLabel: "Estimate",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80",
    accentColor: "#EA580C",
  },
  {
    id: "12",
    businessName: "Salon & Beauty Spa",
    industry: "Online appointments & service menu",
    domain: "velvetsalon.com",
    brand: "VELVET",
    heroHeadline: "Bridal & Beauty Spa",
    ctaLabel: "Book Appt",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80",
    accentColor: "#BE185D",
  },
  {
    id: "13",
    businessName: "Logistics & Cargo",
    industry: "Live shipment tracking & dispatch",
    domain: "swiftcargo.global",
    brand: "SWIFTCARGO",
    heroHeadline: "Global Freight Track",
    ctaLabel: "Track",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0AAA8C",
  },
  {
    id: "14",
    businessName: "Hotels & Resorts",
    industry: "Direct room booking & guest portal",
    domain: "grandresorts.com",
    brand: "GRAND",
    heroHeadline: "5-Star Luxury Suites",
    ctaLabel: "Book Room",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0D9488",
  },
  {
    id: "15",
    businessName: "Fintech & Payments",
    industry: "Digital wallet, billing & invoicing",
    domain: "payflow.io",
    brand: "PAYFLOW",
    heroHeadline: "Instant Smart Billing",
    ctaLabel: "Start Free",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80",
    accentColor: "#4F46E5",
  },
  {
    id: "16",
    businessName: "Architecture & Interiors",
    industry: "3D project showcase & consultations",
    domain: "atelierarch.studio",
    brand: "ATELIER",
    heroHeadline: "Bespoke Living Spaces",
    ctaLabel: "Portfolio",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0AAA8C",
  },
  {
    id: "17",
    businessName: "Fashion & Apparel Brand",
    industry: "D2C lookbook store & size guide",
    domain: "noiratelier.store",
    brand: "NOIR",
    heroHeadline: "Minimalist Streetwear",
    ctaLabel: "Lookbook",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80",
    accentColor: "#111827",
  },
  {
    id: "18",
    businessName: "Solar & Clean Energy",
    industry: "Savings calculator & lead capture",
    domain: "solarpro.energy",
    brand: "SOLARPRO",
    heroHeadline: "Cut Energy Bills 70%",
    ctaLabel: "Free Audit",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0AAA8C",
  },
  {
    id: "19",
    businessName: "Accounting & Tax Firm",
    industry: "Client portal & financial audit tools",
    domain: "ledgerpro.tax",
    brand: "LEDGERPRO",
    heroHeadline: "Smart Tax & CFO Advisory",
    ctaLabel: "Book Audit",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
    accentColor: "#047857",
  },
  {
    id: "20",
    businessName: "Jewelry & Luxury Goods",
    industry: "High-ticket catalog & VIP orders",
    domain: "aureliajewels.com",
    brand: "AURELIA",
    heroHeadline: "Handcrafted Fine Gold",
    ctaLabel: "Collection",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
    accentColor: "#B45309",
  },
  {
    id: "21",
    businessName: "Event & Wedding Planner",
    industry: "Event gallery & inquiry workflow",
    domain: "royalevents.co",
    brand: "ROYAL",
    heroHeadline: "Unforgettable Weddings",
    ctaLabel: "Packages",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80",
    accentColor: "#9D174D",
  },
  {
    id: "22",
    businessName: "SaaS & Tech Startups",
    industry: "Product landing & user onboarding",
    domain: "cloudflow.io",
    brand: "CLOUDFLOW",
    heroHeadline: "Automate Workflow",
    ctaLabel: "Start Free",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    accentColor: "#4F46E5",
  },
  {
    id: "23",
    businessName: "Auto Detailing & Workshop",
    industry: "Service packages & slot booking",
    domain: "apexdetail.auto",
    brand: "APEXAUTO",
    heroHeadline: "Ceramic & Paint Care",
    ctaLabel: "Book Slot",
    imageUrl: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0F766E",
  },
  {
    id: "24",
    businessName: "Home Cleaning & Services",
    industry: "Instant price quote & scheduling",
    domain: "sparklehome.co",
    brand: "SPARKLE",
    heroHeadline: "Spotless Home On Demand",
    ctaLabel: "Get Quote",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0AAA8C",
  },
  {
    id: "25",
    businessName: "Wholesale & Manufacturing",
    industry: "B2B bulk orders & digital catalog",
    domain: "titanindustrial.b2b",
    brand: "TITAN B2B",
    heroHeadline: "Direct Factory Supply",
    ctaLabel: "Catalog",
    imageUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=400&q=80",
    accentColor: "#1D4ED8",
  },
  {
    id: "26",
    businessName: "Diagnostic & Path Lab",
    industry: "Online test reports & home sample",
    domain: "biolab.health",
    brand: "BIOLAB",
    heroHeadline: "Fast Digital Lab Reports",
    ctaLabel: "Home Test",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0AAA8C",
  },
  {
    id: "27",
    businessName: "Photography & Media",
    industry: "Client proofing & shoot portfolios",
    domain: "luminaframes.studio",
    brand: "LUMINA",
    heroHeadline: "Brand & Editorial Shoots",
    ctaLabel: "Book Shoot",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
    accentColor: "#171717",
  },
  {
    id: "28",
    businessName: "Grocery & Supermart",
    industry: "Quick commerce & delivery app",
    domain: "freshmart.pk",
    brand: "FRESHMART",
    heroHeadline: "15-Min Grocery Delivery",
    ctaLabel: "Order Now",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    accentColor: "#059669",
  },
  {
    id: "29",
    businessName: "HR & Recruitment Agency",
    industry: "Job board & applicant tracking",
    domain: "talenthub.jobs",
    brand: "TALENTHUB",
    heroHeadline: "Hire Top Global Talent",
    ctaLabel: "Post Job",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80",
    accentColor: "#1E293B",
  },
  {
    id: "30",
    businessName: "Consulting & Advisory",
    industry: "Executive brand & lead funnel",
    domain: "scaleadvisory.com",
    brand: "SCALEPRO",
    heroHeadline: "Executive Growth Strategy",
    ctaLabel: "Book Call",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
    accentColor: "#0AAA8C",
  },
];

function MiniLaptopWebsiteHero({ item }: { item: BusinessShowcaseItem }) {
  const [hasFailed, setHasFailed] = useState(false);

  return (
    <div
      className="relative flex w-[134px] sm:w-[162px] shrink-0 flex-col items-center"
      aria-hidden="true"
    >
      {/* Laptop Screen Lid & Dark Bezel */}
      <div className="w-[124px] sm:w-[150px] overflow-hidden rounded-t-md sm:rounded-t-lg border-[1.5px] sm:border-[2px] border-neutral-800 bg-neutral-950 shadow-xs">
        {/* Browser Address Bar */}
        <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-100 px-1.5 py-[2px]">
          <div className="flex items-center gap-[2px]">
            <span className="h-1 w-1 rounded-full bg-rose-400" />
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
          </div>
          <span className="max-w-[76px] sm:max-w-[92px] truncate rounded bg-white px-1 font-mono text-[5px] sm:text-[6px] text-neutral-600">
            {item.domain}
          </span>
          <span className="h-1 w-2 rounded-full bg-neutral-300" />
        </div>

        {/* Website In-Page Navbar */}
        <div className="flex items-center justify-between border-b border-neutral-100 bg-white px-1.5 py-[2px]">
          <span className="font-display text-[5px] sm:text-[6px] font-black tracking-tight text-neutral-900">
            {item.brand}
          </span>
          <div className="flex items-center gap-1 text-[4.5px] sm:text-[5px] font-medium text-neutral-400">
            <span>Home</span>
            <span className="hidden sm:inline">Work</span>
            <span
              className="rounded-xs px-1 py-[0.5px] font-bold text-white"
              style={{ backgroundColor: item.accentColor }}
            >
              Start
            </span>
          </div>
        </div>

        {/* Website Hero Split Section (Left Hero Text + Right Industry Photo) */}
        <div className="flex h-[54px] sm:h-[68px] w-full overflow-hidden bg-white">
          <div className="flex w-[52%] flex-col justify-center bg-neutral-50 px-1.5 py-1">
            <span
              className="inline-block w-fit rounded-xs px-1 py-[0.5px] font-mono text-[4px] sm:text-[4.5px] font-bold uppercase text-white"
              style={{ backgroundColor: item.accentColor }}
            >
              #1 Rated
            </span>
            <p className="mt-0.5 line-clamp-2 font-display text-[5.5px] sm:text-[6.5px] font-extrabold leading-[1.12] text-neutral-900">
              {item.heroHeadline}
            </p>
            <span
              className="mt-1 inline-block w-fit rounded-xs px-1 py-[1px] font-sans text-[4.5px] sm:text-[5px] font-bold text-white"
              style={{ backgroundColor: item.accentColor }}
            >
              {item.ctaLabel} →
            </span>
          </div>

          <div className="relative h-full w-[48%] overflow-hidden bg-neutral-100">
            {!hasFailed ? (
              <img
                src={item.imageUrl}
                alt=""
                onError={() => setHasFailed(true)}
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-neutral-100">
                <Layers className="h-3.5 w-3.5 text-[#0AAA8C]" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Metallic Laptop Base + Center Hinge Notch */}
      <div className="relative h-[4px] sm:h-[5px] w-full rounded-b-md bg-gradient-to-b from-neutral-300 to-neutral-400 shadow-2xs">
        <div className="mx-auto h-[1.5px] sm:h-[2px] w-5 sm:w-6 rounded-b-xs bg-neutral-500/70" />
      </div>
    </div>
  );
}

/* Non-clickable Industry Showcase Card (pure visual preview, zero navigation) */
function HorizontalBusinessCard({ item }: { item: BusinessShowcaseItem }) {
  return (
    <article className="flex min-h-[102px] w-[335px] sm:min-h-[128px] sm:w-[435px] shrink-0 cursor-default select-none items-center gap-3.5 sm:gap-4 rounded-2xl border border-neutral-200/90 bg-white px-3.5 py-2.5 sm:px-4 sm:py-3.5 shadow-[0_1px_6px_rgba(0,0,0,0.03)]">
      <MiniLaptopWebsiteHero item={item} />

      <div className="flex-1 text-left">
        <span className="inline-block font-mono text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#0AAA8C]">
          #{item.id} • WEBSITE &amp; APP
        </span>
        <h4 className="mt-0.5 font-display text-[15px] sm:text-[18.5px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0A0A0A]">
          {item.businessName}
        </h4>
        <p className="mt-1 text-[11px] sm:text-[12.5px] font-normal leading-snug text-neutral-600">
          {item.industry}
        </p>
      </div>
    </article>
  );
}

export const LaptopShowcase: React.FC = () => {
  const [tilesPaused, setTilesPaused] = useState(false);
  const [flippedIndices, setFlippedIndices] = useState<Set<number>>(
    () => new Set([1, 4])
  );
  const [marqueePaused, setMarqueePaused] = useState(false);

  useEffect(() => {
    if (tilesPaused) return;
    let pointer = 0;

    const timer = setInterval(() => {
      const targetIndex = FLIP_SEQUENCE[pointer % FLIP_SEQUENCE.length]!;
      setFlippedIndices((prev) => {
        const next = new Set(prev);
        if (next.has(targetIndex)) {
          next.delete(targetIndex);
        } else {
          next.add(targetIndex);
        }
        return next;
      });
      pointer += 1;
    }, 1050);

    return () => clearInterval(timer);
  }, [tilesPaused]);

  const topRowBusinesses = useMemo(() => BUSINESS_SHOWCASE_LIST.slice(0, 15), []);
  const bottomRowBusinesses = useMemo(() => BUSINESS_SHOWCASE_LIST.slice(15, 30), []);

  return (
    <div className="w-full select-none">
      {/* SECTION A: 6 FOCUSED CAPABILITIES (gentle crossfade, no 3D flip) */}
      <div className="mx-auto max-w-[1320px] px-3.5 sm:px-6 lg:px-10 pt-1 pb-8 sm:pb-14">
        <div className="mb-3.5 sm:mb-6 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs sm:text-[15px] font-medium text-neutral-600">
            Everything we build to grow your business online
          </p>

          <button
            type="button"
            onClick={() => setTilesPaused((prev) => !prev)}
            aria-label={tilesPaused ? "Play tiles" : "Pause tiles"}
            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-[10.5px] sm:text-xs font-medium text-neutral-600 shadow-2xs transition-colors hover:border-neutral-300 hover:text-[#0A0A0A] cursor-pointer"
          >
            {tilesPaused ? (
              <>
                <Play className="h-3 w-3 text-[#0AAA8C]" />
                <span>Play tiles</span>
              </>
            ) : (
              <>
                <Pause className="h-3 w-3 text-neutral-500" />
                <span>Pause tiles</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-6 lg:gap-3.5">
          {CAPABILITY_TILES.map((tile, idx) => (
            <FlipCapabilityCard
              key={tile.id}
              tile={tile}
              isFlipped={flippedIndices.has(idx)}
            />
          ))}
        </div>
      </div>

      {/* SECTION B: 30 BUSINESS INDUSTRIES DUAL MARQUEE (STOPS ONLY ON PAUSE BUTTON CLICK) */}
      <div className="border-t border-neutral-200/80 bg-[#F5F5F7]/70 pt-8 pb-9 sm:pt-14 sm:pb-14">
        {/* Override any CSS :hover animation pause so only the Pause button stops motion */}
        <style>{`
          .cl-continuous-marquee:hover .animate-marquee-left,
          .cl-continuous-marquee:hover .animate-marquee-right {
            animation-play-state: running;
          }
          .cl-continuous-marquee .marquee-paused,
          .cl-continuous-marquee:hover .marquee-paused {
            animation-play-state: paused !important;
          }
        `}</style>

        <div className="mx-auto mb-4 sm:mb-8 flex max-w-[1320px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-10">
          <p className="truncate text-xs sm:text-[15px] font-medium text-neutral-600">
            <span className="sm:hidden">Built for 30+ business industries</span>
            <span className="hidden sm:inline">
              Websites &amp; apps tailored for every business industry
            </span>
          </p>

          <button
            type="button"
            onClick={() => setMarqueePaused((prev) => !prev)}
            aria-pressed={marqueePaused}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white px-3 py-1 sm:px-4 sm:py-2 text-[10.5px] sm:text-xs font-medium text-neutral-700 shadow-2xs transition-colors hover:border-[#0AAA8C] hover:text-[#0AAA8C] cursor-pointer"
          >
            {marqueePaused ? (
              <>
                <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#0AAA8C]" />
                <span>Play</span>
              </>
            ) : (
              <>
                <Pause className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-neutral-500" />
                <span>Pause</span>
              </>
            )}
          </button>
        </div>

        <div className="cl-continuous-marquee relative w-full overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-6 sm:w-20 bg-gradient-to-r from-[#F7F7F8] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-6 sm:w-20 bg-gradient-to-l from-[#F7F7F8] to-transparent"
          />

          <div className="mb-3 sm:mb-5 flex overflow-hidden">
            <div
              className={`animate-marquee-left gap-3 pr-3 sm:gap-5 sm:pr-5 ${
                marqueePaused ? "marquee-paused" : ""
              }`}
            >
              {[...topRowBusinesses, ...topRowBusinesses].map((item, idx) => (
                <HorizontalBusinessCard key={`b-row1-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden">
            <div
              className={`animate-marquee-right gap-3 pr-3 sm:gap-5 sm:pr-5 ${
                marqueePaused ? "marquee-paused" : ""
              }`}
            >
              {[...bottomRowBusinesses, ...bottomRowBusinesses].map((item, idx) => (
                <HorizontalBusinessCard key={`b-row2-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 flex justify-center px-4">
          <a
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0AAA8C] active:scale-[0.98]"
          >
            <span>View all projects</span>
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LaptopShowcase;