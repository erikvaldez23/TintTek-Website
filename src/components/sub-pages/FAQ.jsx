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
    {
      question: "How is Window Film installed? ",
      answer:
        "At Tint Tek Plus, we use a precise installation process for our window tint. The tint film is first carefully shrunk to fit on the exterior of your vehicle's windows, allowing it to conform to the natural curves of the glass. Once perfectly shaped, the film is then installed on the inside of the glass using its own specialized adhesive. This ensures a seamless, smooth finish that not only looks great but also provides long-lasting durability",
    },
    {
      question: "Do you remove anything when tinting a car? ",
      answer:
        "At Tint Tek Plus, we use a precise installation process for our window tint. The tint film is first carefully shrunk to fit on the exterior of your vehicle's windows, allowing it to conform to the natural curves of the glass. Once perfectly shaped, the film is then installed on the inside of the glass using its own specialized adhesive. This ensures a seamless, smooth finish that not only looks great but also provides long-lasting durability.",
    },
    {
      question: "What makes Llumar window film superior to other brands?",
      answer: `<ul>
          <li>At Tint Tek Plus, we exclusively offer LLumar window films, known for their exceptional quality and performance. Unlike many competitors, LLumar films are rigorously third-party tested to ensure they meet the highest standards in heat rejection, UV protection, and durability. Many companies claim high-performance numbers, but without proper third-party validation, those claims can’t be trusted. With LLumar, you get verified, proven results backed by independent testing.</li>
          <li>LLumar films effectively block infrared heat, keeping your vehicle cooler without requiring overly dark tints. Plus, they block 99% of harmful UV rays, protecting you from skin cancer, premature aging, and skin cell damage. When you choose LLumar at Tint Tek Plus, you're choosing products that offer real, reliable protection and comfort for your vehicle.</li>
        </ul>`,
    },
    {
      question: "How to clean windows once tinted?",
      answer: `
      <ul>
        <li><strong>Wait 3-5 days</strong> for the tint to cure before cleaning. </li>
        <li><strong>Use a soft microfiber cloth </strong> to avoid scratching</li>
        <li><strong> Use a mild, non-ammonia cleaner</strong> or a vinegar-water solution.</li>
        <li><strong> Wipe gently in circular motions</strong> to avoid damaging the tint.</li>
        <li><strong> Dry with a clean cloth</strong> to prevent water spots.</li>
      </ul>`,
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
      question: "What is Paint Correction?",
      answer:
        "Paint correction is a process used to restore the appearance of a vehicle’s paint by removing imperfections such as swirl marks, scratches, oxidation, water spots, and other imperfections that can make the paint look dull or damaged. It’s a highly effective way to bring back the original shine and depth of your vehicle's paint, ensuring it looks as good as new.",
    },
    {
      question: "How Long Does Paint Correction Last?",
      answer:
        "The results of paint correction can last for a long time, but they depend on how well the vehicle is maintained. The process removes imperfections in the paint, but it doesn’t protect against future scratches or damage. Applying a protective layer, like ceramic coating or wax, will help maintain the corrected finish longer.",
    },
    {
      question: "How Do You Fix Swirl Marks and Scratches on Car Paint?",
      answer:
        "Swirl marks and light scratches can be removed through the paint correction process. A combination of specialized polishing compounds and a machine polisher are used to gently remove the damaged layer of paint, restoring the surface to its original smoothness and gloss.",
    },
    {
      question: "Can Paint Correction Remove Deep Scratches?",
      answer:
        "Paint correction is effective at removing light to moderate imperfections, but deep scratches that penetrate the clear coat may require additional repair or touch-up painting. In some cases, the scratch may only be minimized, not fully eliminated.",
    },
    {
      question: "How Can I Maintain My Vehicle After Paint Correction?",
      answer:
        "To maintain your vehicle’s appearance after paint correction, regular washing with pH-neutral car shampoo and a microfiber towel is essential. Additionally, applying a ceramic coating or wax will help protect the paint and keep it looking pristine for longer.",
    },
    {
      question: "Can Paint Correction Be Done on New Cars?",
      answer:
        "Absolutely! Even new cars can benefit from paint correction to remove any imperfections caused during the manufacturing process or from transportation. In fact, many car owners opt for paint correction shortly after purchasing their vehicle to ensure it looks its best from day one.",
    },
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
      answer: "PPF is made from a durable, clear urethane material. This advanced polymer film is engineered to protect a vehicle’s paint from scratches, stone chips, UV damage, and contaminants. The film is designed to be both flexible and tough, allowing it to conform seamlessly to the contours of the vehicle. The key feature of STEk PPF is its self-healing technology, which allows light scratches or swirl marks to disappear when exposed to heat, either from sunlight or a warm surface. This unique ability helps maintain the film’s smooth, flawless appearance over time.",
    },
    {
      question: "How much Coverage do I receive with Paint Protection Film?",
      answer: `
      While we aim for 99%+ coverage with our Paint Protection Films and it's important to note that these materials are not paint, and achieving 100% perfect coverage is not always possible. Minor imperfections such as slight lifting on sharp curves, rivets, seams, or edges—even on flat surfaces—can occasionally occur. These are natural characteristics of the material, and some flaws are to be expected. </br>
      </br> We carefully place seams in the material to reduce issues like bubbling or lifting as much as possible, but some areas may still show minor signs. To ensure you're comfortable with the final result, we encourage you to ask a Tint Tek Plus team member to give you a better understanding of how your vehicle will look once PPF is applied.
      `,
    },
    {
      question: "Does PPF Damage Paint?",
      answer: "Paint Protection Film (PPF)  should not cause damage to your vehicle's factory paint or repainted surfaces. However, if your paint is already chipped or the panels have been repainted, there’s a chance that the film may lift the paint or clear coat during installation or removal. Since we cannot control the condition or quality of your vehicle’s paint—whether it’s original or repainted—we are not liable for any peeling or damage that might occur during the process. We recommend ensuring that your paint is in good condition before applying PPF or vinyl wrap to avoid any potential issues.",
    },
    {
      question: "Will Paint Protection Film (PPF) look perfect?",
      answer: `
      Our goal is to always provide you with the highest-quality installation, and we are continuously evolving to be the best in the industry. However, achieving a perfectly flawless look can be challenging due to PPF being an 8mm film, not paint. Common irregularities, such as tack marks, stretch marks, or seams, are normal and necessary to ensure proper adhesion and a secure, long-lasting installation. </br>
      </br> Even with our skilled installation team, small imperfections may still occur, especially on sharp corners or concave areas of your vehicle. While we are always working to minimize these issues and improve our techniques, it's important to understand that eliminating every wrinkle or bubble completely can be difficult. </br>
      </br>In short, while we strive for perfection and are constantly evolving to reduce these imperfections, the nature of working with PPF means that some slight irregularities may still be present. Rest assured, you will still receive a top-quality result that significantly enhances and protects your vehicle. </br>
      `,
    },
    {
      question: "Do you remove any parts from my vehicle?",
      answer: "In some cases, yes, it may be necessary to remove certain parts of your vehicle to ensure a clean and seamless installation. Parts like mirrors, badges, or trim pieces are sometimes taken off to achieve a perfect wrap or film application. This step helps us ensure that the film fits precisely and avoids any potential lifting or wrinkles. Our goal is to ensure your vehicle looks flawless, and part of that process can involve removing parts to provide a more thorough and professional finish",
    },
    {
      question: "Do you do any corrections before installing PPF?",
      answer: `
      Yes, we perform a light polish on the vehicle before applying the Paint Protection Film (PPF). This is important because PPF encapsulates the condition of the paint, meaning any imperfections in the paint will be visible once the film is applied. Ensuring that the paint is in the best possible condition is key to achieving the highest-quality result. </br>
      </br> Once the vehicle arrives, we carefully inspect the condition of the paint. If any additional corrections, such as deeper polishing or paint repair, are needed to optimize the surface for PPF application, we will recommend those before proceeding. Our goal is to make sure the paint is in top condition so that the PPF adheres properly and looks flawless once applied.
      `,
    },
    {
      question: "Do you check the PPF after installation?",
      answer: "Yes, we schedule a post-installation check-up to ensure everything is perfect. After the PPF is applied, we carefully inspect the entire vehicle to make sure the film is properly adhered and that any bubbles, wrinkles, or imperfections are minimized. If any adjustments are needed, we take care of them promptly. We also provide guidance on proper care and maintenance, ensuring your PPF continues to protect and enhance your vehicle for years to come. Your satisfaction is our pr",
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
      question: "Can I PPF my car after a collision or having it repainted? ",
      answer:`
      While we always strive for perfection and take every precaution during installation, it’s important to understand that Paint Protection Film (PPF) can potentially cause damage to certain surfaces, especially if the vehicle has had previous aftermarket repairs, such as repainting, Bondo, dent repair, or work involving carbon fiber or fiberglass. During installation, the film is often aligned multiple times on the painted panel, and the strong adhesive on the back of the film can sometimes lift paint or clear coat—this can happen even with factory paint. </br>
      </br> We make every effort to avoid this, but if your vehicle has been repainted or has existing damage like chips, there’s a chance that the film could pull up the paint or clear coat during installation or removal, particularly in areas where the paint or clear coat is not well bonded or has been poorly applied. </br>
      </br> As a result, Tint Tek Plus cannot be held responsible for any damage caused to repainted surfaces or factory paint during installation or when the film is removed later. This includes any peeling of paint, removal of existing clear bra, emblems, or vinyl that might be necessary for the installation. By proceeding with the service, you agree to release us from all liability related to peeling paint or clear coat damage.</br>
      </br> To minimize any risks, we highly recommend ensuring your paint is in good condition before applying PPF or vinyl wrap. If your vehicle has been repainted, it’s best to check the quality of the paint job and confirm it’s fully cured and bonded to avoid any potential issues.</br>


      `
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
    {
      question: "What is ExoShield GT3 Windshield Protection Film?",
      answer:
        "ExoShield GT3 is a high-performance windshield protection film designed to protect your vehicle's windshield from chips, cracks, and other road debris damage. Made from a durable, optically clear polyurethane material, ExoShield is applied directly to the windshield to provide an extra layer of defense while maintaining clarity and functionality.",
    },
    {
      question: "Can I Wash My Car Normally After Installing ExoShield?",
      answer:
        "Yes! ExoShield is designed to withstand regular car washes. You can wash your car as usual, but it's recommended to avoid harsh chemicals or abrasive scrubbing materials that could damage the protective film. Hand washing or touchless car washes are ideal for maintaining the integrity of the film.",
    },
    {
      question: "Does ExoShield GT3 Change the Look of My Windshield?",
      answer:
        "ExoShield is clear and nearly invisible once applied, so it won't alter the appearance of your windshield. It offers protection without changing the look of your vehicle or obstructing your view in any way.",
    },
    {
      question: "Is ExoShield GT3 Easy to Maintain?",
      answer:
        "Yes, ExoShield is low-maintenance. Regular cleaning with a soft microfiber towel and pH-neutral cleaner is all that’s needed to keep the film looking great. The film is also self-healing, which means minor scratches can disappear over time when exposed to heat, such as sunlight.",
    },
    {
      question: "Can an ExoShield GT3 Be Removed?",
      answer:
        "ExoShield GT3 is designed to be permanent, but if it ever needs to be removed (e.g., when replacing a damaged windshield), the film can be safely removed by a professional without damaging the glass underneath.",
    },
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
      question: "Can Windshield Wipers Damage My Windshield?",
      answer: `Yes, windshield wipers can damage your windshield in several ways:
       <ul>
        <li><strong> Scratches from debris:</strong> Wipers can drag dirt or road debris across the glass, causing micro-scratches.</li>
        <li><strong> Wiper blade wear:</strong> Damaged or old wiper blades can cause friction and scratching on the windshield.</li>
        <li><strong> Dry windshield use:</strong> Wiping a dry windshield can cause excessive friction, leading to scratches.</li>
      </ul>`,
    },
  ],
  "ceramic-coating": [
    {
      question: "What is Ceramic Coating? ",
      answer:
        "Ceramic coating is a liquid polymer applied to the exterior surfaces of a vehicle, such as the paint, glass, wheels, and trim, that creates a hydrophobic (water-repellent) surface. This coating bonds chemically with the vehicle's surface, forming a protective layer that provides several benefits.",
    },
    {
      question: "How Do I Maintain My Ceramic Coating?",
      answer: `Ceramic coatings require annual maintenance to keep the hydrophobic properties refreshed. Over time, the coating's sacrificial layer will wear down, so we recommend bringing your vehicle in for its annual checkup after one year.
      <ul>
       <li><strong>Cost of Annual Maintenance: </strong> Starting at $225</li>
     </ul>`,
    },
    {
      question: "Can I Wash My Car Normally After a Ceramic Coating?",
      answer:`
        Yes! But never use an automated car wash. The harsh chemicals, brushes, or cloths used in automated car washes can degrade the coating and cause micro-scratching. </br>
        </br> <strong>Best Practice: </strong>Always hand wash your vehicle using pH-neutral car shampoo and soft microfiber towels or a wash mitt to gently remove dirt. Avoid using any abrasive materials that could damage the coating.
s        `,
    },
    {
      question: "How Should I Protect My Vehicle from Contaminants?",
      answer: `Though ceramic coatings create a strong protective layer, contaminants like tree sap, bird droppings, or road tar can still affect the surface.
      <ul>
       <li><strong> Quick Action: </strong> If you notice contaminants, clean them off as soon as possible to avoid damaging the coating.</li>
       <li><strong> Use Detail Spray: </strong>  A ceramic-safe quick detail spray can be used to help remove contaminants gently without harming the coating.</li>
     </ul>`,
    },
    {
      question: "Can I Use My Vehicle in the Rain After Getting Ceramic Coating?",
      answer: `
      Yes! In fact, rain will actually showcase the benefits of your ceramic coating, as the water will bead up and roll off the surface.
      <ul>
        <li><strong>Note: </strong> The hydrophobic effect is at its best when the coating has had time to cure fully (typically 24-48 hours after application).</li>
      </ul>`,
    },
    {
      question: "Does the Ceramic Coating Protect Against Scratches?",
      answer: `
        While the ceramic coating offers excellent protection against minor scratches and swirl marks, it is not entirely scratch-proof. It helps prevent surface damage from contaminants and environmental factors, but rough or heavy impacts can still harm the paint.
        <ul>
          <li><strong>Tip: </strong> Always avoid contact with harsh or abrasive materials on the surface, and regularly clean your vehicle to prevent damage from debris.</li>
        </ul>`,
    },
    {
      question: "How soon can I drive my car after the coating is applied?",
      answer:
        "For best results, it's recommended to wait at least 24-48 hours after application before exposing the vehicle to water or driving in rain. This allows the coating to cure fully and bond to the surface.",
    },
    {
      question: "How long does ceramic coating last?",
      answer:
        "The longevity of ceramic coatings depends on the product and maintenance. Most high-quality coatings last anywhere from 2 to 5 years. Proper care and regular maintenance can extend the protection significantly.",
    },
  ],
  "paint-disclosure": [
    {
      question: "What is the policy on paint damage?",
      answer: `Tint Tek Plus is not liable for any paint-related issues, including but not limited to peeling, lifting, or damage, that may occur during the installation of film or when the film is removed at a later time.
       <ul>
        <li><strong>Paint Condition: </strong>  We are not the manufacturer or previous repairer of your vehicle, and therefore, we cannot assess any potential underlying paint issues that may exist.</li>
        <li><strong>Inherent Risks: </strong>  Installing any type of film or vinyl on a vehicle involves inherent risks to the paint, such as potential damage, especially if the paint is already compromised, previously repaired, or aged.</li>
        <li><strong>Customer Responsibility: </strong>  By proceeding with the installation, you fully accept responsibility for any risks associated with the application of the film, including any damage that may occur to the paint during or after the installation.</li>
      </ul>`,
    },
  ],
  "warrany-for-services": [
    {
      question: "Automotive Window Tint Warranty",
      answer: `<strong> Warranty Duration: </strong> LLumar window films come with a lifetime warranty for the original owner of the vehicle, covering defects in materials and craftsmanship. Coverage: The warranty includes protection against: </br>
     </br><strong>Coverage: </strong> The warranty covers defects in materials or workmanship, including:
      <ul>
        <li>Peeling</li>
        <li>Cracking</li>
        <li>Blistering</li>
        <li>Discoloration</li>
      </ul>

      <strong>Exclusions: </strong> The warranty does not cover:
      <ul>
        <li>Damage caused by improper care or cleaning, including the use of abrasive materials or harsh chemicals.</li>
        <li>Damage from accidents or or external impacts (e.g., Animals,chips, scratches, or punctures).</li>
      </ul>
      `,
    },
    {
      question: "Residential Window Tint Warranty",
      answer: `<strong> Warranty Duration: </strong> LLumar offers a lifetime warranty for residential window tinting, which is valid for the original purchaser and applies as long as you reside in the same home.</br>
      </br><strong>Coverage: </strong> The warranty covers defects in materials or workmanship, including:
      <ul>
        <li>Peeling</li>
        <li>Cracking</li>
        <li>Blistering</li>
        <li>Discoloration</li>
      </ul>

      <strong>Exclusions: </strong> The warranty does not cover:
      <ul>
        <li>Damage from improper care, such as the use of harsh chemicals, abrasive cleaning tools, or automated cleaning systems.</li>
        <li>Damage from external impacts, including scratches, abrasions, or punctures from accidents or physical force.</li>
        <li>Issues caused by environmental factors, such as extreme weather conditions, improper window preparation, or improper installation of the film.</li>
      </ul>
      <strong>Proper Care: </strong> To keep the warranty active, follow the manufacturer’s recommendations for cleaning and maintenance. Avoid harsh chemicals, abrasive tools, and automated window cleaning systems to prevent film damage.
      `,
    },
    {
      question: "Commercial Window Tint Warranty",
      answer: `<strong> Warranty Duration: </strong> LLumar offers a limited warranty for commercial window tinting, which is valid for up to 15-years.</br>
      </br><strong>Coverage: </strong> The warranty covers defects in materials or workmanship, including:
      <ul>
        <li>Peeling</li>
        <li>Cracking</li>
        <li>Blistering</li>
        <li>Discoloration</li>
      </ul>

      <strong>Exclusions: </strong> The warranty does not cover:
      <ul>
        <li>Damage caused by improper cleaning methods, including the use of abrasive tools, harsh chemicals, or automated cleaning systems.</li>
        <li>Damage from physical impact, such as scratches, abrasions, or punctures caused by accidents or external factors.</li>
      </ul>
      `,
    },
    {
      question: "Paint Protection Film (STEK PPF) Warranty & Care Guidelines",
      answer: `<strong> Warranty Duration: </strong> The STEK Paint Protection Film (PPF) applied to your vehicle is covered by a 10-year limited warranty against defects in material and workmanship, including delamination, bubbling, and peeling under normal use.</br>
      </br><strong>Coverage: </strong> The warranty covers defects in materials or workmanship, including:
      <ul>
        <li>Peeling</li>
        <li>Cracking</li>
        <li>Blistering</li>
        <li>Discoloration</li>
      </ul>
      <strong>Hydrophobic Properties: </strong> Over time, the hydrophobic properties of the PPF may diminish. 
      <strong>Exclusions: </strong> The warranty does not cover:
      <ul>
        <li>Damage from improper cleaning, including using abrasive materials or harsh chemicals.</li>
        <li>Scratches, chips, or abrasions caused by road debris, impacts, or other external factors.</li>
        <li>Damage from pre-existing conditions on the vehicle's paint, such as cracks, imperfections, or other surface issues.</li>
      </ul>
       <strong>Proper Care: </strong>  To maintain your warranty, it's important to properly care for the PPF. Automated car washes should be avoided, as the harsh chemicals and brushes used in these systems can damage the film and cause micro-abrasions. We highly recommend hand washing your vehicle using mild, pH-balanced products to preserve the film’s integrity.
      `,
    },
    {
      question: "Ceramic Coating Warranty & Care Guidelines",
      answer: `<strong> Warranty Duration: </strong> The warranty for our ceramic coatings is valid for the entire lifespan of the coating you choose, provided proper care is followed.</br>
      </br><strong>Proper Care: </strong> To maintain your warranty, it is crucial to properly maintain the coating. Automated car washes should never be used, as the harsh chemicals and machines can damage the coating and cause micro-scratching, especially if brushes or abrasive materials are involved. We recommend hand washing your vehicle with appropriate products to preserve the coating.</br>
      </br><strong>Hydrophobic Properties: </strong> Over time, the hydrophobic properties of the coating may decrease. This doesn’t mean the coating is no longer effective; it’s simply a sign that the pores of the coating may be clogged. A decontamination wash will restore the coating’s performance and hydrophobic qualities.</br>
      </br><strong>Decontamination Wash: </strong> We offer a decontamination wash for $225, which we recommend every 12-24 months to keep the coating performing optimally.
      `,
    },
    {
      question: "Darken PPF Headlights/Taillights Warranty",
      answer: `<strong> Warranty Coverage: </strong> The STEK Paint Protection Film (PPF) applied to your taillights is covered by a 7-year limited warranty against defects in material and workmanship. This warranty includes protection against delamination, bubbling, or peeling of the film under normal conditions.</br>
      `,
    },
    {
      question: "Windshield Protection Warranty",
      answer: `
        ExoShield GT3 Windshield Protection comes with a 36-month manufacturer's warranty covering defects related to film delamination. This warranty does not cover issues such as pitting, chipping, cracking, or scratches caused by washing or windshield wipers. For optimal performance, the film should be removed if it becomes hazy or difficult to see through. </br>\
        </br> Any warranty claims or issues must be addressed at our location. If you notice any defects or concerns with the film, please contact Tint Tek Plus by phone or email within 7 days of discovery, so we can promptly work to resolve the issue.</br>
        </br>Additionally, for $150, you can opt for an additional insurance policy that provides up to $1,000 toward the cost of windshield replacement if necessary during the coverage period</br>
      `,
    },
  ],
  "videography/Photography": [
    {
      question: "Videography/Photography Policy",
      answer: `
        At Tint Tek Plus, we take detailed photos of your vehicle before, during, and after the installation/Service. This helps us document the condition of your vehicle, the steps of the installation, and the final result. Throughout the process, we may showcase your vehicle on our social media platforms, such as Instagram, Facebook, and others, to highlight our work and promote our services.</br>
        </br>At Tint Tek Plus, we take detailed photos of your vehicle before, during, and after the installation/Service. This helps us document the condition of your vehicle, the steps of the installation, and the final result. Throughout the process, we may showcase your vehicle on our social media platforms, such as Instagram, Facebook, and others, to highlight our work and promote our services.</br>
      `,
    },
  ],
  "customer-satisfaction": [
    {
      question: "Customer Satisfaction",
      answer: "At Tint Tek Plus, customer satisfaction is the cornerstone of our success. We strive to not only meet but exceed your expectations with every service. If any issue arises or something doesn’t meet your expectations, we ask that you reach out to us directly so we can address your concerns and resolve the situation. We believe most issues are simply misunderstandings that can be easily fixed. Please give us the opportunity to make things right before leaving feedback on platforms like Facebook, Google, Reddit, etc. We truly appreciate your understanding and the chance to resolve any concerns before negative comments are posted.",
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
                    border:
                      selectedServiceIndex === index
                        ? "3px solid #2794d2"
                        : "1px solid #eee",
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
                      backgroundColor:
                        selectedServiceIndex === index ? "#fff" : "#f8f9fa",
                    },
                  }}
                >
                  <Typography variant="h6">{section.title}</Typography>
                  <Chip
                    size="small"
                    label={`${section.questions.length} questions`}
                    sx={{
                      mt: 1,
                      backgroundColor:
                        selectedServiceIndex === index
                          ? "rgba(63, 81, 181, 0.1)"
                          : "rgba(0, 0, 0, 0.05)",
                      color:
                        selectedServiceIndex === index ? "#2794d2" : "#666",
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
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto" }}
            >
              Find answers to common questions about{" "}
              {currentSection.title.toLowerCase()}. Can't find what you're
              looking for? Contact our support team.
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
                      border:
                        expanded === id
                          ? "1px solid #2794d2"
                          : "1px solid #eee",
                      "&:hover": {
                        boxShadow:
                          expanded === id
                            ? "0 8px 16px rgba(0,0,0,0.1)"
                            : "0 4px 8px rgba(0,0,0,0.05)",
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
                        expandIcon={
                          <ExpandMoreIcon
                            sx={{ color: expanded === id ? "#2794d2" : "#666" }}
                          />
                        }
                        sx={{
                          "& .MuiAccordionSummary-content": {
                            display: "flex",
                            alignItems: "center",
                          },
                          p: 2,
                        }}
                      >
                        <HelpOutlineIcon
                          sx={{
                            mr: 2,
                            color: expanded === id ? "#2794d2" : "#666",
                            fontSize: "1.25rem",
                          }}
                        />
                        <Typography
                          variant="h6"
                          fontWeight="600"
                          sx={{
                            color: expanded === id ? "#2794d2" : "#333",
                            fontSize: { xs: "1rem", md: "1.125rem" },
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
                                },
                              },
                              "& strong": {
                                color: "#333",
                                fontWeight: 600,
                              },
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
