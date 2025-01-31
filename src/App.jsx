import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import Vision from './components/Vision';
import Footer from './components/Footer';
import PricingComponent from './components/Pricing';

function App() {
  return (
    <Router basename="/TintTek-Website"> {/* ✅ Add your repo name here */}
      <Routes className="App">
        <Route 
          path="/" 
          element={
            <>
              <Topbar />
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
      </Routes>
    </Router>
  );
}

export default App;
