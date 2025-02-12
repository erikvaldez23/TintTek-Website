import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import PricingComponent from "./components/Pricing";
import ServicesPage from "./components/ServicesPage";
import Chatbot from "./ChatBot";
import TintSelector from "./components/TintSelector";
import TintedCar from "./components/TintedCar";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";  // Import NotFound Component

// Theme Configuration
const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
  },
});

// Scroll Handler for navigating to specific sections on the homepage
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          const offset = 100; // Adjust this if your Topbar height changes
          const targetPosition =
            targetSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }, 100); // Delay to ensure DOM is ready
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <ScrollHandler />
        <Topbar />

        {/* Define routes for different pages */}
        <Routes className="App">
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <WhyChooseUs />
                <Testimonials />
                <Vision />
                {/* <PricingComponent /> */}
                <Contact />
                <Footer />
              </>
            }
          />
          {/* Dynamic Route for Service Details */}
          <Route path="/services/:serviceId" element={<ServicesPage />} />

          {/* Gallery Page */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Privacy Policy Page */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Catch-All Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Persistent Chatbot across all pages */}
        <Chatbot />
      </Router>
    </ThemeProvider>
  );
}

export default App;
