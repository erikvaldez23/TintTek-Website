import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Topbar from "./Topbar";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Contact from "./Contact";

const blogPosts = [
  {
    id: 1,
    title: "Top Benefits of Window Tinting for Your Car",
    summary:
      "Learn how window tinting can enhance your driving experience by reducing heat, glare, and UV exposure.",
    content: (
      <>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          1. Heat Reduction and Comfort
        </Typography>
        <Typography>
          Window tinting significantly reduces the amount of heat that enters
          your car, keeping it cooler and more comfortable. High-quality ceramic
          or carbon-based tints can block up to 50–60% of infrared heat.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          2. UV Protection and Health Benefits
        </Typography>
        <Typography>
          Window tints block up to 99% of harmful UV rays, protecting your skin
          from premature aging and reducing the risk of skin cancer.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          3. Glare Reduction for Safer Driving
        </Typography>
        <Typography>
          Glare from the sun or headlights can cause eye strain. Window tinting
          minimizes glare, improving visibility and safety on the road.
        </Typography>
      </>
    ),
    image: "/TintTek-Website/paint-correction.jpg",
    date: "February 16, 2025",
    category: "Automotive Tinting",
  },
  {
    id: 2,
    title: "How Dark Can Your Tint Be? Legal Tint Laws Explained",
    summary:
      "Discover the legal window tint limits in your state and avoid unnecessary fines.",
    content: (
      <>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          1. Why Are There Window Tint Laws?
        </Typography>
        <Typography>
          Laws exist to ensure safe driving conditions by preventing excessive
          darkness, which can limit visibility and make law enforcement
          interactions safer.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          2. Understanding Visible Light Transmission (VLT%)
        </Typography>
        <Typography>
          VLT% determines how much light can pass through a tinted window. A
          lower VLT% means a darker tint.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          3. State-by-State Window Tint Laws
        </Typography>
        <Typography>
          Different states have different legal limits for each window in your
          car. Always check your local DMV for specific regulations.
        </Typography>
      </>
    ),
    image: "/TintTek-Website/background.jpg",
    date: "February 10, 2025",
    category: "Legal",
  },
  {
    id: 3,
    title: "The Science Behind Ceramic Coatings: Is It Worth It?",
    summary:
      "Discover how ceramic coatings protect your car’s paint, enhance gloss, and provide long-term durability.",
    content: (
      <>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          1. What is a Ceramic Coating?
        </Typography>
        <Typography>
          A ceramic coating is a **liquid polymer** that chemically bonds to
          your car’s paint, creating a **hydrophobic surface** that repels
          water, dirt, and contaminants.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          2. Benefits of Ceramic Coating
        </Typography>
        <Typography>
          ✅ **UV Protection** - Prevents oxidation and paint fading. ✅
          **Hydrophobic Properties** - Makes washing easier, as dirt and water
          slide off. ✅ **Enhanced Gloss** - Creates a deep, mirror-like shine
          on your car.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          3. Is Ceramic Coating Worth It?
        </Typography>
        <Typography>
          If you want **long-term protection**, reduced maintenance, and a
          glossy finish, ceramic coatings are a great investment. However, they
          **do not make your car scratch-proof**, so proper maintenance is still
          required.
        </Typography>
      </>
    ),
    image: "/TintTek-Website/cybertruck.jpg",
    date: "March 1, 2025",
    category: "Car Protection",
  },
  {
    id: 4,
    title: "The Pros and Cons of PPF (Paint Protection Film) for Your Car",
    summary:
      "Is PPF worth it? Learn about the advantages and disadvantages of paint protection film.",
    content: (
      <>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          1. What is Paint Protection Film (PPF)?
        </Typography>
        <Typography>
          Paint Protection Film (PPF) is a **clear polyurethane film** applied
          to a car’s exterior to protect against rock chips, scratches, and UV
          damage.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          2. Benefits of PPF
        </Typography>
        <Typography>
          🛡️ **Scratch & Impact Protection** - Shields against road debris and
          minor abrasions. 🌞 **UV Resistance** - Prevents paint discoloration
          and fading. 💦 **Self-Healing Properties** - Minor scratches disappear
          with heat exposure.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          3. Downsides of PPF
        </Typography>
        <Typography>
          💰 **High Cost** - Installation can range from **$1,000 to $5,000**
          depending on coverage. ⚠️ **Can Yellow Over Time** - Low-quality PPF
          may discolor due to prolonged sun exposure. 🛠️ **Difficult Removal** -
          Must be professionally removed to avoid damaging the paint.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          4. Is PPF Right for You?
        </Typography>
        <Typography>
          If you want **the best physical protection for your car**, PPF is the
          ultimate solution. However, if cost is a concern, a **ceramic
          coating** may be a more affordable alternative.
        </Typography>
      </>
    ),
    image: "/images/ppf-film.jpg",
    date: "March 8, 2025",
    category: "Car Protection",
  },
];

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();

  // Find the blog post by ID
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" color="error">
          Blog post not found.
        </Typography>
        <Button
          onClick={() => navigate("/blog")}
          sx={{ mt: 2 }}
          variant="contained"
          color="primary"
        >
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#EEEEFF",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "25vh", // Adjust height as needed
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient Overlay to Fade Into Grey */}
        {/* Centered Blog Title */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#FFF",
            width: "100%",
            px: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "3.5rem" },
            }}
          >
            {post.title}
          </Typography>
        </Box>
      </Box>

      {/* Blog Content */}
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardMedia
            component="img"
            image={post.image}
            alt={post.title}
            sx={{ height: 300 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {post.date} | {post.category}
            </Typography>
            {post.content} {/* Render dynamic content */}
            <Button
              onClick={() => navigate("/blog")}
              sx={{
                mt: 3,
                backgroundColor: "#2794d2",
                color: "#fff",
                "&:hover": { backgroundColor: "#000" },
              }}
              variant="contained"
            >
              Back to Blog
            </Button>
          </CardContent>
        </Card>
      </Container>

      {/* Call to Action Section */}
      <CallToAction />
      <Contact />
      <Footer />
    </Box>
  );
};

export default BlogDetail;
