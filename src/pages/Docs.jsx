import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaPuzzlePiece, FaUserSecret, FaRocket } from 'react-icons/fa';

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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <div className="flex items-center justify-center gap-4 mb-12">
        <FaBook className="text-4xl text-[#D0BCFF]" />
        <h1 className="text-4xl md:text-5xl font-black">Documentation</h1>
      </div>

      <div className="space-y-12">
        {sections.map((section, idx) => (
          <div key={idx} className="glass p-8 rounded-[24px] border border-[#49454F]/50">
            <div className={`flex items-center gap-3 mb-6 text-2xl font-bold ${section.color}`}>
              {section.icon}
              <h2>{section.title}</h2>
            </div>
            <ul className="space-y-4">
              {section.content.map((item, iIdx) => (
                <li key={iIdx} className="flex gap-4 text-[#E6E1E5] leading-relaxed">
                  <span className="text-[#49454F] font-bold">{iIdx + 1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-16 glass p-6 rounded-xl border border-[#D0BCFF]/30 text-center">
         <p className="text-[#D0BCFF] font-bold">Have a technical issue or feature request?</p>
         <a href="https://github.com/Pabitra-Sahoo/AlgoCommit/issues" className="text-sm text-[#938F99] hover:underline block mt-2">Open an issue on GitHub</a>
      </div>
    </motion.div>
  );
}

export default Docs;
