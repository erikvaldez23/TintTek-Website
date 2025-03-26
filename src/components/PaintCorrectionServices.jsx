import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Fade,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const stages = [
  {
    label: "Single-Stage Correction",
    description:
      "Involves polishing the paint with a single level of abrasiveness to remove light imperfections.",
    whatToExpect: [
      "Removes light swirl marks, water spots, and minor scratches.",
      "Restores 60-70% of your car’s original clarity and gloss, leaving a sleek, refreshed look.",
      "Ideal for newer cars or those with only minor imperfections.",
    ],
    perfectFor: [
      "Quick, budget-friendly improvements without the need for an intensive restoration.",
    ],
  },
  {
    label: "Two-Stage Correction",
    description:
      "Combines compounding and polishing to address moderate imperfections, offering a balance between effectiveness and efficiency.",
    whatToExpect: [
      "Erases moderate swirl marks, scratches, and oxidation.",
      "Restores 80-90% of your vehicle’s original finish, with a deep, glossy appearance.",
      "Ideal for cars with clear coat damage or slightly worn finishes.",
    ],
    perfectFor: [
      "Drivers who want a significant improvement, with enhanced clarity and shine, without a complete overhaul.",
    ],
  },
  {
    label: "Three-Stage Correction",
    description:
      "Incorporates compounding, polishing, and finishing to tackle severe paint defects, resulting in a pristine finish.",
    whatToExpect: [
      "Completely removes deep scratches, swirl marks, oxidation, and other severe imperfections.",
      "Restores 95-100% of your car’s original paintwork, delivering a flawless, showroom-quality finish.",
      "Perfect for vehicles that have suffered from long-term damage or heavy wear.",
    ],
    perfectFor: [
      "Car enthusiasts and those looking for a premium, high-end finish that turns heads wherever you go. Ideally for show cars, we do not recommend this for everyday vehicles. ",
    ],
  },
];

export default function PaintCorrectionTabs() {
  const [currentStage, setCurrentStage] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleStageChange = (event, newValue) => {
    if (isMobile) {
      // When using dropdown, event.target.value will be a number
      setCurrentStage(event.target.value);
    } else {
      setCurrentStage(newValue);
    }
  };

  return (
    <Box
      sx={{
        background: "#000",
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4},
      }}
    >
      <Typography
        align="center"
        fontWeight="bold"
        variant={isMobile ? "h4" : "h2"}
        color="#fff"
        sx={{
          py: 2,
          mb: 5
        }}
      >
        What are the Different Stages of Paint Corrections?
      </Typography>

      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {isMobile ? (
          <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
            <InputLabel
              id="stage-select-label"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.4rem" } }}
            >
              Select Stage
            </InputLabel>
            <Select
              labelId="stage-select-label"
              value={currentStage}
              label="Select Stage"
              onChange={handleStageChange}
              sx={{
                color: "#fff",
                fontSize: { xs: "1.2rem", sm: "1.4rem" },
                backgroundColor: "transparent",
                "& .MuiSelect-icon": {
                  color: "#fff",
                },
              }}
            >
              {stages.map((stage, index) => (
                <MenuItem
                  key={index}
                  value={index}
                  sx={{ fontSize: { xs: "1.2rem", sm: "1.4rem" } }}
                >
                  {stage.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <Tabs
            value={currentStage}
            onChange={handleStageChange}
            centered
            indicatorColor="primary"
            variant="standard"
            sx={{
              mb: 3,
              "& .MuiTab-root": {
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.8rem" },
                transition: "color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  color: "#2794d2",
                  transform: "scale(1.05)",
                },
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#2794d2",
              },
              "& .MuiTabs-flexContainer": {
                gap: 2,
              },
            }}
          >
            {stages.map((stage, index) => (
              <Tab key={index} label={stage.label} />
            ))}
          </Tabs>
        )}

        {/* Tab Panels with Fade Transition */}
        {stages.map((stage, index) => (
          <Fade in={currentStage === index} timeout={500} key={index}>
            <Box
              hidden={currentStage !== index}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                border: "3px solid #fff",
                borderRadius: 3,
                p: 4,
                boxShadow: 4,
                mt: 2,
                transition: "all 0.3s ease",
              }}
            >
              {currentStage === index && (
                <>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.8rem" },
                    }}
                  >
                    {stage.description}
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      mt: 2,
                      fontSize: { xs: "1.4rem", sm: "1.6rem", md: "2rem" },
                    }}
                  >
                    What to Expect:
                  </Typography>
                  <List>
                    {stage.whatToExpect.map((item, i) => (
                      <ListItem key={i} sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleIcon
                            sx={{
                              color: "#2794d2",
                              fontSize: { xs: "1.5rem", sm: "1.7rem" },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            variant: "body1",
                            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      mt: 2,
                      fontSize: { xs: "1.4rem", sm: "1.6rem", md: "2rem" },
                    }}
                  >
                    Perfect For:
                  </Typography>
                  <List>
                    {stage.perfectFor.map((item, i) => (
                      <ListItem key={i} sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleIcon
                            sx={{
                              color: "#2794d2",
                              fontSize: { xs: "1.5rem", sm: "1.7rem" },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            variant: "body1",
                            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Box>
          </Fade>
        ))}
      </Box>
    </Box>
  );
}
