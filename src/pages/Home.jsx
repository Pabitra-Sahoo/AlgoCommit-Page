import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaSyncAlt, FaShieldAlt, FaChartLine, FaTerminal, FaCode, 
  FaCheckCircle, FaLaptopCode, FaGlobe, FaChevronRight, FaLock, FaChevronLeft,
  FaFire, FaTrophy, FaCog, FaHistory, FaCheck, FaTrash, FaSignOutAlt, FaRocket, 
  FaEdit, FaRegClock, FaLayerGroup, FaSearch, FaTwitter, FaLinkedin, FaBug, FaDatabase, FaCommentAlt, FaShareAlt, FaChevronDown, FaQuestionCircle, FaChrome
} from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from 'react-icons/si';
import { CHROME_STORE_URL, GITHUB_REPO_URL } from '../constants/links';


const SUPPORTED_PLATFORMS = [
  {
    name: 'LeetCode',
    color: '#FFA116',
    icon: <SiLeetcode className="text-[28px] text-[#FFA116]" />
  },
  {
    name: 'Codeforces',
    color: '#1F8ACB',
    icon: <SiCodeforces className="text-[28px] text-[#1F8ACB]" />
  },
  {
    name: 'GeeksforGeeks',
    color: '#2F8D46',
    icon: <SiGeeksforgeeks className="text-[28px] text-[#2F8D46]" />
  }
];

const EXTENDED_PLATFORMS = [...SUPPORTED_PLATFORMS, ...SUPPORTED_PLATFORMS, ...SUPPORTED_PLATFORMS, ...SUPPORTED_PLATFORMS];

