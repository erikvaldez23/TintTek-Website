// src/components/ServicePage.jsx
// NOTE: Wrap your app once with <HelmetProvider> in main.jsx/App.jsx.

import React, {
  useEffect,
  useMemo,
  lazy,
  Suspense,
  useRef,
  useState,
} from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  GlobalStyles,
} from "@mui/material";
import Link from "@mui/material/Link";
import SEO from "./SEO";

// Keep light, above-the-fold pieces eagerly loaded
import Topbar from "./key-components/Topbar";
import Footer from "./key-components/Footer";
import BusinessInfo from "./hero/BusinessInfo";

// Lazy-load heavier blocks
import PricingComponent from "./Pricing";
const Contact = lazy(() => import("./SubContact"));
import HowItWorks from "./HowItWorks";
import ServicesOffered from "./ServicesOffered";
const CallToAction = lazy(() => import("./SubCTA"));
const TintingSimulator = lazy(() => import("./TintingSimulator"));
const PPFSelector = lazy(() => import("./PPFSelector"));
import FAQSection from "./FAQSection";
import TintPackages from "./TintPackages";
const TeslaTintingSimulator = lazy(() => import("./TeslaTintingSimulator"));
const QuickLinks = lazy(() => import("./SubQuickLinks"));
import TeslaTintPackages from "./TeslaTintPackages";
import BenefitsGrid from "./BenefitsGrid";
const ImageCTA = lazy(() => import("./ImageCTA"));
import PaintCorrectionServices from "./PaintCorrectionServices";
const VideoCTA = lazy(() => import("./VideoCTA"));
import HeadlightPackages from "./HeadlightPackages";
const BlogCTA = lazy(() => import("./BlogCTA"));
const PPFVision = lazy(() => import("./PPF-Vision")); // (if used elsewhere)
const ImageCarousel = lazy(() => import("./ImageCarousel"));
const TeslaCTA = lazy(() => import("./TeslaCTA"));
const F1Banner = lazy(() => import("./f1-banner"));

// ---- SITE SETTINGS ----
const SITE = "https://tinttekplus.com";
const SERVICES_BASE = "/services";

// Small, reusable lazy fallback
const Fallback = <Box sx={{ minHeight: 120 }} />;

// In-view gate to defer mounting until scrolled near
function InViewMount({ children, rootMargin = "200px" }) {
  const ref = useRef(null);
  // SSR: no window → render immediately so crawlers see content.
  // Client: start false, let IntersectionObserver activate rendering.
  const [ready, setReady] = useState(typeof window === "undefined");

  useEffect(() => {
    if (ready) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, ready]);

  return <div ref={ref} suppressHydrationWarning>{ready ? children : null}</div>;
}

// Service copy
const serviceDetails = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting",
    description:
      "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    description:
      "Specialized tinting for Tesla models, ensuring perfect heat rejection and premium clarity.",
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting",
    description:
      "Protect your building's windows from UV rays, reduce glare, and improve energy efficiency.",
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting",
    description:
      "Long-lasting protection for your home’s windows against dirt, heat, and UV rays.",
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction",
    description:
      "Restore your vehicle’s original shine and remove imperfections with our professional paint correction services.",
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection",
    description:
      "Customize and protect your vehicle’s paint with high-quality Paint Protection Film.",
  },
  "headlight-services": {
    title: "Headlight & Taillight Services",
    description:
      "Protect and customize your vehicle’s headlights and taillights with professional tint film and Stek Light Protection Film.",
  },
  "windshield-protection-film": {
    title: "Windshield Protection Film",
    description:
      "Guard your windshield against rock chips and road debris with ExoShield GT3 — a clear, optically perfect protective film.",
  },
  "ceramic-coating": {
    title: "Ceramic Coating",
    description:
      "Elevate Your Vehicle's Protection With Unrivaled Ceramic Coating",
  },
};

