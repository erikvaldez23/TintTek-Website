import { Box, Typography, Grid, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // ✅ Icon for benefits

const BenefitsSection = ({ benefits }) => {
  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        backgroundColor: "#000",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "1200px", width: "100%", color: "#fff" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          WHAT ARE THE BENEFITS?
        </Typography>

        {/* Benefits Grid */}
        <Grid container spacing={3} justifyContent="center">
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3} // Subtle shadow
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  color: "#fff",
                  padding: "12px",
                  borderRadius: 2,
                  backgroundColor: "#292929",
                  minHeight: "120px", // Ensures uniform card height
                  textAlign: "center",
                }}
              >
                <CheckCircleIcon sx={{ color: "#2794d2", fontSize: 28 }} />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ maxWidth: "90%" }}
                >
                  {benefit}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BenefitsSection;
