import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Grid,
  Container,
} from "@mui/material";
import Topbar from "./key-components/Topbar";
import CallToAction from "./key-components/CallToAction";
import Contact from "./key-components/Contact";
import Footer from "./key-components/Footer";
import QuickLinks from "./key-components/QuickLinks";

const blogPosts = [
  {
    id: 1,
    title: "Top Benefits of Window Tinting for Your Car",
    summary:
      "Learn how window tinting can enhance your driving experience by reducing heat, glare, and UV exposure.",
    image: "/paint-correction.jpg",
    date: "February 16, 2025",
    category: ["Automotive Tinting", "Web"],
  },
  {
    id: 2,
    title: "How Dark Can Your Tint Be? Legal Tint Laws Explained",
    summary:
      "Discover the legal window tint limits in your state and avoid unnecessary fines.",
    image: "/background.jpg",
    date: "February 10, 2025",
    category: ["Legal", "Other"],
  },
  {
    id: 3,
    title: "The Science Behind Ceramic Coatings: Is It Worth It?",
    summary:
      "Discover how ceramic coatings protect your car’s paint, enhance gloss, and provide long-term durability.",
    image: "/ppf.jpg",
    date: "March 1, 2025",
    category: ["Automotive Tinting"],
  },
  {
    id: 4,
    title: "The Pros and Cons of PPF (Paint Protection Film) for Your Car",
    summary:
      "Is PPF worth it? Learn about the advantages and disadvantages of paint protection film.",
    image: "/cybertruck.jpg",
    date: "March 8, 2025",
    category: ["Other"],
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ backgroundColor: "#EEEEFF", color: "#FFFFFF", minHeight: "100vh" }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "35vh", md: "35vh", lg: "25vh", xl: "25vh" },
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        {/* Title & Subheader Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column", // Stack text vertically
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            px: 2, // Padding for smaller screens
            paddingTop: 5,
          }}
        >
          {/* Main Title */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              fontSize: {
                xs: "2.5rem",
                sm: "2.5rem",
                md: "3.5rem",
                lg: "4rem",
              },
            }}
          >
            BLOGS
          </Typography>

          {/* 🔹 Subheader Text */}
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem", lg: "1.5rem" },
            }}
          >
            Stay updated with the latest trends in window tinting and automotive
            care.
          </Typography>
        </Box>
      </Box>

      {/* Blog Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} key={post.id}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 5,
                  height: 300,
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                  "&:hover .image-overlay": {
                    background: "rgba(0, 0, 0, 0.6)",
                  },
                  "&:hover .read-more-button": { opacity: 1 },
                }}
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                {/* Blog Image */}
                <CardMedia
                  component="img"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    height: "100%",
                    objectFit: "cover",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                />

                {/* Dark Overlay on Hover */}
                <Box
                  className="image-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.3)",
                    transition: "background 0.3s ease-in-out",
                  }}
                />

                {/* Blog Text Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    color: "white",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 0.5, fontWeight: "light" }}
                  >
                    {post.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 0.5, fontWeight: "light", color: "gray" }}
                  >
                    {post.category.join(" | ")}
                  </Typography>
                </Box>

                {/* Centered Read More Button on Hover */}
                <Button
                  className="read-more-button"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "transparent",
                    color: "#FFF",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                  size="large"
                >
                  READ MORE
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action & Footer */}
      <CallToAction />
      <Box sx={{ color: "#000" }}>
        <Contact />
      </Box>

      <QuickLinks />

      <Footer />
    </Box>
  );
};

export default Blog;
