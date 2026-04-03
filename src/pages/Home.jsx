import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaSyncAlt, FaShieldAlt, FaChartLine, FaTerminal, FaCode, 
  FaCheckCircle, FaLaptopCode, FaGlobe, FaChevronRight, FaLock, FaChevronLeft,
  FaFire, FaTrophy, FaCog, FaHistory
} from 'react-icons/fa';

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const uiSlides = [
    {
      title: "Main Dashboard",
      subtitle: "Your daily coding vitals at a glance.",
      component: (
        <div className="w-full bg-[#1A1A1A] rounded-xl border border-[#333] p-6 shadow-inner text-left h-full">
          <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-bold">AlgoCommit <span className="text-xs text-[#b8f5a6] border border-[#b8f5a6]/50 rounded px-2 py-1 ml-2">v1.2.0</span></div>
            <img src="/Myicon.png" alt="icon" className="w-8 h-8" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center border border-white/5">
              <div className="text-3xl font-black text-white">128</div>
              <div className="text-[10px] text-[#938F99] uppercase tracking-widest font-bold mt-1">Total Solved</div>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center border border-white/5">
              <div className="text-3xl font-black text-[#F2B8B5] flex items-center justify-center gap-1"><FaFire className="text-xl" /> 14</div>
              <div className="text-[10px] text-[#938F99] uppercase tracking-widest font-bold mt-1">Day Streak</div>
            </div>
          </div>
          <div className="bg-[#D0BCFF]/10 rounded-xl p-4 border border-[#D0BCFF]/20">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[#D0BCFF] uppercase font-bold tracking-widest">Current Rank</div>
                <div className="text-lg font-black text-white">Senior Architect</div>
              </div>
              <FaTrophy className="text-2xl text-[#D0BCFF]" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Real-time Sync",
      subtitle: "Watch atoms turn into commits.",
      component: (
        <div className="w-full bg-[#1A1A1A] rounded-xl border border-[#333] p-6 shadow-inner text-left h-full flex flex-col">
          <div className="text-sm font-bold text-[#E6E1E5] mb-4 flex items-center gap-2">
            <FaHistory /> Recent Activity
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto pr-2 scrollbar-hide">
            {[
              { p: 'Two Sum', time: '2m ago', plat: 'LC', status: 'Synced' },
              { p: 'Binary Search', time: '1h ago', plat: 'GFG', status: 'Synced' },
              { p: 'Watermelon', time: '3h ago', plat: 'CF', status: 'Synced' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-[#2A2A2A] p-3 rounded-lg border border-white/5">
                <div className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-bold">{item.plat}</div>
                   <div>
                     <div className="text-xs font-bold">{item.p}</div>
                     <div className="text-[10px] text-[#938F99]">{item.time}</div>
                   </div>
                </div>
                <div className="text-[10px] text-[#b8f5a6] flex items-center gap-1 font-bold">
                   <FaCheckCircle /> {item.status}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 text-[10px] text-[#938F99] flex justify-between">
            <span>Linked: Pabitra-Sahoo/dsa-solves</span>
            <FaGithub />
          </div>
        </div>
      )
    },
    {
      title: "Pro Settings",
      subtitle: "Customize your integration flow.",
      component: (
        <div className="w-full bg-[#1A1A1A] rounded-xl border border-[#333] p-6 shadow-inner text-left h-full">
          <div className="text-sm font-bold text-[#E6E1E5] mb-6 flex items-center gap-2">
             <FaCog /> Settings
          </div>
          <div className="space-y-4">
             <div className="flex items-center justify-between p-3 bg-[#2A2A2A] rounded-lg">
                <div className="text-xs">Daily Reminders</div>
                <div className="w-8 h-4 bg-[#D0BCFF] rounded-full relative">
                   <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-[#381E72] rounded-full"></div>
                </div>
             </div>
             <div className="flex items-center justify-between p-3 bg-[#2A2A2A] rounded-lg">
                <div className="text-xs">Dark Mode Sync</div>
                <div className="w-8 h-4 bg-[#D0BCFF] rounded-full relative">
                   <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-[#381E72] rounded-full"></div>
                </div>
             </div>
             <div className="p-3 bg-[#D0BCFF]/5 border border-[#D0BCFF]/20 rounded-lg">
                <div className="text-[10px] text-[#D0BCFF] uppercase mb-1 font-bold">Connected Repo</div>
                <div className="text-xs font-mono truncate text-[#938F99]">Pabitra-Sahoo/AlgoCommit-Solutions</div>
             </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % uiSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + uiSlides.length) % uiSlides.length);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full glass border border-[#D0BCFF]/30 text-[#D0BCFF] text-xs font-bold uppercase tracking-wider mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#D0BCFF] animate-pulse"></span>
            v1.2.0 is Live
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            DSAs belong on <br/>
            <span className="text-[#D0BCFF] relative whitespace-nowrap">
              GitHub
              <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute w-full h-4 -bottom-3 left-0 text-[#D0BCFF]/30" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              </motion.svg>
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-[#CAC4D0] leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            Don't let your solved problems disappear. Automatically sync LeetCode, GFG & Codeforces solutions to your repositories. One click, infinite green squares.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="bg-[#D0BCFF] text-[#381E72] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#EADDFF] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(208,188,255,0.4)] flex items-center justify-center gap-2 cursor-pointer">
              Add to Chrome <FaChevronRight className="text-sm" />
            </button>
            <a href="https://github.com/Pabitra-Sahoo/AlgoCommit.git" target="_blank" rel="noreferrer" className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-[#49454F] transition-all active:scale-95 flex items-center justify-center gap-3 border border-[#49454F]">
              <FaGithub className="text-xl" /> Open Source
            </a>
          </div>
        </div>

        {/* Dynamic Hero Animation Section */}
        <div className="flex-1 w-full max-w-md relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D0BCFF]/20 to-[#F2B8B5]/10 blur-3xl rounded-full"></div>
          
          <div className="relative glass border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden min-h-[400px] flex flex-col">
            {/* Visual Sync Process */}
            <div className="flex justify-between items-center mb-10">
               <div className="w-12 h-12 bg-[#FFA116]/20 rounded-xl flex items-center justify-center text-2xl text-[#FFA116] border border-[#FFA116]/30">
                  <FaCode />
               </div>
               <div className="flex-1 h-[2px] mx-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5"></div>
                  <motion.div 
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#D0BCFF] to-transparent shadow-[0_0_10px_#D0BCFF]"
                  />
               </div>
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-3xl text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <FaGithub />
               </div>
            </div>

            <div className="space-y-6 flex-1">
               <motion.div 
                 animate={{ opacity: [0.5, 1, 0.5] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="h-4 w-3/4 bg-white/5 rounded-full"
               ></motion.div>
               <div className="bg-[#2A2A2A] rounded-xl p-5 border border-white/10 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#b8f5a6] animate-pulse"></div>
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Live Sync Detection</span>
                  </div>
                  <div className="font-mono text-xs text-[#CAC4D0] space-y-1">
                    <p className="text-[#D0BCFF]">Detecting submission...</p>
                    <p className="opacity-60">Platform: LeetCode</p>
                    <p className="opacity-60">Status: Accepted</p>
                    <motion.p 
                      animate={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                      className="text-[#b8f5a6] mt-2 font-black"
                    >
                      &gt; PUSHING ATOMIC COMMIT_
                    </motion.p>
                  </div>
               </div>
            </div>

            <div className="mt-6 p-4 glass rounded-[20px] border border-[#D0BCFF]/30 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-[#D0BCFF] flex items-center justify-center text-[#381E72] font-black">
                  +1
               </div>
               <div>
                  <div className="text-xs font-bold">GitHub Contribution</div>
                  <div className="text-[10px] text-[#938F99]">Commit created successfully</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* See It In Action (UI Carousel) */}
      <section id="see-it-in-action" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">See It In <span className="text-[#F2B8B5]">Action</span>.</h2>
          <p className="text-[#CAC4D0] max-w-2xl mx-auto text-lg leading-relaxed">
            The professional dashboard every engineer needs. A powerful command center for your DSA journey.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Carousel Controls (Mobile/Left) */}
          <div className="w-full lg:w-1/3 space-y-4">
            {uiSlides.map((slide, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-full text-left p-6 rounded-[24px] transition-all duration-300 border focus:outline-none ${
                  activeSlide === idx 
                  ? 'glass border-[#D0BCFF] bg-[#D0BCFF]/5' 
                  : 'hover:bg-white/5 border-transparent text-[#938F99]'
                }`}
              >
                <h3 className={`text-xl font-bold mb-1 ${activeSlide === idx ? 'text-[#D0BCFF]' : ''}`}>{slide.title}</h3>
                <p className="text-sm opacity-80">{slide.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Carousel Display */}
          <div className="w-full lg:w-2/3 relative flex flex-col items-center">
            <div className="w-full max-w-xl aspect-[4/3] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  {uiSlides[activeSlide].component}
                </motion.div>
              </AnimatePresence>
              
              {/* Floating Buttons */}
              <button onClick={prevSlide} className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors z-20"><FaChevronLeft /></button>
              <button onClick={nextSlide} className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors z-20"><FaChevronRight /></button>
            </div>
            
            <div className="flex gap-3 mt-8">
               {uiSlides.map((_, idx) => (
                 <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-8 bg-[#D0BCFF]' : 'bg-white/20'}`}></div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section id="features" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass p-8 rounded-[32px] border border-white/5 hover:border-[#D0BCFF]/30 transition-all group">
            <div className="w-12 h-12 bg-[#D0BCFF]/10 text-[#D0BCFF] rounded-xl flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-all">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-bold mb-3">Multi-Platform</h3>
            <p className="text-[#938F99] text-sm leading-relaxed">LeetCode, GeeksForGeeks, & Codeforces support. All your brain-power in one repository.</p>
          </div>
          <div className="glass p-8 rounded-[32px] border border-white/5 hover:border-[#F2B8B5]/30 transition-all group">
            <div className="w-12 h-12 bg-[#F2B8B5]/10 text-[#F2B8B5] rounded-xl flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-all">
              <FaTerminal />
            </div>
            <h3 className="text-xl font-bold mb-3">Atomic Pushes</h3>
            <p className="text-[#938F99] text-sm leading-relaxed">No messy commits. We bundle code, readme, and stats into a single atomic push.</p>
          </div>
          <div className="glass p-8 rounded-[32px] border border-white/5 hover:border-[#b8f5a6]/30 transition-all group">
            <div className="w-12 h-12 bg-[#b8f5a6]/10 text-[#b8f5a6] rounded-xl flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-all">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold mb-3">State-of-Mind Privacy</h3>
            <p className="text-[#938F99] text-sm leading-relaxed">No tracking. No databases. Your code touches nothing except your own browser and GitHub.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6 md:px-12 relative z-10 bg-[#211F26]/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl md:text-5xl font-black mb-16">The <span className="text-[#D0BCFF]">3-Minute</span> Setup.</h2>
           <div className="space-y-16 text-left">
              {[
                { s: 1, t: 'Connect GitHub', d: 'Login via our secure stateless OAuth proxy. No keys exposed.' },
                { s: 2, t: 'Link Repository', d: 'Type a repo name. AlgoCommit will create it if it doesn\'t exist.' },
                { s: 3, t: 'Solve & Sync', d: 'Just solve problems. We watch for the "Accepted" signal and sync automatically.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                   <div className="w-16 h-16 rounded-[20px] bg-[#D0BCFF] text-[#381E72] flex items-center justify-center text-3xl font-black shrink-0 shadow-[0_0_20px_rgba(208,188,255,0.3)] group-hover:scale-110 transition-transform">
                      {step.s}
                   </div>
                   <div>
                      <h3 className="text-2xl font-black mb-2">{step.t}</h3>
                      <p className="text-[#938F99] text-lg leading-relaxed">{step.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to build your <br/> <span className="text-[#b8f5a6]">Engineering Portfolio?</span></h2>
        <button className="bg-[#D0BCFF] text-[#381E72] px-12 py-5 rounded-full font-black text-xl hover:bg-[#EADDFF] transition-all hover:scale-105 active:scale-95 shadow-[0_15px_35px_rgba(208,188,255,0.3)]">
           Download AlgoCommit Today
        </button>
      </section>
    </div>
  );
}

export default Home;
