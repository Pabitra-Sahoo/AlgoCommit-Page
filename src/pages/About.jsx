import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaBug, FaCommentAlt, FaUsers, FaGithub, FaExternalLinkAlt, FaCode, FaShieldAlt, FaRocket, FaStar, FaTwitter, FaEnvelope } from 'react-icons/fa';

function About() {
  const communityCards = [
    {
      name: "Community First",
      title: "100% Free & Open Source",
      description: "AlgoCommit is built for developers, by developers. No subscription, no paywalls, no tracking.",
      icon: <FaHeart className="text-[#F2B8B5]" />,
      features: [
        "Sync with LeetCode, GFG, & Codeforces",
        "Atomic GitHub Commits",
        "Private Repository Storage",
        "Daily Streak Dashboard",
        "Engineering Ranks"
      ]
    },
    {
      name: "Help Us Grow",
      title: "Feedback & Bug Reports",
      description: "Found a bug on a platform? Have a feature request? Join the building process.",
      icon: <FaBug className="text-[#D0BCFF]" />,
      features: [
        "Direct feedback to developer",
        "Report Platform UI changes",
        "Suggest new platform support",
        "Contribute to the codebase",
        "Priority feature voting"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      {/* Hero / Motto Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Built by <span className="text-[#D0BCFF]">Developer</span> <br/> for Developer.
        </h1>
        <div className="w-24 h-1 bg-[#D0BCFF] mx-auto rounded-full mb-10 opacity-30"></div>
        <div className="glass p-10 md:p-12 rounded-[48px] border border-white/5 max-w-3xl mx-auto relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <FaCode className="text-8xl" />
           </div>
           <p className="text-xl md:text-2xl text-[#CAC4D0] leading-relaxed italic font-medium">
             "AlgoCommit was born from a simple frustration: there wasn't an easy way to save and organize DSA questions; it was not easy to track and had high complexity. So we built one."
           </p>
        </div>
      </div>

      {/* Community Section (From Pricing) */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-24">
        {communityCards.map((card, idx) => (
          <div key={idx} className="glass p-10 rounded-[40px] border border-white/5 flex flex-col hover:border-[#D0BCFF]/30 transition-all duration-300 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="text-3xl">{card.icon}</div>
               <div className="text-[10px] uppercase font-black tracking-widest text-[#D0BCFF]">{card.name}</div>
            </div>
            <h2 className="text-3xl font-black text-white mb-4">{card.title}</h2>
            <p className="text-[#938F99] mb-8 leading-relaxed">{card.description}</p>
            
            <ul className="space-y-4 flex-1">
              {card.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-[#E6E1E5]/80 font-medium">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#D0BCFF]"></div>
                   {f}
                </li>
              ))}
            </ul>

            {idx === 0 && (
              <div className="flex justify-end mt-8 transition-transform active:scale-95">
                <a href="https://github.com/Pabitra-Sahoo/AlgoCommit" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F2B8B5]/10 text-[#F2B8B5] border border-[#F2B8B5]/30 hover:bg-[#F2B8B5]/20 transition-all text-xs font-black uppercase tracking-tight shadow-lg shadow-[#F2B8B5]/5">
                   <FaStar className="text-[12px] text-yellow-400" /> Star our Project
                </a>
              </div>
            )}

            {idx === 1 && (
              <div className="flex justify-end gap-3 mt-8">
                <a href="https://github.com/Pabitra-Sahoo/AlgoCommit/issues/new?template=bug_report.yml&title=Bug:%20" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F2B8B5]/10 text-[#F2B8B5] border border-[#F2B8B5]/20 hover:bg-[#F2B8B5]/20 transition-all text-xs font-black uppercase tracking-tight">
                   <FaBug className="text-[10px]" /> Bug
                </a>
                <a href="https://github.com/Pabitra-Sahoo/AlgoCommit/issues/new?template=feature_request.yml&title=Feature:%20" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D0BCFF]/10 text-[#D0BCFF] border border-[#D0BCFF]/20 hover:bg-[#D0BCFF]/20 transition-all text-xs font-black uppercase tracking-tight">
                   <FaRocket className="text-[10px]" /> Feedback
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Meet the Developer Section */}
      <div className="text-center glass p-16 rounded-[56px] border border-[#D0BCFF]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#D0BCFF]/5 blur-[120px] rounded-full"></div>
        <div className="relative">
           <div className="mb-10 text-center">
              <h2 className="text-3xl font-black mb-2">The Brains Behind the Code</h2>
              <p className="text-[#938F99] uppercase tracking-[0.2em] text-[10px] font-black">Building in Public</p>
           </div>
           <div className="flex flex-col items-center">
              <div className="relative group mb-8">
                 <div className="absolute inset-0 bg-[#D0BCFF] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                 <img src="https://github.com/Pabitra-Sahoo.png" alt="Pabitra Sahoo" className="relative w-32 h-32 rounded-full border-4 border-[#D0BCFF]/30 shadow-2xl object-cover transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-black">Pabitra Sahoo</h3>
              <p className="text-[#D0BCFF] font-bold mb-6">Full Stack Developer | DSA Enthusiast</p>
              <p className="text-[#938F99] max-w-xl mx-auto leading-relaxed mb-10 text-lg">
                Passionate about creating tools that empower developers. AlgoCommit is my journey of turning a personal pain point into a community-driven solution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <a href="https://github.com/Pabitra-Sahoo" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 font-black text-[#CAC4D0] active:scale-95 shadow-sm">
                   <FaGithub /> GitHub
                 </a>
                 <a href="mailto:sahoopabitra596@gmail.com" className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-[#F2B8B5]/10 hover:bg-[#F2B8B5]/20 transition-all border border-[#F2B8B5]/20 font-black text-[#F2B8B5] active:scale-95 shadow-sm">
                   <FaEnvelope /> Gmail
                 </a>
                 <a href="https://x.com/Oceaneyes_02" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-[#D0BCFF]/10 hover:bg-[#D0BCFF]/20 transition-all border border-[#D0BCFF]/20 font-black text-[#D0BCFF] active:scale-95 shadow-sm">
                   <FaTwitter /> Twitter / X
                 </a>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
