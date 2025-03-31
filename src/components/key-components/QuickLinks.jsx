import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

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
      { text: "Windshield Protection Film", to: "/services/windshield-protection-film" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { text: "Frequently Asked Questions", to: "/faq" },
      { text: "Gallery", to: "/gallery" },
      { text: "Blogs", to: "/blog" },
      { text: "Vehicle Window Tint Viewer", to: "/simulators/vehicle-tinting-simulator" },
      { text: "Tesla Window Tint Viewer", to: "/simulators/tesla-tinting-simulator" },
      { text: "Paint Protection Film Viewer", to: "/simulators/paint-protection-simulator" },
      { text: "Commercial Window Film Viewer", to: "/simulators/commercial-tinting-simulator" },
      { text: "Residential Window Film Viewer", to: "/simulators/residential-tinting-simulator" },
    ],
  },
];

const QuickLinks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="quick-links"
      sx={{
        width: "100%",
        textAlign: "center",
        background: "#000",
        color: "#fff",
        py: 2,
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {quickLinksData.map((column, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  // Set a responsive minimum width on the Paper container
                  minWidth: { xs: "320px", sm: "400px", md: "auto" },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderRadius: 3,
                  background: "#000",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    borderBottom: "2px solid",
                    borderColor: "#2794d2",
                    color: "#fff",
                    pb: 1,
                    mb: 2,
                  }}
                >
                  {column.title}
                </Typography>

                {column.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    component={RouterLink}
                    to={link.to}
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.85)",
                      transition: "all 0.3s ease",
                      // Force links to remain on one line:
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: 1.4,
                      "&:hover": {
                        color: "#2794d2",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    <ArrowRightAltIcon fontSize="small" />
                    {link.text}
                  </Link>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickLinks;
