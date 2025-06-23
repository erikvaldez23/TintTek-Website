import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  Button,
  Grid,
  Container,
  Chip,
  InputBase,
  IconButton,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Topbar from "./key-components/Topbar";
import CallToAction from "./key-components/CallToAction";
import Contact from "./key-components/Contact";
import Footer from "./key-components/Footer";
import QuickLinks from "./key-components/QuickLinks";

// Sample blog posts data - expanded for demo purposes
const blogPosts = [
  {
    id: 1,
    title: "XPEL vs. LLumar: Which Window Tint is Right for Your Vehicle?",
    summary:
      "Trying to choose between XPEL and LLumar window tint? We compare durability, heat rejection, UV protection, and cost to help you make the right decision in Dallas, TX.",
    image: "/llumar-logo.png",
    estimate: "4-5 Minute",
    date: "May 2, 2025",
    category: ["Automotive Tinting"],
    featured: false,
  },
  {
    id: 2,
    title: "5 Reasons to Tint Your Car Windows in Dallas, TX",
    summary:
      "Living in Dallas means heat, sun, and traffic. Here are 5 powerful reasons why window tinting at Tint Tek Plus is a smart upgrade for any vehicle.",
    image: "/blog2.png",
    estimate: "4-5 Minute",
    date: "June 22, 2025",
    category: ["Automotive Tinting"],
    featured: true,
  },
];

// Extract all unique categories
const allCategories = Array.from(
  new Set(blogPosts.flatMap((post) => post.category))
);

