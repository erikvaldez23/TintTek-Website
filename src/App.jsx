import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar'  
import Hero from './components/Hero'  
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div>
        <Routes>
          <Route 
            path="/" 
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
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/project-details/:projectId" element={<Details />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App
