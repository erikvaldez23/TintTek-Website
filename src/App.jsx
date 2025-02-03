import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
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
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery';
import ScrollToTop from './components/ScrollToTop'

const theme = createTheme({
    palette: {
        primary: {
            main: "#007bff",
        },
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/TintTek-Website"> {/* ✅ Set basename for GitHub Pages */}
        <ScrollToTop />
        <Topbar /> {/* ✅ Keep Topbar on all pages for navigation */}
        <Routes className="App">
          {/* ✅ Home Page Route */}
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
        </Routes>
        <Chatbot /> {/* ✅ Keep chatbot outside of <Routes> to persist across all pages */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
