import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect } from "react";  // ✅ Import useEffect
import './App.css';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import Vision from './components/Vision';
import Footer from './components/Footer';
import PricingComponent from './components/Pricing';
import ServicesPage from './components/ServicesPage';
import Chatbot from './ChatBot';
import TintSelector from './components/TintSelector';
import TintedCar from './components/TintedCar';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';

const theme = createTheme({
    palette: {
        primary: {
            main: "#007bff",
        },
    },
});

// ✅ Helper function to handle scrolling after navigation
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          const offset = 100; // Adjust this value as needed
          const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }, 100); // Small delay to ensure the page loads before scrolling
    }
  }, [location]);

  return null;
};


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/TintTek-Website"> 
        <ScrollToTop />
        <ScrollHandler />  {/* ✅ New component to handle scrolling */}
        <Topbar /> {/* ✅ Keep Topbar on all pages for navigation */}
        <Routes className="App">
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Services />
                {/* <TintSelector /> */}
                {/* <TintedCar />  */}
                <WhyChooseUs />
                <Testimonials />
                <Vision />
                <PricingComponent />
                <Contact />
                <Footer />
              </>
            } 
          />
          {/* ✅ Dynamic Route for Individual Service Pages */}
          <Route path="/services/:serviceId" element={<ServicesPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Chatbot /> {/* ✅ Keep chatbot outside of <Routes> to persist across all pages */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
