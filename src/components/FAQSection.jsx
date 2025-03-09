import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router-dom";

// FAQ Data Configuration
const faqConfig = {
  "vehicle-window-tinting": [
    {
      question: "How long does the tint last?",
      answer:
        "Our vehicle window tint is designed to last for years with proper care. The exact duration can depend on environmental factors and maintenance.",
    },
    {
      question: "Is the tint legal in all states?",
      answer:
        "Yes, our tint complies with most state regulations. However, it’s a good idea to check your local laws to ensure compliance.",
    },
    {
      question: "Is the tint legal in all states?",
      answer:
        "Yes, our tint complies with most state regulations. However, it’s a good idea to check your local laws to ensure compliance.",
    },
  ],
  "tesla-window-tinting": [
    {
      question: "Do you offer warranties on Tesla tint?",
      answer:
        "Absolutely! We provide a warranty on our Tesla tint products, ensuring quality and performance.",
    },
    {
      question: "How does Tesla tint differ from standard tint?",
      answer:
        "Tesla tint is specifically designed to meet the unique requirements of Tesla vehicles, including enhanced UV and heat protection.",
    },
    {
      question: "Is the tint legal in all states?",
      answer:
        "Yes, our tint complies with most state regulations. However, it’s a good idea to check your local laws to ensure compliance.",
    },
  ],
  "commercial-window-tinting": [
    {
      question: "Can commercial tinting improve energy efficiency?",
      answer:
        "Yes, commercial tinting helps reduce solar heat gain, which can lead to significant energy savings in large buildings.",
    },
    {
      question: "Do you provide installation services for commercial buildings?",
      answer:
        "We offer full installation services for commercial projects to ensure optimal performance and durability.",
    },
    {
      question: "Is the tint legal in all states?",
      answer:
        "Yes, our tint complies with most state regulations. However, it’s a good idea to check your local laws to ensure compliance.",
    },
  ],
  "residential-window-tinting": [
    {
      question: "Will residential tinting reduce glare?",
      answer:
        "Yes, residential tinting is designed to minimize glare while still allowing natural light to filter through.",
    },
    {
      question: "Does tinting help in reducing your energy bills?",
      answer:
        "It can. By reducing heat transfer, window tinting can contribute to lower air conditioning costs during hot weather.",
    },
    {
      question: "Is the tint legal in all states?",
      answer:
        "Yes, our tint complies with most state regulations. However, it’s a good idea to check your local laws to ensure compliance.",
    },
  ],
  "vehicle-paint-correction": [
    {
      question: "What is included in a Stage 1 correction?",
      answer:
        "Stage 1 correction involves a light polish that removes minor scratches and enhances the vehicle’s gloss.",
    },
    {
      question: "How long does the paint correction process take?",
      answer:
        "The process typically takes a few hours, depending on the condition of the vehicle.",
    },
    {
      question: "Is the tint legal in all states?",
      answer:
        "Yes, our tint complies with most state regulations. However, it’s a good idea to check your local laws to ensure compliance.",
    },
  ],
  "vehicle-paint-protection": [
    {
      question: "What does a ULTRA level protection offer?",
      answer:
        "The ULTRA level protection features premium self-healing film for superior scratch resistance and a long-term warranty.",
    },
    {
      question: "Can I choose protection for only part of my vehicle?",
      answer:
        "Yes, you can opt for either hood protection or full body protection depending on your needs.",
    },
    {
      question: "Is the tint legal in all states?",
      answer:
        "Yes, our tint complies with most state regulations. However, it’s a good idea to check your local laws to ensure compliance.",
    },
  ],
};

const FAQSection = () => {
  // Get the current page slug from the URL
  const location = useLocation();
  const path = location.pathname.split("/").pop();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  // Select FAQs based on the current service; if not found, show an empty array or default FAQs.
  const faqs = faqConfig[path] || [];

  return (
    <Box sx={{ py: 5, backgroundColor: "#1f1f1f" }}>
      <Container maxWidth="lg">
      <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ color: "#fff" }}
          >
            Frequently Asked Questions
          </Typography>
        {faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <Accordion key={index}
               sx={{
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  marginBottom: "8px",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
                >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <Typography>No FAQs available for this service.</Typography>
        )}
      </Container>
    </Box>
  );
};

export default FAQSection;
