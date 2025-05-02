import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Paper, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

const ChatbotPopup = ({ onClose, onOpenChatbot }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setOpen(true);
    }, 800);

    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(autoCloseTimer);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(onClose, 300);
  };

  return (
    <Fade in={open} timeout={500}>
      <Paper
        elevation={0}
        sx={{
          position: "fixed",
          bottom: 80,
          right: 20,
          width: { xs: "90%", sm: 340 },
          height: "400px",
          maxWidth: "90vw",
          borderRadius: "20px",
          overflow: "hidden",
          p: 0,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
          zIndex: (theme) => theme.zIndex.modal + 4,
          transform: "translateZ(0)",
        }}
      >
        {/* Container for full height layout */}
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Accent top bar */}
          <Box
            sx={{
              background: "#2794d2",
              height: "6px",
              width: "100%",
            }}
          />

          {/* Close button */}
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 24,
              height: 24,
              backgroundColor: "rgba(230, 230, 230, 0.5)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(210, 210, 210, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(210, 210, 210, 0.8)",
              },
            }}
          >
            <CloseIcon fontSize="small" sx={{ fontSize: "14px", color: "#555" }} />
          </IconButton>

          {/* Main content area */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: 3,
              pt: 5,
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            {/* Icon + Title */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "#2794d2",
                  mr: 1.5,
                  boxShadow: "0 2px 12px rgba(0, 102, 204, 0.3)",
                }}
              >
                <ChatBubbleOutlineRoundedIcon sx={{ color: "white", fontSize: "20px" }} />
              </Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: "#fff",
                }}
              >
                Need any assistance?
              </Typography>
            </Box>

            {/* Message */}
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: "#fff",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                mb: 3,
              }}
            >
              Have any questions? I'm here to help with anything you need! From service details to general inquiries or getting started with your project.
            </Typography>

            {/* CTA Button */}
            <Box
              onClick={onOpenChatbot}
              sx={{
                backgroundColor: "#2794d2",
                color: "white",
                py: 1.2,
                px: 3,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 8px rgba(0, 102, 204, 0.2)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                fontSize: "15px",
                "&:hover": {
                  backgroundColor: "#0055AA",
                  boxShadow: "0 4px 12px rgba(0, 102, 204, 0.3)",
                },
                "&:active": {
                  transform: "scale(0.98)",
                  boxShadow: "0 2px 4px rgba(0, 102, 204, 0.2)",
                },
              }}
            >
              Ask me a question
            </Box>
          </Box>
        </Box>
      </Paper>
    </Fade>
  );
};

export default ChatbotPopup;
