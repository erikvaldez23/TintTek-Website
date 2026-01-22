import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LayersIcon from "@mui/icons-material/Layers";
import { Link } from "react-router-dom";

// Define service-specific content
const serviceOptions = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting Services",
    list: ["Front Windsheield", "Sunroof / Panoramic Roof", "Visor Strips"],
    filmTypes: [
      {
        name: "FormulaOne Classic Series",
        description:
          "FormulaOne Classic is a premium dyed film that delivers a sleek, factory-tinted charcoal appearance—perfect for drivers who want style, privacy, and essential UV protection without breaking the bank. It reduces glare and helps keep your interior cooler, all while preserving the clean, understated look many drivers love.",
      },
      {
        name: "Llumar CTX",
        description:
          "CTX film combines advanced ceramic technology with excellent heat and UV protection. It blocks up to 60% of infrared heat while maintaining a clear, non-reflective appearance. Perfect for those seeking superior comfort and privacy without darkening windows too much, CTX is ideal for moderate climates where effective heat rejection and UV protection are key.",
      },
      {
        name: "FormulaOne Pinnacle Series",
        description:
          "FormulaOne Pinnacle takes things further with advanced nano-ceramic technology. Unlike dyed films, it offers excellent infrared heat rejection—helping to keep your vehicle cooler, even on the hottest days. Pinnacle also significantly reduces glare and provides the same 99%+ UV protection, protecting both your passengers and interior.",
      },
    ],
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting Services",
    list: [
      "Full Model S window tinting, windshield, pano sunroof, single sunroof",
      "Full Model 3 window tinting, windshield, sunroof",
      "Full Model X window tinting, windshield",
      "Full Model Y window tinting, windshield, pano sunroof, single sunroof",
      "Full Cybertruck window tinting, windshield",
    ],
    filmTypes: [
      {
        name: "Llumar CTX Series",
        description:
          "FormulaOne Classic is a premium dyed film that delivers a sleek, factory-tinted charcoal appearance—perfect for drivers who want style, privacy, and essential UV protection without breaking the bank. It reduces glare and helps keep your interior cooler, all while preserving the clean, understated look many drivers love.",
      },
      {
        name: "FormulaOne Pinnacle Series",
        description:
          "FormulaOne Pinnacle takes things further with advanced nano-ceramic technology. Unlike dyed films, it offers excellent infrared heat rejection—helping to keep your vehicle cooler, even on the hottest days. Pinnacle also significantly reduces glare and provides the same 99%+ UV protection, protecting both your passengers and interior.",
      },
    ],
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting Services",
    list: [
      "Office Window Tinting",
      "Storefront Window Tinting",
      "Skyscraper Window Tinting",
      "Conference Room Tinting",
      "Custom Business Tinting Solutions",
    ],
    filmTypes: [
      {
        name: "Solar Control Film",
        description:
          "Reduces heat and glare while allowing natural light to enter, improving energy efficiency.",
      },
      {
        name: "Decorative Film",
        description: "Offers privacy and style while reducing glare and heat.",
      },
      {
        name: "Security Film (Coming Soon!)",
        description:
          "Strengthens windows, offering protection against break-ins and accidents by preventing shattering.",
      },
    ],
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting Services",
    list: [
      "Full Home Window Tinting",
      "Single Room Window Tinting",
      "Sunroom Tinting",
      "Patio Door Tinting",
      "Custom Home Tinting Solutions",
    ],
    filmTypes: [
      {
        name: "Reflective Window Film",
        description:
          "This film offers a sleek, mirrored finish that enhances privacy by reflecting light. It reduces heat and glare while providing excellent UV protection and increasing the overall comfort inside your vehicle.",
      },
      {
        name: "Dual-Reflective Window Film",
        description:
          "Designed for both exterior and interior benefits, this film offers a reflective finish on the outside for heat rejection and privacy, while maintaining a more neutral appearance on the inside to reduce mirror-like reflections.",
      },
      {
        name: "Neutral Window Film",
        description:
          "Neutral Window Film provides a balanced look without changing the color of your vehicle’s windows. It effectively blocks heat and UV rays while maintaining a natural, true-to-life view.",
      },
      {
        name: "Specialty Window Film",
        description:
          "Tailored for unique needs, this film offers specialized features like anti-graffiti, anti-scratch, or decorative options. It’s perfect for specific applications that require additional protection or aesthetic appeal.",
      },
      {
        name: "Ceramic Window Film",
        description:
          "Using advanced ceramic technology, this film provides superior heat rejection and UV protection without compromising visibility. It’s non-metallic, ensuring no interference with electronic devices, and offers long-lasting durability.",
      },
      {
        name: "Harmony Window Film",
        description:
          "Designed for a more uniform look, Harmony Window Film balances heat and glare rejection while maintaining a consistent tint throughout the vehicle. It enhances privacy and comfort without drastically altering the vehicle's appearance.",
      },
    ],
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction Services",
    list: [
      "Single-Stage Paint Correction",
      "Multi-Stage Paint Correction",
      "Swirl Mark Removal",
      "Scratch Removal",
      "Gloss Enhancement",
    ],
    filmTypes: [
      {
        name: "Stage 1 Correction",
        description:
          "Removes light swirls and scratches to restore your car's shine.",
      },
      {
        name: "Stage 2 Correction",
        description:
          "A more intensive process to eliminate deeper scratches and imperfections.",
      },
      {
        name: "Stage 3 Correction",
        description:
          "Comprehensive restoration for severely damaged paint, returning a showroom-quality finish.",
      },
    ],
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection Services",
    list: [
      "Front End PPF",
      "Extended PPF",
      "Track Package PPF",
      "Full Car PPF",
      "Color Change PPF",
      "Stealth/Matte PPF",
    ],
    filmTypes: [
      {
        name: "DYNOshield",
        description:
          "The most popular option for high-gloss finishes. It provides exceptional durability, hydrophobic protection, and a sleek shine, backed by a 10-year warranty.",
      },
      {
        name: "DYNOmatte",
        description:
          "Perfect for matte and satin finishes. It preserves the subtle beauty of matte paint while providing excellent protection and a smooth, self-healing surface.",
      },
      {
        name: "DYNOmight",
        description:
          "For those who demand extra durability, DYNOmight is 25% thicker than regular PPF, offering superior protection for off-road vehicles and high-performance sports cars.",
      },
      {
        name: "Color Change PPF",
        description:
          "Premium paint protection film that not only protects your vehicle's paint but also allows you to change its color or finish. This innovative product offers a unique combination of style and protection, making it an ideal solution for those who want to personalize their car’s look while safeguarding its paint from damage",
      },
    ],
  },
  "headlight-services": {
    title: "Headlight Services",
    list: ["Headlight Tint", "Taillight Tint", "Reflectors"],
    filmTypes: [
      {
        name: "DYNOshade",
        description:
          "Provides a subtle shaded effect, offering 45% light transmittance.",
      },
      {
        name: "DYNOshadow",
        description:
          "Delivers a medium charcoal tone with 34% light transmittance.",
      },
      {
        name: "DYNOsmoke",
        description:
          "The darkest option at 30% light transmittance, ideal for a stealthy look.",
      },
      {
        name: "DYNOstorm",
        description:
          "A neutral gray with 50% light transmittance, giving a sleek appearance.",
      },
      {
        name: "DYNOyellow",
        description:
          "Inspired by racing culture, offering a classic yellow tint.",
      },
    ],
  },
  "windshield-protection-film": {
    title: "Headlight Services", // (leaving as-is per your file)
    list: ["Headlight Tint", "Taillight Tint", "Reflectors"],
    filmTypes: [
      {
        name: "DYNOtop",
        description:
          "DYNOtop is an exterior Windshield Protection film designed to significantly reduce the risk of replacing windshields on track cars and off-road vehicles. It can also protect expensive windshields from damage like high-end exotic and hypercars with Advanced Driving Assistance Systems cameras and sensors (ADAS).",
        warrantyUrl:
          "https://dfmm8fty2renf.cloudfront.net/wp-content/uploads/2023/06/DYNOflex-USA-Warranty-2021.pdf",
      },
      {
        name: "GT3 Exo Shield",
        description:
          "ExoShield GT3 Windshield Protection offers top-tier protection for your vehicle’s windshield. This clear, durable film shields against chips, cracks, and road debris, ensuring your windshield stays intact longer. Designed for maximum clarity, it preserves your view while providing superior impact resistance—ideal for daily drivers and those who want to safeguard their investment.",
        warrantyUrl:
          "https://cdn.prod.website-files.com/5c870322e90205bd3137c6df/65b9089bb070e4995e0fec67_2%20-%20GT3%2B%20Limited%20Product%20Warranty%20%5BConsumer%5D.pdf",
      },
    ],
  },
};

