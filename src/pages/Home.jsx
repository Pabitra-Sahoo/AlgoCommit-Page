import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaSyncAlt, FaShieldAlt, FaChartLine, FaTerminal, FaCode, 
  FaCheckCircle, FaLaptopCode, FaGlobe, FaChevronRight, FaLock, FaChevronLeft,
  FaFire, FaTrophy, FaCog, FaHistory, FaCheck, FaTrash, FaSignOutAlt, FaRocket, 
  FaEdit, FaRegClock, FaLayerGroup, FaSearch, FaTwitter, FaLinkedin, FaBug, FaDatabase, FaCommentAlt
} from 'react-icons/fa';
import { CHROME_STORE_URL, GITHUB_REPO_URL } from '../constants/links';

const UI_MOCKS = [
  {
    id: 'dashboard',
    title: 'Main Dashboard',
    description: 'Real-time stats and activity flow.',
    content: (
      <div className="w-full h-full bg-[#1A1A1E] p-6 md:p-8 flex flex-col border border-white/5 relative overflow-hidden text-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[#141218] border border-[#D0BCFF]/30">
               <span className="w-1.5 h-1.5 rounded-full bg-[#D0BCFF] animate-pulse shadow-[0_0_8px_#D0BCFF]"></span>
            </div>
            <span className="font-bold text-white text-[13px]">AlgoCommit</span>
          </div>
          <div className="flex items-center gap-3 opacity-40">
            <FaGithub className="text-base" />
            <FaCog className="text-base" />
          </div>
        </div>

        <div className="bg-[#252529] rounded-[22px] p-5 mb-4 border border-white/5 relative shadow-xl">
          <div className="flex justify-between items-center mb-4">
             <div className="w-9 h-9 rounded-full bg-[#381E72] flex items-center justify-center border border-[#D0BCFF]/30">
                <div className="w-5 h-5 rounded-full bg-[#D0BCFF]/20 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#D0BCFF]"></div>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <div className="flex bg-[#381E72]/20 px-2.5 py-1 rounded-lg border border-[#D0BCFF]/10 gap-2.5">
                   <FaTwitter className="text-white/30 text-[10px]" />
                   <div className="w-px h-2.5 bg-white/10"></div>
                   <FaLinkedin className="text-white/30 text-[10px]" />
                </div>
                <div className="flex items-center gap-1.5">
                   <FaShieldAlt className="text-[#D0BCFF] opacity-30 text-xs" />
                   <span className="text-xl font-black text-white">8</span>
                   <span className="text-[9px] text-white/30 uppercase font-black tracking-widest">Total Solved</span>
                </div>
             </div>
          </div>
          <div className="h-1.5 w-full bg-[#381E72] rounded-full flex overflow-hidden">
             <div className="w-[40%] bg-[#FFA116] h-full"></div>
             <div className="w-[60%] bg-[#b8f5a6] h-full"></div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
             {['Basic', 'Easy', 'Medium', 'Hard'].map((label, i) => (
                <div key={i} className="bg-[#1A1A1E] p-2 rounded-xl border border-white/5 text-center">
                   <div className={`text-base font-black ${i === 1 ? 'text-[#b8f5a6]' : i === 2 ? 'text-[#FFA116]' : i === 3 ? 'text-[#F2B8B5]' : 'text-[#D0BCFF]'}`}>
                      {[1, 3, 2, 2][i]}
                   </div>
                   <div className="text-[8px] font-black opacity-30 uppercase tracking-tighter">{label}</div>
                </div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[#252529] rounded-[22px] p-4 border border-white/5 flex flex-col items-center">
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-1">
                <FaCheckCircle className="text-white/20 text-sm" />
             </div>
             <div className="text-2xl font-black text-white">0</div>
             <div className="text-[9px] text-white/30 font-bold uppercase tracking-wider">Today Solved</div>
          </div>
          <div className="bg-[#252529] rounded-[22px] p-4 border border-white/5 flex flex-col items-center">
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-1">
                <FaFire className="text-white/20 text-sm" />
             </div>
             <div className="text-2xl font-black text-white">0</div>
             <div className="text-[9px] text-white/30 font-bold uppercase tracking-wider">Day Streak</div>
          </div>
        </div>

        <div className="bg-[#252529] rounded-[22px] p-5 border border-white/5 flex-1 min-h-[90px] flex flex-col justify-between">
           <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Activity Flow</span>
              <div className="bg-white/5 px-2 py-0.5 rounded-full text-[8px] text-white/20 flex items-center gap-1">
                 <FaTrophy className="opacity-30" /> 0 Months
              </div>
           </div>
           <div className="flex gap-1 overflow-hidden">
              {Array.from({length: 22}).map((_, i) => (
                 <div key={i} className={`w-3 h-3 rounded-sm shrink-0 ${i === 18 || i === 19 ? 'bg-[#b8f5a6]' : 'bg-white/5'}`}></div>
              ))}
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Customize notifications.',
    content: (
      <div className="w-full h-full bg-[#1A1A1E] p-8 md:p-10 flex flex-col border border-white/5 text-sm">
         <div className="flex justify-between items-center mb-8">
            <div className="flex flex-col gap-1">
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Connected Repo</span>
               <span className="text-lg font-black text-[#D0BCFF]">username/Repository name</span>
            </div>
            <FaEdit className="text-white/20 hover:text-white transition-colors cursor-pointer" />
         </div>

         <div className="flex items-center gap-3 opacity-40 mb-8 border-b border-white/5 pb-4">
            <FaSyncAlt className="text-[11px] animate-spin-slow" />
            <span className="text-[11px] font-medium italic">Last synced: just now</span>
         </div>

         <div className="space-y-6 flex-1">
            <div className="space-y-3">
               <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">Daily Reminder</div>
               <div className="flex gap-2.5">
                  <div className="flex-1 bg-[#252529] rounded-[16px] border border-white/5 p-4 flex justify-between items-center">
                     <span className="font-mono text-white/80">21:00</span>
                     <FaRegClock className="opacity-30" />
                  </div>
                  <button className="bg-[#D0BCFF] text-[#381E72] px-6 py-2 rounded-[16px] font-black hover:bg-[#EADDFF] transition-all">Save</button>
               </div>
            </div>

            <div className="pt-4 space-y-3">
               <button className="w-full flex items-center gap-4 text-[#F2B8B5] hover:bg-[#F2B8B5]/5 p-4 rounded-xl transition-all border border-transparent hover:border-[#F2B8B5]/10 group">
                  <FaTrash className="opacity-30 group-hover:opacity-100 transition-opacity" />
                  <span className="font-black">Reset App Data</span>
               </button>
               <button className="w-full flex items-center gap-4 text-[#F2B8B5] hover:bg-[#F2B8B5]/5 p-4 rounded-xl transition-all border border-transparent hover:border-[#F2B8B5]/10 group">
                  <FaSignOutAlt className="opacity-30 group-hover:opacity-100 transition-opacity" />
                  <span className="font-black">Disconnect GitHub</span>
               </button>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 'auth',
    title: 'Authentication',
    description: 'Secure GitHub link.',
    content: (
      <div className="w-full h-full bg-[#1A1A1E] p-8 md:p-10 flex flex-col items-center justify-center border border-white/5 text-center">
         <div className="w-16 h-16 bg-[#381E72]/30 rounded-3xl border border-[#D0BCFF]/20 flex items-center justify-center mb-6">
           <FaGithub className="text-3xl text-[#D0BCFF] opacity-80" />
         </div>
         <h3 className="text-2xl font-black mb-2 leading-tight">Connect GitHub</h3>
         <p className="text-[#938F99] text-[13px] mb-8 max-w-[240px] leading-relaxed">Authorize with GitHub to auto-sync your coding solutions.</p>
         
         <div className="w-full max-w-[260px] bg-[#252529] rounded-[18px] p-1 flex mb-8 border border-white/5 relative">
             <div className="flex-1 bg-white/5 text-white/80 rounded-[14px] py-3 font-black text-[10px] uppercase tracking-wider text-center">Quick Login</div>
             <div className="flex-1 text-white/20 py-3 font-black text-[10px] uppercase tracking-wider text-center">Use Token</div>
         </div>

         <button className="w-full max-w-[260px] bg-[#D0BCFF] text-[#381E72] py-4 rounded-full font-black text-base flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(208,188,255,0.2)]">
            <FaGithub className="text-xl" /> Login with GitHub
         </button>
         <p className="text-[10px] text-white/20 mt-4 uppercase tracking-[0.2em] font-black italic flex items-center gap-2">
           <FaLock className="text-[9px]" /> No token needed
         </p>
      </div>
    )
  },
  {
    id: 'setup',
    title: 'Repo Setup',
    description: 'Environment creation.',
    content: (
      <div className="w-full h-full bg-[#1A1A1E] p-8 md:p-10 flex flex-col border border-white/5 shadow-2xl">
         <h3 className="text-2xl font-black mb-8 text-white">Repository Setup</h3>
         <div className="mb-10 bg-white/5 p-6 rounded-[22px] border border-white/5">
            <p className="text-[#938F99] text-sm">Hello, <span className="text-[#D0BCFF] font-black">username</span>.</p>
            <p className="text-[#938F99] mt-2 text-sm leading-relaxed">Where should we secure your solutions?</p>
         </div>

         <div className="space-y-6 flex-1">
            <div className="space-y-2.5">
               <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2">Target Repository</div>
               <div className="w-full bg-[#252529] rounded-[20px] border border-[#D0BCFF]/30 p-5 text-lg font-mono">
                  Repository name<span className="w-px h-5 bg-[#D0BCFF] animate-pulse ml-0.5 inline-block align-middle"></span>
               </div>
            </div>
            
            <button className="w-full bg-[#D0BCFF] text-[#381E72] py-5 rounded-full font-black text-lg shadow-[0_10px_30px_rgba(208,188,255,0.2)] mt-auto">
               Link Existing Repository
            </button>
         </div>
      </div>
    )
  }
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      z: -100
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      z: 0
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      z: -100
    })
  };

  const handleNext = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev < UI_MOCKS.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : UI_MOCKS.length - 1));
  };

  const features = useMemo(() => [
    { title: 'Multi-Platform', desc: 'Seamlessly sync from LeetCode, GFG, and Codeforces.', icon: <FaGlobe /> },
    { title: 'Cross-Platform', desc: 'Access your extension across different devices. Your data is never lost as we use GitHub as the backend and database.', icon: <FaLaptopCode /> },
    { title: 'Structured Folders', desc: 'Auto-organized repositories by difficulty and platform.', icon: <FaLayerGroup /> },
    { title: 'Question Tracking', desc: 'Automated problem metadata and description capture.', icon: <FaSearch /> },
    { title: 'Progress Tracking', desc: 'Minimal dashboard for real-time streak and solve tracking.', icon: <FaChartLine /> },
    { title: 'Engineering Rank', desc: 'Grow your rank from Intern to CEO as you solve more.', icon: <FaTrophy /> },
    { title: 'Atomic Commits', desc: 'Clean, descriptive pushes for every single solution.', icon: <FaDatabase /> },
    { title: 'Security & Privacy', desc: 'Your code and tokens are handled securely with OAuth and direct GitHub API calls. No third-party servers see your code.', icon: <FaShieldAlt /> }
  ], []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#141218] text-[#E6E1E5]">
      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-[#D0BCFF]/10 border border-[#D0BCFF]/20 text-[#D0BCFF] text-[10px] font-black uppercase tracking-[0.2em] mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D0BCFF] animate-pulse"></span>
            Sync. Track. Level Up.
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
            Sync Solutions <br/> to <span className="text-[#D0BCFF] relative inline-block">
              GitHub
              <svg className="absolute w-[105%] h-3 -bottom-1 -left-[2.5%] text-[#D0BCFF]/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2,6 Q50,2 98,6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span> <br/> Instantly
          </h1>
          <p className="text-base md:text-xl text-[#CAC4D0] leading-relaxed max-w-lg mx-auto md:mx-0 opacity-90 font-medium">
            Automatically capture your solutions from LeetCode, GeeksForGeeks, & Codeforces. Build your commit graph, and track your streak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href={CHROME_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#D0BCFF] text-[#381E72] px-8 py-4 rounded-full font-black text-lg shadow-[0_0_30px_rgba(208,188,255,0.25)] hover:scale-[1.02] transition-transform active:scale-[0.98] cursor-pointer inline-flex items-center justify-center">
              Add to Browser
            </a>
            <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" className="bg-white/5 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 border border-white/5">
              <FaGithub className="text-xl" /> Repository
            </a>
          </div>
        </motion.div>

        {/* Dynamic Hero Animation Section */}
        <motion.div 
           initial={{ opacity: 0, x: 15 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="flex-1 w-full max-w-sm relative"
        >
          <div className="absolute inset-0 bg-[#D0BCFF]/5 blur-[120px] rounded-full"></div>
          <div className="relative glass border border-white/5 rounded-[40px] p-8 shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-12 relative">
               <div className="w-14 h-14 bg-[#FFA116]/5 rounded-2xl flex items-center justify-center text-3xl text-[#FFA116] border border-[#FFA116]/10">
                  <FaCode />
               </div>
               <div className="flex-1 h-px mx-6 bg-white/5 relative">
                  <motion.div 
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-[1.5px] bg-[#D0BCFF] shadow-[0_0_10px_#D0BCFF]"
                  />
                  <FaSyncAlt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D0BCFF]/20 animate-spin-slow" />
               </div>
               <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl text-white border border-white/5">
                  <FaGithub />
               </div>
            </div>

            <div className="space-y-4">
               <div className="bg-[#1A1A1E] rounded-[24px] p-5 border border-white/5 space-y-3 shadow-inner">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b8f5a6] animate-pulse"></div>
                    <span className="text-[9px] text-[#b8f5a6] font-black uppercase tracking-widest">Active Sync</span>
                  </div>
                  <div className="font-mono text-[10px] space-y-1.5 opacity-50">
                    <p>&gt; Validating problem metadata...</p>
                    <p>&gt; Bundling atomic code push...</p>
                    <motion.p 
                      animate={{ opacity: [0, 1] }}
                      transition={{ duration: 0.3, repeat: Infinity, repeatType: "mirror" }}
                      className="text-[#D0BCFF] font-black"
                    >
                      &gt; COMMITTING_TO_REPO_
                    </motion.p>
                  </div>
               </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
                <div className="px-6 py-2.5 bg-[#b8f5a6]/10 border border-[#b8f5a6]/10 text-[#b8f5a6] rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                   <FaCheckCircle /> Sync Successful
                </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Heading & Section */}
      <section id="features" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D0BCFF]/10 border border-[#D0BCFF]/20 text-[#D0BCFF] text-[10px] font-black uppercase tracking-[0.2em] mb-10">
              <FaLayerGroup /> Features
           </div>
           <h3 className="text-4xl md:text-6xl font-black italic">Sync, Track, Level Up.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {features.map((f, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -6 }}
               className="glass p-8 rounded-[40px] border border-white/5 hover:border-[#D0BCFF]/20 transition-all flex flex-col gap-6"
             >
                <div className="w-12 h-12 rounded-[20px] bg-white/5 border border-white/5 flex items-center justify-center text-2xl text-[#D0BCFF] shrink-0 shadow-md">
                   {f.icon}
                </div>
                <div>
                   <h4 className="text-xl font-black mb-3 leading-tight">{f.title}</h4>
                   <p className="text-[#938F99] leading-relaxed text-sm opacity-80">{f.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* See It In Action (UI Carousel) */}
      <section id="see-it-in-action" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black">See it in <span className="text-[#D0BCFF]">Action</span>.</h2>
        </div>

        <div className="relative">
          {/* Dynamic Content Header */}
          <div className="text-center mb-2 min-h-[40px] flex flex-col justify-center">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeSlide}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-3"
               >
                 <h3 className="text-2xl md:text-3xl font-black text-[#D0BCFF] tracking-tight">{UI_MOCKS[activeSlide].title}</h3>
                 <p className="text-[#938F99] text-base md:text-lg max-w-xl mx-auto leading-relaxed px-4">
                   {UI_MOCKS[activeSlide].description}
                 </p>
               </motion.div>
             </AnimatePresence>
          </div>

          {/* Carousel Viewport with Navigation */}
          <div className="relative flex items-center justify-center gap-0 md:gap-8 h-[550px]">
            {/* Left Ghost Card */}
            <div className="hidden lg:block absolute left-[20%] scale-[0.75] opacity-20 blur-[1px] -translate-x-1/2 pointer-events-none z-0">
               <div className="w-[370px] aspect-[4.5/6.5] bg-[#1A1A1E] rounded-[44px] border border-white/5 overflow-hidden">
                  {UI_MOCKS[(activeSlide - 1 + UI_MOCKS.length) % UI_MOCKS.length].content}
               </div>
            </div>

            {/* Left Arrow */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 lg:left-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1A1A1E] border border-white/10 flex items-center justify-center text-[#D0BCFF] text-xl md:text-2xl hover:bg-white/10 hover:border-[#D0BCFF]/30 transition-all active:scale-90 z-30 shadow-2xl group"
              aria-label="Previous Slide"
            >
              <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Main Display Viewport */}
            <div className="relative z-20">
              <div className="w-[300px] sm:w-[370px] aspect-[4.5/6.5] relative rounded-[44px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] bg-[#1A1A1E] transition-transform duration-500 hover:scale-[1.01]">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.4 }
                    }}
                    className="w-full h-full absolute inset-0"
                  >
                    {UI_MOCKS[activeSlide].content}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-[#D0BCFF]/10 blur-[100px] -z-10 rounded-full opacity-40"></div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={handleNext}
              className="absolute right-0 lg:right-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1A1A1E] border border-white/10 flex items-center justify-center text-[#D0BCFF] text-xl md:text-2xl hover:bg-white/10 hover:border-[#D0BCFF]/30 transition-all active:scale-90 z-30 shadow-2xl group"
              aria-label="Next Slide"
            >
              <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Right Ghost Card */}
            <div className="hidden lg:block absolute right-[20%] scale-[0.75] opacity-20 blur-[1px] translate-x-1/2 pointer-events-none z-0">
               <div className="w-[370px] aspect-[4.5/6.5] bg-[#1A1A1E] rounded-[44px] border border-white/5 overflow-hidden">
                  {UI_MOCKS[(activeSlide + 1) % UI_MOCKS.length].content}
               </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {UI_MOCKS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  setDirection(idx > activeSlide ? 1 : -1);
                  setActiveSlide(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeSlide === idx 
                  ? 'w-10 bg-[#D0BCFF] shadow-[0_0_10px_rgba(208,188,255,0.5)]' 
                  : 'w-2.5 bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Feedback Section */}
      <section id="feedback" className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
         <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.99 }}
            className="p-16 md:p-20 rounded-[64px] bg-[#1A1A1E] border border-white/5 shadow-2xl text-center relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 p-10">
               <FaBug className="text-7xl text-[#F2B8B5] opacity-5 -rotate-12" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D0BCFF]/10 border border-[#D0BCFF]/20 text-[#D0BCFF] text-[10px] font-black uppercase tracking-[0.2em] mb-10">
               <FaCommentAlt /> Feedback
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Help us build <br/> the future.</h2>
            <p className="text-lg text-[#938F99] mb-12 max-w-2xl mx-auto leading-relaxed">
               AlgoCommit is a community project. Found a bug on a platform? Have a feature request? Let's build it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
               <a href="https://github.com/Pabitra-Sahoo/AlgoCommit/issues/new?template=bug_report.yml&title=Bug:%20" target="_blank" rel="noreferrer" className="bg-[#F2B8B5] text-[#3D1414] px-10 py-5 rounded-full font-black text-lg hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3">
                  <FaBug /> Report a Bug
               </a>
               <a href="https://github.com/Pabitra-Sahoo/AlgoCommit/issues/new?template=feature_request.yml&title=Feature:%20" target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-3">
                  <FaRocket /> Feedback
               </a>
            </div>
         </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto relative z-10 border-t border-white/5">
        <div className="text-center space-y-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Ready to paint your <span className="text-[#b8f5a6]">green squares?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#CAC4D0] opacity-90 leading-relaxed font-medium transition-all">
              Join developers who are automating their DSA journey and building an undeniable proof-of-work portfolio.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 p-8 md:p-12 rounded-[48px] border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-[#D0BCFF]/20 transition-all shadow-2xl">
             <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D0BCFF]/5 blur-[80px] rounded-full group-hover:bg-[#D0BCFF]/10 transition-all"></div>
             <p className="text-base md:text-lg text-[#938F99] leading-relaxed italic mb-8">
               "AlgoCommit was born out of a simple frustration: solving hundreds of problems on platforms like LeetCode, but having a 'dead' GitHub contribution graph."
             </p>
             <div className="h-px w-12 bg-[#D0BCFF]/30 mb-8 mx-auto"></div>
             <p className="text-base md:text-lg text-[#D0BCFF]/90 leading-relaxed font-medium">
               We believe that every line of code you write for DSA is a proof of your problem-solving journey. Our mission is to automate the bridge between your competitive programming practice and your professional engineering portfolio.
             </p>
          </div>

          <div className="pt-8 mb-12">
            <a href={CHROME_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#D0BCFF] text-[#381E72] px-12 py-5 rounded-full font-black text-xl shadow-[0_0_40px_rgba(208,188,255,0.3)] hover:scale-105 transition-all active:scale-95 cursor-pointer inline-flex items-center justify-center">
              Download AlgoCommit Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
