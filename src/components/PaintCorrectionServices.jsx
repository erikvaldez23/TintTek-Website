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
  IconButton,
  Container,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const stages = [
  {
    label: "Single-Stage Correction",
    icon: <BuildCircleIcon sx={{ color: "#2794d2" }} />,
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
    icon: <WorkspacePremiumIcon sx={{ color: "#2794d2" }} />,
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
    setIsVisible(true);
  }, []);

  const handleStageChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setCurrentStage(newValue);
    } else if (event?.target && typeof event.target.value === "number") {
      setCurrentStage(event.target.value);
    }
  };

const tabSx = (index) => ({
  position: "relative",
  color: currentStage === index ? "#fff" : "rgba(255, 255, 255, 0.6)",
  // 🔒 Force the background (and image) on the active tab
  background:
    currentStage === index
      ? "linear-gradient(90deg, #1976d2 0%, #2794d2 100%) !important"
      : "transparent !important",
  backgroundImage:
    currentStage === index
      ? "linear-gradient(90deg, #1976d2 0%, #2794d2 100%) !important"
      : "none !important",
  backgroundColor:
    currentStage === index ? "transparent !important" : "transparent !important",

  borderRadius: "8px",
  mx: 0.5,
  my: 1,
  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
  fontWeight: "bold",
  textTransform: "none",
  minHeight: "48px",
  transition: "color 200ms ease, background 200ms ease",
  "& .MuiSvgIcon-root": { mr: 1 },

  // Ensure selected state also has the forced bg
  "&.Mui-selected": {
    background:
      "linear-gradient(90deg, #1976d2 0%, #2794d2 100%) !important",
    backgroundImage:
      "linear-gradient(90deg, #1976d2 0%, #2794d2 100%) !important",
  },

  // 🔹 Underline accent (also forced)
  "&::after": {
    content: '""',
    position: "absolute",
    left: 12,
    right: 12,
    bottom: -6,
    height: 3,
    borderRadius: 2,
    background:
      currentStage === index
        ? "linear-gradient(90deg, #1976d2 0%, #2794d2 100%) !important"
        : "transparent !important",
    boxShadow:
      currentStage === index ? "0 0 10px rgba(39,148,210,0.5)" : "none",
    opacity: currentStage === index ? 1 : 0,
    transform: currentStage === index ? "scaleX(1)" : "scaleX(0.6)",
    transformOrigin: "center",
    transition: "opacity 220ms ease, transform 220ms ease",
    pointerEvents: "none",
  },

  // Hover state (still forced so it shows through nukes)
  "&:hover": {
    color: "#fff",
    background:
      currentStage === index
        ? "linear-gradient(90deg, #1976d2 0%, #2794d2 100%) !important"
        : "rgba(255,255,255,0.1) !important",
  },
});


  return (
    <Box
      sx={{
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
            sx={{ position: "relative", display: "inline-block", pb: 1 }}
          >
            Paint Correction Stages
          </Typography>
        </Box>

        {isMobile ? (
          <FormControl
            fullWidth
            variant="outlined"
            sx={{
              mb: 3,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 8,
                right: 8,
                bottom: -6,
                height: 3,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${stages[currentStage].color} 0%, #2794d2 100%)`,
                boxShadow: "0 0 10px rgba(39,148,210,0.5)",
                pointerEvents: "none",
              },
            }}
          >
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
                "& .MuiSelect-icon": { color: "#fff" },
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
              bgcolor: "rgba(255, 255, 255, 0.02)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              p: 1,
              mb: 1
            }}
          >
            <Tabs
              value={currentStage}
              onChange={handleStageChange}
              variant="fullWidth"
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                width: "100%",
                "& .MuiTabs-flexContainer": { gap: 1 },
              }}
            >
              {stages.map((stage, index) => (
                <Tab
                  key={index}
                  label={
                    <span
                      style={{
                        color:
                          currentStage === index ? "#fff" : "rgba(255,255,255,0.6)",
                        fontWeight: "bold",
                      }}
                    >
                      {stage.label}
                    </span>
                  }
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
                    bgcolor: "rgba(255, 255, 255, 0.01)",
                    color: "#fff",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <AutoFixHighIcon sx={{ mr: 1, color: stage.color }} />
                    <Typography variant="h5" fontWeight="bold" sx={{ color: "#fff" }}>
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
                              sx={{ color: "#2794d2", fontSize: { xs: "1.5rem", sm: "1.7rem" } }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: "body1",
                              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
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
                              sx={{ color: "#2794d2", fontSize: { xs: "1.5rem", sm: "1.7rem" } }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: "body1",
                              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
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
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
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
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