// Helper to chunk arrays
const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize)
    chunks.push(arr.slice(i, i + chunkSize));
  return chunks;
};

const LOGOS = {
  llumar: "/llumar-logo.png",
  formulaOne: "/f1-3.png",
  stek: "/stek-logo.png",
  exo: "/windshield/exo.png",
};

const getFilmLogo = (serviceId, filmName) => {
  if (serviceId === "windshield-protection-film") {
    if (/dynotop/i.test(filmName)) return LOGOS.stek; // ✅ DYNOtop → STEK
    if (/gt3|exo/i.test(filmName)) return LOGOS.exo; // ✅ GT3 Exo Shield → Exo
    return LOGOS.exo;
  }
  if (
    serviceId === "vehicle-paint-protection" ||
    serviceId === "headlight-services"
  )
    return LOGOS.stek;
  if (/formulaone/i.test(filmName)) return LOGOS.formulaOne;
  return LOGOS.llumar;
};

const ServicesOffered = ({ serviceId }) => {
  const service = serviceOptions[serviceId];
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (!service) {
    return (
      <Typography variant="h4" textAlign="center" sx={{ color: "#fff" }}>
        Services not found
      </Typography>
    );
  }

  const renderFilmCard = (film, index) => {
    const isColorChangePPF =
      serviceId === "vehicle-paint-protection" &&
      film.name === "Color Change PPF";

    return (
      <Card
        key={index}
        sx={{
          position: "relative",
          backgroundColor: "transparent", // transparent card
          backgroundImage: "none",
          color: "#fff",
          borderRadius: 5,
          height: "100%",
          transition:
            "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
            borderColor: "rgba(39,148,210,0.45)",
          },
        }}
      >
        {/* Film Logo */}
        <Box
          component="img"
          src={getFilmLogo(serviceId, film.name)}
          alt="Film Type Logo"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            width:
              getFilmLogo(serviceId, film.name) === LOGOS.formulaOne ? 130 : 80,
            height:
              getFilmLogo(serviceId, film.name) === LOGOS.formulaOne
                ? 40
                : "auto",
            objectFit: "contain",
            filter: [LOGOS.stek].includes(getFilmLogo(serviceId, film.name))
              ? "invert(1)"
              : "none",
          }}
        />

        <CardContent
          sx={{
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-between",
            height: "100%",
            p: 3,
          }}
        >
          <LayersIcon sx={{ fontSize: 40, color: "#2794d2", mb: 1 }} />
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1.5rem", md: "1.5rem" } }}
          >
            {film.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, color: "rgba(255,255,255,0.9)" }}
          >
            {film.description}
          </Typography>

          {/* Special Button for Color Change PPF */}
          {isColorChangePPF && (
            <Link
              to="https://www.stek-usa.com/fashion-film/?gad_source=1&gbraid=0AAAAApzm59nXMARmXUREslvQbkY3LkfAm&gclid=CjwKCAjwzMi_BhACEiwAX4YZUIGLt8C3CHDIZ12TlPt6DFznknS7D-da5PcSAv0J1-0yZK2qd-dw-BoCoPEQAvD_BwE"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  mt: 3,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #2794d2 0%, #1b6fa5 100%)",
                  borderRadius: 50,
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0 4px 15px rgba(39,148,210,0.3)",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 20px rgba(39,148,210,0.4)",
                  },
                  "&:active": {
                    transform: "translateY(1px)",
                  },
                }}
              >
                <span>Explore Color Options</span>
                <span>→</span>
              </Box>
            </Link>
          )}

          {/* Film-specific warranty button (if provided) */}
          {film.warrantyUrl && (
            <Link
              to={film.warrantyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  mt: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #2794d2 0%, #1b6fa5 100%)",
                  borderRadius: 50,
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0 4px 15px rgba(39,148,210,0.3)",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 20px rgba(39,148,210,0.4)",
                  },
                  "&:active": { transform: "translateY(1px)" },
                }}
              >
                <span>See Warranty Coverage</span>
                <span>→</span>
              </Box>
            </Link>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <Box
      sx={{
        py: 6,
        px: isMobile ? 1.2 : 4,
        backgroundColor: "transparent", // transparent root
        backgroundImage: "none",
        color: "#fff",
        width: "100vw",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{ mb: 2, fontWeight: "bold", color: "#fff", textAlign: "center" }}
        >
          {serviceId === "commercial-window-tinting"
            ? "Commercial Window Tinting Services"
            : serviceId === "residential-window-tinting"
              ? "Residential Window Tinting Services"
              : serviceId === "vehicle-paint-protection"
                ? "Stek PPF Options"
                : serviceId === "headlight-services"
                  ? "Available Tones:"
                  : "Film Types"}
        </Typography>

        {(serviceId === "commercial-window-tinting" ||
          serviceId === "residential-window-tinting") && (
            <List
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: { xs: "flex-start", sm: "center" },
              }}
            >
              {service.list.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                    m: 0,
                    p: 0,
                    backgroundColor: "transparent",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "auto", mr: 0.5 }}>
                    <CheckCircleIcon sx={{ color: "#2794d2" }} />
                  </ListItemIcon>
                  <ListItemText primary={item} sx={{ m: 0 }} />
                </ListItem>
              ))}
            </List>
          )}

        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            mt: 4,
            mb: 2,
            textAlign: serviceId === "tesla-window-tinting" ? "center" : "left",
            fontSize: "1.5rem",
          }}
        >
          The <strong>main types of film</strong> we use:
        </Typography>

        {/* Mobile carousel */}
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 2,
              py: 2,
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" },
              backgroundColor: "transparent",
            }}
          >
            {service.filmTypes.map((film, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 85%",
                  minWidth: "85%",
                  scrollSnapAlign: "center",
                  backgroundColor: "transparent",
                }}
              >
                {renderFilmCard(film, index)}
              </Box>
            ))}
          </Box>
        ) : (
          /* Desktop grid (fills full width to match CTA) */
          (() => {
            const count = service.filmTypes.length;
            // choose column span that fills the 12-col grid completely
            const mdSpan = count <= 1 ? 12 : count === 2 ? 6 : 4; // 1 => 12, 2 => 6, 3+ => 4
            return (
              <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{ mb: 0 }}
              >
                {service.filmTypes.map((film, index) => {
                  const isColorChangePPF =
                    serviceId === "vehicle-paint-protection" &&
                    film.name === "Color Change PPF";
                  // If you still want Color Change PPF to take full width,
                  // you can override mdSpan here; otherwise remove this override.
                  const span = isColorChangePPF ? 12 : mdSpan;

                  return (
                    <Grid
                      item
                      key={index}
                      xs={12}
                      sm={span === 12 ? 12 : 6}
                      md={span}
                      sx={{ display: "flex" }}
                    >
                      <Box sx={{ position: "relative", width: "100%" }}>
                        {renderFilmCard(film, index)}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            );
          })()
        )}

        {/* CTA block (transparent wrapper; keeps gradient button) */}
        {serviceId !== "headlight-services" &&
          serviceId !== "windshield-protection-film" && (
            <Box
              sx={{
                mt: 3,
                textAlign: "center",
                py: 5,
                px: 3,
                borderRadius: 4,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "transparent",
                backgroundImage: "none",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  backgroundColor: "transparent",
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    mb: 1,
                    background: "linear-gradient(90deg, #fff 0%, #bfdfff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  {serviceId === "vehicle-paint-protection"
                    ? "See how each paint protection film package covers your vehicle!"
                    : "Experience Your Tints Before Installation"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: "rgba(255,255,255,0.7)",
                    maxWidth: 600,
                    mx: "auto",
                    fontSize: "1.1rem",
                  }}
                >
                  {serviceId === "vehicle-paint-protection"
                    ? "From bumpers to full body, our simulator shows what’s protected."
                    : "Our interactive simulator shows you exactly how each shade will transform your view."}
                </Typography>
                <Link
                  to={`/simulators/${serviceId}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.5,
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#fff",
                      background:
                        "linear-gradient(90deg, #2794d2 0%, #1b6fa5 100%)",
                      borderRadius: 50,
                      transition: "all 0.3s ease-in-out",
                      boxShadow: "0 4px 15px rgba(39,148,210,0.3)",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 6px 20px rgba(39,148,210,0.4)",
                      },
                      "&:active": {
                        transform: "translateY(1px)",
                      },
                    }}
                  >
                    <Box component="span">
                      {serviceId === "vehicle-paint-protection"
                        ? "Launch PPF Viewer"
                        : "Launch Tint Viewer"}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        transform: "translateX(0)",
                        transition: "transform 0.2s ease-in-out",
                        ".MuiBox-root:hover &": {
                          transform: "translateX(3px)",
                        },
                      }}
                    >
                      →
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          )}
      </Box>
    </Box>
  );
};

export default ServicesOffered;
