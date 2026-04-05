import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { CHROME_STORE_URL } from '../constants/links';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full glass z-50 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <Link to="/" className="flex items-center gap-3">
        <img src="/Myicon.png" alt="AlgoCommit Logo" className="w-8 h-8 drop-shadow-lg" />
        <span className="text-xl font-bold tracking-tight text-[#E6E1E5]">AlgoCommit</span>
      </Link>
      
      <div className="hidden md:flex gap-8 text-[15px] font-medium text-[#CAC4D0]">
        <Link to="/#home" onClick={handleHomeClick} className={`cursor-pointer hover:text-[#D0BCFF] transition-colors ${isActive('/') && (location.hash === '#home' || !location.hash) ? 'text-[#D0BCFF]' : ''}`}>Home</Link>
        <Link to="/#features" onClick={handleLinkClick} className="hover:text-[#D0BCFF] transition-colors">Features</Link>
        <Link to="/about" onClick={handleLinkClick} className={`hover:text-[#D0BCFF] transition-colors ${isActive('/about') ? 'text-[#D0BCFF]' : ''}`}>About</Link>
        <Link to="/docs" onClick={handleLinkClick} className={`hover:text-[#D0BCFF] transition-colors ${isActive('/docs') ? 'text-[#D0BCFF]' : ''}`}>Docs</Link>
        <Link to="/#feedback" onClick={handleLinkClick} className="hover:text-[#D0BCFF] transition-colors">Feedback</Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a href={CHROME_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#D0BCFF] text-[#381E72] px-6 py-2.5 rounded-full font-black text-sm hover:scale-[1.02] transition-transform active:scale-[0.98] cursor-pointer inline-flex items-center justify-center">
          Add to Browser
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center pr-2">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#E6E1E5] text-2xl focus:outline-none">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#1A1A1E] border-b border-white/5 flex flex-col items-center py-6 gap-6 shadow-2xl md:hidden">
          <Link to="/#home" onClick={handleHomeClick} className={`text-lg hover:text-[#D0BCFF] transition-colors ${isActive('/') && (location.hash === '#home' || !location.hash) ? 'text-[#D0BCFF]' : ''}`}>Home</Link>
          <Link to="/#features" onClick={handleLinkClick} className="text-lg hover:text-[#D0BCFF] transition-colors">Features</Link>
          <Link to="/about" onClick={handleLinkClick} className={`text-lg hover:text-[#D0BCFF] transition-colors ${isActive('/about') ? 'text-[#D0BCFF]' : ''}`}>About</Link>
          <Link to="/docs" onClick={handleLinkClick} className={`text-lg hover:text-[#D0BCFF] transition-colors ${isActive('/docs') ? 'text-[#D0BCFF]' : ''}`}>Docs</Link>
          <Link to="/#feedback" onClick={handleLinkClick} className="text-lg hover:text-[#D0BCFF] transition-colors">Feedback</Link>
          <a href={CHROME_STORE_URL} target="_blank" rel="noreferrer" className="w-full max-w-[200px] mt-2 bg-[#D0BCFF] text-[#381E72] py-3 rounded-full font-black text-sm flex items-center justify-center">
            Add to Browser
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
