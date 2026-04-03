import React, { useEffect } from 'react';
import { FaGithub, FaSyncAlt, FaShieldAlt, FaChartLine, FaTerminal, FaCode, FaCheckCircle, FaLaptopCode, FaGlobe, FaChevronRight, FaLock } from 'react-icons/fa';

function Home() {
  // Simple scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full glass border border-[#D0BCFF]/30 text-[#D0BCFF] text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#D0BCFF] animate-pulse"></span>
            v1.2.0 is Live
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Save LeetCode to <span className="text-[#D0BCFF] relative whitespace-nowrap">GitHub<svg className="absolute w-full h-3 -bottom-2 left-0 text-[#D0BCFF]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg></span> Instantly
          </h1>
          <p className="text-lg md:text-xl text-[#CAC4D0] leading-relaxed max-w-2xl mx-auto md:mx-0">
            Automatically capture your solutions from LeetCode, GeeksForGeeks, & Codeforces. Build your commit graph, track your streak, and level up your engineering rank—privately and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="bg-[#D0BCFF] text-[#381E72] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#EADDFF] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(208,188,255,0.4)] flex items-center justify-center gap-2 cursor-pointer">
              Add to Chrome <FaChevronRight className="text-sm" />
            </button>
            <a href="https://github.com/Pabitra-Sahoo/AlgoCommit.git" target="_blank" rel="noreferrer" className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-[#49454F] transition-all active:scale-95 flex items-center justify-center gap-3 border border-[#49454F]">
              <FaGithub className="text-xl" /> Open Source
            </a>
          </div>
          <p className="text-sm text-[#938F99] font-medium pt-2 flex items-center justify-center md:justify-start gap-2">
            <FaCheckCircle className="text-[#b8f5a6]" /> No credit card required. Free forever.
          </p>
        </div>

        <div className="flex-1 w-full max-w-md animate-float relative pl-0 md:pl-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D0BCFF]/20 to-[#F2B8B5]/20 blur-2xl rounded-full"></div>
          <div className="glass border border-[#49454F]/50 rounded-[24px] p-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#49454F]/50 pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#F2B8B5]"></div>
                <div className="w-3 h-3 rounded-full bg-[#EADDFF]"></div>
                <div className="w-3 h-3 rounded-full bg-[#b8f5a6]"></div>
              </div>
              <div className="text-xs text-[#938F99] font-medium flex items-center gap-1">
                <FaLock className="text-[10px]" /> Private Repo
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFA116]/20 text-[#FFA116] flex items-center justify-center shrink-0">
                  <FaCode />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#E6E1E5]">LeetCode: Two Sum</p>
                  <p className="text-xs text-[#938F99]">Solved 2 minutes ago</p>
                </div>
                <div className="ml-auto text-xs bg-[#b8f5a6]/20 text-[#b8f5a6] px-2 py-1 rounded-md font-bold">Accepted</div>
              </div>
              <div className="flex justify-center py-2">
                <FaSyncAlt className="text-[#D0BCFF] animate-[spin_3s_linear_infinite] opacity-60" />
              </div>
              <div className="flex items-start gap-3 p-3 bg-[#49454F]/20 rounded-xl border border-[#49454F]/30">
                <FaGithub className="text-2xl mt-1 text-[#E6E1E5]" />
                <div>
                  <p className="text-sm font-bold text-[#E6E1E5] flex items-center gap-2">
                    Atomic Commit <span className="w-2 h-2 rounded-full bg-[#D0BCFF] animate-pulse"></span>
                  </p>
                  <p className="text-xs text-[#938F99] mt-1 break-all font-mono">
                    [AlgoCommit] LeetCode/Easy/Two_Sum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="border-y border-[#49454F]/30 bg-[#211F26]/30 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-wrap justify-around items-center gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-[#D0BCFF]">3+</div>
            <div className="text-sm text-[#CAC4D0] font-medium mt-1">Platforms Supported</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#F2B8B5]">1-Click</div>
            <div className="text-sm text-[#CAC4D0] font-medium mt-1">Instant Integration</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#b8f5a6]">100%</div>
            <div className="text-sm text-[#CAC4D0] font-medium mt-1">Local & Private</div>
          </div>
        </div>
      </section>

      {/* See It In Action (Screenshot Section) */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10 text-center">
         <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">See It In <span className="text-[#F2B8B5]">Action</span>.</h2>
         <p className="text-[#CAC4D0] max-w-2xl mx-auto text-lg mb-12">Designed for focus. The extension natively embeds right alongside your problem workspace.</p>
         <div className="relative mx-auto rounded-[24px] overflow-hidden border border-[#49454F]/50 shadow-[0_0_50px_rgba(208,188,255,0.15)] bg-[#211F26]">
            {/* Window Controls Mock */}
            <div className="h-10 border-b border-[#49454F]/50 flex items-center px-4 gap-2 bg-[#141218]/50">
              <div className="w-3 h-3 rounded-full bg-[#F2B8B5]"></div>
              <div className="w-3 h-3 rounded-full bg-[#EADDFF]"></div>
              <div className="w-3 h-3 rounded-full bg-[#b8f5a6]"></div>
              <div className="w-full text-center text-xs text-[#938F99] font-mono">leetcode.com/problems/two-sum</div>
            </div>
            <div className="p-4 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                {/* Visual Representation of Dashboard */}
                <div className="flex-1 w-full bg-[#1A1A1A] rounded-xl border border-[#333] p-6 shadow-inner text-left">
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-xl font-bold">AlgoCommit <span className="text-xs text-[#b8f5a6] border border-[#b8f5a6]/50 rounded px-2 py-1 ml-2">v1.2.0</span></div>
                        <img src="/Myicon.png" alt="icon" className="w-8 h-8" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                         <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                             <div className="text-3xl font-black text-white">42</div>
                             <div className="text-xs text-[#938F99] uppercase tracking-wide font-bold mt-1">Total Solved</div>
                         </div>
                         <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                             <div className="text-3xl font-black text-white">12</div>
                             <div className="text-xs text-[#938F99] uppercase tracking-wide font-bold mt-1">Day Streak</div>
                         </div>
                    </div>
                    <div className="bg-[#2A2A2A] rounded-xl p-4">
                        <div className="text-sm font-bold text-[#E6E1E5] mb-2">Recent Activity</div>
                        <div className="flex items-center justify-between text-xs text-[#938F99]">
                            <span>Two Sum</span>
                            <span className="text-[#b8f5a6]">Accepted</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-left space-y-4">
                     <h3 className="text-2xl font-bold">Your Stats, Available Instantly</h3>
                     <p className="text-[#CAC4D0]">The dashboard gives you a quick overview of your total solves, active streak, and platform history without having to visit GitHub.</p>
                     <ul className="text-sm text-[#938F99] space-y-2 mt-4 list-disc pl-4">
                         <li>View your current <strong>Engineering Rank</strong></li>
                         <li>Access your connected GitHub repository in one click</li>
                         <li>Check detailed platform-specific breakdown (LC vs GFG)</li>
                     </ul>
                </div>
            </div>
         </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to <span className="text-[#D0BCFF]">track progress</span>.</h2>
          <p className="text-[#CAC4D0] max-w-2xl mx-auto text-lg">Powerful features wrapped in a stunning, lightweight architecture that won't slow down your browser.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 border border-[#49454F]/50 group">
            <div className="w-12 h-12 bg-[#D0BCFF]/10 text-[#D0BCFF] rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-bold mb-3">Multi-Platform Sync</h3>
            <p className="text-[#938F99] leading-relaxed">
              Supports LeetCode, GeeksForGeeks, and Codeforces out of the box. Solve anywhere, sync to one place.
            </p>
          </div>

          <div className="glass p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 border border-[#49454F]/50 group">
            <div className="w-12 h-12 bg-[#F2B8B5]/10 text-[#F2B8B5] rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              <FaTerminal />
            </div>
            <h3 className="text-xl font-bold mb-3">Atomic Commits</h3>
            <p className="text-[#938F99] leading-relaxed">
              We leverage GitHub's Git Data API to bundle your Code, README, and Stats into a single, clean commit.
            </p>
          </div>

          <div className="glass p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 border border-[#49454F]/50 group">
            <div className="w-12 h-12 bg-[#b8f5a6]/10 text-[#b8f5a6] rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold mb-3">Privacy First</h3>
            <p className="text-[#938F99] leading-relaxed">
              Your source code is scraped locally mapping directly to your personal repo. No databases. No tracking.
            </p>
          </div>

          <div className="md:col-span-3 glass p-8 rounded-[24px] border border-[#49454F]/50 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
            <div className="flex-1 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#49454F]/40 text-[#CAC4D0] text-xs font-bold uppercase mb-4">
                <FaLaptopCode /> Background Worker
              </div>
              <h3 className="text-2xl font-bold mb-3">Invisible Workflow</h3>
              <p className="text-[#938F99] leading-relaxed mb-4">
                AlgoCommit runs completely silently in the background. Just click 'Submit' on a problem like you usually do. We intercept the 'Accepted' network call, fetch the code, and push it in 2 seconds.
              </p>
            </div>
            <div className="flex-1 w-full relative z-10">
              <div className="w-full bg-[#1E1E1E] rounded-xl p-4 font-mono text-xs text-[#9CDCFE] shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-[#49454F]/50 leading-relaxed text-left">
                <p><span className="text-[#C586C0]">try</span> {"{"}</p>
                <p className="pl-4">await <span className="text-[#DCDCAA]">atomicCommit</span>(token, username, repo, files);</p>
                <p className="pl-4"><span className="text-[#DCDCAA]">notifySuccess</span>();</p>
                <p>{"}"} <span className="text-[#C586C0]">catch</span> (e) {"{"}</p>
                <p className="pl-4"><span className="text-[#DCDCAA]">alertUser</span>(e);</p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6 md:px-12 bg-[#211F26]/30 border-y border-[#49454F]/30 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Setup in <span className="text-[#D0BCFF]">3 Minutes</span>.</h2>
            <p className="text-[#CAC4D0] text-lg">No complex configuration. Authorize your GitHub and let the extension do the rest.</p>
          </div>

          <div className="space-y-12 text-left">
            {[ 
              { step: 1, title: 'Install & Authorize', desc: 'Download AlgoCommit from the Web Store. Login securely using our serverless OAuth proxy.' },
              { step: 2, title: 'Link a Target Repository', desc: 'Type in a repo name (e.g., "dsa-solutions"). If it doesn\'t exist, the extension creates it for you instantly.' },
              { step: 3, title: 'Solve & Let it Sync', desc: 'Go to LeetCode and solve a problem. Once accepted, AlgoCommit grabs the code, updates the root README, edits your stats JSON, and pushes the commit.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-[#D0BCFF] text-[#381E72] flex items-center justify-center text-2xl font-black shrink-0 shadow-[0_0_15px_rgba(208,188,255,0.4)]">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-[#E6E1E5] mb-2">{item.title}</h3>
                  <p className="text-[#938F99] text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to paint your <span className="text-[#b8f5a6]">green squares</span>?</h2>
        <p className="text-xl text-[#CAC4D0] mb-10 max-w-2xl mx-auto">
          Join developers who are automating their DSA journey and building an undeniable proof-of-work portfolio.
        </p>
        <button className="bg-[#D0BCFF] text-[#381E72] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#EADDFF] transition-all hover:-translate-y-1 active:translate-y-0 shadow-[0_10px_30px_rgba(208,188,255,0.3)] cursor-pointer">
          Download AlgoCommit Today
        </button>
      </section>
    </div>
  );
}

export default Home;
