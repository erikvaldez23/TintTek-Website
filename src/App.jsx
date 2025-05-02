import {
  HashRouter as Router,
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
import Contact from "./components/key-components/Contact";
import Vision from "./components/landing/Vision";
import Footer from "./components/key-components/Footer";
import ServicesPage from "./components/ServicesPage";
import Chatbot from "./ChatBot";
import WhyChooseUs from "./components/landing/WhyChooseUs";
import Gallery from "./components/sub-pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";
import CallToAction from "./components/key-components/CallToAction";
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
import ChatbotPopup from "./components/ChatbotPopup"; // Import the new component

// Theme Config
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

  // Show popup on home page after a small delay
  useEffect(() => {
    let popupTimer;
    if (isHomePage) {
      popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 1500); // Delay before showing popup
    }
    
    return () => {
      clearTimeout(popupTimer);
    };
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
              <Services />
              <WhyChooseUs />
              <Testimonials />
              <Vision />
              <CallToAction />
              <Contact />
              <QuickLinks />
              <Footer />
            </>
          }
        />
        <Route path="/services/:serviceId" element={<ServicesPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/support" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/chat" element={<FullPageChatbot />} />
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
      </Routes>

      {/* chatbot drawer */}
      <Chatbot open={chatbotOpen} onClose={handleCloseChatbot} />

      {/* floating chat icon: only if closed AND not on /chat */}
      {!chatbotOpen && !isChatPage && (
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: (theme) => theme.zIndex.modal + 5,
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

      {/* Chatbot popup - only shown on homepage and when conditions are met */}
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
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}