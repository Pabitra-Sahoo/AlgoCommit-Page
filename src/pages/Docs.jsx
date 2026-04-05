import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaPuzzlePiece, FaUserSecret, FaRocket, FaBug } from 'react-icons/fa';

function Docs() {
  const sections = [
    {
      title: "Getting Started",
      icon: <FaRocket />,
      color: "text-[#D0BCFF]",
      content: [
        "Download AlgoCommit from the Chrome Web Store.",
        "Click the extension icon and 'Login with GitHub'.",
        "Enter a name for your repository (e.g., 'my-dsa-solves').",
        "Click 'Create & Link'. You're ready to go!"
      ]
    },
    {
      title: "How Sync Works",
      icon: <FaPuzzlePiece />,
      color: "text-[#b8f5a6]",
      content: [
        "Navigate to any problem on LeetCode, GFG, or Codeforces.",
        "Once your submission is marked as 'Accepted', AlgoCommit intercepts the result.",
        "We fetch your source code and the problem description locally in the browser.",
        "An atomic commit is pushed to your GitHub repo including code, stats, and a custom README."
      ]
    },
    {
      title: "Security & Privacy",
      icon: <FaUserSecret />,
      color: "text-[#F2B8B5]",
      content: [
        "AlgoCommit uses a stateless serverless proxy for OAuth token exchange.",
        "Your GitHub Access Token is stored safely in chrome.storage.local.",
        "We never see your code—the sync happens entirely within your browser.",
        "No middleman databases are used to store your submissions."
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 pt-12 pb-20"
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D0BCFF]/10 border border-[#D0BCFF]/20 text-[#D0BCFF] text-[10px] font-black uppercase tracking-[0.2em] mb-12">
           <FaBook /> Documentation
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">Get Started <br/> with <span className="text-[#D0BCFF]">AlgoCommit</span>.</h1>
      </div>

      <div className="space-y-10">
        {sections.map((section, idx) => (
          <div key={idx} className="glass p-10 rounded-[40px] border border-white/5 hover:border-[#D0BCFF]/20 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-8xl">
               {section.icon}
            </div>
            <div className={`flex items-center gap-5 mb-10 text-2xl md:text-3xl font-black ${section.color}`}>
              <div className="w-14 h-14 rounded-[24px] bg-white/5 border border-white/5 flex items-center justify-center text-2xl shadow-inner">
                {section.icon}
              </div>
              <h2>{section.title}</h2>
            </div>
            <ul className="space-y-8">
              {section.content.map((item, iIdx) => (
                <li key={iIdx} className="flex gap-6 text-[#E6E1E5]/90 leading-relaxed text-lg font-medium">
                   <div className="w-10 h-10 rounded-full bg-[#D0BCFF]/10 text-[#D0BCFF] flex items-center justify-center text-base font-black shrink-0 border border-[#D0BCFF]/20 shadow-md">
                      {iIdx + 1}
                   </div>
                   <span className="pt-1.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-24 glass p-10 md:p-16 rounded-[56px] border border-[#D0BCFF]/20 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[#D0BCFF]/5 blur-[100px] rounded-full"></div>
         <div className="relative">
            <h3 className="text-2xl md:text-3xl font-black mb-4">Have a technical issue?</h3>
            <p className="text-[#938F99] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              AlgoCommit is fully open-source. Found a bug on a platform or have a feature request? Join our building process on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
               <a href="https://github.com/Pabitra-Sahoo/AlgoCommit/issues/new?template=bug_report.yml&title=Bug:%20" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#F2B8B5]/10 text-[#F2B8B5] border border-[#F2B8B5]/20 hover:bg-[#F2B8B5]/20 transition-all font-black text-lg uppercase tracking-tight active:scale-95">
                  <FaBug /> Report a Bug
               </a>
               <a href="https://github.com/Pabitra-Sahoo/AlgoCommit/issues/new?template=feature_request.yml&title=Feature:%20" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#D0BCFF]/10 text-[#D0BCFF] border border-[#D0BCFF]/20 hover:bg-[#D0BCFF]/20 transition-all font-black text-lg uppercase tracking-tight active:scale-95">
                  <FaRocket /> Feedback
               </a>
            </div>
         </div>
      </div>
    </motion.div>
  );
}

export default Docs;
