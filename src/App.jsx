import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/TintTek-Website"> {/* ✅ Add your repo name here */}
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
      </Routes>
    </Router>
  );
}

export default App;
