import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';
import About from './pages/About';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      // Small timeout to wait for React to finish rendering the new page DOM
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0); // Scroll to top on normal navigation
    }
  }, [pathname, hash]);

  return null;
}

function Spotlight() {
  const [mousePosition, setMousePosition] = React.useState({ x: -1000, y: -1000 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(208,188,255,0.07), transparent 40%)`,
      }}
    />
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-[#141218] text-[#E6E1E5] font-sans selection:bg-[#D0BCFF]/30 flex flex-col relative overflow-hidden">
        <Spotlight />
        
        {/* Subtle Grid Background */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-40" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        <Navbar />
        
        <main className="flex-1 relative z-10 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
