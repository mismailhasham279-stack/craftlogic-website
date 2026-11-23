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
      className="group block h-[72px] sm:h-[108px] lg:h-[120px] w-full [perspective:1100px] focus-visible:outline-none"
    >
      <div
        className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d]"
        style={{
          transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center rounded-xl sm:rounded-2xl border border-neutral-200/80 bg-white px-3 text-center shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors group-hover:border-[#0AAA8C]/50 [backface-visibility:hidden]">
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

        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-neutral-200/90 bg-white px-3 text-center shadow-[0_4px_14px_-4px_rgba(0,0,0,0.07)] transition-colors group-hover:border-[#0AAA8C] [backface-visibility:hidden] [transform:rotateY(180deg)]">
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
  imageUrl: string;
  titleColor: string;
  isSerif?: boolean;
}

const BUSINESS_SHOWCASE_LIST: BusinessShowcaseItem[] = [
  {
    id: "01",
    businessName: "Real Estate & Property",
    industry: "Listings & CRM portal",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: false,
  },
  {
    id: "02",
    businessName: "Medical & Dental Clinic",
    industry: "Patient booking & records",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0AAA8C",
    isSerif: false,
  },
  {
    id: "03",
    businessName: "E-Commerce & Retail",
    industry: "Online store & checkout",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: true,
  },
  {
    id: "04",
    businessName: "Restaurant & Cafe",
    industry: "Digital menu & delivery",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
    titleColor: "#9A3412",
    isSerif: false,
  },
  {
    id: "05",
    businessName: "Pharmacy & Healthcare",
    industry: "Medicine delivery & inventory",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0F766E",
    isSerif: false,
  },
  {
    id: "06",
    businessName: "Fitness & Gym Studio",
    industry: "Memberships & class app",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: false,
  },
  {
    id: "07",
    businessName: "Law Firm & Legal",
    industry: "Corporate advisory & booking",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    titleColor: "#1E293B",
    isSerif: true,
  },
  {
    id: "08",
    businessName: "Travel & Tour Agency",
    industry: "Packages & hotel booking",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0AAA8C",
    isSerif: false,
  },
  {
    id: "09",
    businessName: "Car Rental & Dealership",
    industry: "Fleet catalog & reservations",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: false,
  },
  {
    id: "10",
    businessName: "Education & Academy",
    industry: "LMS courses & student portal",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
    titleColor: "#1D4ED8",
    isSerif: false,
  },
  {
    id: "11",
    businessName: "Construction & Builders",
    industry: "Project portfolio & estimates",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80",
    titleColor: "#334155",
    isSerif: false,
  },
  {
    id: "12",
    businessName: "Salon & Beauty Spa",
    industry: "Appointment & service menu",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: true,
  },
  {
    id: "13",
    businessName: "Logistics & Cargo",
    industry: "Shipment tracking & dispatch",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80",
    titleColor: "#065F46",
    isSerif: false,
  },
  {
    id: "14",
    businessName: "Hotels & Resorts",
    industry: "Direct room booking engine",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0AAA8C",
    isSerif: true,
  },
  {
    id: "15",
    businessName: "Fintech & Payments",
    industry: "Digital wallet & invoicing",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80",
    titleColor: "#4F46E5",
    isSerif: false,
  },
  {
    id: "16",
    businessName: "Architecture & Interiors",
    industry: "3D showcase & consultations",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: true,
  },
  {
    id: "17",
    businessName: "Fashion & Apparel Brand",
    industry: "D2C lookbook & store",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: false,
  },
  {
    id: "18",
    businessName: "Solar & Clean Energy",
    industry: "ROI calculator & lead capture",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0AAA8C",
    isSerif: false,
  },
  {
    id: "19",
    businessName: "Accounting & Tax Firm",
    industry: "Client portal & audit tools",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
    titleColor: "#1E3A8A",
    isSerif: false,
  },
  {
    id: "20",
    businessName: "Jewelry & Luxury Goods",
    industry: "High-ticket catalog & vault",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: true,
  },
  {
    id: "21",
    businessName: "Event & Wedding Planner",
    industry: "Gallery & inquiry workflow",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0AAA8C",
    isSerif: true,
  },
  {
    id: "22",
    businessName: "SaaS & Tech Startups",
    industry: "Product landing & onboarding",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: false,
  },
  {
    id: "23",
    businessName: "Auto Detailing & Workshop",
    industry: "Service packages & booking",
    imageUrl: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0F766E",
    isSerif: false,
  },
  {
    id: "24",
    businessName: "Home Cleaning & Services",
    industry: "Instant quote & scheduling",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: false,
  },
  {
    id: "25",
    businessName: "Wholesale & Manufacturing",
    industry: "B2B bulk orders & catalog",
    imageUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=400&q=80",
    titleColor: "#334155",
    isSerif: false,
  },
  {
    id: "26",
    businessName: "Diagnostic & Path Lab",
    industry: "Online test reports & home visit",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0AAA8C",
    isSerif: false,
  },
  {
    id: "27",
    businessName: "Photography & Media",
    industry: "Client proofing & portfolios",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0A0A0A",
    isSerif: true,
  },
  {
    id: "28",
    businessName: "Grocery & Supermart",
    industry: "Quick commerce & delivery app",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    titleColor: "#065F46",
    isSerif: false,
  },
  {
    id: "29",
    businessName: "HR & Recruitment Agency",
    industry: "Job board & applicant tracking",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80",
    titleColor: "#1E293B",
    isSerif: false,
  },
  {
    id: "30",
    businessName: "Consulting & Advisory",
    industry: "Executive brand & lead funnel",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
    titleColor: "#0AAA8C",
    isSerif: true,
  },
];

function BusinessThumbImage({ src, alt }: { src: string; alt: string }) {
  const [hasFailed, setHasFailed] = useState(false);

  if (hasFailed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-neutral-100">
        <Layers className="h-4 w-4 text-[#0AAA8C]" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasFailed(true)}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
    />
  );
}

function HorizontalBusinessCard({ item }: { item: BusinessShowcaseItem }) {
  return (
    <a
      href="#work"
      className="group flex h-[76px] w-[235px] sm:h-[108px] sm:w-[330px] shrink-0 items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-neutral-200/80 bg-white px-3 py-2 sm:px-4 sm:py-3.5 shadow-[0_1px_6px_rgba(0,0,0,0.025)] transition-all duration-300 hover:border-[#0AAA8C]/50 hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.08)]"
    >
      <div className="relative h-[52px] w-[72px] sm:h-[74px] sm:w-[106px] shrink-0 overflow-hidden rounded-lg sm:rounded-xl border border-neutral-200/70 bg-neutral-100">
        <BusinessThumbImage src={item.imageUrl} alt={item.businessName} />
      </div>

      <div className="min-w-0 flex-1 text-left">
        <h4
          style={{ color: item.titleColor }}
          className={`truncate text-[14px] sm:text-[18.5px] leading-tight tracking-[-0.02em] transition-opacity group-hover:opacity-85 ${
            item.isSerif
              ? "font-serif italic font-semibold"
              : "font-display font-extrabold"
          }`}
        >
          {item.businessName}
        </h4>
        <p className="mt-0.5 sm:mt-1 truncate text-[10.5px] sm:text-xs font-normal text-neutral-500">
          {item.industry}
        </p>
      </div>
    </a>
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
      {/* SECTION A: 6 FOCUSED 3D FLIPPING CAPABILITIES */}
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

      {/* SECTION B: 30 BUSINESS INDUSTRIES DUAL MARQUEE (LEFT & RIGHT ON ALL SCREENS) */}
      <div
        className="border-t border-neutral-200/80 bg-[#F5F5F7]/70 pt-8 pb-9 sm:pt-14 sm:pb-14"
        onMouseEnter={() => setMarqueePaused(true)}
        onMouseLeave={() => setMarqueePaused(false)}
      >
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
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white px-3 py-1 sm:px-4 sm:py-2 text-[10.5px] sm:text-xs font-medium text-neutral-700 shadow-2xs transition-colors hover:border-neutral-300 hover:text-[#0A0A0A] cursor-pointer"
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

        <div className="relative w-full overflow-hidden">
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
            href="#work"
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