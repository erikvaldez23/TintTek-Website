import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect } from "react";
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
import PricingComponent from "./components/Pricing";
import FAQ from "./components/sub-pages/FAQ";
import QuickLinks from "./components/key-components/QuickLinks";
import FAQSection from "./components/FAQSection";
import CommercialSimulator from "./components/simulators/CommercialSimulator";
import ResidentialSimulator from "./components/simulators/ResidentialSimulator";
import TeslaTintingPage from "./components/simulators/TeslaSimulatorPage";
import VehicleTintingPage from "./components/simulators/VehicleSimulatorPage";
import PPFpage from "./components/simulators/PPFpage";

// Theme Config
const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
  },
});

// Scroll Handler
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
      }, 100);
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
          <Route path="/services/:serviceId" element={<PricingComponent />} />
          <Route path="/services/:serviceId" element={<FAQSection />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/support" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/simulators/commercial-window-tinting" element={<CommercialSimulator/>}/>
          <Route path="/simulators/residential-window-tinting" element={<ResidentialSimulator/>}/>
          <Route path="/simulators/tesla-window-tinting" element={<TeslaTintingPage/>}/>
          <Route path="/simulators/vehicle-window-tinting" element={<VehicleTintingPage/>}/>
          <Route path="/simulators/vehicle-paint-protection" element={<PPFpage/>}/>
        </Routes>
        <Chatbot />
      </Router>
    </ThemeProvider>
  );
}

export default App;
