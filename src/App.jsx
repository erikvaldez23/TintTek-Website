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
import ServicesPage from "./components/ServicesPage";
import Chatbot from "./ChatBot";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";  
import CallToAction from "./components/CallToAction";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import PricingComponent from "./components/Pricing";
import FAQ from "./components/FAQ";
import QuickLinks from "./components/QuickLinks";
import FAQSection from "./components/FAQSection";
import CommercialSimulator from "./components/CommercialSimulator";
import ResidentialSimulator from "./components/ResidentialSimulator";

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
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/commercial-tinting-simulator" element={<CommercialSimulator/>}/>
          <Route path="/residential-tinting-simulator" element={<ResidentialSimulator/>}/>
        </Routes>
        <Chatbot />
      </Router>
    </ThemeProvider>
  );
}

export default App;
