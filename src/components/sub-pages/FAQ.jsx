import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Container,
  Paper,
  Select,
  MenuItem,
  useMediaQuery,
  Tabs,
  Tab,
  Fade,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Footer from "../key-components/Footer";
import CallToAction from "../key-components/CallToAction";
import Contact from "../key-components/Contact";
import QuickLinks from "../key-components/QuickLinks";

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
      question:
        "Does window film increase privacy at night if interior lights are on?",
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
      question:
        "Do I need to apply a protective coating after paint correction?",
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
      question: "What is Paint Protection Film (PPF)?",
      answer: `Stek PPF is a transparent, durable thermoplastic urethane film that is professionally applied to your vehicle’s painted surfaces. Once installed, it forms a strong protective barrier that absorbs impact and prevents damage from environmental hazards. Not only does it safeguard your vehicle from physical harm, but it also preserves the original look of your car, keeping it pristine and as bright as the day you drove it off the lot. </br>
      But protection is only part of the story—Stek PPF also enhances your vehicle’s appearance by maintaining its glossy finish and giving it a cleaner, sleeker look that’s resistant to staining and discoloration.`,
    },
    {
      question: "Why Choose Stek Paint Protection Film?",
      answer: `Installation duration varies based on the selected coverage:
      <ul>
        <li><strong>Exceptional Durability: </strong>Stek PPF is engineered to withstand the toughest conditions, including road debris, gravel, and weathering elements. It prevents chips, scratches, and swirl marks that can diminish your vehicle's paintwork.</li>
        <li><strong>Self-Healing Technology: </strong> Stek PPF features advanced self-healing properties. Light scratches and swirl marks disappear when exposed to heat, keeping your car looking as fresh as the day it was protected.</li>
        <li><strong>Hydrophobic Properties: </strong> Stek PPF is designed to repel water, dirt, and contaminants. This makes cleaning easier and reduces the frequency of washes, helping to maintain your vehicle's pristine appearance longer.</li>
        <li><strong>Invisible Shield: </strong> The film is nearly invisible and doesn’t alter your car’s color or finish. You get all the protection with none of the visual compromise, maintaining that flawless, high-gloss or matte finish.</li>
        <li><strong>UV Protection: </strong> Stek PPF shields your vehicle’s paint from harmful UV rays, which helps prevent fading and oxidation, ensuring that your car’s color stays vibrant for years.</li>
        <li><strong>Scratch & Impact Protection: </strong> Protect your vehicle from minor abrasions, stone chips, and scratches caused by road debris. Stek PPF is tough enough to absorb impacts, keeping your car looking like new.</li>
      </ul>`,
    },
    {
      question: "Why Stek Is the Best PPF on the Market?",
      answer: `Stek has long been recognized as a leader in the PPF industry for several reasons:
      <ul>
        <li><strong>Innovative Technology: </strong>Stek PPF offers cutting-edge technology like self-healing capabilities and advanced hydrophobic properties that set it apart from other films on the market. This ensures lasting protection, superior appearance, and ease of maintenance.</li>
        <li><strong>Durability: </strong> Stek is known for producing one of the thickest, most durable films available, offering superior protection against scratches, abrasions, and environmental damage. It holds up exceptionally well against rock chips, road debris, and other hazards.</li>
        <li><strong>Clear, Glossy Finish: </strong> Stek PPF doesn’t alter the appearance of your vehicle’s paint. It maintains a clear, glossy, or matte finish depending on your preference, preserving your vehicle's original look while providing unmatched protection.</li>
        <li><strong>Long-Term Protection: </strong> Stek’s commitment to long-lasting protection is evident in their warranties, offering up to 10 years for many of their films. This ensures your vehicle stays protected for years, with minimal maintenance needed.</li>
      </ul>`,
    },
    {
      question:
        "How long does it take to install Paint Protection Film on my vehicle?",
      answer: `Installation duration varies based on the selected coverage:
      <ul>
        <li><strong>Partial Front Coverage: </strong> Approximately 1 to 2 days.</li>
        <li><strong>Full Vehicle Coverage: </strong> Between 3 to 6 days.</li>
      </ul>
      These estimates ensure meticulous application and curing time.`,
    },
    {
      question: "How long does Paint Protection Film last?",
      answer:
        "Stek PPF offers a 10-year warranty, covering defects like cracking, yellowing, and bubbling. ",
    },
    {
      question: "Can I add Paint Protection Film if my car has been painted? ",
      answer:
        "If your car has been repainted, please let us know before we apply a Paint Protection Film (PPF). The paint must be fully cured, typically requiring at least 30 days. If the paint is of poor quality or improperly applied, there's a risk that the PPF may not adhere properly, or it could cause the paint to peel when removed. Proper preparation and timing are key to achieving the best results, so consulting with a professional installer is important to ensure your vehicle is ready for PPF.",
    },
    {
      question: "How should I maintain my vehicle after PPF installation?",
      answer: `To ensure longevity:
      <ul>
        <li>Avoid pressure washing for the first 24 hours.</li>
        <li>Use pH-neutral soaps and a microfiber mitt for cleaning.</li>
        <li>Regular washing every two weeks is recommended.</li>
      </ul>`,
    },
    {
      question: "Can Paint Protection Film be removed or replaced if damaged?",
      answer:
        "Yes, PPF can be professionally removed or replaced if damaged, restoring your vehicle's protection and appearance.",
    },
    {
      question: "How much does Paint Protection Film cost?",
      answer:
        "Costs vary based on coverage area, vehicle size, and chosen PPF brand. At Tint Tek Plus, we offer competitive pricing and can provide a personalized quote based on your specific requirements",
    },
  ],
  "headlight-services": [
    {
      question: "What is Stek Light Protection Film (PPF)?",
      answer:
        "Stek Light Protection Film is a high-quality, transparent protective film designed specifically for automotive taillights. It helps shield taillights from scratches, chips, and fading caused by UV exposure, road debris, and environmental elements.",
    },
    {
      question: "How does Stek PPF protect my taillights?",
      answer:
        "Stek PPF provides a durable, self-healing layer that prevents damage to your taillights. It absorbs impacts from rocks, debris, and other particles while preserving the clarity and brightness of your lights. It also blocks UV rays that can cause discoloration over time.",
    },
    {
      question:
        "Will Stek Light Protection Film affect the brightness of my taillights?",
      answer:
        "No, the PPF is designed to be optically clear or lightly tinted, ensuring that your taillights remain fully functional and visible, even in low light conditions. The film does not obstruct the light output or brightness.",
    },
    {
      question: "How durable is Vinyl Wrap VS PPF for taillights?",
      answer:
        "Vinyl Wrap is less durable compared to PPF. It can fade, peel, and crack quicker, especially when exposed to UV rays and harsh conditions.",
    },
  ],
  "windshield-protection-film": [
    // {
    //   question: "Why Choose ExoShield GT3 for Your Windshield?",
    //   answer: `Installation duration varies based on the selected coverage:
    //   <ul>
    //     <li><strong>Exceptional Impact Resistance: </strong>ExoShield GT3 is engineered to deliver superior abrasion resistance, durability, and weatherability. It boasts a thickness of five mils—about 2.5 times that of a human hair—providing robust protection against chips and cracks caused by road debris. Designed to give you 6X more impact protection, GT3+ is truly made to save your glass.</li>
    //     <li><strong>Advanced Nanocoating Technology: </strong>Incorporating second-generation Endurance Class nanocoatings, ExoShield GT3 ensures a strong bond between layers, preventing delamination and extending the film's lifespan. </li>
    //     <li><strong>Unmatched Optical Clarity: </strong>As one of the most optically clear films on the market, ExoShield GT3 is virtually invisible once installed, maintaining the natural appearance of your vehicle while providing robust protection. </li>
    //     <li><strong>Comprehensive UV and Heat Rejection: </strong>The film blocks up to 99% of harmful UV rays, reducing interior heat buildup and protecting your vehicle's interior from sun damage.</li>
    //     <li><strong>Long-Term Durability: </strong>Designed to withstand various driving conditions, ExoShield GT3 is weather-resistant and maintains its protective qualities over time, ensuring lasting windshield protection.</li>
    //     <li><strong>Proudly made in the USA: </strong>Your windshield protection film is only as good as the materials it's made with. We use the highest quality PET (Polyethylene Terephthalate) combined with our own proprietary coatings tech to deliver you the best quality.</li>
    //   </ul>`,
    // },
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
  ],
  "ceramic-coating": [
    {
      question: "Will ceramic coating prevent all scratches?",
      answer:
        "Ceramic coating adds a layer of protection against light scratches and swirl marks, but it cannot prevent all types of damage, especially deep scratches from sharp objects or accidents. It significantly reduces the risk of surface-level abrasions, though. PPF (Paint Protection Film)  is a great addition to fully protect your vehicle.",
    },
    {
      question: "How soon can I drive my car after the coating is applied?",
      answer:
        "For best results, it's recommended to wait at least 24-48 hours after application before exposing the vehicle to water or driving in rain. This allows the coating to cure fully and bond to the surface.",
    },
    {
      question: "How do I maintain my ceramic-coated vehicle?",
      answer: `Maintaining a ceramic-coated vehicle involves simple care:
        <ul>
          <li> Regularly wash with a pH-neutral shampoo to avoid degrading the coating. </li>
          <li> Use a microfiber towel to dry. </li>
          <li> Consider using a maintenance spray to boost the hydrophobic properties every few months. </li>
        </ul>`,
    },
    {
      question: "How long does ceramic coating last?",
      answer:
        "The longevity of ceramic coatings depends on the product and maintenance. Most high-quality coatings last anywhere from 2 to 5 years. Proper care and regular maintenance can extend the protection significantly.",
    },
  ],
};