// Meta overrides
const metaByService = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting Services | Window Tinting Garland, TX",
    description:
      "Searching for window tinting Garland? We provide professional auto tinting and vehicle window tinting in Garland and Dallas, TX. Book your car window tinting today!",
    keywords: "window tinting garland, window tint garland tx, auto tinting garland, car window tint garland, vehicle window tinting Garland, automotive window tint Dallas, car tint near me"
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting Garland, TX | Tint Tek Plus",
    description:
      "Searching for Tesla window tinting Garland? Get professional heat reduction, UV protection, and sleek EV tint services at Tint Tek Plus. Book your Tesla tint today!",
    keywords: "tesla window tinting garland, window tinting garland, Model 3 window tint Garland, Model Y window tint Garland, Tesla heat rejection tint TX, EV window tinting Garland"
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting Garland, TX | Tint Tek Plus",
    description:
      "Professional commercial window tinting in Garland, Texas to improve energy efficiency, privacy & comfort for offices and storefronts. Trusted service at Tint Tek Plus.",
    keywords: "commercial window tinting garland, window tinting garland, office window tint garland, storefront window tinting TX, commercial building tinting Garland, privacy window film Garland"
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting Garland, TX | Tint Tek Plus",
    description:
      "Top residential window tinting in Garland, Texas to reduce heat, glare & UV while enhancing privacy and comfort. Trusted home tint experts at Tint Tek Plus.",
    keywords: "residential window tinting garland, window tinting garland, home window tint garland, house window tinting TX, privacy tint for homes Garland, residential UV window film"
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction Services in Dallas, TX | Tint Tek Plus",
    description:
      "Professional vehicle paint correction services in Dallas, Texas. Restore shine, remove swirls & protect your car’s paint. Book Tint Tek Plus experts today!",
    keywords: "vehicle paint correction Dallas, car paint correction TX, auto paint restoration, swirl mark removal, scratch removal auto paint, professional paint correction DFW, car polish and buff Dallas"
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection Services in Dallas, TX | Tint Tek Plus",
    description:
      "Protect your vehicle's paint with professional services from Tint Tek Plus. Keep your car looking brand new with our high-quality paint protection solutions.",
    keywords: "vehicle paint protection Dallas, PPF installation TX, paint protection film DFW, clear bra Dallas, auto paint protection, protect car paint, car wrap protection Dallas"
  },
  "headlight-services": {
    title: "Tinted Headlights & Taillights Services in Dallas, TX | Tint Tek Plus",
    description:
      "Get premium tinted headlights in Dallas, Texas for style and protection. Quality headlight & taillight tint services at Tint Tek Plus. Book your appointment today!",
    keywords: "tinted headlights Dallas, taillight tinting TX, custom headlight tint, auto light tinting DFW, smoked headlights Dallas, smoked taillights, light tint shop near me"
  },
  "windshield-protection-film": {
    title: "Windshield Protection Film Services in Dallas, TX | Tint Tek Plus",
    description:
      "Protect your car with windshield protection film in Dallas, Texas. Tint Tek Plus offers premium film to prevent cracks, chips & UV damage. Book today!",
    keywords: "windshield protection film Dallas, windshield rock chip protection, clear windshield film TX, auto windshield tint, safety windshield film DFW, exact fit windshield protection"
  },
  "ceramic-coating": {
    title: "Ceramic Coating Services in Dallas, TX | Tint Tek Plus",
    description:
      "Get professional ceramic coating in Dallas, Texas for long-lasting paint protection and deep shine. Trusted experts at Tint Tek Plus.",
    keywords: "ceramic coating Dallas, ceramic car coating TX, auto ceramic coating DFW, best ceramic coating near me, ceramic paint protection, long lasting ceramic coat Dallas, permanent car shine"
  },
};

const serviceOgImages = {
  "vehicle-window-tinting": "https://tinttekplus.com/v-window-tint/vehicle-window-tint.webp",
  "tesla-window-tinting": "https://tinttekplus.com/tesla-tint-model/tesla-20.webp",
  "commercial-window-tinting": "https://tinttekplus.com/commercial/Tint%20Tek-116.jpg",
  "residential-window-tinting": "https://tinttekplus.com/residential/residential-service.png",
  "vehicle-paint-correction": "https://tinttekplus.com/paint-correction/paint-correction1.jpg",
  "vehicle-paint-protection": "https://tinttekplus.com/ppf/ppf-service.jpg",
  "headlight-services": "https://tinttekplus.com/headlight/headlight.webp",
  "windshield-protection-film": "https://tinttekplus.com/windshield/windshield-protection.jpg",
  "ceramic-coating": "https://tinttekplus.com/ceramic/Tint%20Tek-111.jpg",
};

