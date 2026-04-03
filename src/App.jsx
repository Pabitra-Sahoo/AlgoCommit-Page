import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Docs from './pages/Docs';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#141218] text-[#E6E1E5] font-sans selection:bg-[#D0BCFF]/30 flex flex-col relative overflow-hidden">
        {/* Global Background Orbs */}
        <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#D0BCFF] opacity-10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#F2B8B5] opacity-[0.05] rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <Navbar />
        
        <main className="flex-1 relative z-10 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
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