const Blog = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [featuredPost, setFeaturedPost] = useState(
    blogPosts.find((post) => post.featured)
  );

  // Filter posts based on search term and active tab
  useEffect(() => {
    let filtered = blogPosts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.some((cat) =>
            cat.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Filter by category tab
    if (activeTab !== "all") {
      filtered = filtered.filter((post) => post.category.includes(activeTab));
    }

    setFilteredPosts(filtered);
  }, [searchTerm, activeTab]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Animation for cards when they appear
  useEffect(() => {
    const cards = document.querySelectorAll(".blog-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [filteredPosts]);

  return (
    <Box
      sx={{
        backgroundColor: "#0a0a10",
        color: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section with Parallax Effect */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "50vh", md: "60vh" },
          overflow: "hidden",
          background: "linear-gradient(135deg, #1a1a2e 0%, #0f0f1f 100%)",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Animated Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(39, 148, 210, 0.2) 0%, rgba(35, 10, 89, 0.2) 100%)",
            animation: "gradientShift 10s ease infinite",
            "@keyframes gradientShift": {
              "0%": { opacity: 0.4 },
              "50%": { opacity: 0.7 },
              "100%": { opacity: 0.4 },
            },
          }}
        />

        {/* Content Container */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "70%" },
              animation: "fadeInUp 1s ease-out",
              "@keyframes fadeInUp": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#2794d2",
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: "block",
              }}
            >
              TINT TEK + INSIGHTS
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "#fff",
                mb: 2,
                fontSize: { xs: "2.2rem", sm: "2.5rem", md: "3.5rem" },
                lineHeight: 1.1,
              }}
            >
              Automotive <span style={{ color: "#2794d2" }}>Expertise</span> &
              Insights
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.8)",
                maxWidth: "600px",
                mb: 4,
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              Stay updated with the latest trends in window tinting, paint
              protection, and automotive care from our expert team.
            </Typography>

            {/* Search Bar */}
            {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "50px",
                padding: "4px 16px",
                maxWidth: "450px",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
                "&:hover, &:focus-within": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                  boxShadow: "0 0 15px rgba(39, 148, 210, 0.3)",
                  border: "1px solid rgba(39, 148, 210, 0.3)",
                },
              }}
            >
              <InputBase
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  color: "#fff",
                  flex: 1,
                  "& ::placeholder": { color: "rgba(255,255,255,0.6)" },
                }}
              />
              <IconButton sx={{ color: "#2794d2" }}>
                <SearchIcon />
              </IconButton>
            </Box> */}
          </Box>
        </Container>
      </Box>

      {/* Category Tabs */}
      <Container maxWidth="lg" sx={{ mt: 2, position: "relative", zIndex: 10 }}>
        <Box
          sx={{
            backgroundColor: "rgba(10, 10, 16, 0.9)",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            padding: { xs: 2, md: 3 },
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              height: "4px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "rgba(255,255,255,0.05)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(39, 148, 210, 0.5)",
              borderRadius: "4px",
            },
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: "48px",
              "& .MuiTabs-indicator": {
                backgroundColor: "#2794d2",
              },
              "& .MuiTab-root": {
                minWidth: "auto",
                minHeight: "48px",
                color: "rgba(255,255,255,0.6)",
                fontWeight: 500,
                fontSize: "0.9rem",
                textTransform: "capitalize",
                mr: 1,
                "&.Mui-selected": {
                  color: "#fff",
                  fontWeight: 600,
                },
              },
            }}
          >
            <Tab value="all" label="All Posts" />
            {allCategories.map((category) => (
              <Tab key={category} value={category} label={category} />
            ))}
          </Tabs>
        </Box>
      </Container>

      {/* Featured Post Section */}
      {featuredPost && (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 3,
              position: "relative",
              display: "inline-block",
              "&:after": {
                content: "''",
                position: "absolute",
                bottom: "-6px",
                left: "0",
                width: "60px",
                height: "3px",
                backgroundColor: "#2794d2",
              },
            }}
          >
            Featured Article
          </Typography>

          <Card
            className="blog-card featured-card"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "rgba(20, 20, 30, 0.5)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              opacity: 0,
              transform: "translateY(20px)",
              "&.appear": {
                opacity: 1,
                transform: "translateY(0)",
              },
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            {/* Featured Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: { xs: "250px", md: "auto" },
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${featuredPost.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.5s ease",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  backgroundColor: "#2794d2",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                Featured
              </Box>
            </Box>

            {/* Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                padding: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Categories */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                {featuredPost.category.map((cat) => (
                  <Chip
                    key={cat}
                    label={cat}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(39, 148, 210, 0.1)",
                      color: "#2794d2",
                      fontWeight: 500,
                      borderRadius: "4px",
                    }}
                  />
                ))}
              </Box>

              {/* Title */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#fff",
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  lineHeight: 1.3,
                }}
              >
                {featuredPost.title}
              </Typography>

              {/* Summary */}
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: "1rem",
                  flex: 1,
                }}
              >
                {featuredPost.summary}
              </Typography>

              {/* Date and Read Time */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "auto",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarTodayIcon
                      sx={{
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {featuredPost.date}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccessTimeIcon
                      sx={{
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {featuredPost.estimate} Read
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate(`/blog/${featuredPost.id}`)}
                  sx={{
                    color: "#2794d2",
                    borderColor: "rgba(39, 148, 210, 0.5)",
                    "&:hover": {
                      borderColor: "#2794d2",
                      backgroundColor: "rgba(39, 148, 210, 0.1)",
                    },
                  }}
                >
                  Read Article
                </Button>
              </Box>
            </Box>
          </Card>
        </Container>
      )}

      {/* Blog Listing */}
      <Container maxWidth="lg" sx={{ py: 4, mb: 8 }}>
        {filteredPosts.length > 0 ? (
          <>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: "''",
                  position: "absolute",
                  bottom: "-6px",
                  left: "0",
                  width: "60px",
                  height: "3px",
                  backgroundColor: "#2794d2",
                },
              }}
            >
              {activeTab === "all" ? "All Articles" : activeTab + " Articles"}
            </Typography>

            <Grid container spacing={3}>
              {filteredPosts.map((post, index) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <Card
                    className="blog-card"
                    onClick={() => navigate(`/blog/${post.id}`)}
                    sx={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "rgba(20, 20, 30, 0.5)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      opacity: 0,
                      transform: "translateY(20px)",
                      transitionDelay: `${index * 0.1}s`,
                      "&.appear": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    {/* Image Container */}
                    <Box
                      sx={{
                        position: "relative",
                        height: "200px",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        className="blog-image"
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${post.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.5s ease-in-out",
                        }}
                      />

                      {/* Category Badge */}
                      {post.category && post.category[0] && (
                        <Chip
                          label={post.category[0]}
                          size="small"
                          sx={{
                            position: "absolute",
                            top: "12px",
                            left: "12px",
                            backgroundColor: "rgba(39, 148, 210, 0.9)",
                            color: "white",
                            fontWeight: 500,
                            fontSize: "0.7rem",
                          }}
                        />
                      )}
                    </Box>

                    {/* Content */}
                    <Box
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          color: "#fff",
                          lineHeight: 1.3,
                        }}
                      >
                        {post.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          mb: 2,
                          flex: 1,
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {post.summary}
                      </Typography>

                      {/* Meta Info */}
                      <Box
                        sx={{
                          mt: "auto",
                          pt: 2,
                          borderTop: "1px solid rgba(255,255,255,0.05)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: "rgba(255,255,255,0.6)",
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <AccessTimeIcon sx={{ fontSize: "0.9rem" }} />
                          {post.estimate}
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255,255,255,0.6)" }}
                        >
                          {post.date}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              backgroundColor: "rgba(20, 20, 30, 0.5)",
              borderRadius: 4,
              p: 4,
            }}
          >
            <Typography variant="h5" sx={{ color: "#fff", mb: 2 }}>
              No articles found
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}
            >
              Try adjusting your search criteria or browse all articles.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setSearchTerm("");
                setActiveTab("all");
              }}
              sx={{
                backgroundColor: "#2794d2",
                "&:hover": {
                  backgroundColor: "#1a7bb0",
                },
              }}
            >
              View All Articles
            </Button>
          </Box>
        )}
      </Container>

      {/* Newsletter Subscription */}
      {/* <Box
        sx={{ 
          backgroundColor: "#111122",
          py: 6,
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: "rgba(39, 148, 210, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              padding: { xs: 3, md: 5 },
              textAlign: "center",
              border: "1px solid rgba(39, 148, 210, 0.2)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0.05,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#fff",
                position: "relative",
              }}
            >
              Stay in the Know
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.7)",
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
                position: "relative",
              }}
            >
              Subscribe to our newsletter for exclusive automotive care tips,
              early access to promotions, and the latest industry news.
            </Typography>
            
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                maxWidth: "500px",
                mx: "auto",
                position: "relative",
              }}
            >
              <InputBase
                placeholder="Your email address"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "30px",
                  padding: "12px 24px",
                  color: "#fff",
                  flex: 1,
                  width: { xs: "100%", sm: "auto" },
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover, &:focus": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  backgroundColor: "#2794d2",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "12px 30px",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    backgroundColor: "#1a7bb0",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Container>
      </Box> */}

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
