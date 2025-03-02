import { useState, useRef } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemButton,
  Paper,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import Contact from "./Contact";

// Define sections with 5 questions each
const faqSections = [
  {
    id: "paint-protection",
    title: "Paint Protection Film",
    questions: [
      {
        id: "q1",
        question: "What exactly is Paint Protection Film?",
        answer:
          "Paint Protection Film (PPF) is a transparent film applied to your vehicle to protect it from scratches, rock chips, and other environmental damage.",
      },
      {
        id: "q7",
        question: "Body Work or Repainted Panels on your Vehicle?",
        answer:
          "If your vehicle has had bodywork or repainting, we need to inspect the surface to ensure proper adhesion of the film or wrap.",
      },
    ],
  },
  {
    id: "care-cleaning",
    title: "Care and Cleaning Instructions",
    questions: [
      {
        id: "q8",
        question: "We Recommend Low PH Soaps and Handwash only.",
        answer:
          "To extend the life of your Paint Protection Film or Vinyl Wrap, we recommend using a low pH soap and handwashing your vehicle.",
      },
      {
        id: "q9",
        question: "STEK Paint Protection Film",
        answer:
          "STEK Paint Protection Film requires gentle cleaning with non-abrasive materials to maintain its clarity and protection.",
      },
      {
        id: "q10",
        question: "Vinyl Wrap",
        answer:
          "Vinyl wraps should be cleaned using mild soap and water. Avoid pressure washing or using harsh chemicals.",
      },
    ],
  },
  {
    id: "window-tint",
    title: "Window Tint and Windshield Protection",
    questions: [
      {
        id: "q11",
        question: "How is my tint installed?",
        answer:
          "We use a precision-cut system to ensure the tint fits perfectly to your windows, reducing bubbles and misalignment.",
      },
      {
        id: "q12",
        question: "How do I care for my tint?",
        answer:
          "Avoid rolling down your windows for at least 48 hours after installation. Clean with ammonia-free glass cleaners.",
      },
      {
        id: "q13",
        question:
          "Is windshield tint and/or windshield protection perfectly clear?",
        answer:
          "Yes, our windshield protection films are designed to be optically clear while blocking UV rays and reducing glare.",
      },
      {
        id: "q14",
        question:
          "Why is Windshield Protection NOT recommended for daily drivers?",
        answer:
          "Windshield Protection Film is durable, but frequent exposure to road debris and wear may lead to quicker degradation, making it less ideal for high-mileage daily drivers.",
      },
    ],
  },
  {
    id: "paint-corrections",
    title: "Paint Corrections and Ceramic Coatings",
    questions: [
      {
        id: "q15",
        question:
          "What is a Paint Correction & Ceramic Coating and why do I need it?",
        answer:
          "Paint Correction removes imperfections like swirl marks and scratches, while Ceramic Coating adds a protective, hydrophobic layer that enhances shine and durability.",
      },
      {
        id: "q16",
        question: "How do I care for my Ceramic Coating?",
        answer:
          "Regular hand washing with pH-neutral soap and avoiding harsh chemicals will help maintain the ceramic coating’s effectiveness.",
      },
    ],
  },
  {
    id: "warranty",
    title: "What is my warranty on these products and services?",
    questions: [
      {
        id: "q17",
        question: "STEK Paint Protection Film Warranty",
        answer:
          "STEK warrants Dynoshield Paint Protection Film for 10 years against defects like yellowing, staining, cracking, and delaminating. This does not cover normal wear, road debris, or intentional damage.",
      },
      {
        id: "q19",
        question: "STEK Window Tint Warranty",
        answer:
          "STEK warranties your window tint for the lifetime of your vehicle ownership.",
      },
      {
        id: "q20",
        question: "Ceramic Coatings Warranty",
        answer:
          "Ceramic coatings require proper maintenance. As long as your car is regularly washed and stored properly, we provide annual maintenance for $250.",
      },
      {
        id: "q21",
        question: "Windshield Protection Warranty",
        answer:
          "Windshield Protection warranties vary depending on film type and installation. Contact us for details.",
      },
    ],
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const sectionRefs = useRef({});

  // Scroll to section
  const handleScroll = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div style={{ backgroundColor: "#EEEEFF" }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "30vh", md: "20vh" }, 
          background: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "20px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Find answers to common questions or contact us for support.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ maxWidth: "800px", paddingY: 4 }}>
        {/* Table of Contents */}
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            marginBottom: 4,
            borderRadius: "12px",
            backgroundColor: "#fff", // ✅ Changed to solid white
            backdropFilter: "none", // ✅ Remove glass effect (optional)
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Table of Contents
          </Typography>
          <List>
            {faqSections.map(({ id, title }) => (
              <ListItemButton
                key={id}
                onClick={() => handleScroll(id)}
                sx={{
                  borderRadius: "8px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#2794d2",
                    color: "#fff",
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Typography sx={{ fontWeight: "500" }}>{title}</Typography>
              </ListItemButton>
            ))}
          </List>
        </Paper>

        {/* FAQ Sections */}
        {faqSections.map(({ id, title, questions }) => (
          <div key={id} ref={(el) => (sectionRefs.current[id] = el)}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ marginTop: 6, marginBottom: 1 }}
            >
              {title}
            </Typography>
            {questions.map(({ id, question, answer }) => (
              <Accordion
                key={id}
                expanded={expanded === id}
                onChange={() => setExpanded(expanded === id ? false : id)}
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
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontSize: "1rem", color: "#333" }}>
                    {answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        ))}
      </Container>

      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}
