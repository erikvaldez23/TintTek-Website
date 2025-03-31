import React, { useState, useEffect } from "react";
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
  Button,
  Paper,
  Divider,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const stages = [
  {
    label: "Single-Stage Correction",
    icon: <SettingsIcon sx={{ color: "#2794d2" }} />,
    description:
      "Involves polishing the paint with a single level of abrasiveness to remove light imperfections.",
    whatToExpect: [
      "Removes light swirl marks, water spots, and minor scratches.",
      "Restores 60-70% of your car's original clarity and gloss, leaving a sleek, refreshed look.",
      "Ideal for newer cars or those with only minor imperfections.",
    ],
    perfectFor: [
      "Quick, budget-friendly improvements without the need for an intensive restoration.",
    ],
    color: "#2794d2",
    gradientColor: "linear-gradient(90deg, #1976d2 0%, #2794d2 100%)",
    intensity: 1,
  },
  {
    label: "Two-Stage Correction",
    icon: <SettingsIcon sx={{ color: "#2794d2" }} />,
    description:
      "Combines compounding and polishing to address moderate imperfections, offering a balance between effectiveness and efficiency.",
    whatToExpect: [
      "Erases moderate swirl marks, scratches, and oxidation.",
      "Restores 80-90% of your vehicle's original finish, with a deep, glossy appearance.",
      "Ideal for cars with clear coat damage or slightly worn finishes.",
    ],
    perfectFor: [
      "Drivers who want a significant improvement, with enhanced clarity and shine, without a complete overhaul.",
    ],
    color: "#2794d2",
    gradientColor: "linear-gradient(90deg, #1976d2 0%, #2794d2 100%)",
    intensity: 2,
  },
  {
    label: "Three-Stage Correction",
    icon: <StarIcon sx={{ color: "#2794d2" }} />,
    description:
      "Incorporates compounding, polishing, and finishing to tackle severe paint defects, resulting in a pristine finish.",
    whatToExpect: [
      "Completely removes deep scratches, swirl marks, oxidation, and other severe imperfections.",
      "Restores 95-100% of your car's original paintwork, delivering a flawless, showroom-quality finish.",
      "Perfect for vehicles that have suffered from long-term damage or heavy wear.",
    ],
    perfectFor: [
      "Car enthusiasts and those looking for a premium, high-end finish that turns heads wherever you go. Ideally for show cars, we do not recommend this for everyday vehicles.",
    ],
    color: "#2794d2",
    gradientColor: "linear-gradient(90deg, #1976d2 0%, #2794d2 100%)",
    intensity: 3,
  },
];

export default function PaintCorrectionTabs() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    // Animation on load
    setIsVisible(true);
  }, []);

  const handleStageChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setCurrentStage(newValue);
    } else if (event.target && typeof event.target.value === "number") {
      // For select dropdown
      setCurrentStage(event.target.value);
    }
  };

  // Custom tab styling
  const tabSx = (index) => ({
    color: currentStage === index ? "#fff" : "rgba(255, 255, 255, 0.6)",
    background:
      currentStage === index ? stages[index].gradientColor : "transparent",
    borderRadius: "8px",
    mx: 0.5,
    my: 1,
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
    fontWeight: "bold",
    textTransform: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#fff",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transform: "scale(1.05)",
    },
    "& .MuiSvgIcon-root": {
      mr: 1,
    },
    minHeight: "48px",
    ...(currentStage === index && {
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
      transform: "scale(1.05)",
    }),
  });

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #121212 100%)",
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.7s ease-in-out",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            align="center"
            fontWeight="bold"
            variant={isMobile ? "h4" : "h2"}
            color="#fff"
            sx={{
              position: "relative",
              display: "inline-block",
              pb: 1,
              // "&::after": {
              //   content: '""',
              //   position: "absolute",
              //   bottom: 0,
              //   left: 0,
              //   width: "100%",
              //   height: "4px",
              //   background: "linear-gradient(90deg, #1976d2 0%, #2794d2 100%)",
              //   borderRadius: "2px",
              // },
            }}
          >
            Paint Correction
          </Typography>
          {/* <Typography
            variant="h6"
            color="rgba(255, 255, 255, 0.8)"
            sx={{ mt: 2 }}
          >
            Choose the right level of treatment for your vehicle
          </Typography> */}
        </Box>

        {isMobile ? (
          <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
            <InputLabel
              id="stage-select-label"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem" },
                color: "rgba(255, 255, 255, 0.8)",
              }}
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
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                "& .MuiSelect-icon": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              {stages.map((stage, index) => (
                <MenuItem
                  key={index}
                  value={index}
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.4rem" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {React.cloneElement(stage.icon, { sx: { mr: 1 } })}
                  {stage.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              p: 1,
              mb: 3,
            }}
          >
            <Tabs
              value={currentStage}
              onChange={handleStageChange}
              variant="fullWidth"
              indicatorColor="primary"
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                width: "100%",
                "& .MuiTabs-flexContainer": {
                  gap: 1,
                },
              }}
            >
              {stages.map((stage, index) => (
                <Tab
                  key={index}
                  label={stage.label}
                  icon={React.cloneElement(stage.icon, {
                    sx: {
                      color: currentStage === index ? "#fff" : "#2794d2",
                      mr: 1,
                    },
                  })}
                  iconPosition="start"
                  sx={tabSx(index)}
                />
              ))}
            </Tabs>
          </Box>
        )}

        {/* Content Panel */}
        <Box sx={{ position: "relative", minHeight: "400px" }}>
          {stages.map((stage, index) => (
            <Fade key={index} in={currentStage === index} timeout={500}>
              <Box
                sx={{
                  display: currentStage === index ? "block" : "none",
                  transition: "opacity 0.5s ease",
                }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    p: { xs: 3, md: 4 },
                    bgcolor: "rgba(10, 10, 10, 0.95)",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%)",
                    color: "#fff",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <AutoFixHighIcon sx={{ mr: 1, color: stage.color }} />
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ color: "#fff" }}
                    >
                      {stage.label}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {stage.description}
                  </Typography>

                  <Box sx={{ mt: 4, mb: 2 }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        mb: 2,
                        pl: 2,
                        borderLeft: `4px solid ${stage.color}`,
                        fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
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
                              fontSize: {
                                xs: "1rem",
                                sm: "1.1rem",
                                md: "1.2rem",
                              },
                              color: "rgba(255, 255, 255, 0.9)",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        mb: 2,
                        pl: 2,
                        borderLeft: `4px solid ${stage.color}`,
                        fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                        // Use a contrasting color for second heading
                        borderColor: "#2794d2",
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
                                // Use a contrasting color for second list
                                color: "#2794d2",
                                fontSize: { xs: "1.5rem", sm: "1.7rem" },
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: "body1",
                              fontSize: {
                                xs: "1rem",
                                sm: "1.1rem",
                                md: "1.2rem",
                              },
                              color: "rgba(255, 255, 255, 0.9)",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Paper>
              </Box>
            </Fade>
          ))}
        </Box>

        {/* Navigation Arrows */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <IconButton
            onClick={() => setCurrentStage(Math.max(0, currentStage - 1))}
            disabled={currentStage === 0}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.05)",
              color: currentStage === 0 ? "rgba(255, 255, 255, 0.3)" : "#fff",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              setCurrentStage(Math.min(stages.length - 1, currentStage + 1))
            }
            disabled={currentStage === stages.length - 1}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.05)",
              color:
                currentStage === stages.length - 1
                  ? "rgba(255, 255, 255, 0.3)"
                  : "#fff",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