const FAQS = [
  {
    question: "Is my GitHub token secure?",
    answer: "Yes, absolutely. Syncode stores your GitHub token locally in your browser's secure storage. We have no backend servers, and all API calls are made directly from your browser to GitHub."
  },
  {
    question: "Does it support private repositories?",
    answer: "Yes! You can choose any repository you own, public or private. As long as your GitHub token has the necessary permissions, Syncode will sync your solutions securely."
  },
  {
    question: "What happens if I submit multiple solutions to the same problem?",
    answer: "Syncode smartly handles multiple submissions. Depending on your configuration, it will either update the existing solution file or append a new version, preserving all your attempts without cluttering your repository."
  },
  {
    question: "Is Syncode free to use?",
    answer: "Yes, Syncode is completely free to use. We built this tool to help developers automate their proof-of-work seamlessly."
  },
  {
    question: "Can we track questions manually?",
    answer: "Yes we can add questions manually in analytics hub using Manual syncer. There you just need to add all the details, code, and submit. That's it."
  }
];

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-[20px] bg-[#1A1A1E]/80 overflow-hidden mb-4 transition-colors hover:border-[#D0BCFF]/20 shadow-lg">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
      >
        <span className="font-bold text-lg md:text-xl text-white/90 pr-4">{faq.question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
           <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
             <FaChevronDown className="text-[#D0BCFF] opacity-70 text-sm" />
           </div>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-[#938F99] leading-relaxed md:text-lg">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InteractiveDemo() {
  const [step, setStep] = useState(1);
  const [isSynced, setIsSynced] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleNextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleSync = () => {
    if (isSynced || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsSynced(true);
      setIsAnimating(false);
    }, 1200);
  };

  const resetJourney = () => {
    setStep(1);
    setIsSynced(false);
    setIsAnimating(false);
  };

  const weeks = Array.from({ length: 16 });
  const days = Array.from({ length: 7 });

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <section id="see-it-in-action" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 overflow-hidden border-t border-white/5">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D0BCFF]/10 border border-[#D0BCFF]/20 text-[#D0BCFF] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          <FaGlobe /> The Journey
        </div>
        <h2 className="text-3xl md:text-5xl font-black">See It In <span className="text-[#b8f5a6]">Action</span>.</h2>
      </div>

      {/* Progress Bar */}
      <div className="max-w-3xl mx-auto mb-10 flex items-center justify-between relative px-2">
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-white/5 -z-10"></div>
        <div 
          className="absolute left-4 top-1/2 -translate-y-1/2 h-0.5 bg-[#D0BCFF] -z-10 transition-all duration-500" 
          style={{ width: `calc(${((step > 4 ? 4 : step - 1) / 4) * 100}% - 32px)` }}
        ></div>
        {[1, 2, 3, 4, 5].map((s) => (
          <div 
            key={s} 
            className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-black transition-all duration-300 ${
              step >= s ? 'bg-[#D0BCFF] text-[#381E72] shadow-[0_0_15px_rgba(208,188,255,0.5)]' : 'bg-[#1A1A1E] text-white/30 border border-white/10'
            }`}
          >
            {step > s ? <FaCheck /> : s}
          </div>
        ))}
      </div>

      {/* Flexible Height Container */}
      <div className="w-full max-w-5xl mx-auto glass rounded-[24px] md:rounded-[40px] border border-white/5 p-3 sm:p-6 md:p-12 relative overflow-hidden min-h-[500px] lg:min-h-[650px] flex flex-col items-center justify-center py-8 lg:py-12">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#D0BCFF]/5 blur-[120px] pointer-events-none"></div>
        
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full max-w-md bg-[#1A1A1E] rounded-3xl border border-white/10 p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-2xl relative z-10"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#381E72]/30 rounded-2xl md:rounded-[28px] border border-[#D0BCFF]/20 flex items-center justify-center mb-6 md:mb-8 shadow-inner">
                <FaGithub className="text-3xl md:text-4xl text-[#D0BCFF] opacity-90" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-2 md:mb-3 leading-tight">Connect GitHub</h3>
              <p className="text-[#938F99] text-xs md:text-sm mb-8 md:mb-10 leading-relaxed px-2 md:px-4">Authorize with GitHub to allow Syncode to automatically push your accepted solutions.</p>
              
              <button 
                onClick={handleNextStep}
                className="w-full bg-[#D0BCFF] text-[#381E72] py-3 md:py-4 rounded-xl font-black text-base md:text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(208,188,255,0.2)]"
              >
                <FaGithub className="text-xl md:text-2xl" /> Login with GitHub
              </button>
              <p className="text-[9px] md:text-[10px] text-white/20 mt-4 md:mt-6 uppercase tracking-[0.2em] font-black italic flex items-center gap-2">
                <FaShieldAlt className="text-[9px] md:text-[10px]" /> Secure OAuth 2.0
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full max-w-xl bg-[#1A1A1E] rounded-3xl border border-white/10 p-5 md:p-10 shadow-2xl relative z-10"
            >
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-white/5">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#b8f5a6]/10 text-[#b8f5a6] flex items-center justify-center text-lg md:text-xl">
                   <FaDatabase />
                 </div>
                 <div>
                   <h3 className="text-xl md:text-2xl font-black text-white">Repository Setup</h3>
                   <p className="text-[#938F99] text-xs md:text-sm mt-1">Where should we save your solutions?</p>
                 </div>
               </div>

               <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                  <div className="space-y-2 md:space-y-3">
                     <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Select Target Repository</label>
                     <div className="w-full bg-[#252529] rounded-xl border border-[#D0BCFF]/30 p-3 md:p-5 text-base md:text-lg font-mono flex justify-between items-center cursor-pointer hover:border-[#D0BCFF]/60 transition-colors">
                        <span>My-DSA-Journey</span>
                        <FaChevronDown className="text-white/30 text-xs md:text-sm" />
                     </div>
                  </div>
                  <div className="bg-[#b8f5a6]/5 border border-[#b8f5a6]/10 rounded-xl p-3 md:p-4 flex gap-3 md:gap-4 items-start">
                     <FaCheckCircle className="text-[#b8f5a6] mt-0.5 shrink-0 text-sm md:text-base" />
                     <p className="text-xs md:text-sm text-[#b8f5a6]/80 leading-relaxed">Syncode has access to this repository. All pushed code will be neatly organized into folders automatically.</p>
                  </div>
               </div>
               
               <button 
                 onClick={handleNextStep}
                 className="w-full bg-[#D0BCFF] text-[#381E72] py-3 md:py-4 rounded-xl font-black text-base md:text-lg shadow-[0_10px_30px_rgba(208,188,255,0.2)] hover:bg-[#EADDFF] transition-all hover:scale-[1.01] active:scale-[0.99]"
               >
                  Link Repository & Continue
               </button>
            </motion.div>
          )}

          {/* STEP 3 & 4: SOLVE & SYNC */}
          {(step === 3 || step === 4) && (
            <motion.div 
              key="step34"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-4 md:gap-8 relative z-10"
            >
              {/* Left: Code Editor Mock */}
              <div className="w-full lg:w-[55%] bg-[#1A1A1E] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative z-20">
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#F2B8B5]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFA116]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#b8f5a6]"></div>
                  <span className="ml-1 md:ml-2 text-[10px] md:text-xs font-mono text-white/40">solution.py</span>
                </div>
                <div className="p-2 md:p-6 font-mono text-[10px] md:text-sm leading-relaxed overflow-x-auto text-[#CAC4D0] flex-1">
                  <div className="text-[#D0BCFF]">class <span className="text-white">Solution</span>:</div>
                  <div className="pl-2 md:pl-4">
                    <span className="text-[#F2B8B5]">def</span> <span className="text-[#b8f5a6]">twoSum</span>(self, nums: List[int], target: int) -&gt; List[int]:
                    <div className="pl-2 md:pl-4 text-white/30 italic"># Time Complexity: O(n)</div>
                    <div className="pl-2 md:pl-4 mt-1 md:mt-2">seen = {'{}'}</div>
                    <div className="pl-2 md:pl-4">
                      <span className="text-[#F2B8B5]">for</span> i, num <span className="text-[#F2B8B5]">in</span> enumerate(nums):
                      <div className="pl-2 md:pl-4">
                        diff = target - num<br/>
                        <span className="text-[#F2B8B5]">if</span> diff <span className="text-[#F2B8B5]">in</span> seen:<br/>
                        <div className="pl-2 md:pl-4"><span className="text-[#F2B8B5]">return</span> [seen[diff], i]</div>
                        seen[num] = i
                      </div>
                    </div>
                    <div className="pl-2 md:pl-4 mt-1 md:mt-2"><span className="text-[#F2B8B5]">return</span> []</div>
                  </div>
                </div>
                <div className="p-3 md:p-4 border-t border-white/5 bg-white/[0.02] flex justify-end">
                  <button 
                    onClick={() => {
                      if(step === 3) handleNextStep();
                      handleSync();
                    }}
                    disabled={isSynced || isAnimating}
                    className={`px-4 py-2 md:px-8 md:py-3 rounded-xl font-black text-xs md:text-base flex items-center gap-1 md:gap-2 transition-all shadow-lg ${
                      isSynced 
                        ? 'bg-[#1A1A1E] text-[#b8f5a6] border border-[#b8f5a6]/30 cursor-default'
                        : isAnimating
                          ? 'bg-[#D0BCFF]/20 text-[#D0BCFF] border border-[#D0BCFF]/30 cursor-wait'
                          : 'bg-[#D0BCFF] text-[#381E72] hover:bg-[#EADDFF] shadow-[0_0_20px_rgba(208,188,255,0.3)] hover:scale-105 active:scale-95'
                    }`}
                  >
                    {isSynced ? (
                      <><FaCheck /> Pushed to GitHub</>
                    ) : isAnimating ? (
                      <><FaSyncAlt className="animate-spin" /> Committing...</>
                    ) : (
                      <><FaCode /> Submit Solution</>
                    )}
                  </button>
                </div>
              </div>

              {/* Animation Layer */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30">
                <AnimatePresence>
                  {isAnimating && (
                     <motion.div 
                       initial={{ opacity: 0, x: -100, y: 50, scale: 0.5 }}
                       animate={{ 
                         opacity: [0, 1, 1, 0], 
                         x: [-100, 0, 150, 300], 
                         y: [50, 0, -50, -100],
                         scale: [0.5, 1, 1, 0.5]
                       }}
                       transition={{ duration: 1.2, ease: "easeInOut" }}
                       className="text-5xl text-[#b8f5a6] filter drop-shadow-[0_0_25px_#b8f5a6]"
                     >
                        <FaDatabase />
                     </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-full lg:w-[45%] flex flex-col gap-3 md:gap-6 relative z-20 min-w-0">
                 {/* Folder View Mock */}
                 <div className="flex-1 bg-[#1A1A1E] rounded-2xl border border-white/10 p-3 md:p-5 shadow-xl font-mono text-[11px] md:text-[13px] flex flex-col justify-center">
                   <div className="text-white/40 mb-2 md:mb-3 pb-2 md:pb-3 border-b border-white/5 uppercase tracking-widest font-bold text-[8px] md:text-[10px] flex items-center gap-2">
                     <FaGithub /> My-DSA-Journey
                   </div>
                   <div className="space-y-1.5 md:space-y-2 text-[#CAC4D0]">
                      <div className="flex items-center gap-2">
                         <span className="text-[#FFA116]">📁 LeetCode</span>
                      </div>
                      <div className="pl-3 md:pl-4 space-y-1.5 md:space-y-2 relative before:content-[''] before:absolute before:left-[5px] md:before:left-1.5 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
                         <div className="flex items-center gap-2 relative">
                            <div className="absolute -left-[8px] md:-left-[11px] top-1/2 w-1.5 md:w-2 h-px bg-white/10"></div>
                            <span className="text-[#b8f5a6]">📁 Easy</span>
                         </div>
                         {/* Dynamic Folder Appears */}
                         <AnimatePresence>
                           {(isSynced || isAnimating) && (
                             <motion.div 
                               initial={{ opacity: 0, height: 0, x: -10 }}
                               animate={{ opacity: 1, height: 'auto', x: 0 }}
                               transition={{ delay: 0.8 }}
                               className="pl-3 md:pl-4 space-y-1 relative before:content-[''] before:absolute before:left-[5px] md:before:left-1.5 before:top-0 before:bottom-2 before:w-px before:bg-white/10"
                             >
                               <div className="flex items-center gap-2 relative text-white/90 font-bold">
                                  <div className="absolute -left-[8px] md:-left-[11px] top-1/2 w-1.5 md:w-2 h-px bg-white/10"></div>
                                  📁 0001-Two-Sum
                               </div>
                               <div className="pl-3 md:pl-4 space-y-1">
                                  <div className="flex items-center gap-2 text-[#D0BCFF] relative">
                                    <div className="absolute -left-[8px] md:-left-[11px] top-1/2 w-1.5 md:w-2 h-px bg-white/10"></div>
                                    <span className="opacity-80">📜</span> solution.py
                                  </div>
                                  <div className="flex items-center gap-2 text-white/50 relative">
                                    <div className="absolute -left-[8px] md:-left-[11px] top-1/2 w-1.5 md:w-2 h-px bg-white/10"></div>
                                    <span className="opacity-80 text-sm md:text-lg leading-none">📄</span> README.md
                                  </div>
                               </div>
                             </motion.div>
                           )}
                         </AnimatePresence>
                      </div>
                   </div>
                 </div>

                 {/* GitHub Graph Mock */}
                 <div className="bg-[#1A1A1E] rounded-2xl border border-white/10 p-3 md:p-5 shadow-xl">
                    <div className="flex justify-between items-center mb-3 md:mb-4 text-[8px] md:text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">
                      <span>{isSynced ? '1,024' : '1,023'} Contributions</span>
                      <span>2026</span>
                    </div>
                    
                    <div className="flex gap-1 md:gap-1.5 overflow-hidden justify-end">
                       {weeks.slice(0, 10).map((_, weekIdx) => (
                         <div key={weekIdx} className="flex flex-col gap-1 md:gap-1.5">
                            {days.map((_, dayIdx) => {
                               const isExisting = (weekIdx * 7 + dayIdx) % 11 === 0 || (weekIdx * 7 + dayIdx) % 17 === 0 || (weekIdx * 7 + dayIdx) % 5 === 0;
                               const isTarget = weekIdx === 9 && dayIdx === 3;
                               
                               let bgColor = 'bg-white/5';
                               if (isExisting && !isTarget) bgColor = 'bg-[#b8f5a6]/40';
                               
                               return (
                                 <motion.div 
                                   key={dayIdx}
                                   animate={isTarget && isSynced ? {
                                     backgroundColor: '#b8f5a6',
                                     scale: [1, 1.4, 1],
                                     boxShadow: ['0 0 0px #b8f5a6', '0 0 20px #b8f5a6', '0 0 10px #b8f5a6']
                                   } : {}}
                                   transition={{ duration: 0.5, delay: isTarget && isSynced ? 1.0 : 0 }}
                                   className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 rounded-sm ${isTarget && !isSynced ? 'bg-white/10 outline outline-1 outline-white/20' : bgColor}`}
                                 />
                               );
                            })}
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Explicit Next Action */}
                 <AnimatePresence>
                   {isSynced && (
                     <motion.div 
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       className="flex flex-col items-center justify-center mt-1 md:mt-2"
                     >
                       <FaChevronDown className="text-[#b8f5a6] animate-bounce text-lg md:text-xl drop-shadow-[0_0_10px_#b8f5a6] mb-1 md:mb-2" />
                       <button 
                         onClick={handleNextStep}
                         className="bg-gradient-to-r from-[#b8f5a6] to-[#98e586] text-[#1A1A1E] px-6 py-2.5 md:px-8 md:py-3 rounded-full font-black shadow-[0_0_20px_rgba(184,245,166,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 md:gap-2 text-sm md:text-base"
                       >
                         Open Dashboard UI <FaChevronRight className="text-xs md:text-sm" />
                       </button>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* STEP 5: DASHBOARD STATS */}
          {step === 5 && (
            <motion.div 
              key="step5"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full max-w-md md:max-w-xl bg-[#1D1B22] rounded-3xl border border-white/5 p-4 md:p-6 shadow-2xl relative z-10 flex flex-col gap-3 md:gap-4 font-mono text-xs md:text-sm"
            >
               {/* Header */}
               <div className="flex items-center justify-between mb-1 md:mb-2">
                 <div className="flex items-center gap-2 md:gap-3">
                   <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center relative">
                     <img src="/Myicon.png" alt="logo" className="w-full h-full object-contain drop-shadow-md z-10" onError={(e) => e.target.style.display='none'} />
                     <FaShieldAlt className="text-white absolute opacity-20 z-0 text-[10px] md:text-xs" />
                   </div>
                   <h3 className="text-lg md:text-xl font-bold text-white tracking-wide font-sans">Syncode</h3>
                 </div>
                 <div className="flex items-center gap-3 md:gap-4 text-white/70">
                   <FaGithub className="text-lg md:text-xl hover:text-white cursor-pointer" />
                   <FaCog className="text-lg md:text-xl hover:text-white cursor-pointer" />
                 </div>
               </div>
               
               <div className="h-px w-full bg-white/5 mb-1 md:mb-2"></div>

               {/* Top Stats & Platform */}
               <div className="bg-[#242229] rounded-2xl p-3 md:p-5 border border-white/5">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                   <div className="flex items-center gap-2 md:gap-3">
                     <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-[#D0BCFF]/30 flex items-center justify-center bg-[#1D1B22]">
                       <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D0BCFF]"></div>
                     </div>
                     <div className="flex items-center gap-2 bg-[#1D1B22] px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-white/5">
                       <FaTwitter className="text-white/50 hover:text-[#1DA1F2] cursor-pointer text-xs md:text-base" />
                       <div className="w-px h-3 bg-white/10"></div>
                       <FaLinkedin className="text-white/50 hover:text-[#0A66C2] cursor-pointer text-xs md:text-base" />
                     </div>
                   </div>
                   <div className="flex items-center gap-1 md:gap-2 font-bold text-white/90 text-[10px] md:text-sm">
                     <FaShieldAlt className="text-white/50 text-[10px] md:text-sm" /> 1,024 Total Solved
                   </div>
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                   <motion.div whileHover={{ scale: 1.05 }} className="bg-[#1A1124] border border-[#D0BCFF]/20 rounded-xl p-2 md:p-3 flex flex-col items-center justify-center gap-1 aspect-square cursor-default">
                     <span className="text-lg md:text-xl font-bold text-white">42</span>
                     <span className="text-[8px] md:text-[10px] text-[#D0BCFF]">Basic</span>
                   </motion.div>
                   <motion.div whileHover={{ scale: 1.05 }} className="bg-[#0D2114] border border-[#b8f5a6]/20 rounded-xl p-2 md:p-3 flex flex-col items-center justify-center gap-1 aspect-square cursor-default">
                     <span className="text-lg md:text-xl font-bold text-white">450</span>
                     <span className="text-[8px] md:text-[10px] text-[#b8f5a6]">Easy</span>
                   </motion.div>
                   <motion.div whileHover={{ scale: 1.05 }} className="bg-[#261E08] border border-[#FFA116]/20 rounded-xl p-2 md:p-3 flex flex-col items-center justify-center gap-1 aspect-square cursor-default">
                     <span className="text-lg md:text-xl font-bold text-white">400</span>
                     <span className="text-[8px] md:text-[10px] text-[#FFA116]">Medium</span>
                   </motion.div>
                   <motion.div whileHover={{ scale: 1.05 }} className="bg-[#2B1113] border border-[#F2B8B5]/20 rounded-xl p-2 md:p-3 flex flex-col items-center justify-center gap-1 aspect-square cursor-default">
                     <span className="text-lg md:text-xl font-bold text-white">132</span>
                     <span className="text-[8px] md:text-[10px] text-[#F2B8B5]">Hard</span>
                   </motion.div>
                 </div>
               </div>

               {/* Middle Stats */}
               <div className="grid grid-cols-2 gap-3 md:gap-4">
                 <motion.div whileHover={{ y: -5 }} className="bg-[#242229] rounded-2xl p-4 md:p-6 border border-white/5 flex flex-col items-center justify-center gap-2 md:gap-3 relative cursor-default hover:border-white/20 transition-colors">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 text-sm md:text-base">
                     <FaCheck />
                   </div>
                   <div className="text-2xl md:text-3xl font-bold text-white">1</div>
                   <div className="text-[10px] md:text-xs text-white/60 font-bold tracking-wider text-center">Today Solved</div>
                 </motion.div>
                 <motion.div whileHover={{ y: -5 }} className="bg-[#242229] rounded-2xl p-4 md:p-6 border border-white/5 flex flex-col items-center justify-center gap-2 md:gap-3 relative cursor-default hover:border-[#FFA116]/30 transition-colors">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FFA116]/10 flex items-center justify-center text-[#FFA116] text-sm md:text-base">
                     <FaFire />
                   </div>
                   <div className="text-2xl md:text-3xl font-bold text-white">18</div>
                   <div className="text-[10px] md:text-xs text-white/60 font-bold tracking-wider mb-1">Day Streak</div>
                   <div className="text-[8px] md:text-[10px] text-white/30 absolute bottom-2 md:bottom-3">Highest: 45</div>
                 </motion.div>
               </div>

               {/* Activity Flow */}
               <div className="bg-[#242229] rounded-2xl p-3 md:p-5 border border-white/5">
                 <div className="flex justify-between items-center mb-3 md:mb-4">
                   <div className="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold text-white/50 tracking-wider">
                     ACTIVITY FLOW <FaSyncAlt className="text-[8px] md:text-[10px]" />
                   </div>
                   <div className="flex items-center gap-1 md:gap-2 text-[8px] md:text-[10px] bg-white/5 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-white/40 border border-white/5">
                     <FaTrophy /> 6 Months
                   </div>
                 </div>
                 <div className="flex gap-1 overflow-hidden justify-end">
                   {Array.from({length: 30}).map((_, i) => (
                     <div key={i} className={`w-2 h-4 md:w-3 md:h-5 rounded-[2px] ${i === 29 ? 'bg-[#b8f5a6]' : i % 7 === 0 ? 'bg-[#b8f5a6]/40' : 'bg-white/5'}`}></div>
                   ))}
                 </div>
               </div>

               <div className="mt-1 md:mt-2 flex justify-center">
                 <button 
                   onClick={resetJourney}
                   className="text-[#D0BCFF] text-xs uppercase tracking-widest font-black hover:underline opacity-80 hover:opacity-100 flex items-center gap-2"
                 >
                    <FaHistory /> Restart Journey
                 </button>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function DeepDiveShowcase() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10 space-y-32">
       {/* Section Header */}
       <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D0BCFF]/10 border border-[#D0BCFF]/20 text-[#D0BCFF] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
             <FaChartLine /> Power User Features
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">Beyond Auto-Sync</h2>
          <p className="text-lg text-[#938F99] max-w-2xl mx-auto">Explore the tools built to help you track your progress, find past solutions, and fill the gaps.</p>
       </div>

       {/* Analytics Hub */}
       <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6">
             <div className="text-[#b8f5a6] text-4xl mb-4"><FaChartLine /></div>
             <h3 className="text-3xl font-black">Analytics Hub</h3>
             <p className="text-[#938F99] leading-relaxed text-lg">
               Visualize your consistency. Our beautiful dashboard tracks your daily streak, total solves across platforms, and assigns you an Engineering Rank based on your hard work.
             </p>
             <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-white/80"><FaCheckCircle className="text-[#b8f5a6]" /> Heatmap Calendar</li>
                <li className="flex items-center gap-3 text-white/80"><FaCheckCircle className="text-[#b8f5a6]" /> Multi-Platform Breakdown</li>
             </ul>
          </div>
          <div className="flex-1 w-full relative">
             <div className="absolute inset-0 bg-[#b8f5a6]/5 blur-3xl rounded-full"></div>
             <div className="glass p-6 md:p-8 rounded-[32px] border border-white/5 relative shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                   <div className="font-bold text-white/80">Streak</div>
                   <div className="bg-[#b8f5a6]/20 text-[#b8f5a6] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                      <FaFire /> 14 Days
                   </div>
                </div>
                {/* Mock Heatmap */}
                <div className="grid grid-cols-7 gap-1 md:gap-1.5 mb-6 max-w-full overflow-hidden">
                   {Array.from({length: 28}).map((_, i) => (
                      <div key={i} className={`h-3 md:h-4 rounded-[2px] ${i % 5 === 0 ? 'bg-white/5' : i % 3 === 0 ? 'bg-[#b8f5a6]/40' : 'bg-[#b8f5a6]'}`}></div>
                   ))}
                </div>
                <div className="flex items-center gap-3 md:gap-4 bg-white/5 p-3 md:p-4 rounded-2xl border border-white/5">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D0BCFF]/20 text-[#D0BCFF] rounded-xl flex items-center justify-center text-lg md:text-xl shrink-0">
                      <FaTrophy />
                   </div>
                   <div className="overflow-hidden">
                      <div className="text-[10px] md:text-xs text-[#938F99] uppercase font-bold tracking-widest truncate">Current Rank</div>
                      <div className="text-white font-black text-base md:text-lg truncate">Senior Engineer</div>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Search Page */}
       <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6">
             <div className="text-[#D0BCFF] text-4xl mb-4"><FaSearch /></div>
             <h3 className="text-3xl font-black">Search Your Solves</h3>
             <p className="text-[#938F99] leading-relaxed text-lg">
               Looking for that dynamic programming trick you used 3 months ago? Instantly search through your entire synced repository right from the extension.
             </p>
             <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-white/80"><FaCheckCircle className="text-[#D0BCFF]" /> Fuzzy Title Matching</li>
                <li className="flex items-center gap-3 text-white/80"><FaCheckCircle className="text-[#D0BCFF]" /> Copy Code with 1 Click</li>
             </ul>
          </div>
          <div className="flex-1 w-full relative">
             <div className="absolute inset-0 bg-[#D0BCFF]/5 blur-3xl rounded-full"></div>
             <div className="glass p-6 rounded-[32px] border border-white/5 relative shadow-2xl space-y-4">
                <div className="bg-[#1A1A1E] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                   <FaSearch className="text-white/30" />
                   <div className="text-white/70 text-sm">Two sum...</div>
                </div>
                <div className="space-y-2">
                   <div className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/5 transition-colors flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                         <SiLeetcode className="text-[#FFA116] shrink-0" />
                         <span className="font-bold text-xs md:text-sm text-white/90 truncate">0001-Two-Sum</span>
                      </div>
                      <span className="text-[8px] md:text-[10px] text-[#b8f5a6] bg-[#b8f5a6]/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded shrink-0 ml-2">EASY</span>
                   </div>
                   <div className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/5 transition-colors flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                         <SiGeeksforgeeks className="text-[#2F8D46] shrink-0" />
                         <span className="font-bold text-xs md:text-sm text-white/90 truncate">Two Sum - Pair with Given Sum</span>
                      </div>
                      <span className="text-[8px] md:text-[10px] text-[#FFA116] bg-[#FFA116]/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded shrink-0 ml-2">MEDIUM</span>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Manual Sync */}
       <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6">
             <div className="text-[#F2B8B5] text-4xl mb-4"><FaEdit /></div>
             <h3 className="text-3xl font-black">Manual Syncer</h3>
             <p className="text-[#938F99] leading-relaxed text-lg">
               Solved a problem offline or on an unsupported platform? No problem. The Manual Syncer lets you paste your code, add details, and push it directly to your repository.
             </p>
             <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-white/80"><FaCheckCircle className="text-[#F2B8B5]" /> Custom Metadata</li>
                <li className="flex items-center gap-3 text-white/80"><FaCheckCircle className="text-[#F2B8B5]" /> Same pristine folder structure</li>
             </ul>
          </div>
          <div className="flex-1 w-full relative">
             <div className="absolute inset-0 bg-[#F2B8B5]/5 blur-3xl rounded-full"></div>
             <div className="glass p-6 rounded-[32px] border border-white/5 relative shadow-2xl space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <div className="bg-[#1A1A1E] border border-white/10 rounded-xl p-3 text-[10px] md:text-xs text-white/50 flex justify-between items-center">
                      <span className="truncate pr-2">Select Platform</span> <FaChevronDown className="text-[8px] md:text-[10px] shrink-0" />
                   </div>
                   <div className="bg-[#1A1A1E] border border-white/10 rounded-xl p-3 text-[10px] md:text-xs text-white/50 flex justify-between items-center">
                      <span className="truncate pr-2">Difficulty</span> <FaChevronDown className="text-[8px] md:text-[10px] shrink-0" />
                   </div>
                </div>
                <div className="bg-[#1A1A1E] border border-white/10 rounded-xl p-3 text-xs text-white/50">
                   Problem URL or Title
                </div>
                <div className="bg-[#1A1A1E] border border-white/10 rounded-xl p-4 h-24 text-xs font-mono text-[#D0BCFF]/70 relative">
                   <div className="absolute top-2 right-2 text-[10px] bg-white/5 px-2 py-0.5 rounded text-white/30">Code Editor</div>
                   class Solution {'{\n  // Paste your code here...\n}'}
                </div>
                <div className="bg-[#F2B8B5] text-[#3D1414] font-black text-center py-3 rounded-xl cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all">
                   Sync Manually
                </div>
             </div>
          </div>
       </div>

    </section>
  );
}

function Home() {

  const features = useMemo(() => [
    { title: 'Multi-Platform', desc: 'Seamlessly sync from LeetCode, GFG, and Codeforces.', icon: <FaGlobe /> },
    { title: 'Zero-Latency Sync', desc: 'Queue-based background syncing ensures your UI updates instantly without rate-limit errors.', icon: <FaSyncAlt /> },
    { title: 'Atomic Commit Engine', desc: 'Powered by an advanced Git Data API engine, preventing cluttered commit histories and collisions.', icon: <FaDatabase /> },
    { title: 'Structured Folders', desc: 'Auto-organized repositories by difficulty and platform.', icon: <FaLayerGroup /> },
    { title: 'Progress Tracking', desc: 'Minimal dashboard for real-time streak and solve tracking.', icon: <FaChartLine /> },
    { title: 'Engineering Rank', desc: 'Climb the ranks from Intern to CEO. Unlock Milestones and Trophies as you build your streak.', icon: <FaTrophy /> },
    { title: 'Quick Social Share', desc: 'Share your daily stats and green squares directly to LinkedIn and X.', icon: <FaShareAlt /> },
    { title: 'Security & Privacy', desc: 'Your code and tokens are handled securely with OAuth and direct GitHub API calls. No third-party servers see your code.', icon: <FaShieldAlt /> }
  ], []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full text-[#E6E1E5] bg-transparent">
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
            <a href={CHROME_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#D0BCFF] text-[#381E72] px-8 py-4 rounded-full font-black text-lg hover:scale-[1.02] transition-transform active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-3">
              <FaChrome className="text-[26px]" />
              Add to Browser
            </a>
            <a href="#features" className="bg-white/5 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 border border-white/5 backdrop-blur-md">
              <FaLayerGroup className="text-xl" /> See Features
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

      {/* Supported Platforms Marquee */}
      <section className="py-8 border-y border-white/5 bg-[#1A1A1E]/30 relative overflow-hidden flex flex-col items-center">
         <div className="text-[10px] text-white/30 font-black uppercase tracking-[0.3em] mb-6">Supported Platforms</div>
         
         {/* Marquee Container */}
         <div className="w-full relative flex overflow-hidden">
            {/* Gradient Masks for smooth fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#141218] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#141218] to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-marquee flex gap-12 md:gap-24 items-center">
               {EXTENDED_PLATFORMS.map((platform, i) => (
                  <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
                     {platform.icon}
                     <span className="text-xl font-bold tracking-tight text-[#CAC4D0] whitespace-nowrap">{platform.name}</span>
                  </div>
               ))}
            </div>
         </div>
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

      {/* Clean Repo Preview Section */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#b8f5a6]/10 border border-[#b8f5a6]/20 text-[#b8f5a6] text-[10px] font-black uppercase tracking-[0.2em] mb-2">
              <FaCheck /> Auto-Organized
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              A repository you can <span className="text-[#b8f5a6]">actually show off.</span>
            </h2>
            <p className="text-[#938F99] text-lg leading-relaxed">
              No more messy, unstructured commits. Syncode automatically categorizes your solutions by platform and difficulty, creating a pristine, professional folder structure that hiring managers will love to see.
            </p>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <div className="bg-[#1A1A1E] border border-white/10 rounded-2xl p-6 shadow-2xl font-mono text-sm overflow-hidden relative group hover:border-white/20 transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D0BCFF] to-[#b8f5a6] opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5 text-white/50">
                <FaDatabase className="text-sm" /> 
                <span className="font-bold tracking-wide">My-DSA-Repo</span>
              </div>
              
              <div className="space-y-3 text-[#CAC4D0]">
                {/* LeetCode Folder */}
                <div className="flex items-center gap-2 group/folder cursor-default">
                  <FaChevronDown className="text-[10px] text-white/30 group-hover/folder:text-white/70 transition-colors" />
                  <span className="text-[#FFA116] font-bold">📁 LeetCode</span>
                </div>
                
                {/* LeetCode -> Easy */}
                <div className="pl-6 space-y-2 relative before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
                  <div className="flex items-center gap-2 group/folder cursor-default relative">
                    <div className="absolute -left-[17px] top-1/2 w-3 h-px bg-white/10"></div>
                    <FaChevronDown className="text-[10px] text-white/30 group-hover/folder:text-white/70 transition-colors" />
                    <span className="text-[#b8f5a6] font-bold">📁 Easy</span>
                  </div>
                  
                  {/* LeetCode -> Easy -> Question Folder */}
                  <div className="pl-6 space-y-1 relative before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
                    <div className="flex items-center gap-2 group/folder cursor-default relative py-1">
                      <div className="absolute -left-[17px] top-1/2 w-3 h-px bg-white/10"></div>
                      <FaChevronDown className="text-[10px] text-white/30 group-hover/folder:text-white/70 transition-colors" />
                      <span className="text-white/90 font-medium">📁 0001-Two-Sum</span>
                    </div>
                    
                    {/* Files inside Question Folder */}
                    <div className="pl-6 space-y-1 relative before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-4 before:w-px before:bg-white/10">
                      <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-1 -ml-2 rounded transition-colors cursor-pointer relative">
                        <div className="absolute -left-[17px] top-1/2 w-3 h-px bg-white/10"></div>
                        <span className="opacity-80">📜</span> <span className="text-[#D0BCFF]">solution.java</span>
                      </div>
                      <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-1 -ml-2 rounded transition-colors cursor-pointer relative">
                        <div className="absolute -left-[17px] top-1/2 w-3 h-px bg-white/10"></div>
                        <span className="opacity-80 text-lg leading-none">📄</span> <span className="text-white/60">question.md</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Another Question Folder (Collapsed) */}
                  <div className="pl-6 space-y-1 relative before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-4 before:w-px before:bg-white/10 mt-2">
                    <div className="flex items-center gap-2 group/folder cursor-default relative py-1">
                      <div className="absolute -left-[17px] top-1/2 w-3 h-px bg-white/10"></div>
                      <FaChevronRight className="text-[10px] text-white/30 group-hover/folder:text-white/70 transition-colors" />
                      <span className="text-white/90 font-medium">📁 0020-Valid-Parentheses</span>
                    </div>
                  </div>
                </div>

                {/* LeetCode -> Hard (Collapsed) */}
                <div className="pl-6 space-y-2 mt-2 relative before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-6 before:w-px before:bg-white/10">
                  <div className="flex items-center gap-2 group/folder cursor-default relative">
                    <div className="absolute -left-[17px] top-1/2 w-3 h-px bg-white/10"></div>
                    <FaChevronRight className="text-[10px] text-white/30 group-hover/folder:text-white/70 transition-colors" />
                    <span className="text-[#F2B8B5] font-bold">📁 Hard</span>
                  </div>
                </div>

                {/* GeeksForGeeks Folder */}
                <div className="flex items-center gap-2 group/folder cursor-default mt-4">
                  <FaChevronRight className="text-[10px] text-white/30 group-hover/folder:text-white/70 transition-colors" />
                  <span className="text-[#2F8D46] font-bold">📁 GeeksForGeeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InteractiveDemo />
      <DeepDiveShowcase />

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D0BCFF]/10 border border-[#D0BCFF]/20 text-[#D0BCFF] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <FaQuestionCircle /> FAQ
           </div>
           <h2 className="text-3xl md:text-5xl font-black mb-4">Got Questions?</h2>
           <p className="text-lg text-[#938F99]">Everything you need to know about Syncode.</p>
        </div>
        <div className="flex flex-col">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
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
               Syncode is a community project. Found a bug on a platform? Have a feature request? Let's build it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
               <a href="https://github.com/Pabitra-Sahoo/AlgoCommit-Page/issues/new?template=bug_report.yml&title=Bug:%20" target="_blank" rel="noreferrer" className="bg-[#F2B8B5] text-[#3D1414] px-10 py-5 rounded-full font-black text-lg hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3">
                  <FaBug /> Report a Bug
               </a>
               <a href="https://github.com/Pabitra-Sahoo/AlgoCommit-Page/issues/new?template=feature_request.yml&title=Feature:%20" target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-3">
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
               "Syncode was born out of a simple frustration: solving hundreds of problems on platforms like LeetCode, but having a 'dead' GitHub contribution graph."
             </p>
             <div className="h-px w-12 bg-[#D0BCFF]/30 mb-8 mx-auto"></div>
             <p className="text-base md:text-lg text-[#D0BCFF]/90 leading-relaxed font-medium">
               We believe that every line of code you write for DSA is a proof of your problem-solving journey. Our mission is to automate the bridge between your competitive programming practice and your professional engineering portfolio.
             </p>
          </div>

          <div className="pt-8 mb-12">
            <a href={CHROME_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#D0BCFF] text-[#381E72] px-12 py-5 rounded-full font-black text-xl shadow-[0_0_40px_rgba(208,188,255,0.3)] hover:scale-105 transition-all active:scale-95 cursor-pointer inline-flex items-center justify-center">
              Download Syncode Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
