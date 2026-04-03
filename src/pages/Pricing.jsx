import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCrown, FaUserAlt } from 'react-icons/fa';

function Pricing() {
  const plans = [
    {
      name: "Community",
      price: "$0",
      description: "Perfect for students and solo coders.",
      features: [
        "LeetCode Sync",
        "GFG Sync",
        "Codeforces Sync",
        "Atomic GitHub Commits",
        "Daily Streak Reminders",
        "Engineering Ranks"
      ],
      icon: <FaUserAlt className="text-[#CAC4D0]" />,
      buttonText: "Get Started",
      highlight: false
    },
    {
      name: "Pro (Soon)",
      price: "$2",
      description: "Advanced analytics and team features.",
      features: [
        "Everything in Free",
        "Historical Sync (All past solves)",
        "Premium UI Themes",
        "Multi-Repo Support",
        "Export to PDF/Latex",
        "Priority Support"
      ],
      icon: <FaCrown className="text-[#D0BCFF]" />,
      buttonText: "Join Waitlist",
      highlight: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h1 className="text-4xl md:text-5xl font-black mb-4 text-center">Simple <span className="text-[#D0BCFF]">Pricing</span></h1>
      <p className="text-center text-[#938F99] mb-16 text-lg">Free forever for the community. Pro features coming soon.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`glass p-8 rounded-[32px] flex flex-col border ${plan.highlight ? 'border-[#D0BCFF] shadow-[0_0_30px_rgba(208,188,255,0.1)]' : 'border-[#49454F]/50'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              {plan.icon}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
            </div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black">{plan.price}</span>
              <span className="text-[#938F99]">/month</span>
            </div>
            <p className="text-[#CAC4D0] mb-8">{plan.description}</p>
            
            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-sm text-[#E6E1E5]">
                  <FaCheck className={plan.highlight ? "text-[#D0BCFF]" : "text-[#b8f5a6]"} />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-full font-bold transition-all active:scale-95 ${plan.highlight ? 'bg-[#D0BCFF] text-[#381E72] hover:bg-[#EADDFF]' : 'glass border border-[#49454F] hover:bg-[#49454F]'}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Pricing;
