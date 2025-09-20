import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

/* ------------------------------ Data ------------------------------ */
const quickLinksData = [
  {
    title: "Services",
    links: [
      { text: "Vehicle Window Tinting", to: "/services/vehicle-window-tinting" },
      { text: "Tesla Window Tinting", to: "/services/tesla-window-tinting" },
      { text: "Commercial Window Tinting", to: "/services/commercial-window-tinting" },
      { text: "Residential Window Tinting", to: "/services/residential-window-tinting" },
      { text: "Vehicle Paint Correction", to: "/services/vehicle-paint-correction" },
      { text: "Vehicle Paint Protection", to: "/services/vehicle-paint-protection" },
      { text: "Headlight & Tailight Services", to: "/services/headlight-services" },
      { text: "Ceramic Coating", to: "/services/ceramic-coating" },
      { text: "Windshield Protection Film", to: "/services/windshield-protection-film" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { text: "Frequently Asked Questions", to: "/support" },
      { text: "Gallery", to: "/gallery" },
      { text: "Blogs", to: "/blogs" },
      { text: "Vehicle Window Tint Viewer", to: "/simulators/vehicle-window-tinting" },
      { text: "Tesla Window Tint Viewer", to: "/simulators/tesla-window-tinting" },
      { text: "Paint Protection Film Viewer", to: "/simulators/vehicle-paint-protection" },
      { text: "Commercial Window Film Viewer", to: "/simulators/commercial-window-tinting" },
      { text: "Residential Window Film Viewer", to: "/simulators/residential-window-tinting" },
      { text: "Home", to: "/" },
    ],
  },
];

/* ----------------------------- Motion ----------------------------- */
const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const rowVariants = {
  initial: { x: 0 },
  hover: { x: 6, transition: { type: "spring", stiffness: 340, damping: 24 } },
};

/* --------------------------- Component ---------------------------- */
const QuickLinks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="quick-links"
      sx={{
        width: "100%",
        display: "flex",              // ✅ center the whole block
        justifyContent: "center",     // ✅
        color: "#fff !important",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 3 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* One centered container controls header + grid */}
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto" }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 3, md: 5 }, textAlign: "center" }}>
          <Typography
            component="h2"
            variant={isMobile ? "h5" : "h4"}
            sx={{
              fontWeight: 800,
              letterSpacing: 0.4,
              lineHeight: 1.15,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "#fff",
            }}
          >
            Explore Tint Tek +
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 720,
              mx: "auto",
            }}
          >
            Fast access to our most-visited services and tools.
          </Typography>
        </Box>

        {/* Columns (fill the row; no justifyContent center) */}
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="stretch">
          {quickLinksData.map((column, index) => (
            <Grid key={index} item xs={12} md={6}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                {/* Title */}
                <Box sx={{ mb: 1.5, px: { xs: 0.5, md: 0 } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.92)",
                      position: "relative",
                      pb: 0.75,
                      display: "inline-flex",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        height: 2,
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg, #2794d2, rgba(39,148,210,0.1))",
                        opacity: 0.9,
                      },
                    }}
                  >
                    {column.title}
                  </Typography>
                </Box>

                {/* Glassy group (not a card) */}
                <Box
                  sx={{
                    borderRadius: 2.5,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(10px)",
                    overflow: "hidden",
                  }}
                >
                  {column.links.map((link, linkIndex) => {
                    const last = linkIndex === column.links.length - 1;
                    return (
                      <Box key={linkIndex}>
                        <motion.div
                          variants={rowVariants}
                          initial="initial"
                          whileHover="hover"
                        >
                          <Link
                            component={RouterLink}
                            to={link.to}
                            underline="none"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 2,
                              px: { xs: 1.5, md: 2 },
                              py: { xs: 1.25, md: 1.5 },
                              fontSize: { xs: "0.975rem", md: "1.025rem" },
                              fontWeight: 500,
                              color: "rgba(255,255,255,0.88)",
                              lineHeight: 1.4,
                              transition:
                                "color 220ms ease, background 220ms ease, transform 220ms ease",
                              position: "relative",
                              "&:focus-visible": {
                                outline: "none",
                                boxShadow:
                                  "0 0 0 3px rgba(39,148,210,0.35), inset 0 0 0 1px rgba(255,255,255,0.12)",
                                borderRadius: 10,
                                background: "rgba(255,255,255,0.04)",
                              },
                              "&:hover": {
                                color: "#fff",
                                background:
                                  "linear-gradient(90deg, rgba(39,148,210,0.10), transparent)",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                minWidth: 0,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: 999,
                                  background:
                                    "linear-gradient(180deg, #2794d2, #1f79ab)",
                                  boxShadow:
                                    "0 0 14px rgba(39,148,210,0.55), 0 0 2px rgba(39,148,210,0.9)",
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                component="span"
                                sx={{
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {link.text}
                              </Typography>
                            </Box>

                            <ArrowRightAltIcon
                              fontSize="small"
                              sx={{
                                opacity: 0.9,
                                transform: "translateX(0)",
                                transition:
                                  "transform 220ms cubic-bezier(0.22,1,0.36,1)",
                                ".MuiLink-root:hover &": {
                                  transform: "translateX(4px)",
                                },
                              }}
                            />
                          </Link>
                        </motion.div>

                        {!last && (
                          <Divider
                            component="div"
                            sx={{
                              mx: { xs: 1.5, md: 2 },
                              borderColor: "rgba(255,255,255,0.08)",
                            }}
                          />
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>
  );
};

export default QuickLinks;
