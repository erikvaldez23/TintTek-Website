// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import "./App.css";

import Topbar from "./components/key-components/Topbar";
import Hero from "./components/hero/Hero";
import Testimonials from "./components/landing/Testimonials";
import Services from "./components/landing/Services";
import Vision from "./components/landing/Vision";
import Footer from "./components/key-components/Footer";
import ServicesPage from "./components/ServicesPage";
import Chatbot from "./ChatBot";
import WhyChooseUs from "./components/landing/WhyChooseUs";
import Gallery from "./components/sub-pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import FAQ from "./components/sub-pages/FAQ";
import QuickLinks from "./components/key-components/QuickLinks";
import CommercialSimulator from "./components/simulators/CommercialSimulator";
import ResidentialSimulator from "./components/simulators/ResidentialSimulator";
import TeslaTintingPage from "./components/simulators/TeslaSimulatorPage";
import VehicleTintingPage from "./components/simulators/VehicleSimulatorPage";
import PPFpage from "./components/simulators/PPFpage";
import FullPageChatbot from "./components/FullPageChatbot";
import ChatbotPopup from "./components/ChatbotPopup";
import Mockup from "./components/landing-pages/Mockup";
import VideoCTA2 from "./components/landing-pages/VideoCTA2";
import SubCTA from "./components/SubCTA";
import SubContact from "./components/SubContact";
import SubQuickLinks from "./components/SubQuickLinks";

// ---- Theme ----
const theme = createTheme({
  palette: {
    primary: { main: "#2794d2" },
  },
});

function AppContent() {
  const location = useLocation();
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const isHomePage = location.pathname === "/";
  const isChatPage = location.pathname === "/chat";

  // Show chatbot teaser on home after a short delay
  useEffect(() => {
    let popupTimer;
    if (isHomePage) {
      popupTimer = setTimeout(() => setShowPopup(true), 1500);
    }
    return () => clearTimeout(popupTimer);
  }, [isHomePage]);

  const handleOpenChatbot = () => {
    setShowPopup(false);
    setChatbotOpen(true);
  };
  const handleCloseChatbot = () => setChatbotOpen(false);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <Topbar handleOpenChatbot={handleOpenChatbot} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Box
                sx={{
                  background: `
      linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 14%, rgba(0,0,0,0.0) 46%),
      radial-gradient(circle at top left, rgba(39,148,210,0.1), transparent 88%),
      radial-gradient(circle at bottom right, rgba(77,184,240,0.12), transparent 52%),
      linear-gradient(180deg, #000 0%, #0f0f0f 100%)
    `,
                }}
              >
                <Services />
                <WhyChooseUs />
                <Testimonials />
                <VideoCTA2 />
                <Vision />
                <SubCTA />
                <SubContact />
                <SubQuickLinks />
                <Footer />
              </Box>
            </>
          }
        />

        {/* Service detail pages */}
        <Route path="/services/:serviceId" element={<ServicesPage />} />

        {/* Blog list + detail (list at /blog) */}
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        {/* Other pages */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/support" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/chat" element={<FullPageChatbot />} />
        <Route path="/mockup" element={<Mockup />} />

        {/* Simulators */}
        <Route
          path="/simulators/commercial-window-tinting"
          element={<CommercialSimulator />}
        />
        <Route
          path="/simulators/residential-window-tinting"
          element={<ResidentialSimulator />}
        />
        <Route
          path="/simulators/tesla-window-tinting"
          element={<TeslaTintingPage />}
        />
        <Route
          path="/simulators/vehicle-window-tinting"
          element={<VehicleTintingPage />}
        />
        <Route
          path="/simulators/vehicle-paint-protection"
          element={<PPFpage />}
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Chatbot drawer */}
      <Chatbot open={chatbotOpen} onClose={handleCloseChatbot} />

      {/* Floating chat button (not on /chat) */}
      {!chatbotOpen && !isChatPage && (
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: (t) => t.zIndex.modal + 5,
          }}
        >
          <IconButton
            onClick={handleOpenChatbot}
            sx={{
              backgroundColor: "#2794d2",
              color: "white",
              "&:hover": { backgroundColor: "#1976c9" },
              width: 50,
              height: 50,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <ChatIcon />
          </IconButton>
        </Box>
      )}

      {/* Homepage chatbot teaser */}
      {showPopup && isHomePage && !chatbotOpen && (
        <ChatbotPopup
          onClose={handleClosePopup}
          onOpenChatbot={handleOpenChatbot}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* For custom domain, import.meta.env.BASE_URL will be '/' */}
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
