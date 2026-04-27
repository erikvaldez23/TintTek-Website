import React from "react";
import { useParams } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const callToActionData = {
  "vehicle-window-tinting": {
    images: [
      "/v-window-tint/Tint Tek-63.webp",
    ],
  },
  "tesla-window-tinting": {
    images: [
      "/tesla/Tint Tek-165.webp",
      "/tesla/Tint Tek-166.webp",
      "/tesla/Tint Tek-170.webp",
      "/tesla/Tint Tek-181.webp",
      "/tesla/Tint Tek-190.webp",
      "/tesla/Tint Tek-195.webp",
      "/tesla/tesla test.webp",
    ],
  },
  "residential-window-tinting": {
    images: [
      "/residential/residential2.webp",
      "/residential/residential3.webp",
      "/residential/residential4.webp",
      "/residential/residential5.webp",
    ],
  },
  "commercial-window-tinting": {
    images: [
      "/commercial/Tint Tek-116.webp",
      "/commercial/Tint Tek-121.webp",
      "/commercial/Tint Tek-125.webp",
      "/commercial/Tint Tek-128.webp",
      "/commercial/Tint Tek-138.webp",
      "/commercial/Tint Tek-139.webp",
      "/commercial/Tint Tek-146.webp",
      "/commercial/Tint Tek-152.webp",
    ],
  },
  "vehicle-paint-correction": { images: [] },
  "vehicle-paint-protection": { images: [] },
  "headlight-services": { images: [] },
  "windshield-protection-film": { images: [] },
};

const ImageCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { serviceId } = useParams();
  const { images } = callToActionData[serviceId] || callToActionData["commercial-window-tinting"];

  if (!images.length) return null;

  return (
    <Box sx={{ py: 3, overflow: "hidden" }}>
      <Swiper
        modules={[Navigation]}
        centeredSlides={true}
        navigation={true}
        loop={images.length > 1}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          960: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ px: 1 }}>
              <Box
                component="img"
                src={src}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: isMobile ? "300px" : "450px",
                  objectFit: "cover",
                  borderRadius: "24px",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageCarousel;
