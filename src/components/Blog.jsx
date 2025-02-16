import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent, Button, Grid } from "@mui/material";

const blogPosts = [
    {
      id: 1,
      title: "Top Benefits of Window Tinting for Your Car",
      summary: "Learn how window tinting can enhance your driving experience by reducing heat, glare, and UV exposure.",
      content: "Full blog content goes here...",
      image: "/images/tint-benefits.jpg",
      date: "February 16, 2025",
      category: "Automotive Tinting",
    },
    {
      id: 2,
      title: "How Dark Can Your Tint Be? Legal Tint Laws Explained",
      summary: "Discover the legal window tint limits in your state and avoid unnecessary fines.",
      content: "Full blog content goes here...",
      image: "/images/tint-laws.jpg",
      date: "February 10, 2025",
      category: "Legal",
    },
  ];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
        Tinting Blog
      </Typography>
      
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia component="img" image={post.image} alt={post.title} sx={{ height: 200 }} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{post.title}</Typography>
                <Typography variant="body2" color="text.secondary">{post.date} | {post.category}</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>{post.summary}</Typography>
                <Button 
                  onClick={() => navigate(`/blog/${post.id}`)}
                  sx={{ mt: 2, backgroundColor: "#2794d2", color: "#fff", "&:hover": { backgroundColor: "#000" } }}
                  variant="contained"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
