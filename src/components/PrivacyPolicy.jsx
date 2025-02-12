import React from "react";
import { Container, Typography, Divider, Box } from "@mui/material";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#000", // Black background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white", // White text throughout
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          minHeight: "300px",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 40%, #000), url(/TintTek-Website/car.mp4)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "40px 20px",
          backdropFilter: "blur(5px)",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Privacy Policy
        </Typography>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingY: "40px",
          color: "white", // Ensure text stays white
        }}
      >
        <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
          Last Updated: September 4, 2024
        </Typography>
        <Divider sx={{ my: 2, backgroundColor: "white" }} />

        {/* Privacy Policy Content */}
        <Box>
          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            Online Privacy Policy Agreement
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            Tint Tek Plus LLC values its users' privacy. This Privacy Policy
            ("Policy") will help you understand how we collect and use personal
            information from those who visit our website or make use of our
            online facilities and services.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            1. Information We Collect
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            It is always up to you whether to disclose personally identifiable
            information to us. We may collect non-personal demographic
            information such as age, gender, IP address, and browser type.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            2. Why We Collect Information & Retention Period
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            We collect data to improve our services, send promotional emails,
            and conduct market research with your consent. Data is retained
            based on regulatory and operational needs.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            3. Use of Collected Information
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            Tint Tek Plus LLC does not sell, rent, or lease customer data to
            third parties. We use personal information to improve services and
            keep customers informed about new products.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            4. Disclosure of Information
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            Your information may be disclosed if required by law, in response to
            subpoenas, or to enforce our Terms of Service. SMS consent will
            never be shared or sold.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            5. Non-Marketing Purposes
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            We may contact you for non-marketing purposes such as security
            alerts or policy updates.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            6. Children's Privacy
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            Our website is not directed to children under 13, and we do not
            knowingly collect data from them.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            7. Unsubscribe or Opt-Out
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            Users may opt out of receiving communications by emailing
            info@tinttekplus.com.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            8. Links to Other Websites
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            Our website may contain links to third-party websites. We are not
            responsible for their privacy policies.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            9. EU Data Transfers
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            Your data may be transferred to the U.S. under the Privacy Shield
            framework.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            10. Security Measures
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            We use encryption and secure servers to protect your data. Only
            authorized employees have access to personally identifiable
            information.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            11. Acceptance of Terms
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            By using this site, you accept this policy. Continued use after
            changes means agreement with updates.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            12. Contact Information
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            For questions, contact us at support@tinttekplus.com.
          </Typography>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ width: "100%" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
