import { useState } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';  
import Hero from './components/Hero';  
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route 
            path="/TintTek-Website/" 
            element={
              <>
                <Topbar />
                <Hero />
                <Services />
                <Testimonials />
                <Vision />
                <Contact />
                <Footer />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
