import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Button, Container, Box, Chip, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CategoryIcon from "@mui/icons-material/Category";
import ShareIcon from "@mui/icons-material/Share";
import Topbar from "./key-components/Topbar";
import CallToAction from "./key-components/CallToAction";
import Footer from "./key-components/Footer";
import Contact from "./key-components/Contact";

const blogPosts = [
  {
    id: 1,
    title: "LLumar vs. XPEL Window Tint: Why LLumar Comes Out Ahead",
    summary:
      "Comparing LLumar and XPEL window tint? Discover why LLumar's third-party tested performance, long-term durability, and value make it the smart choice in Dallas, TX.",
    content: (
      <>
        <Typography variant="h5" className="blog-section-title">
          LLumar vs. XPEL: The Truth Behind the Tint
        </Typography>
        <Typography className="blog-paragraph">
          When it comes to ceramic window tint, two names dominate the market: LLumar and XPEL. Both offer high-performance films — but if you're looking for real-world results backed by third-party data, LLumar has the edge.
        </Typography>
        <Typography className="blog-paragraph">
          Here's how the two brands compare and why LLumar is the top choice for drivers in Dallas who want style, performance, and science-backed protection.
        </Typography>
  
        <Typography variant="h5" className="blog-section-title">
          Performance You Can Trust: LLumar's Third-Party Tested Specs
        </Typography>
        <Typography className="blog-paragraph">
          LLumar stands out by publishing third-party verified performance data — not just lab estimates. Every LLumar film is tested by the <span className="highlight">National Fenestration Rating Council (NFRC)</span>.
        </Typography>
        <Box className="feature-box">
          <Box className="feature-item">
            <Typography variant="h6">88%</Typography>
            <Typography variant="body2">Infrared Heat Rejection</Typography>
          </Box>
          <Box className="feature-item">
            <Typography variant="h6">63%</Typography>
            <Typography variant="body2">Total Solar Energy Rejected</Typography>
          </Box>
          <Box className="feature-item">
            <Typography variant="h6">99%+</Typography>
            <Typography variant="body2">UV Protection</Typography>
          </Box>
        </Box>
        <Typography className="blog-paragraph">
          XPEL XR Plus claims up to 98% IR rejection, but it's not NFRC verified.
        </Typography>
        <Typography className="blog-highlight">
          Bottom line: LLumar backs their specs with certified data you can trust.
        </Typography>
  
        <Typography variant="h5" className="blog-section-title">
          Heat and UV Defense for Texas Summers
        </Typography>
        <Box className="benefit-list">
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Reduce cabin temps</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Protect your interior from fading</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Shield passengers from harmful UV rays</Typography>
          </Box>
        </Box>
        <Typography className="blog-paragraph">
          LLumar's TSER (which includes visible, infrared, and UV light) is among the best in the business — and it's consistently rated as one of the most effective heat-blocking tints on the market.
        </Typography>
  
        <Typography variant="h5" className="blog-section-title">
          Clarity, Style & Signal-Friendliness
        </Typography>
        <Box className="benefit-list">
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Low reflectivity (no mirror-like effect)</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Natural, charcoal tone that enhances any vehicle</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>No signal interference with GPS, Bluetooth, or 5G</Typography>
          </Box>
        </Box>
        <Typography className="blog-paragraph">
          LLumar's crystal-clear finish keeps your vehicle looking sharp — without sacrificing visibility or tech performance.
        </Typography>
  
        <Typography variant="h5" className="blog-section-title">
          Lifetime Warranty & Installer Network
        </Typography>
        <Typography className="blog-paragraph">
          LLumar films are backed by a <span className="highlight">nationwide, transferable lifetime warranty</span> and installed only by certified pros.
        </Typography>
        <Box className="benefit-list">
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>No bubbling, fading, or peeling</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Trusted nationwide support</Typography>
          </Box>
          <Box className="benefit-item">
            <Box className="benefit-icon">✓</Box>
            <Typography>Peace of mind if you move or sell your vehicle</Typography>
          </Box>
        </Box>
        <Typography className="blog-paragraph">
          While XPEL also offers a warranty, LLumar's decades-long track record and Eastman Chemical Company backing make it a more reliable choice.
        </Typography>
  
        <Typography variant="h5" className="blog-section-title">
          Why We Recommend LLumar at Tint Tek +
        </Typography>
        <Typography className="blog-paragraph">
          At <span className="highlight">Tint Tek +</span> in Dallas, we've worked with multiple tint brands — and LLumar consistently delivers superior results for our clients. From heat rejection to durability and appearance, it's our go-to recommendation for daily drivers and car enthusiasts alike.
        </Typography>
      </>
    ),
    image: "/llumar-logo.png",
    date: "May 2, 2025",
    category: "Window Tint Comparison",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post by ID
  const post = blogPosts.find((post) => post.id === parseInt(id));
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ textAlign: "center", my: 8 }}>
        <Typography variant="h4" color="error">
          Blog post not found
        </Typography>
        <Button
          onClick={() => navigate("/blog")}
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 4 }}
          variant="contained"
          color="primary"
        >
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: "#0a0a10" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "50vh", md: "70vh" },
          overflow: "hidden",
        }}
      >
        {/* Hero Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "30%",
              background: "linear-gradient(to top, #0a0a10, transparent)",
            },
          }}
        />
        
        {/* Content Overlay */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            pb: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: "800px" }}>
            <Chip 
              label={post.category} 
              color="primary" 
              size="small"
              sx={{ 
                mb: 2, 
                bgcolor: "#2794d2",
                color: "white",
                fontWeight: "500"
              }}
            />
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "800",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "1rem", md: "1.25rem" },
                mb: 2,
              }}
            >
              {post.summary}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgba(255,255,255,0.7)",
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarTodayIcon fontSize="small" />
                <Typography variant="body2">{post.date}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CategoryIcon fontSize="small" />
                <Typography variant="body2">{post.category}</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Blog Content */}
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            py: { xs: 4, md: 8 },
            px: { xs: 2, sm: 0 },
          }}
        >
          {/* Reading Progress Indicator */}
          {/* <Box 
            sx={{
              position: "sticky",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              bgcolor: "rgba(255,255,255,0.1)",
              zIndex: 10,
              "& .progress-bar": {
                height: "100%",
                width: "0%",
                bgcolor: "#2794d2",
                transition: "width 0.1s ease"
              }
            }}
          >
            <Box className="progress-bar" />
          </Box> */}
          
          {/* Content */}
          <Box
            className="blog-content"
            sx={{
              color: "#fff",
              "& .blog-section-title": {
                fontWeight: "700",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                mt: 6,
                mb: 3,
                color: "#fff",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                  width: "60px",
                  height: "3px",
                  bgcolor: "#2794d2",
                },
              },
              "& .blog-paragraph": {
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
                mb: 3,
                color: "rgba(255,255,255,0.85)",
              },
              "& .highlight": {
                color: "#2794d2",
                fontWeight: "600",
              },
              "& .blog-highlight": {
                fontSize: { xs: "1.1rem", md: "1.2rem" },
                fontWeight: "600",
                borderLeft: "3px solid #2794d2",
                pl: 2,
                py: 1,
                my: 4,
              },
              "& .feature-box": {
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: { xs: "center", sm: "space-between" },
                my: 4,
              },
              "& .feature-item": {
                bgcolor: "rgba(39, 148, 210, 0.1)",
                border: "1px solid rgba(39, 148, 210, 0.3)",
                borderRadius: 2,
                p: 3,
                textAlign: "center",
                flex: { xs: "1 1 100%", sm: "1 1 30%" },
                maxWidth: { xs: "100%", sm: "30%" },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  bgcolor: "rgba(39, 148, 210, 0.2)",
                },
                "& h6": {
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#2794d2",
                  mb: 1,
                },
                "& body2": {
                  color: "rgba(255,255,255,0.7)",
                },
              },
              "& .benefit-list": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
                my: 3,
              },
              "& .benefit-item": {
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
              },
              "& .benefit-icon": {
                color: "#2794d2",
                fontWeight: "bold",
                fontSize: "1.2rem",
              },
            }}
          >
            {post.content}
          </Box>
          
          {/* Share Section */}
          <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.1)" }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
            <Button
              onClick={() => navigate("/blogs")}
              startIcon={<ArrowBackIcon />}
              variant="outlined"
              sx={{ 
                borderColor: "rgba(255,255,255,0.3)", 
                color: "#fff",
                "&:hover": {
                  borderColor: "#2794d2",
                  bgcolor: "rgba(39, 148, 210, 0.1)",
                }
              }}
            >
              Back to Blog
            </Button>
            <Button
              startIcon={<ShareIcon />}
              variant="contained"
              sx={{ 
                bgcolor: "#2794d2",
                "&:hover": {
                  bgcolor: "#1a7bb0",
                }
              }}
            >
              Share Article
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Related Posts Section */}
      {/* <Box sx={{ bgcolor: "rgba(0,0,0,0.3)", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ color: "white", fontWeight: "700", mb: 4, textAlign: "center" }}>
            Related Articles
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                bgcolor: "rgba(255,255,255,0.05)",
                borderRadius: 2,
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Box sx={{ height: 200, bgcolor: "rgba(39, 148, 210, 0.2)" }} />
              <Box sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: "#2794d2", mb: 1 }}>
                  Car Protection
                </Typography>
                <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                  The Science Behind Ceramic Coatings: Is It Worth It?
                </Typography>
                <Button
                  variant="text"
                  sx={{ color: "#2794d2" }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                bgcolor: "rgba(255,255,255,0.05)",
                borderRadius: 2,
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Box sx={{ height: 200, bgcolor: "rgba(39, 148, 210, 0.2)" }} />
              <Box sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: "#2794d2", mb: 1 }}>
                  Legal
                </Typography>
                <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                  How Dark Can Your Tint Be? Legal Tint Laws Explained
                </Typography>
                <Button
                  variant="text"
                  sx={{ color: "#2794d2" }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box> */}

      {/* Call to Action Section */}
      <CallToAction />
      <Contact />
      <Footer />
    </Box>
  );
};

export default BlogDetail;