import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Link,
  useMediaQuery,
  useTheme
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom'; // Import react-router-dom Link

const quickLinksData = [
  {
    title: 'Services',
    links: [
      { text: 'Vehicle Window Tinting', to: '/services/vehicle-window-tinting' },
      { text: 'Tesla Window Tinting', to: '/services/tesla-window-tinting' },
      { text: 'Commercial Window Tinting', to: '/services/commercial-window-tinting' },
      { text: 'Residential Window Tinting', to: '/services/residential-window-tinting' },
      { text: 'Vehicle Paint Correction', to: '/services/vehicle-paint-correction' },
      { text: 'Vehicle Paint Protection', to: '/services/vehicle-paint-protection' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { text: 'Frequently Asked Questions', to: '/faq' },
      { text: 'Gallery', to: '/gallery' },
      { text: 'Blogs', to: '/blog' },
      { text: 'Window Tinting Simulator', to: '/window-tinting-simulator' },
      { text: 'Paint Protection Film Simulator', to: '/paint-protection-simulator' },
      { text: 'Commercial & Residential Tinting Simulator', to: '/tinting-simulator' },
    ],
  },
];

const QuickLinks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="quick-links"
      sx={{
        width: '100vw',
        textAlign: 'center',
        background: "#3F3F3F",
        color: '#fff',
        py: 5,
        px: { xs: 2, md: 6 },
      }}
    >
      <Typography variant={isMobile ? 'h4' : 'h2'} fontWeight="bold" sx={{ mb: 2 }}>
        Explore
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 6, color: 'rgba(255,255,255,0.7)' }}>
        Discover our top offerings and resources tailored for your automotive needs.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {quickLinksData.map((column, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.35)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 14px 35px rgba(0,0,0,0.5)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid',
                    borderColor: 'primary.main',
                    color: '#fff',
                    pb: 1,
                    mb: 2,
                  }}
                >
                  {column.title}
                </Typography>

                {column.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    component={RouterLink} // Use the router link component
                    to={link.to}           // Specify the destination path
                    underline="none"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.85)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    <ArrowRightAltIcon fontSize="small" />
                    {link.text}
                  </Link>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickLinks;
