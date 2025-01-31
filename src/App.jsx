import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import Vision from './components/Vision';
import Footer from './components/Footer';
import PricingComponent from './components/Pricing';
import ServicesPage from './components/ServicesPage'; // Import the dynamic service page

function App() {
  return (
    <Router basename="/TintTek-Website"> {/* ✅ Set basename for GitHub Pages */}
      <Topbar /> {/* ✅ Keep Topbar on all pages for navigation */}
      <Routes className="App">
        {/* ✅ Home Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Services />
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
      </Routes>
    </Router>
  );
}

export default App;
