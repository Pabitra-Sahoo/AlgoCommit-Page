import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-[#49454F]/40 bg-[#141218] py-12 px-6 md:px-12 relative z-10 w-full mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/Myicon.png" alt="Logo" className="w-6 h-6 grayscale hover:grayscale-0 transition-all opacity-70" />
          <span className="text-[#938F99] font-bold">AlgoCommit</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center text-[#938F99] text-sm">
           <Link to="/about" className="hover:text-[#E6E1E5]">About</Link>
           <Link to="/docs" className="hover:text-[#E6E1E5]">Documentation</Link>
           <Link to="/pricing" className="hover:text-[#E6E1E5]">Pricing</Link>
        </div>
        <div className="text-[#938F99] text-sm text-center md:text-left">
          © 2026 Pabitra Sahoo. Released under Apache License 2.0.
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/Pabitra-Sahoo/AlgoCommit.git" className="text-[#938F99] hover:text-[#E6E1E5] transition-colors"><FaGithub className="text-xl" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