// 300-500 word unique body copy per service for on-page SEO
const serviceBodyContent = {
  "vehicle-window-tinting": `
    <p>Professional vehicle window tinting in Garland and Dallas is more than a cosmetic upgrade — it's one of the most effective ways to protect yourself, your passengers, and your car's interior from Texas's relentless sun. At Tint Tek Plus, we install LLumar FormulaOne nano-ceramic films that block up to 99% of UV rays and reject substantial solar heat, keeping your cabin comfortable even when temperatures climb past 100°F on Dallas highways.</p>
    <p>Our certified installers fit every window precisely, whether you drive a sedan, SUV, truck, or exotic. We offer a full range of shades and technologies — from entry-level dyed films to advanced ceramic films that deliver top-tier heat rejection without interfering with GPS, radar detectors, or toll tags. Every installation comes with a lifetime warranty on both materials and labor.</p>
    <p>Beyond comfort, window tinting preserves your vehicle's resale value by preventing UV-induced cracking, fading, and discoloration of dashboards, seats, and door panels. Leather and premium upholstery last years longer when shielded from direct sunlight. Glare reduction also improves driving safety, particularly during the low-angle morning and evening sun that Dallas drivers face on I-30 and the Dallas North Tollway.</p>
    <p>Texas law specifies that front side windows must transmit at least 25% of light while rear windows have more flexibility. Our team knows every state and local regulation and will guide you to shades that maximize comfort while keeping you fully street-legal in Garland and across the DFW Metroplex.</p>
    <p>Ready to beat the Texas heat? Stop by our shop at 2518 West Kingsley Road in Garland, book online, or call us at (972) 362-8468. Same-day appointments are often available, and most vehicle tint jobs are completed in just a few hours.</p>
  `,
  "tesla-window-tinting": `
    <p>Tesla's panoramic glass roofs and oversized windshields are engineering achievements — but they admit enormous amounts of solar heat and UV radiation. In the Garland and Dallas climate, this means the cabin can overheat faster than a traditional vehicle, forcing the climate system to work harder and draining battery range. Professional Tesla window tinting from Tint Tek Plus is one of the highest-impact upgrades you can make for both comfort and efficiency.</p>
    <p>We exclusively use non-metallic ceramic films — specifically LLumar FormulaOne Pinnacle — for all Tesla installations. Unlike older metallic films, ceramic tint does not interfere with Autopilot cameras, GPS, key-fob signals, or the built-in cellular connection that powers over-the-air updates. You get maximum heat rejection and UV blockage while every sensor and antenna works exactly as Tesla engineered it.</p>
    <p>The massive glass roofs on Model Y and Model 3 present a unique challenge: the glass area is so large that even a few percentage points of IR rejection translate to dramatically lower cabin temperatures. Our installers are trained on Tesla-specific cut patterns that avoid seams on visible panels and deliver a factory-clean look. We tint front windshields (to legal limits), rear hatch glass, and all door windows.</p>
    <p>Every Tesla tint job we complete comes with a lifetime warranty on the film and installation. Our reviews from Model 3, Model Y, Model S, and Model X owners across DFW speak for themselves — check our Google listing and see why Tesla owners in Garland and Dallas trust us specifically for their vehicles.</p>
    <p>Booking is easy. Visit our Garland shop at 2518 West Kingsley Road, schedule online, or call (972) 362-8468. We'll help you choose the ideal shade and film for your Tesla based on your battery range goals and how much Dallas heat you want to eliminate.</p>
  `,
  "commercial-window-tinting": `
    <p>Commercial buildings across Garland and Dallas spend significantly more on cooling than they need to — and one of the most cost-effective corrections is professional commercial window tinting. At Tint Tek Plus, we install high-performance solar control films on storefronts, office complexes, medical buildings, and retail spaces throughout the DFW Metroplex. Our films reject solar heat before it enters your building, reducing HVAC load, lowering energy bills, and improving the working environment for employees and customers.</p>
    <p>Excessive glare is a major productivity killer in modern offices. Computer screens become unreadable, meetings grow uncomfortable, and employees constantly fight blinds that block views entirely. Our spectrally selective window films cut glare dramatically while preserving natural light — a key factor in employee satisfaction and workplace mood. At the same time, the films block UV rays that fade merchandise, flooring, artwork, and furniture, protecting your interior investment for years to come.</p>
    <p>Privacy and security are equally important in commercial settings. Tinted windows make it significantly harder for passersby to see into your building during the day, reducing theft opportunity and protecting proprietary operations from casual observation. We offer a range of opacity levels — from light neutral films that barely change the exterior aesthetic to one-way mirror films that provide full daytime privacy while maintaining outward visibility for your team.</p>
    <p>All commercial window tinting installations from Tint Tek Plus come with a 15-year manufacturer warranty. Our crew works around your operating hours to minimize business disruption, and we offer phased installation schedules for large buildings. Free site visits and no-obligation estimates are available — reach out and we'll measure your space and recommend the optimal film for your energy goals, privacy needs, and budget.</p>
    <p>We serve businesses throughout Garland, Dallas, Plano, Richardson, Mesquite, and the entire DFW area. Contact us at (972) 362-8468 or book a commercial estimate at tinttekplus.com to get started.</p>
  `,
  "residential-window-tinting": `
    <p>Texas summers are relentless, and Garland and Dallas homeowners feel it year-round. The sun pours through windows, driving up air conditioning costs, bleaching furniture, and making certain rooms nearly unusable in the afternoon. Residential window tinting from Tint Tek Plus is a smart, permanent solution that works with your existing windows — no glass replacement required.</p>
    <p>Our home window films block up to 99% of UV rays and reject significant solar heat. In practical terms, rooms that were too bright or too hot become comfortable again without blocking your view or making your home feel dark. Natural light flows through beautifully — it's the infrared heat energy that the film intercepts. Many of our Garland and Dallas customers report meaningful reductions in summer electric bills within the first season after installation.</p>
    <p>UV rejection protects your furniture, hardwood floors, carpeting, artwork, and window treatments from the fading and discoloration that direct sun exposure causes over time. A professional tint installation can extend the life of your interior furnishings by years — a worthwhile return even before factoring in energy savings.</p>
    <p>Privacy is another reason DFW homeowners love window tinting. During the day, reflective and neutral films make it very difficult for people outside to see into your home while you retain a clear view outward. This is particularly popular in neighborhoods with closely-spaced homes or rooms that face busy streets and community areas.</p>
    <p>All residential window tinting from Tint Tek Plus carries a lifetime warranty. We use premium LLumar films engineered to resist peeling, bubbling, and color shifting — common problems with cheaper films from hardware stores. To schedule a free in-home consultation, call (972) 362-8468 or book online. We serve homes throughout Garland, Dallas, Richardson, Plano, Mesquite, Rowlett, and the surrounding DFW area.</p>
  `,
  "vehicle-paint-correction": `
    <p>Over time, every vehicle accumulates paint defects — fine swirl marks from improper washing, light scratches from parking lot contact, water spots baked in by the Texas sun, and oxidation that leaves the finish looking dull and hazy. Vehicle paint correction from Tint Tek Plus is a professional multi-step polishing process that removes these imperfections from the clear coat, restoring the paint to a level of gloss and depth that matches or exceeds the original showroom finish.</p>
    <p>Paint correction is not a standard wash and wax. It involves machine polishing with progressively finer compounds and polishes, targeting real defects in the clear coat layer rather than filling or masking them. Our technicians in Garland use professional dual-action and rotary polishers paired with Gtechniq compounds — a combination that removes genuine defects without burning through the clear coat or introducing new marring.</p>
    <p>We offer multiple correction levels depending on your paint's condition. A single-stage polish dramatically improves moderately swirled finishes, while a two- or three-stage correction can fully restore severely oxidized or scratched paint. We inspect under professional lighting before and after each stage so you can see exactly how much has been corrected.</p>
    <p>Paint correction is particularly valuable before applying ceramic coating or Paint Protection Film. Sealing existing imperfections under a ceramic coat or PPF locks them in permanently. By correcting first, you're protecting a surface that's genuinely in excellent condition. Many Garland and Dallas customers combine a full paint correction with a ceramic coating application for the ultimate paint protection package.</p>
    <p>If your car no longer has the deep, mirror-like finish it had when new, paint correction is the solution. Stop by our shop at 2518 West Kingsley Road in Garland, call (972) 362-8468, or book online to schedule a paint assessment and personalized correction plan.</p>
  `,
  "vehicle-paint-protection": `
    <p>Paint Protection Film — commonly called PPF or "clear bra" — is the gold standard for protecting your vehicle's paint from physical damage. Unlike ceramic coatings, which address environmental contamination, PPF is a thick, optically clear thermoplastic urethane film that physically absorbs impacts from road debris, rock chips, bug strikes, and minor abrasions. At Tint Tek Plus in Garland, we install Stek DYNOshield PPF — one of the most advanced protection films available on the market today.</p>
    <p>Stek DYNOshield features self-healing technology: light surface scratches disappear on their own when exposed to heat, whether from the sun or warm water. The film also carries hydrophobic properties, meaning water, dirt, and contaminants bead off the surface, making the car easier to clean and reducing wash frequency. All of this protection is delivered in a film that's nearly invisible — your paint color and finish remain exactly as the manufacturer intended.</p>
    <p>Dallas and Garland roads present real hazards to paint. Highway driving at speed means constant exposure to road debris, and Texas construction zones scatter gravel and aggregate across travel lanes. Front fascias, hoods, fenders, and mirrors take the most impact. Our partial-front packages protect these high-impact zones at an accessible price point, while full-front and full-vehicle coverage is available for new vehicles, exotics, and customers who want comprehensive protection.</p>
    <p>Stek PPF carries a 10-year manufacturer warranty covering defects including cracking, yellowing, and bubbling. Our installation team uses computer-cut patterns for each vehicle make and model, ensuring seamless coverage with clean edge alignment and minimal visible seams. We also recommend a paint correction prior to any PPF installation to ensure you're protecting a surface that's already in peak condition.</p>
    <p>Call (972) 362-8468 or visit our Garland shop at 2518 West Kingsley Road to schedule your PPF consultation and receive a personalized quote based on your vehicle and preferred coverage level.</p>
  `,
  "headlight-services": `
    <p>Your vehicle's headlights and taillights are among its most visible design elements — and they're exposed to everything the road throws at them. UV rays cloud headlight lenses over time, rock chips and debris damage the housing, and road grime dulls what should be crisp, clear lenses. At Tint Tek Plus in Garland, we offer professional headlight and taillight services including protective film application and custom tinting that enhance both the appearance and longevity of your lights.</p>
    <p>Our headlight protection film uses Stek Light Protection Film — the same high-performance thermoplastic urethane technology as our vehicle PPF. Applied to the headlight lens surface, it creates a durable, self-healing barrier against stone chips and road debris that would otherwise crack or chip the polycarbonate housing. The film also blocks UV rays that cause the clouding and yellowing that makes older headlights look faded and reduces their light output significantly. Preventative installation is always more cost-effective than headlight lens replacement.</p>
    <p>For drivers who want to customize their vehicle's appearance, we offer professional headlight and taillight tinting with high-quality vinyl film. Smoked headlights and taillights create a stealthy, blacked-out aesthetic that's popular across a wide range of vehicles — from sport compacts to luxury SUVs and trucks. We use premium vinyl materials that are significantly more durable than cheaper alternatives; our application process eliminates the air bubbles and edge lifting that are common with DIY kits.</p>
    <p>Professional application ensures even coverage, clean edges, and a finish that won't peel or bubble within a season. Our technicians prep the lens surface before application, removing any contamination that would cause adhesion failures. All work is done in a controlled environment to prevent dust and debris from becoming trapped under the film.</p>
    <p>Whether you need protective film for a daily driver, custom tinting for a show car, or both combined, our Garland team can recommend the right approach for your goals. Call (972) 362-8468, stop by 2518 West Kingsley Road, or book your appointment online today.</p>
  `,
  "windshield-protection-film": `
    <p>Your windshield takes the full force of highway debris — rocks, gravel, insects, and road waste constantly impact the glass at speed. In Texas, where highways stretch through miles of construction zones and open terrain, chips and cracks are a constant risk. Windshield Protection Film from Tint Tek Plus is a proactive solution that dramatically reduces the frequency of chips and the likelihood that a chip will propagate into a full crack requiring costly replacement.</p>
    <p>We install ExoShield GT3, an optically clear urethane film specifically engineered for windshields. Unlike standard PPF designed for painted surfaces, ExoShield GT3 is optimized for glass — it maintains the optical clarity required for safe driving, creates no distortion or hazing at highway speed, and is formulated to resist the vibration and flexing that windshields experience during normal driving. The film's impact-absorbing properties dissipate energy from rock strikes that would otherwise chip bare glass.</p>
    <p>ExoShield GT3 also features hydrophobic properties that cause water to bead and sheet off the glass more aggressively than an untreated windshield, improving visibility in rain. The coating functions like a permanent rain repellent, reducing wiper usage at highway speeds and extending wiper blade life.</p>
    <p>The financial case for windshield protection film is compelling in Texas. A windshield replacement for a modern vehicle equipped with ADAS (Advanced Driver Assistance Systems) can cost anywhere from $500 to over $2,000, including sensor recalibration. A single ExoShield installation costs a fraction of that — and can prevent multiple replacement events over its service life, making it one of the most cost-effective protective investments available.</p>
    <p>Installation takes approximately 2 to 3 hours. The film is trimmed to your exact windshield dimensions, and our technicians ensure zero bubbles or optical imperfections. Protect your windshield before the first chip — call (972) 362-8468, visit us at 2518 West Kingsley Road in Garland, or schedule your appointment online.</p>
  `,
  "ceramic-coating": `
    <p>Ceramic coating is the most advanced paint protection technology available for road vehicles today. Unlike traditional wax or paint sealant, which sit on top of the clear coat and wear away within weeks or months, a professional ceramic coating chemically bonds to the paint surface and creates a semi-permanent layer of protection that lasts for years. At Tint Tek Plus in Garland, we install Gtechniq ceramic coatings — among the most technically sophisticated products in the professional detailing industry.</p>
    <p>Gtechniq's Crystal Serum Ultra is our flagship coating for maximum protection. Once cured, it creates an extremely hard, slick surface that resists light scratches, chemical contamination, bird droppings, tree sap, road tar, and brake dust. The coating's hydrophobic properties cause water to bead aggressively off the paint — along with most dirt and contamination. In practical terms, your vehicle stays cleaner between washes, and washes themselves take significantly less effort and time.</p>
    <p>The gloss enhancement from a Gtechniq ceramic coating transforms the appearance of your vehicle's paint. Colors appear deeper and more saturated; the surface carries a mirror-like wet look that wax simply cannot replicate. This effect is particularly dramatic on dark-colored vehicles, where Crystal Serum creates a depth that draws attention under any lighting condition.</p>
    <p>In the Dallas and Garland climate, ceramic coatings provide critical protection against UV oxidation — the process by which intense Texas sun slowly fades and dulls paint over time. A well-maintained ceramic coating blocks UV rays from reaching the clear coat, preserving your vehicle's color and finish for the full life of the coating.</p>
    <p>Gtechniq backs its professional-grade products with a 9-year warranty when installed by a certified applicator. Our shop is a certified Gtechniq installation center, meaning our technicians are fully trained and qualified. For ultimate protection, combine ceramic coating with Stek PPF — PPF handles physical impact while ceramic coating delivers environmental protection and maximum gloss. Call (972) 362-8468 or visit 2518 West Kingsley Road in Garland to book your consultation.</p>
  `,
};

