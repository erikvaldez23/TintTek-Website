import React from "react";
import { Box, Typography, Card, Grid, useMediaQuery } from "@mui/material";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box 
      sx={{ 
        background: "#EEEEFF",
        width: "100%", 
        py: 3
      }}
    >
      <Box 
        sx={{ 
          padding: { xs: "20px", md: "40px" }, 
          maxWidth: "1200px", 
          margin: "auto" 
        }} 
        id="contact"
      >
        {/* Contact Header */}
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{ 
            mb: 1, 
            fontWeight: 700, 
            color: "#000", 
            textAlign: "center",
            letterSpacing: "-0.5px"
          }}
        >
          Contact Us
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: "center", 
            mb: 6, 
            color: "#5a6a85",
            maxWidth: "600px",
            mx: "auto",
            fontSize: "1.1rem"
          }}
        >
          Let us know how we can help by sending us a message below
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {/* Left Side - Contact Info */}
          <Grid item xs={12} md={5} sx={{ display: "flex" }}>
            <Card 
              elevation={0}
              sx={{ 
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: 3,
                padding: { xs: "20px", md: "30px" }, 
                flexGrow: 1,
                border: "1px solid rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 4, 
                      fontWeight: 600, 
                      color: "#1a2b47",
                      position: "relative",
                      paddingBottom: "10px",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "40px",
                        height: "3px",
                        background: "#2794d2",
                        borderRadius: "3px"
                      }
                    }}
                  >
                    Get In Touch
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                    <Box 
                      sx={{ 
                        backgroundColor: "rgba(39, 148, 210, 0.1)", 
                        p: 1.5, 
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        color: "#2794d2"
                      }}
                    >
                      <FaMapMarkerAlt size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>Location</Typography>
                      <Typography variant="body2" sx={{ color: "#5a6a85" }}>2518 West Kingsley Rd</Typography>
                      <Typography variant="body2" sx={{ color: "#5a6a85" }}>Garland, TX</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                    <Box 
                      sx={{ 
                        backgroundColor: "rgba(39, 148, 210, 0.1)", 
                        p: 1.5, 
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        color: "#2794d2"
                      }}
                    >
                      <FaPhone size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>Call Us</Typography>
                      <Typography variant="body2" sx={{ color: "#5a6a85" }}>+1 (972) 362-8468</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
                    <Box 
                      sx={{ 
                        backgroundColor: "rgba(39, 148, 210, 0.1)", 
                        p: 1.5, 
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        color: "#2794d2"
                      }}
                    >
                      <FaEnvelope size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>Email Us</Typography>
                      <Typography variant="body2" sx={{ color: "#5a6a85" }}>info@tinttekplus.com</Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Google Map Embed with rounded corners and subtle shadow */}
                <Box 
                  sx={{ 
                    mt: 2, 
                    borderRadius: 3, 
                    overflow: "hidden",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    height: "250px"
                  }}
                >
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3350.75026088151!2d-96.6714001!3d32.8783265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea153db5dd237%3A0xe54143946793a9e6!2sTint%20Tek%20Plus!5e0!3m2!1sen!2sus!4v1738297786523!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* Right Side - Embedded External Form */}
          <Grid item xs={12} md={7} sx={{ display: "flex" }}>
            <Box
              sx={{
                flexGrow: 1,
                backgroundColor: "#fff",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                }
              }}
            >
              <iframe
                title="TintWiz Contact Form"
                src="https://app.tintwiz.com/web/cs/gwnvrcfde7mplcffmgqi7sfqo8pcyt1t"
                style={{
                  width: "100%",
                  height: isMobile ? "650px" : "650px",
                  border: 0,
                }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;