const faqSections = Object.entries(faqConfig).map(([key, questions]) => ({
  id: key,
  title: key
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" "),
  questions: questions.map((q, index) => ({
    id: `${key}-q${index + 1}`,
    question: q.question,
    answer: q.answer,
  })),
}));

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const currentSection = faqSections[selectedServiceIndex];
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  const handleServiceSelect = (index) => {
    setSelectedServiceIndex(index);
    setExpanded(false);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedServiceIndex(newValue);
    setExpanded(false);
  };

  return (
    <Box sx={{ backgroundColor: "#111" }}>
      {/* Hero Header */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "35vh", md: "35vh", lg: "35vh", xl: "35vh" },
          background: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Abstract background shapes */}
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#fff",
              textAlign: "center",
              fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "4rem",
                lg: "4.5rem",
              },
              textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
              mb: 2,
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Container>
      </Box>

      {/* Service Selector Section */}
      <Container sx={{ py: { xs: 4, md: 6 }, maxWidth: "1400px" }}>
        <Typography 
          variant="h4" 
          fontWeight="700" 
          mb={4} 
          textAlign="center"
          sx={{
            position: "relative",
            display: "inline-block",
            color: "#fff",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Browse by Service
        </Typography>

        {isMobile ? (
          <Select
            fullWidth
            value={selectedServiceIndex}
            onChange={(e) => handleServiceSelect(Number(e.target.value))}
            sx={{
              mb: 4,
              backgroundColor: "#fff",
              borderRadius: 2,
              fontWeight: "bold",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
              "& .MuiSelect-select": {
                p: 2,
              },
            }}
          >
            {faqSections.map((section, index) => (
              <MenuItem key={section.id} value={index}>
                {section.title}
              </MenuItem>
            ))}
          </Select>
        ) : isTablet ? (
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
            <Tabs
              value={selectedServiceIndex}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="service tabs"
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                },
                "& .Mui-selected": {
                  color: "#3f51b5",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#3f51b5",
                  height: 3,
                },
              }}
            >
              {faqSections.map((section) => (
                <Tab key={section.id} label={section.title} />
              ))}
            </Tabs>
          </Box>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {faqSections.map((section, index) => (
              <Grid item xs={12} sm={6} md={4} key={section.id}>
                <Paper
                  elevation={selectedServiceIndex === index ? 8 : 1}
                  onClick={() => handleServiceSelect(index)}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    cursor: "pointer",
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    border: selectedServiceIndex === index ? "3px solid #2794d2" : "1px solid #eee",
                    color: selectedServiceIndex === index ? "#2794d2" : "#333",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100px",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      backgroundColor: selectedServiceIndex === index ? "#fff" : "#f8f9fa",
                    },
                  }}
                >
                  <Typography variant="h6">{section.title}</Typography>
                  <Chip 
                    size="small" 
                    label={`${section.questions.length} questions`}
                    sx={{ 
                      mt: 1, 
                      backgroundColor: selectedServiceIndex === index ? "rgba(63, 81, 181, 0.1)" : "rgba(0, 0, 0, 0.05)",
                      color: selectedServiceIndex === index ? "#2794d2" : "#666"
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* FAQ Accordion Section */}
      <Box sx={{ backgroundColor: "#EEEEFF", py: 6 }}>
        <Container sx={{ maxWidth: "1000px" }}>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              variant="h4"
              fontWeight="700"
              mb={2}
              color="#333"
              sx={{
                position: "relative",
                display: "inline-block",
              }}
            >
              {currentSection.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "700px", mx: "auto" }}>
              Find answers to common questions about {currentSection.title.toLowerCase()}. 
              Can't find what you're looking for? Contact our support team.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {currentSection.questions.map(({ id, question, answer }, index) => (
              <Grid item xs={12} key={id}>
                <Fade in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card
                    elevation={expanded === id ? 4 : 1}
                    sx={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      border: expanded === id ? "1px solid #2794d2" : "1px solid #eee",
                      "&:hover": {
                        boxShadow: expanded === id ? "0 8px 16px rgba(0,0,0,0.1)" : "0 4px 8px rgba(0,0,0,0.05)",
                      },
                    }}
                  >
                    <Accordion
                      expanded={expanded === id}
                      onChange={() => setExpanded(expanded === id ? false : id)}
                      disableGutters
                      elevation={0}
                      sx={{
                        backgroundColor: "transparent",
                        "&:before": {
                          display: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: expanded === id ? "#2794d2" : "#666" }} />}
                        sx={{
                          "& .MuiAccordionSummary-content": {
                            display: "flex",
                            alignItems: "center",
                          },
                          p: 2,
                        }}
                      >
                        <HelpOutlineIcon sx={{ 
                          mr: 2, 
                          color: expanded === id ? "#2794d2" : "#666",
                          fontSize: "1.25rem" 
                        }} />
                        <Typography 
                          variant="h6" 
                          fontWeight="600"
                          sx={{ 
                            color: expanded === id ? "#2794d2" : "#333",
                            fontSize: { xs: "1rem", md: "1.125rem" }
                          }}
                        >
                          {question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 3, pt: 0, pb: 4 }}>
                        <Box 
                          sx={{ 
                            borderLeft: "4px solid #2794d2", 
                            pl: 2,
                            ml: { xs: 0, sm: 6 },
                          }}
                        >
                          <Typography
                            component="div"
                            sx={{ 
                              color: "#555",
                              lineHeight: 1.8,
                              "& ul": {
                                pl: 2,
                                "& li": {
                                  mb: 1,
                                }
                              },
                              "& strong": {
                                color: "#333",
                                fontWeight: 600,
                              }
                            }}
                            dangerouslySetInnerHTML={{ __html: answer }}
                          />
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CallToAction />
      <Contact />
      <QuickLinks />
      <Footer />
    </Box>
  );
};

export default FAQ;