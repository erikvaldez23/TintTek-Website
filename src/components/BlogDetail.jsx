// src/components/BlogDetail.jsx
import React, { useEffect, useMemo, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Typography,
  Button,
  Container,
  Box,
  Chip,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CategoryIcon from "@mui/icons-material/Category";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SubCTA from "./SubCTA";
import SubContact from "./SubContact";
import Footer from "./key-components/Footer";
import Contact from "./key-components/Contact";

// ---- SITE SETTINGS (use your live domain) ----
const SITE = "https://tinttekplus.com";

const blogPosts = [
  {
    id: 1,
    title: "LLumar vs. XPEL Window Tint: Why LLumar Comes Out Ahead",
    summary:
      "Comparing LLumar and XPEL window tint? Discover why LLumar's third-party tested performance, long-term durability, and value make it the smart choice in Dallas, TX.",
    content: (
      <>
        <Typography variant="h5" className="blog-section-title">
          LLumar vs. XPEL: The Truth Behind the Tint
        </Typography>
        <Typography className="blog-paragraph">
          When it comes to ceramic window tint, two names dominate the market: LLumar and XPEL. Both offer high-performance films — but if you're looking for real-world results backed by third-party data, LLumar has the edge.
        </Typography>
        <Typography className="blog-paragraph">
          Here's how the two brands compare and why LLumar is the top choice for drivers in Dallas who want style, performance, and science-backed protection.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          Performance You Can Trust: LLumar's Third-Party Tested Specs
        </Typography>
        <Typography className="blog-paragraph">
          LLumar stands out by publishing third-party verified performance data — not just lab estimates. Every LLumar film is tested by the <span className="highlight">National Fenestration Rating Council (NFRC)</span>.
        </Typography>
        <Box className="feature-box">
          <Box className="feature-item">
            <Typography variant="h6">88%</Typography>
            <Typography variant="body2">Infrared Heat Rejection</Typography>
          </Box>
          <Box className="feature-item">
            <Typography variant="h6">63%</Typography>
            <Typography variant="body2">Total Solar Energy Rejected</Typography>
          </Box>
          <Box className="feature-item">
            <Typography variant="h6">99%+</Typography>
            <Typography variant="body2">UV Protection</Typography>
          </Box>
        </Box>
        <Typography className="blog-paragraph">
          XPEL XR Plus claims up to 98% IR rejection, but it's not NFRC verified.
        </Typography>
        <Typography className="blog-highlight">
          Bottom line: LLumar backs their specs with certified data you can trust.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          Heat and UV Defense for Texas Summers
        </Typography>
        <Box className="benefit-list">
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Reduce cabin temps</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Protect your interior from fading</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Shield passengers from harmful UV rays</Typography>
          </Box>
        </Box>
        <Typography className="blog-paragraph">
          LLumar's TSER (which includes visible, infrared, and UV light) is among the best in the business — and it's consistently rated as one of the most effective heat-blocking tints on the market.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          Clarity, Style & Signal-Friendliness
        </Typography>
        <Box className="benefit-list">
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Low reflectivity (no mirror-like effect)</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Natural, charcoal tone that enhances any vehicle</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>No signal interference with GPS, Bluetooth, or 5G</Typography>
          </Box>
        </Box>
        <Typography className="blog-paragraph">
          LLumar's crystal-clear finish keeps your vehicle looking sharp — without sacrificing visibility or tech performance.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          Lifetime Warranty & Installer Network
        </Typography>
        <Typography className="blog-paragraph">
          LLumar films are backed by a <span className="highlight">nationwide, transferable lifetime warranty</span> and installed only by certified pros.
        </Typography>
        <Box className="benefit-list">
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>No bubbling, fading, or peeling</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Trusted nationwide support</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Peace of mind if you move or sell your vehicle</Typography>
          </Box>
        </Box>
        <Typography className="blog-paragraph">
          While XPEL also offers a warranty, LLumar's decades-long track record and Eastman Chemical Company backing make it a more reliable choice.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          Why We Recommend LLumar at Tint Tek +
        </Typography>
        <Typography className="blog-paragraph">
          At <span className="highlight">Tint Tek +</span> in Dallas, we've worked with multiple tint brands — and LLumar consistently delivers superior results for our clients. From heat rejection to durability and appearance, it's our go-to recommendation for daily drivers and car enthusiasts alike.
        </Typography>
      </>
    ),
    image: "/llumar-logo.png",
    date: "May 2, 2025",
    category: "Window Tint Comparison",
  },
  {
    id: 2,
    title: "5 Reasons to Tint Your Car Windows in Dallas, TX",
    summary:
      "Living in Dallas means heat, sun, and traffic. Here are 5 powerful reasons why window tinting at Tint Tek Plus is a smart upgrade for any vehicle.",
    content: (
      <>
        <Typography variant="h5" className="blog-section-title">
          1. Texas Heat? No Sweat.
        </Typography>
        <Typography className="blog-paragraph">
          Dallas summers are brutal — temperatures often soar past 100°F. Without tint, your car can feel like an oven. Our{" "}
          <strong>ceramic window tint</strong> options (like Llumar CTX) reject up to{" "}
          <strong>60% of heat</strong>, making your vehicle dramatically cooler even after hours in the sun.
        </Typography>
        <Typography variant="body1" className="blog-highlight" sx={{ fontStyle: "italic" }}>
          Less heat means less A/C use, better fuel economy, and a more comfortable drive year-round.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          2. Block Harmful UV Rays
        </Typography>
        <Typography className="blog-paragraph">
          UV rays don’t just burn your skin — they also <strong>fade your seats, crack your dashboard, and damage your interior</strong> over time. High-quality window tint blocks <strong>99% of UV radiation</strong>, preserving your interior and protecting your skin on long drives.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          3. Privacy + Protection
        </Typography>
        <Typography className="blog-paragraph">
          Window tint gives you the privacy and peace of mind you want in a busy city like Dallas:
        </Typography>
        <Box component="ul" className="blog-paragraph" sx={{ pl: 4 }}>
          <li>Keeps valuables out of sight</li>
          <li>Makes it harder for thieves to peek inside</li>
          <li>Adds a sleek, premium look</li>
        </Box>
        <Typography className="blog-paragraph">
          <strong>15% or 20% tint shades</strong> offer just the right balance of style, privacy, and Texas legal compliance.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          4. Eliminate Annoying Glare
        </Typography>
        <Typography className="blog-paragraph">
          That late afternoon Texas sun isn’t just hot — it’s <strong>blinding</strong>. Window tint cuts down glare from the road and other vehicles, helping you:
        </Typography>
        <Box component="ul" className="blog-paragraph" sx={{ pl: 4 }}>
          <li>Drive more comfortably</li>
          <li>Stay focused during rush hour</li>
          <li>Avoid squinting and eye strain</li>
        </Box>

        <Typography variant="h5" className="blog-section-title">
          5. Look Better, Drive Smarter
        </Typography>
        <Typography className="blog-paragraph">
          There’s no denying it — tint just <strong>makes your car look cleaner, sharper, and more high-end</strong>. Whether you want a subtle enhancement or a bold blackout look, <strong>Tint Tek Plus</strong> has a shade and style to match. We follow <strong>Texas tint laws</strong>, so you never have to worry about tickets or inspections.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          Why Choose Tint Tek Plus in Dallas?
        </Typography>
        <Box component="ul" className="blog-paragraph" sx={{ pl: 4 }}>
          <li>Top-tier films like <strong>Llumar AIR 80, CTX, and FormulaOne</strong></li>
          <li>Trusted by exotic car owners, fleets, and everyday drivers</li>
          <li>Fast, clean installs — done right the first time</li>
          <li>Local, family-run shop with hundreds of happy customers</li>
        </Box>

        <Typography variant="h5" className="blog-section-title">
          📍 Come See Us
        </Typography>
        <Typography className="blog-paragraph">
          <strong>Tint Tek Plus – Dallas, TX</strong><br />
          📍 2518 W. Kingsley Rd, Garland, TX (Serving all of Dallas)<br />
          📞 Call/Text: <strong>972-362-8468</strong><br />
          🌐 <a href="https://www.tinttekplus.com" target="_blank" rel="noopener noreferrer">www.tinttekplus.com</a>
        </Typography>
      </>
    ),
    image: "/blog2-min.png",
    date: "June 22, 2025",
    category: "Car Tinting in Texas",
  },
  {
    id: 3,
    title: "Top 7 Benefits of Residential Window Tinting in Dallas–Fort Worth",
    summary:
      "Lower energy bills, block 99% of UV rays, reduce glare, add privacy, and boost curb appeal—LLumar Vista™ residential window films keep DFW homes cooler and more comfortable year-round.",
    content: (
      <>
        <Typography className="blog-paragraph">
          If you’re a homeowner in <strong>Dallas–Fort Worth (DFW)</strong>, you already know how intense the Texas sun can be. Blazing heat, high energy bills, and faded furniture are part of everyday life — but there’s a smarter way to protect your home: <strong>residential window tinting</strong>.
        </Typography>
        <Typography className="blog-paragraph">
          At <strong>Tint Tek Plus</strong>, we specialize in installing <strong>LLumar Vista™ Window Films</strong> — premium residential window tints designed to maximize comfort, reduce energy costs, and add privacy while maintaining beautiful natural light.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          1. Lower Energy Bills 💡
        </Typography>
        <Typography className="blog-paragraph">
          LLumar Vista films can block up to <strong>79% of solar heat</strong>, reducing your A/C usage and helping cut energy costs by <strong>15–30% each month</strong>. Over time, that means big savings on utility bills.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          2. UV Protection for Your Family & Furniture ☀️
        </Typography>
        <Typography className="blog-paragraph">
          LLumar Vista films block <strong>99% of harmful UV rays</strong>, protecting your skin while preventing hardwood floors, furniture, artwork, and curtains from fading. Think of it as invisible sunscreen for your home.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          3. Increased Privacy Without Sacrificing Natural Light 🪟
        </Typography>
        <Typography className="blog-paragraph">
          Our residential films give you <strong>daytime privacy</strong> from neighbors and passersby, all while keeping your home bright and welcoming. No more heavy blinds or sacrificing sunlight.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          4. Glare Reduction for Screens & Comfort 📺💻
        </Typography>
        <Typography className="blog-paragraph">
          Whether you’re working from home or watching a movie, LLumar Vista tints cut glare so you can enjoy every room without squinting or straining your eyes.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          5. Added Safety & Security 🔒
        </Typography>
        <Typography className="blog-paragraph">
          Specialty films help <strong>hold glass together</strong> in case of breakage, making windows harder to shatter from accidents, severe weather, or break-ins.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          6. Modern Look & Curb Appeal 🏡
        </Typography>
        <Typography className="blog-paragraph">
          LLumar Vista films come in a range of subtle shades and finishes to match your home’s style. They instantly enhance curb appeal without the cost of replacing windows.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          7. Year-Round Comfort 🌡️
        </Typography>
        <Typography className="blog-paragraph">
          From blocking heat in the summer to adding insulation during the winter, LLumar Vista films help stabilize indoor temperatures and keep your home more comfortable.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          Why Choose Tint Tek Plus?
        </Typography>
        <Box component="ul" className="blog-paragraph" sx={{ pl: 4 }}>
          <li>✔️ Professional installation backed by <strong>lifetime residential warranties</strong></li>
          <li>✔️ Premium <strong>LLumar Vista™ films</strong> built for Texas heat</li>
          <li>✔️ Custom shading and privacy levels for every home</li>
          <li>✔️ Local DFW experts with 15+ years of combined experience</li>
          <li>✔️ Friendly service and fast installation</li>
        </Box>

        <Typography variant="h5" className="blog-section-title">
          About LLumar Vista™ Window Films
        </Typography>
        <Typography className="blog-paragraph">
          <strong>Vista by LLumar</strong> is one of the most advanced home window film brands in the world. Known for clarity, performance, and durability, Vista films are engineered to:
        </Typography>
        <Box component="ul" className="blog-paragraph" sx={{ pl: 4 }}>
          <li>🌞 Reject up to 79% of solar heat</li>
          <li>🛡️ Block 99% of UV rays</li>
          <li>🌎 Reduce energy consumption and your carbon footprint</li>
          <li>🏠 Maintain natural light with virtually invisible films</li>
        </Box>
        <Typography className="blog-paragraph">
          Vista films are so effective they’ve been <strong>recommended by the Skin Cancer Foundation</strong> for UV protection — making them a smart investment in your family’s health and your home’s long-term value.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          📍 Come See Us
        </Typography>
        <Typography className="blog-paragraph">
          <strong>Tint Tek Plus – Dallas, TX</strong><br />
          📍 2518 W. Kingsley Rd, Garland, TX (Serving all of Dallas)<br />
          📞 Call/Text: <strong>972-362-8468</strong><br />
          🌐 <a href="https://www.tinttekplus.com" target="_blank" rel="noopener noreferrer">www.tinttekplus.com</a>
        </Typography>
      </>
    ),
    image: "/residential-blog.jpg",
    date: "August 24, 2025",
    category: "Residential Window Tinting",
  },
  {
    id: 4,
    title: "Why Paint Protection Film (PPF) Is a MUST in Dallas, Texas",
    summary:
      "Dallas roads, construction zones, and brutal Texas UV can destroy your paint fast. PPF stops rock chips, scratches, and fading with premium self-healing protection.",
    content: (
      <>
        <Typography className="blog-paragraph">
          If you drive in <strong>Dallas, Texas</strong>, your car is under attack every single day.
          Between brutal heat, flying gravel on <strong>US-75 (Central Expressway)</strong>, construction zones on
          <strong> I-635</strong>, and tight parking lots across DFW, paint damage isn’t a matter of <em>if</em> — it’s
          <em> when</em>.
        </Typography>

        <Typography className="blog-paragraph">
          That’s exactly why <strong>Paint Protection Film (PPF)</strong> has become one of the fastest-growing automotive
          upgrades in North Texas. It’s no longer a “luxury add-on” — in Dallas, <strong>PPF is a necessity</strong>.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          What Is Paint Protection Film (PPF)?
        </Typography>
        <Typography className="blog-paragraph">
          <strong>Paint Protection Film</strong> is a virtually invisible, self-healing urethane film applied to painted
          surfaces. Think of it as a durable, sacrificial barrier that absorbs damage so your factory paint doesn’t.
        </Typography>

        <Typography variant="h6" className="blog-section-title">
          PPF protects your vehicle from:
        </Typography>
        <Box component="ul" className="blog-paragraph" sx={{ pl: 4 }}>
          <li>Rock chips & flying highway debris</li>
          <li>Scratches, swirl marks, and light scuffs</li>
          <li>Bug splatter & bird droppings (etching prevention)</li>
          <li>UV fading, oxidation, and clear-coat wear</li>
          <li> Minor parking lot dings and impact zones</li>
        </Box>

        <Typography className="blog-paragraph">
          Premium films like <strong>STEK DynoShield</strong> and <strong>STEK DynoMatte</strong> can even
          <strong> self-heal</strong> when exposed to heat — meaning light scratches can disappear over time in Texas sun.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          Why Dallas Is One of the HARDEST Places on Vehicle Paint
        </Typography>

        <Typography variant="h6" className="blog-section-title">
          1. Constant Construction Zones
        </Typography>
        <Typography className="blog-paragraph">
          Highways like <strong>US-75, I-635, I-30, and SH-121</strong> are nonstop construction corridors. Loose gravel and
          debris create rock chips daily — especially on your front bumper, hood, and fenders.
        </Typography>

        <Typography variant="h6" className="blog-section-title">
          2. Extreme Heat & UV Exposure
        </Typography>
        <Typography className="blog-paragraph">
          Texas sun can accelerate clear-coat breakdown. Once clear coat fails, paint permanently fades, oxidizes, and can
          peel — which kills resale value.
        </Typography>

        <Typography variant="h6" className="blog-section-title">
          3. High-Speed Commuting
        </Typography>
        <Typography className="blog-paragraph">
          Long commutes at <strong>70–85 MPH</strong> mean your front end is constantly being “sandblasted” by road debris.
          PPF is the only solution that physically blocks this impact.
        </Typography>

        <Typography variant="h6" className="blog-section-title">
          4. Tight Parking Lots
        </Typography>
        <Typography className="blog-paragraph">
          From Plano to Uptown Dallas, door dings and random scuffs happen fast. PPF helps prevent permanent paint damage in
          high-contact areas.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          What Areas Should You Protect With PPF?
        </Typography>

        <Typography variant="h6" className="blog-section-title">
          Full Front End Package
        </Typography>
        <Box component="ul" className="blog-paragraph" sx={{ pl: 4 }}>
          <li>Front bumper</li>
          <li>Full hood</li>
          <li>Full fenders</li>
          <li>Headlights</li>
          <li>Mirror caps</li>
        </Box>

        <Typography variant="h6" className="blog-section-title">
          Track / Performance Package 🏁
        </Typography>
        <Box component="ul" className="blog-paragraph" sx={{ pl: 4 }}>
          <li>Rocker panels</li>
          <li>Rear bumper impact zones</li>
          <li>Rear fender flares</li>
        </Box>

        <Typography variant="h6" className="blog-section-title">
          Full Body PPF
        </Typography>
        <Typography className="blog-paragraph">
          Ultimate protection for exotic, luxury, and brand-new vehicles — perfect for keeping paint in showroom condition.
        </Typography>

        <Typography variant="h5" className="blog-section-title">
          Why Choose Tint Tek Plus for PPF in Dallas?
        </Typography>
        <Typography className="blog-paragraph">
          <strong>Tint Tek Plus</strong> is trusted by drivers across <strong>Plano, Garland, Frisco, Richardson, McKinney,
            and Dallas</strong> for one reason: we protect vehicles the right way.
        </Typography>

        <Box component="ul" className="blog-paragraph" sx={{ pl: 4 }}>
          <li>✔ Premium <strong>STEK PPF</strong> (DynoShield & DynoMatte)</li>
          <li>✔ Self-healing technology</li>
          <li>✔ Computer-cut precision patterns</li>
          <li>✔ Wrapped edges for a seamless finish</li>
          <li>✔ Warranty-backed installations</li>
          <li>✔ Trusted on Tesla, BMW, Porsche, Corvette, G-Wagon, and more</li>
        </Box>

        <Typography variant="h5" className="blog-section-title">
          PPF vs Ceramic Coating — What’s the Difference?
        </Typography>
        <Typography className="blog-paragraph">
          <strong>Ceramic coating protects shine.</strong> <strong>PPF protects paint.</strong> If you want real impact
          protection from Dallas roads, you need PPF.
        </Typography>

        <Box component="ul" className="blog-paragraph" sx={{ pl: 4 }}>
          <li><strong>Stops rock chips:</strong> PPF ✅ | Ceramic ❌</li>
          <li><strong>Scratch resistance:</strong> PPF ✅ | Ceramic ❌</li>
          <li><strong>Self-healing:</strong> PPF ✅ | Ceramic ❌</li>
          <li><strong>UV protection:</strong> PPF ✅ | Ceramic ✅</li>
          <li><strong>Easier cleaning:</strong> PPF ✅ | Ceramic ✅</li>
        </Box>

        <Typography variant="h5" className="blog-section-title">
          Is Paint Protection Film Worth It in Dallas?
        </Typography>
        <Typography className="blog-paragraph">
          Absolutely. Between construction debris, high speeds, and intense UV, unprotected paint loses value quickly. PPF
          preserves your finish, helps protect resale value, and can save thousands in repainting and correction costs.
        </Typography>


        <Typography variant="h5" className="blog-section-title">
          📍 Come See Us
        </Typography>
        <Typography className="blog-paragraph">
          <strong>Tint Tek Plus – Dallas, TX</strong>
          <br />
          📍 2518 W. Kingsley Rd, Garland, TX (Serving all of Dallas)
          <br />
          📞 Call/Text: <strong>972-362-8468</strong>
          <br />
          🌐{" "}
          <a href="https://www.tinttekplus.com" target="_blank" rel="noopener noreferrer">
            www.tinttekplus.com
          </a>
        </Typography>
      </>
    ),
    image: "/ppf-installation.JPEG",
    date: "August 30, 2025",
    category: "Paint Protection Film",
    faqs: [
      {
        question: "Is PPF worth it in Dallas, Texas?",
        answer: (
          <Typography className="blog-paragraph" sx={{ mb: 0 }}>
            Yes — Dallas highways, construction zones, and Texas sun make PPF one of the smartest upgrades for preventing
            rock chips, scratches, and UV damage.
          </Typography>
        ),
      },
      {
        question: "How long does PPF last?",
        answer: (
          <Typography className="blog-paragraph" sx={{ mb: 0 }}>
            High-quality films typically last <strong>7–10 years</strong> with proper installation and care.
          </Typography>
        ),
      },
      {
        question: "Will PPF damage factory paint?",
        answer: (
          <Typography className="blog-paragraph" sx={{ mb: 0 }}>
            No — when professionally installed and removed, PPF is designed to protect factory paint, not harm it.
          </Typography>
        ),
      },
      {
        question: "Does self-healing PPF really work?",
        answer: (
          <Typography className="blog-paragraph" sx={{ mb: 0 }}>
            Yes — premium films can self-heal light swirls and fine scratches when warmed by sunlight or heat.
          </Typography>
        ),
      },
      {
        question: "What’s the most popular PPF package?",
        answer: (
          <Typography className="blog-paragraph" sx={{ mb: 0 }}>
            The <strong>Full Front End Package</strong> is the top choice because it protects the highest-impact zones on
            Dallas highways.
          </Typography>
        ),
      },
      {
        question: "Is PPF better than ceramic coating?",
        answer: (
          <Typography className="blog-paragraph" sx={{ mb: 0 }}>
            They do different jobs: PPF stops physical damage (chips/scratches), ceramic boosts gloss and ease of cleaning.
            For Dallas roads, PPF is the foundation.
          </Typography>
        ),
      },
    ],
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = useMemo(
    () => blogPosts.find((p) => String(p.id) === String(id)),
    [id]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ------ SEO (Helmet + JSON-LD) ------
  const seo = useMemo(() => {
    if (!post) {
      return {
        title: "Post Not Found | Tint Tek Plus",
        description: "The blog post you’re looking for doesn’t exist.",
        canonical: `${SITE}/blog/${id || ""}`,
        robots: "noindex, nofollow",
        ldJson: null,
        breadcrumbsLd: null,
      };
    }
    const url = `${SITE}/blog/${post.id}`;
    const title = `${post.title} | Tint Tek Plus Blog`;
    const description = post.summary;
    const imageAbs = `${SITE}${post.image.startsWith("/") ? post.image : `/${post.image}`}`;

    // BlogPosting schema
    const ldJson = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      image: imageAbs,
      url,
      datePublished: post.date, // consider ISO 8601 if you have it
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Tint Tek Plus" },
      publisher: {
        "@type": "Organization",
        name: "Tint Tek Plus",
        logo: {
          "@type": "ImageObject",
          url: `${SITE}/logo.png`,
        },
      },
    };

    // Breadcrumbs
    const breadcrumbsLd = {
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
          name: "Blog",
          item: `${SITE}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: url,
        },
      ],
    };

    return {
      title,
      description,
      canonical: url,
      robots: "index, follow",
      ldJson,
      breadcrumbsLd,
      imageAbs,
    };
  }, [post, id]);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: post?.title ?? "Tint Tek Plus Blog",
      text: post?.summary ?? "Check out this article from Tint Tek Plus",
      url: typeof window !== "undefined" ? window.location.href : undefined,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard && shareData.url) {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      } else {
        window.open(shareData.url, "_blank");
      }
    } catch {
      // no-op
    }
  }, [post]);

  if (!post) {
    return (
      <>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="robots" content={seo.robots} />
          <link rel="canonical" href={seo.canonical} />
        </Helmet>

        <Container maxWidth="md" sx={{ textAlign: "center", my: 8 }}>
          <Typography variant="h4" color="error">
            Blog post not found
          </Typography>
          <Button
            onClick={() => navigate("/blog")}
            startIcon={<ArrowBackIcon />}
            sx={{ mt: 4 }}
            variant="contained"
          >
            Back to Blog
          </Button>
        </Container>
      </>
    );
  }

  return (
    <Box component="article" sx={{
      background: `
      linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 14%, rgba(0,0,0,0.0) 46%),
      radial-gradient(circle at top left, rgba(39,148,210,0.1), transparent 88%),
      radial-gradient(circle at bottom right, rgba(77,184,240,0.12), transparent 90%),
      linear-gradient(180deg, #000 0%, #0f0f0f 100%)
    `,
    }}>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content={seo.robots} />
        <link rel="canonical" href={seo.canonical} />
        {/* Social cards */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        {seo.imageAbs && <meta property="og:image" content={seo.imageAbs} />}
        <meta name="twitter:card" content="summary_large_image" />
        {/* JSON-LD */}
        {seo.ldJson && (
          <script type="application/ld+json">{JSON.stringify(seo.ldJson)}</script>
        )}
        {seo.breadcrumbsLd && (
          <script type="application/ld+json">
            {JSON.stringify(seo.breadcrumbsLd)}
          </script>
        )}
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "50vh", md: "70vh" },
          overflow: "hidden",
        }}
        aria-label={post.title}
      >
        <Box
          role="img"
          aria-label={post.title}
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "30%",
              background: "linear-gradient(to top, #0a0a10, transparent)",
            },
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            pb: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: "800px" }}>
            <Chip
              label={post.category}
              color="primary"
              size="small"
              sx={{
                mb: 2,
                bgcolor: "#2794d2",
                color: "white",
                fontWeight: "500",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "800",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "1rem", md: "1.25rem" },
                mb: 2,
              }}
            >
              {post.summary}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgba(255,255,255,0.7)",
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarTodayIcon fontSize="small" />
                <Typography variant="body2">{post.date}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CategoryIcon fontSize="small" />
                <Typography variant="body2">{post.category}</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Blog Content */}
      <Container maxWidth="xl">
        <Box
          sx={{
            py: { xs: 4, md: 8 },
            px: { xs: 2, sm: 0 },
          }}
        >
          <Box
            className="blog-content"
            sx={{
              color: "#fff",
              "& .blog-section-title": {
                fontWeight: "700",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                mt: 6,
                mb: 3,
                color: "#fff",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                  width: "60px",
                  height: "3px",
                  bgcolor: "#2794d2",
                },
              },
              "& .blog-paragraph": {
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
                mb: 3,
                color: "rgba(255,255,255,0.85)",
              },
              "& .highlight": {
                color: "#2794d2",
                fontWeight: "600",
              },
              "& .blog-highlight": {
                fontSize: { xs: "1.1rem", md: "1.2rem" },
                fontWeight: "600",
                borderLeft: "3px solid #2794d2",
                pl: 2,
                py: 1,
                my: 4,
              },
              "& .feature-box": {
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: { xs: "center", sm: "space-between" },
                my: 4,
              },
              "& .feature-item": {
                bgcolor: "rgba(39, 148, 210, 0.1)",
                border: "1px solid rgba(39, 148, 210, 0.3)",
                borderRadius: 2,
                p: 3,
                textAlign: "center",
                flex: { xs: "1 1 100%", sm: "1 1 30%" },
                maxWidth: { xs: "100%", sm: "30%" },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  bgcolor: "rgba(39, 148, 210, 0.2)",
                },
                "& h6": {
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#2794d2",
                  mb: 1,
                },
                "& body2": {
                  color: "rgba(255,255,255,0.7)",
                },
              },
              "& .benefit-list": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
                my: 3,
              },
              "& .benefit-item": {
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
              },
              "& .benefit-icon": {
                color: "#2794d2",
                fontWeight: "bold",
                fontSize: "1.2rem",
              },
            }}
          >
            {post.content}

            {post.faqs && (
              <Box sx={{ mt: 6 }}>
                <Typography variant="h5" className="blog-section-title">
                  Frequently Asked Questions (FAQ)
                </Typography>
                <Box sx={{ mt: 3 }}>
                  {post.faqs.map((faq, index) => (
                    <Accordion
                      key={index}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.03)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.1)",
                        mb: 2,
                        "&:before": { display: "none" },
                        borderRadius: "8px !important",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#2794d2" }} />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                      >
                        <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {faq.answer}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Box>
            )}
          </Box>

          {/* Share / Back */}
          <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.1)" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 6,
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              onClick={() => navigate("/blogs")}
              startIcon={<ArrowBackIcon />}
              variant="outlined"
              sx={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "#fff",
                "&:hover": {
                  borderColor: "#2794d2",
                  bgcolor: "rgba(39, 148, 210, 0.1)",
                },
              }}
            >
              Back to Blog
            </Button>

            <Button
              onClick={handleShare}
              startIcon={<ShareIcon />}
              variant="contained"
              sx={{
                bgcolor: "#2794d2",
                "&:hover": { bgcolor: "#1a7bb0" },
              }}
            >
              Share Article
            </Button>
          </Box>
        </Box>
      </Container>

      {/* CTA & Footer */}
      <SubCTA />
      <SubContact />
      <Footer />
    </Box>
  );
};

export default BlogDetail;
