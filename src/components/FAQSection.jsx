import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router-dom";

// FAQ Data Configuration
const faqConfig = {
  "vehicle-window-tinting": [
    {
      question: "Is window tinting legal in Texas?",
      answer: `Yes, but it must meet specific regulations:
      <ul>
        <li><strong>Windshield:</strong> Tinting allowed only on the top 5 inches.</li>
        <li><strong>Front Side Windows:</strong> Must allow at least 25% of visible light to pass through.</li>
        <li><strong>Back Side and Rear Windows:</strong> Can be tinted to any darkness.</li>
        <li><strong>Prohibited Colors:</strong> Red, amber, and blue tints are not permitted.</li>
      </ul>`,
    },
    {
      question: "How long does window tinting last?",
      answer:
        "We offer a lifetime warranty on all our window tinting installations, ensuring long-lasting protection and peace of mind for you.",
    },
    {
      question:
        "Will window tinting affect the clarity of my windows or impair visibility, especially at night?",
      answer:
        "While window tinting reduces glare and improves comfort, darker tints can make it harder to see at night. We offer a range of tint options to ensure a balance between privacy, UV protection, and clear visibility, even in low-light conditions.",
    },
    {
      question: "How long does window tinting last?",
      answer:
        "We offer a lifetime warranty on all our window tinting installations, ensuring long-lasting protection and peace of mind for you.",
    },
  ],
  "tesla-window-tinting": [
    {
      question: "Does tinting affect my Tesla’s sensors or electronics?",
      answer:
        "No, the high-quality ceramic films we use are designed to be safe for all Tesla models, including those with advanced sensors and cameras. Our films are non-metallic, ensuring they won’t interfere with your vehicle’s electronics, GPS, or signal reception.",
    },
    {
      question: "What type of film is best for my Tesla?",
      answer:
        "We recommend ceramic tint for your Tesla. Ceramic films provide excellent heat rejection and UV protection without compromising signal quality or visibility. They are the most advanced option for maintaining comfort, preserving your interior, and keeping your car’s electronics safe.",
    },
    {
      question: "Will window tinting improve my Tesla’s energy efficiency?",
      answer:
        "Yes, window tinting can help improve your Tesla’s energy efficiency by reducing the amount of heat that enters the cabin. This lowers the need for air conditioning, especially during hot days, which can help conserve battery life and improve overall energy use.",
    },
  ],
  "commercial-window-tinting": [
    {
      question: "How long does commercial window tinting last?",
      answer:
        "All of our commercial window tinting comes with a 15 years manufactory warranty. We offer warranties for added peace of mind, ensuring that your investment is protected for years to come.",
    },
    {
      question:
        "How can commercial window tinting help my business save on energy costs?",
      answer:
        "Commercial window tinting can significantly reduce your business's energy consumption by blocking a large portion of solar heat, making it easier to regulate the indoor temperature. With less reliance on air conditioning, your business can save on energy costs, especially during hot months. Additionally, window tinting helps improve HVAC efficiency, which could lead to long-term savings.",
    },
    {
      question: "Do you charge for quotes or estimates?",
      answer:
        "No! We offer free quotes for all of our commercial window tinting services. Simply reach out to us with the details of your project, and we’ll provide an accurate, no-obligation estimate to help you make an informed decision.",
    },
  ],
  "residential-window-tinting": [
    {
      question: "Will window tinting make my home dark?",
      answer:
        "Not necessarily. We offer a variety of tint options that allow natural light to flow into your home while reducing glare and heat. You can choose the level of tint that suits your preferences and needs, from lightly tinted windows that maintain a bright interior to darker tints for enhanced privacy and heat reduction.",
    },
    {
      question: "Does residential window tinting improve energy efficiency?",
      answer:
        "Yes, window tinting helps your home become more energy-efficient by blocking solar heat. This reduces the need for air conditioning during the summer and helps retain warmth during the winter, ultimately lowering your energy bills year-round.",
    },
    {
      question: "Do you offer a warranty on residential window tinting?",
      answer:
        "Yes! We offer a lifetime warranty on our residential window tinting services. Our high-quality films are designed to last, and we guarantee that your windows will remain in great condition without issues like bubbling, peeling, or fading.",
    },
    {
      question: "Does window film increase privacy at night if interior lights are on?",
      answer:
        "No, window tinting or window film generally does not provide increased privacy at night if your interior lights are on. At night, when it's darker outside than inside, light from your home can make it easier for people to see inside. However, darker or more reflective films may offer some degree of privacy during the day. For maximum nighttime privacy, we recommend using dual-reflective films or privacy films that are designed to reduce visibility both day and night.",
    },
    {
      question: "Do you charge for quotes or estimates?",
      answer:
        "No, we offer free quotes for all of our residential window tinting services. Simply contact us with the details of your project, and we’ll provide you with a no-obligation, accurate estimate.",
    },
  ],
  "vehicle-paint-correction": [
    {
      question: "Will paint correction remove all scratches and imperfections?",
      answer:
        "While paint correction can remove most swirl marks, light scratches, and other imperfections, it may not be able to eliminate very deep or severe scratches. The results depend on the depth of the defect and the condition of the paint. Our professionals will assess your vehicle and determine the best approach for optimal results.",
    },
    {
      question: "How long does paint correction take?",
      answer:
        "The duration of paint correction depends on the vehicle's condition, size, and the level of correction required. It can take anywhere from 1 to 3 days. Our professionals will assess your vehicle and provide a detailed quotation during your meeting, ensuring the process meets your specific needs.",
    },
    {
      question: "Do I need to apply a protective coating after paint correction?",
      answer:
        "After paint correction, applying a protective coating such as a wax, sealant, or ceramic coating is highly recommended. This will help protect the newly corrected paint from environmental elements, dirt, and scratches, keeping your vehicle looking great for longer.",
    },
    {
      question: "How often should I get paint correction done?",
      answer:
        "Paint correction is typically done when the vehicle’s paint shows significant imperfections that can't be corrected by regular washing or detailing. It’s not something that needs to be done regularly, but it can be a good idea if you notice defects in your paint or want to maintain the overall appearance of your vehicle.",
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
  "headlight-services": [
    {
      question: "Question",
      answer:
        "Answer",
    },
    {
      question: "Question",
      answer:
        "Answer",
    },
    {
      question: "Question",
      answer:
        "Answer",
    },
  ],
  "windshield-protection-film": [
    {
      question: "Does ExoShield GT3 protect against all types of damage?",
      answer:
        "ExoShield GT3 significantly reduces the risk of damage from road debris, such as rocks, gravel, and other hazards. However, it is not a guarantee against all types of damage, such as large impacts or severe accidents. It provides additional protection but doesn't replace the need for careful driving.",
    },
    {
      question: "How do I maintain my windshield after applying ExoShield GT3?",
      answer:
        "ExoShield GT3 requires minimal maintenance. Regular washing is recommended to remove dirt and debris, but the hydrophobic properties of the coating make cleaning much easier. Avoid harsh chemicals or abrasives when cleaning the windshield.",
    },
    {
      question: "Can ExoShield GT3 be applied to any vehicle?",
      answer:
        "Yes, ExoShield GT3 can be applied to most vehicles. Whether your vehicle is new or has an existing windshield, the protective coating can be applied professionally to ensure maximum performance.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "The application of ExoShield GT3 typically takes about 2 to 3 hours, depending on the vehicle and condition of the windshield. The process is quick, and our technicians ensure the coating is applied flawlessly.",
    },
    {
      question: "Can ExoShield GT3 be applied to any vehicle?",
      answer:
        "Yes, ExoShield GT3 can be applied to most vehicles and works on both new and existing windshields.",
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
            <Accordion
              key={index}
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
                <Typography variant="body1" dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
