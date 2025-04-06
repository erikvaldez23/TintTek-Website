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
      question:
        "Why is Llumar superior to other film manufacturers?",
      answer:
        "Unlike many competitors, LLumar films are rigorously third-party tested to ensure they meet the highest standards in heat rejection, UV protection, and durability. Many companies claim high-performance numbers, but without proper third-party validation, those claims can’t be trusted. With LLumar, you get verified, proven results backed by independent testing.",
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
    {
      question:
        "Why is Llumar superior to other film manufacturers?",
      answer:
        "Unlike many competitors, LLumar films are rigorously third-party tested to ensure they meet the highest standards in heat rejection, UV protection, and durability. Many companies claim high-performance numbers, but without proper third-party validation, those claims can’t be trusted. With LLumar, you get verified, proven results backed by independent testing.",
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
      question: "How long does it take to install Paint Protection Film on my vehicle?",
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

const FAQSection = () => {
  // Get the current page slug from the URL
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Select FAQs based on the current service; if not found, show an empty array or default FAQs.
  const faqs = faqConfig[path] || [];

  return (
    <Box sx={{ py: 5, backgroundColor: "#111" }}>
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
    borderRadius: "12px",
    background: "linear-gradient(135deg, #1e1e1e 0%, #2e2e2e 100%)",
    color: "#fff",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
    backdropFilter: "blur(4px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    my: 2,
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0px 12px 30px rgba(0,0,0,0.3)",
    },
    "&::before": {
      display: "none",
    },
  }}
>

<AccordionSummary
  expandIcon={
    <ExpandMoreIcon sx={{ color: "#00BFFF", fontSize: "1.8rem" }} />
  }
  sx={{
    "& .MuiAccordionSummary-content": {
      alignItems: "center",
      gap: 1,
    },
    "& .Mui-expanded": {
      margin: 0,
    },
  }}
>
  <Typography
    variant={isMobile ? "body1" : "h5"}
    fontWeight="bold"
    sx={{
      color: "#fff",
      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.4rem" },
    }}
  >
    {faq.question}
  </Typography>
</AccordionSummary>
<AccordionDetails
  sx={{
    borderRadius: "8px",
    mt: 1,
    px: 2,
    py: 1.5,
  }}
>
  <Typography
    variant="body1"
    component="div"
    sx={{
      color: "rgba(255, 255, 255, 0.85)",
      fontSize: { xs: "0.95rem", sm: "1.05rem" },
      lineHeight: 1.7,
    }}
    dangerouslySetInnerHTML={{ __html: faq.answer }}
  />
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
