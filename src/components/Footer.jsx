import React from 'react';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GITHUB_REPO_URL, X_URL, GMAIL_URL, CHROME_STORE_URL } from '../constants/links';

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0D0B10] py-16 px-6 md:px-12 relative z-10 w-full mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/Myicon.png" alt="Logo" className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#E6E1E5] leading-none">Syncode</span>
              <span className="text-[10px] text-[#938F99] font-medium leading-tight group-hover:text-[#D0BCFF] transition-colors">formerly AlgoCommit</span>
            </div>
          </Link>
          <p className="text-[#938F99] text-sm max-w-xs leading-relaxed">
            Automating the bridge between your competitive programming and your professional portfolio.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a href="https://www.producthunt.com/products/syncode?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-syncode" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105 duration-300">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1170752&theme=dark&t=1781433348101" alt="Syncode - Auto-Sync DSA Solutions to Github (AlgoCommit) | Product Hunt" width="250" height="54" />
            </a>
            
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#212121] hover:bg-[#2A2A2A] border border-[#303030] transition-all hover:scale-105 duration-300 rounded-lg px-4 w-[250px] h-[54px] shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" alt="Chrome" className="w-8 h-8" />
              <div className="flex flex-col text-left justify-center pb-0.5">
                <span className="text-[9px] text-[#938F99] leading-tight font-semibold uppercase tracking-wider mb-0.5">Available in the</span>
                <span className="text-[14px] font-bold text-[#E6E1E5] leading-none">Chrome Web Store</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-10 md:gap-16">
           <div className="flex flex-col gap-4">
              <span className="text-[#E6E1E5] font-black text-xs uppercase tracking-widest">Product</span>
              <Link to="/about" className="text-[#938F99] hover:text-[#E6E1E5] transition-colors text-sm">About</Link>
              <Link to="/docs" className="text-[#938F99] hover:text-[#E6E1E5] transition-colors text-sm">Docs</Link>
           </div>
           <div className="flex flex-col gap-4">
              <span className="text-[#E6E1E5] font-black text-xs uppercase tracking-widest">Community</span>
              <a href={GMAIL_URL} target="_blank" rel="noreferrer" className="text-[#938F99] hover:text-[#F2B8B5] transition-colors text-sm">Report Bug</a>
              <a href={GMAIL_URL} target="_blank" rel="noreferrer" className="text-[#938F99] hover:text-[#D0BCFF] transition-colors text-sm">Feedback</a>
           </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6 border-t border-white/5 pt-10 md:pt-0 md:border-0 w-full md:w-auto">
           <div className="flex gap-5">

              <a href={X_URL} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#938F99] hover:text-[#D0BCFF] hover:bg-[#D0BCFF]/10 transition-all">
                 <FaTwitter className="text-lg" />
              </a>
              <a href={GMAIL_URL} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#938F99] hover:text-[#F2B8B5] hover:bg-[#F2B8B5]/10 transition-all">
                 <FaEnvelope className="text-lg" />
              </a>
           </div>
           <div className="text-left md:text-right">
              <p className="text-[#938F99] text-[10px] uppercase tracking-widest font-black opacity-30 mb-2">
                Privacy First: Direct GitHub sync. No intermediate servers.
              </p>
              <p className="text-[#938F99] text-[12px] font-medium opacity-60">
                © 2026 Pabitra Sahoo. All rights reserved.
              </p>
           </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
