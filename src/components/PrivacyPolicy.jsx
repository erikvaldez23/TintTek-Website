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
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 40%, #000), url(/TintTek-Website/privacy-banner.jpg)`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}>
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
          color: "white", 
          overflowY: "auto",
        }}
      >
        <Typography variant="subtitle1" sx={{ opacity: 0.7, marginBottom: 2 }}>
          Last Updated: September 4, 2024
        </Typography>
        <Divider sx={{ my: 2, backgroundColor: "white" }} />

        {/* Privacy Policy Sections */}
        {[
          { title: "Online Privacy Policy Agreement", content: "Tint Tek Plus LLC values its users' privacy. This Privacy Policy will help you understand how we collect and use personal information from those who visit our website or make use of our online facilities and services, and what we will and will not do with the information we collect. Our Policy has been designed and created to ensure those affiliated with Tint Tek Plus LLC of our commitment and realization of our obligation not only to meet, but to exceed, most existing privacy standards. We reserve the right to make changes to this Policy at any given time. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page. If at any point in time Tint Tek Plus LLC decides to make use of any personally identifiable information on file, in a manner vastly different from that which was stated when this information was initially collected, the user or users shall be promptly notified by email. Users at that time shall have the option as to whether to permit the use of their information in this separate manner."},
          { title: "1. Information We Collect", content: "It is always up to you whether to disclose personally identifiable information to us. We may collect non-personal demographic information such as age, gender, IP address, and browser type." },
          { title: "2. Why We Collect Information & Retention Period", content: "We collect data to improve our services, send promotional emails, and conduct market research with your consent. Data is retained based on regulatory and operational needs." },
          { title: "3. Use of Collected Information", content: "Tint Tek Plus LLC does not sell, rent, or lease customer data to third parties. We use personal information to improve services and keep customers informed about new products." },
          { title: "4. Disclosure of Information", content: "Your information may be disclosed if required by law, in response to subpoenas, or to enforce our Terms of Service. SMS consent will never be shared or sold." },
          { title: "5. Non-Marketing Purposes", content: "We may contact you for non-marketing purposes such as security alerts or policy updates." },
          { title: "6. Children's Privacy", content: "Our website is not directed to children under 13, and we do not knowingly collect data from them." },
          { title: "7. Unsubscribe or Opt-Out", content: "Users may opt out of receiving communications by emailing info@tinttekplus.com." },
          { title: "8. Links to Other Websites", content: "Our website may contain links to third-party websites. We are not responsible for their privacy policies." },
          { title: "9. EU Data Transfers", content: "Your data may be transferred to the U.S. under the Privacy Shield framework." },
          { title: "10. Security Measures", content: "We use encryption and secure servers to protect your data. Only authorized employees have access to personally identifiable information." },
          { title: "11. Acceptance of Terms", content: "By using this site, you accept this policy. Continued use after changes means agreement with updates." },
          { title: "12. Contact Information", content: "For questions, contact us at support@tinttekplus.com." }
        ].map((section, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
              {section.title}
            </Typography>
            <Typography paragraph sx={{ lineHeight: 1.6, opacity: 0.9 }}>
              {section.content}
            </Typography>
          </Box>
        ))}
      </Container>

      {/* Footer */}
      <Box sx={{ width: "100%" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
