import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaShieldAlt } from 'react-icons/fa';

function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h1 className="text-4xl md:text-5xl font-black mb-8 text-center">About <span className="text-[#D0BCFF]">AlgoCommit</span></h1>
      
      <div className="glass p-8 rounded-[24px] mb-12 border border-[#49454F]/50">
        <p className="text-lg text-[#CAC4D0] leading-relaxed mb-6">
          AlgoCommit was born out of a simple frustration: solving hundreds of problems on platforms like LeetCode, but having a "dead" GitHub contribution graph.
        </p>
        <p className="text-lg text-[#CAC4D0] leading-relaxed">
          We believe that every line of code you write for DSA is a proof of your problem-solving journey. Our mission is to automate the bridge between your competitive programming practice and your professional engineering portfolio.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#D0BCFF]/10 text-[#D0BCFF] rounded-24 flex items-center justify-center text-3xl mx-auto mb-4">
            <FaCode />
          </div>
          <h3 className="font-bold text-xl mb-2">Automated</h3>
          <p className="text-[#938F99]">Zero manual effort. Click submit, we do the rest.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-[#F2B8B5]/10 text-[#F2B8B5] rounded-24 flex items-center justify-center text-3xl mx-auto mb-4">
            <FaShieldAlt />
          </div>
          <h3 className="font-bold text-xl mb-2">Private</h3>
          <p className="text-[#938F99]">Your code stays between you and GitHub. No middleman.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-[#b8f5a6]/10 text-[#b8f5a6] rounded-24 flex items-center justify-center text-3xl mx-auto mb-4">
            <FaGithub />
          </div>
          <h3 className="font-bold text-xl mb-2">Open Source</h3>
          <p className="text-[#938F99]">Built by the community, for the community.</p>
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Meet the Developer</h2>
        <div className="flex flex-col items-center">
           <img src="https://github.com/Pabitra-Sahoo.png" alt="Pabitra Sahoo" className="w-24 h-24 rounded-full border-4 border-[#D0BCFF] mb-4 shadow-lg" />
           <h3 className="text-xl font-bold">Pabitra Sahoo</h3>
           <p className="text-[#938F99] mb-4">Full Stack Developer | DSA Enthusiast</p>
           <a href="https://github.com/Pabitra-Sahoo" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#D0BCFF] hover:underline">
             <FaGithub /> Follow on GitHub
           </a>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
