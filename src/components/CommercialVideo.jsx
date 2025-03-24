import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Box, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CommercialVideo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Define a fixed height for non-mobile devices

  const images = [
    "/TintTek-Website/Tint Tek-146.jpg",
    "/TintTek-Website/commercial2.jpg",
    "/TintTek-Website/commercial3.jpg",
    "/TintTek-Website/commercial4.jpg",
    "/TintTek-Website/commercial5.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Box
        sx={{
          display: isMobile ? "block" : "flex",
          maxWidth: "1200px",
          mx: "auto",
          width: "100%",
        }}
      >
        {/* Left Column: Video with custom play/pause */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#000",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            src="/TintTek-Website/commercial-video1.mov"
            autoPlay
            muted
            loop
            playsInline
            style={{
                height: "100%",
                objectFit: "cover",
                borderRadius: 10,
            }}
          />

          {/* Custom Play/Pause Button Overlay */}
          <IconButton
            onClick={handleToggleVideo}
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              backgroundColor: "rgba(255,255,255,0.8)",
              "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
            }}
          >
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>
        </Box>

        {/* Right Column: Carousel */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: isMobile ? 2 : 0, // Reduced padding to help match the video size
          }}
        >
          <Typography variant="h4" sx={{ color: "#fff", mb: 2 }}>
            Explore Our Window Film Projects
          </Typography>

          <Box sx={{ width: "100%", maxWidth: 600 }}>
            <Slider {...sliderSettings}>
              {images.map((src, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={src}
                    alt={`Project ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
