import { Box, Typography, Grid, Paper, Button, Collapse } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const features = [
        {
            text: "Professional-Grade Tinting",
            color: "#45A9F7",
            details: "We use only the highest-quality films that provide superior clarity, durability, and performance. Our professional-grade tint ensures a sleek finish without bubbles or peeling.",
        },
        {
            text: "UV Protection",
            color: "#45A9F7",
            details: "Our premium window films block up to 99% of harmful UV rays, protecting you and your passengers from skin damage while also preserving your car's interior from fading and cracking.",
        },
        {
            text: "Lifetime Warranty",
            color: "#45A9F7",
            details: "We stand behind our work. Our lifetime warranty covers peeling, bubbling, and discoloration, ensuring your tint stays in perfect condition for years to come.",
        },
        {
            text: "Heat & Glare Reduction",
            color: "#45A9F7",
            details: "Experience a cooler, more comfortable ride with our heat-rejecting films. Reduce glare from the sun and headlights, improving visibility and reducing eye strain while driving.",
        },
        {
            text: "Certified Technicians",
            color: "#45A9F7",
            details: "Our highly trained technicians have years of experience in precision tinting. We follow strict industry standards to ensure every application is flawless and long-lasting.",
        },
        {
            text: "Privacy & Security",
            color: "#45A9F7",
            details: "Window tinting provides an added layer of privacy and security, keeping prying eyes away and reducing the risk of break-ins. Our films reinforce your glass, adding an extra level of protection.",
        },
    ];

    return (
        <Box
    sx={{
        p: 6,
        textAlign: "center",
        background: "#000",
        color: "white",
    }}
>
    <Box
        sx={{
            maxWidth: "1200px", // Set max width
            margin: "auto", // Center horizontally
            width: "100%", // Ensure responsiveness
        }}
    >
        {/* Existing Content */}
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#007bff" }}>
            Why Choose Us?
        </Typography>

        <Typography
            variant="h6"
            sx={{
                maxWidth: "800px",
                margin: "auto",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.6,
            }}
        >
            At Tint Tek +, we offer premium window tinting designed for style, comfort, and protection. 
            Our industry-leading films block 99% of UV rays, reduce glare, and keep your car cooler. 
            Backed by certified technicians and a lifetime warranty, we guarantee unmatched quality and service.
        </Typography>

        {/* Features Grid */}
        <Grid container spacing={3} sx={{ mt: 4, justifyContent: "center" }}>
            {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                        elevation={6}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        sx={{
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1,
                            backgroundColor: hoveredIndex === index ? feature.color : "#2C2F33",
                            color: hoveredIndex === index ? "black" : "white",
                            borderRadius: "10px",
                            transition: "all 0.3s ease-in-out",
                            boxShadow: hoveredIndex === index ? `0px 0px 15px ${feature.color}` : "none",
                            "&:hover": { transform: "scale(1.05)" },
                            cursor: "pointer",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <CheckCircleIcon sx={{ fontSize: 32, color: hoveredIndex === index ? "black" : "white" }} />
                            <Typography variant="h6" fontWeight="bold">
                                {feature.text}
                            </Typography>
                        </Box>

                        <Collapse in={hoveredIndex === index}>
                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 1,
                                    textAlign: "center",
                                }}
                            >
                                {feature.details}
                            </Typography>
                        </Collapse>
                    </Paper>
                </Grid>
            ))}
        </Grid>

        {/* <Button
            variant="contained"
            size="large"
            sx={{
                mt: 5,
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "20px",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": { backgroundColor: "#000", border: "5px solid #fff" },
            }}
        >
            Get a Free Quote
        </Button> */}
    </Box>
</Box>

    );
}
