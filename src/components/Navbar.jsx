import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full glass z-50 border-b border-[#49454F]/30 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <Link to="/" className="flex items-center gap-3">
        <img src="/Myicon.png" alt="AlgoCommit Logo" className="w-8 h-8 drop-shadow-lg" />
        <span className="text-xl font-bold tracking-tight text-[#E6E1E5]">AlgoCommit</span>
      </Link>
      <div className="hidden md:flex gap-8 text-[15px] font-medium text-[#CAC4D0]">
        {/* If on home page, fragment links work. If elsewhere, maybe navigate to home first, but standard router links usually go to pages */}
        <Link to="/#features" className="hover:text-[#D0BCFF] transition-colors">Features</Link>
        <Link to="/pricing" className={`hover:text-[#D0BCFF] transition-colors ${isActive('/pricing') ? 'text-[#D0BCFF]' : ''}`}>Pricing</Link>
        <Link to="/docs" className={`hover:text-[#D0BCFF] transition-colors ${isActive('/docs') ? 'text-[#D0BCFF]' : ''}`}>Docs</Link>
        <Link to="/about" className={`hover:text-[#D0BCFF] transition-colors ${isActive('/about') ? 'text-[#D0BCFF]' : ''}`}>About</Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-[#D0BCFF] text-[#381E72] px-5 py-2.5 rounded-full font-bold text-[14px] hover:bg-[#EADDFF] transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(208,188,255,0.3)] cursor-pointer">
          Add to Chrome
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
