import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SecurityIcon from '@mui/icons-material/Security';
import WeekendIcon from '@mui/icons-material/Weekend';


const benefits = [
    {
      title: '1. More Efficiency & Cost Saving',
      icon: <SavingsIcon fontSize="large" color="primary" />,
      benefit:
        'Window tinting is an easy and effective way to reduce your energy costs by blocking a significant amount of heat from entering your home.',
      statistic:
        'According to the U.S. Department of Energy, window tinting can reduce cooling costs by 30% to 50%, making your home more energy-efficient and reducing reliance on air conditioning.',
    },
    {
      title: '2. UV Protection & Skin Health',
      icon: <WbSunnyIcon fontSize="large" color="primary" />,
      benefit:
        'Tinted windows help block up to 99% of harmful ultraviolet (UV) rays that contribute to skin damage, premature aging, and even skin cancer.',
      statistic:
        'The Skin Cancer Foundation reports that up to 53% of UV rays can pass through untreated windows, making window film an essential shield against harmful exposure.',
    },
    {
      title: '3. Improved Comfort & Glare Reduction',
      icon: <RemoveRedEyeIcon fontSize="large" color="primary" />,
      benefit:
        'Tinting helps reduce glare, so you can enjoy natural sunlight without the uncomfortable glare from the sun, which is especially important near TVs, computers, or workstations.',
      statistic:
        'It can significantly improve indoor comfort by reducing harsh glare, allowing you to benefit from natural light without the strain or annoyance of direct sunlight.',
    },
    {
      title: '4. Enhanced Privacy & Security',
      icon: <SecurityIcon fontSize="large" color="primary" />,
      benefit:
        'Tinted film increases privacy by limiting visibility from the outside, making your home less attractive for prying eyes.',
      statistic:
        'The National Window Film Association (NWFA) found that window film can reduce up to 20% of break-ins due to increased privacy and glass protection.',
    },
    {
      title: '5. Protection for Furnishings & Interiors',
      icon: <WeekendIcon fontSize="large" color="primary" />,
      benefit:
        'Tinted windows help protect your interior furnishings from sun damage, fading, and discoloration—such as furniture, flooring, and artwork.',
      statistic:
        'UV rays can bleach up to 99% of a fabric’s dye, reducing fading and extending the life of your furnishings, carpets, and wooden floors.',
    },
]

const Commercial = () => {
  return (
    <Box 
      sx={{ 
        py: 5, 
        px: { xs: 2, sm: 4, md: 8 }, 
        backgroundColor: '#f5f5f5',
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        Top 5 Benefits of Residential Window Tinting
      </Typography>

      <Grid container spacing={4}>
        {benefits.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card 
              sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                p: 2, 
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              {/* Icon Section */}
              <Box sx={{ mr: 2, mt: 1 }}>
                {item.icon}
              </Box>

              {/* Text Section */}
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Benefit: </strong>
                  {item.benefit}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Statistic: </strong>
                  {item.statistic}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Commercial;
