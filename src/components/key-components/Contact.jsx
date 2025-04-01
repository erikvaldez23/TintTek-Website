import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form validation function
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        year: "",
        make: "",
        model: "",
        message: "",
      });
      setErrors({});
    }
  };

  // Animation variants
  const headerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <Box sx={{ backgroundColor: "#EEEEFF", width: "100%", py: 2 }}>
      <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "auto" }} id="contact">
        {/* Contact Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headerVariant}>
          <Typography variant={isMobile ? "h4" : "h2"} sx={{ mb: 2, fontWeight: "bold", color: "#000", textAlign: "center" }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", marginBottom: 4 }}>
            Let us know how we can help by sending us a message below. Looking forward to chatting!
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {/* Left Side - Contact Info */}
          <Grid item xs={12} md={5} sx={{ display: "flex" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={leftVariant} style={{ width: "100%" }}>
              <Card sx={{ backgroundColor: "#f8f9fa", padding: "20px", flexGrow: 1 }}>
                <CardContent
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <FaMapMarkerAlt size={24} style={{ marginRight: 10, color: "#2794d2" }} />
                    <Box>
                      <Typography variant="h6">Location</Typography>
                      <Typography variant="body2">2518 West Kingsley Rd</Typography>
                      <Typography variant="body2">Garland, TX</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <FaPhone size={24} style={{ marginRight: 10, color: "#2794d2" }} />
                    <Box>
                      <Typography variant="h6">Call Us</Typography>
                      <Typography variant="body2">+1 (972) 362-8468</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <FaEnvelope size={24} style={{ marginRight: 10, color: "#2794d2" }} />
                    <Box>
                      <Typography variant="h6">Email Us</Typography>
                      <Typography variant="body2">info@tinttekplus.com</Typography>
                    </Box>
                  </Box>

                  {/* Google Map Embed */}
                  <Box sx={{ marginTop: 2 }}>
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3350.75026088151!2d-96.6714001!3d32.8783265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea153db5dd237%3A0xe54143946793a9e6!2sTint%20Tek%20Plus!5e0!3m2!1sen!2sus!4v1738297786523!5m2!1sen!2sus"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={7} sx={{ display: "flex" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={rightVariant} style={{ width: "100%" }}>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  backgroundColor: "#fff",
                  padding: "20px",
                  boxShadow: 3,
                  borderRadius: 2,
                  flexGrow: 1,
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                  label="Your Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  fullWidth
                />

                <TextField
                  label="Phone Number *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  fullWidth
                />

                <TextField
                  label="Vehicle Year (Optional)"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  label="Vehicle Make (Optional)"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  label="Vehicle Model (Optional)"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  label="Message *"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  multiline
                  rows={4}
                  fullWidth
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#2794d2",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