const GRADIENT = `radial-gradient(circle at top left, rgba(39,148,210,0.15), transparent 50%),
   radial-gradient(circle at bottom right, rgba(77,184,240,0.15), transparent 50%),
   linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)`;

const ServicePage = () => {
  const { serviceId } = useParams();
  const location = useLocation();
  const service = serviceDetails[serviceId];
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO
  const { title, description, keywords, canonical, robots, jsonLd, image } = useMemo(() => {
    const path = serviceId
      ? `${SERVICES_BASE}/${serviceId}`
      : location.pathname;
    const url = `${SITE}${path}`.replace(/\/+$/, "");

    if (!service) {
      return {
        title: "Page Not Found | Tint Tek Plus",
        description: "The page you’re looking for doesn’t exist.",
        canonical: `${SITE}${location.pathname}`,
        robots: "noindex, nofollow",
        jsonLd: null,
      };
    }

    const meta = metaByService[serviceId] || {
      title: `${service.title} | Tint Tek Plus`,
      description: service.description,
    };

    const jsonLdObj = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: meta.description,
        url,
        areaServed: [
          { "@type": "City", name: "Garland" },
          { "@type": "City", name: "Dallas" },
          { "@type": "AdministrativeArea", name: "Dallas–Fort Worth, TX" },
        ],
        provider: {
          "@type": "LocalBusiness",
          name: "Tint Tek Plus",
          url: SITE,
          telephone: "+1-972-362-8468",
          address: {
            "@type": "PostalAddress",
            streetAddress: "2518 West Kingsley Rd",
            addressLocality: "Garland",
            addressRegion: "TX",
            postalCode: "75040",
            addressCountry: "US",
          },
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          areaServed: "Dallas–Fort Worth, TX",
          seller: {
            "@type": "LocalBusiness",
            name: "Tint Tek Plus",
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: url,
          },
        ],
      },
    ];

    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      canonical: url,
      robots: "index, follow",
      jsonLd: jsonLdObj,
      image: serviceOgImages[serviceId] || null,
    };
  }, [serviceId, service, location.pathname]);

  // ---------- 404 ----------
  if (!service) {
    return (
      <Box
        className="ServicePageRoot"
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Lightweight background layer */}
        <GlobalStyles
          styles={{
            ".ServicePageRoot": { position: "relative" },
            ".ServicePageRoot::before": {
              content: '""',
              position: "fixed",
              inset: 0,
              zIndex: -1,
              background: GRADIENT,
            },
            ".glass-section": {
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              backdropFilter: "blur(6px)",
            },
          }}
        />

        <SEO
          title={title}
          description={description}
          canonical={canonical}
          type="website"
        />

        <Topbar notFound />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            padding: { xs: 4, md: 8 },
            mt: { xs: "56px", md: "64px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "1200px",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#FF6F61", fontWeight: "bold", mb: 1 }}
              >
                404
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
              >
                Oops! I may have chewed up the power cord.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, color: "rgba(255,255,255,0.8)" }}
              >
                Go back to our main page to continue your visit.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  px: 4,
                  py: 1.5,
                  "&:hover": { backgroundColor: "#333" },
                }}
                href="/"
              >
                Back to main page
              </Button>
            </Box>

            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img
                src="/dog.jpeg"
                alt="Dog"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                loading="lazy"
                decoding="async"
              />
            </Box>
          </Box>
        </Box>

        <Suspense fallback={Fallback}>
          <CallToAction />
          <Box>
            <Contact />
          </Box>
          <Footer />
        </Suspense>
      </Box>
    );
  }

  // ---------- NORMAL PAGE ----------
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        jsonLd={jsonLd}
        image={image}
        type="website"
      />

      {/* Route-scoped wrapper with a fixed, GPU-friendly gradient layer */}
      <Box
        className="ServicePageRoot"
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <GlobalStyles
          styles={{
            ".ServicePageRoot": { position: "relative" },
            ".ServicePageRoot::before": {
              content: '""',
              position: "fixed",
              inset: 0,
              zIndex: -1,
              background: GRADIENT,
            },
            ".glass-section": {
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              backdropFilter: "blur(6px)",
            },
            ".bg-clear, .bg-clear *": {
              background: "transparent !important",
              backgroundImage: "none !important",
            },
            ".ServicePageRoot img, .ServicePageRoot video": {
              backgroundColor: "transparent",
            },
            "@media (max-width:900px)": {
              ".glass-section": { backdropFilter: "none" },
            },
          }}
        />

        {/* Hero */}
        <Box
          sx={{
            position: "relative",
            width: "100%", // avoid 100vw layout jank
            pt: 10,
            height: { xs: "40vh", md: "40vh" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            px: { xs: 1, sm: 2, md: 2 },
          }}
        >
          <BusinessInfo />
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "3.5rem" },
            }}
          >
            {service.title}
          </Typography>
          <Typography
            variant="p"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem", lg: "1.5rem" },
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                display: "block",
                width: "80px",
                height: "5px",
                backgroundColor: "#2794d2",
                margin: "6px auto 0",
                borderRadius: "2px",
                boxShadow:
                  "0 0 8px rgba(39,148,210,0.7), 0 0 16px rgba(39,148,210,0.6)",
                mt: 4,
              },
            }}
          >
            {service.description}
          </Typography>
        </Box>

        {/* Above-the-fold CTA variants */}
        <Suspense fallback={Fallback}>
          {(serviceId === "commercial-window-tinting" ||
            serviceId === "ceramic-coating" ||
            serviceId === "headlight-services" ||
            serviceId === "windshield-protection-film") && <VideoCTA />}

          {(serviceId === "tesla-window-tinting" ||
            serviceId === "vehicle-paint-protection" ||
            serviceId === "residential-window-tinting" ||
            serviceId === "vehicle-window-tinting") && <TeslaCTA />}
        </Suspense>

        {/* {serviceBodyContent[serviceId] && (
          <Box
            sx={{
              maxWidth: "900px",
              mx: "auto",
              px: { xs: 3, md: 6 },
              py: { xs: 5, md: 8 },
              "& p": {
                color: "rgba(255,255,255,0.82)",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.9,
                mb: 3,
              },
              "& p:last-child": { mb: 0 },
            }}
            dangerouslySetInnerHTML={{ __html: serviceBodyContent[serviceId] }}
          />
        )} */}

        {/* Per-service specialty sections (lazy + often below the fold) */}
        <Suspense fallback={Fallback}>
          {serviceId === "vehicle-paint-correction" && <ImageCTA />}
          {serviceId === "vehicle-paint-correction" && (
            <PaintCorrectionServices />
          )}

          {serviceId === "tesla-window-tinting" && (
            <InViewMount>
              <TeslaTintingSimulator />
            </InViewMount>
          )}
          {serviceId === "vehicle-window-tinting" && (
            <InViewMount>
              <TintingSimulator />
            </InViewMount>
          )}
          {serviceId === "vehicle-paint-protection" && (
            <InViewMount>
              <PPFSelector />
            </InViewMount>
          )}
        </Suspense>

        {/* Pricing (exclude certain services) */}
        <Suspense fallback={Fallback}>
          {serviceId !== "vehicle-paint-correction" &&
            serviceId !== "commercial-window-tinting" &&
            serviceId !== "residential-window-tinting" &&
            serviceId !== "windshield-protection-film" &&
            serviceId !== "ceramic-coating" &&
            serviceId !== "headlight-services" &&
            serviceId !== "vehicle-paint-protection" && (
              <Box sx={{ width: "100%" }}>
                <PricingComponent />
              </Box>
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          {serviceId === "vehicle-window-tinting" && (
            <TintPackages />
          )}
          {serviceId === "tesla-window-tinting" && (
            <TeslaTintPackages />
          )}
          {serviceId === "headlight-services" && (
            <HeadlightPackages />
          )}
        </Suspense>

        {/* Optional banner */}
        {/* <Suspense fallback={null}><F1Banner /></Suspense> */}

        <Suspense fallback={Fallback}>
          {serviceId !== "vehicle-paint-correction" &&
            serviceId !== "ceramic-coating" && (
              <ServicesOffered serviceId={serviceId} />
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          {(serviceId === "commercial-window-tinting" ||
            serviceId === "tesla-window-tinting" ||
            serviceId === "residential-window-tinting") && (
              <InViewMount>
                <ImageCarousel />
              </InViewMount>
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          {serviceId !== "commercial-window-tinting" &&
            serviceId !== "residential-window-tinting" && (
              <HowItWorks serviceId={serviceId} />
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          {(serviceId === "vehicle-window-tinting" ||
            serviceId === "tesla-window-tinting" ||
            serviceId === "commercial-window-tinting" ||
            serviceId === "windshield-protection-film" ||
            serviceId === "vehicle-paint-correction" ||
            serviceId === "vehicle-paint-protection" ||
            serviceId === "ceramic-coating" ||
            serviceId === "headlight-services" ||
            serviceId === "residential-window-tinting") && (
              <BenefitsGrid />
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          <BlogCTA />
        </Suspense>

        <Suspense fallback={Fallback}>
          <FAQSection />
          <CallToAction />
        </Suspense>

        <Suspense fallback={Fallback}>
          {/* Keep wrappers minimal to let the gradient show through */}
          <Box>
            <Contact />
          </Box>
          <QuickLinks />
          <Footer />
        </Suspense>
      </Box>
    </>
  );
};

export default ServicePage;
