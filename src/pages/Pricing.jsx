import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaBug, FaCommentAlt, FaUsers, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Pricing() {
  const sections = [
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
      ],
      buttonText: "Download Now",
      link: "/",
      cta: "Primary"
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
      ],
      buttonText: "Open an Issue",
      link: "https://github.com/Pabitra-Sahoo/AlgoCommit/issues",
      cta: "Secondary"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">The <span className="text-[#D0BCFF]">Community</span> Plan</h1>
        <p className="text-[#938F99] text-xl max-w-2xl mx-auto">
          We don't sell your data. We don't charge for tools that help you grow. We just ask for your feedback.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {sections.map((section, idx) => (
          <div key={idx} className="glass p-10 rounded-[32px] border border-white/5 flex flex-col hover:border-[#D0BCFF]/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
               <div className="text-3xl">{section.icon}</div>
               <div className="text-[10px] uppercase font-black tracking-widest text-[#D0BCFF]">{section.name}</div>
            </div>
            <h2 className="text-3xl font-black text-white mb-4">{section.title}</h2>
            <p className="text-[#CAC4D0] mb-8 leading-relaxed">{section.description}</p>
            
            <ul className="space-y-4 mb-12 flex-1">
              {section.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-[#938F99]">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#D0BCFF]"></div>
                   {f}
                </li>
              ))}
            </ul>

            {section.cta === "Primary" ? (
              <button className="bg-[#D0BCFF] text-[#381E72] py-4 rounded-full font-black text-lg hover:bg-[#EADDFF] transition-all active:scale-95 shadow-[0_10px_20px_rgba(208,188,255,0.2)]">
                {section.buttonText}
              </button>
            ) : (
              <a 
                href={section.link} 
                target="_blank" 
                rel="noreferrer"
                className="glass border border-white/10 py-4 rounded-full font-black text-lg text-center hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                {section.buttonText} <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Community Proof Section */}
      <div className="mt-24 text-center glass p-12 rounded-[40px] border border-[#D0BCFF]/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D0BCFF] to-transparent"></div>
        <FaUsers className="text-5xl text-[#D0BCFF] mx-auto mb-6 opacity-30" />
        <h2 className="text-3xl font-black mb-4">Built in Public</h2>
        <p className="text-[#CAC4D0] max-w-2xl mx-auto text-lg leading-relaxed mb-8">
          AlgoCommit is a passion project. If you like the extension, consider giving us a star on GitHub—it helps us reach more developers like you.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
           <a href="https://github.com/Pabitra-Sahoo/AlgoCommit" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 font-bold">
              <FaGithub /> Star on GitHub
           </a>
           <a href="https://twitter.com/search?q=%23AlgoCommit" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-3 rounded-xl bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 transition-all border border-[#1DA1F2]/30 text-[#1DA1F2] font-bold">
              Follow Build Journey
           </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Pricing;
