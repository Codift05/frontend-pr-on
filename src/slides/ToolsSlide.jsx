import React from 'react';
import { motion } from 'framer-motion';

// Import real logos provided by the user
import gitLogo from '../assets/git.png';
import githubLogo from '../assets/github.png';
import vscodeLogo from '../assets/vscode.png';
import npmLogo from '../assets/npm.png';

const tools = [
  { name: 'Git', desc: 'Version Control', image: gitLogo },
  { name: 'GitHub', desc: 'Code Hosting', image: githubLogo },
  { name: 'VS Code', desc: 'Code Editor', image: vscodeLogo },
  { name: 'npm', desc: 'Package Manager', image: npmLogo },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function ToolsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#f1f5f9] overflow-hidden px-4 md:px-8">
      
      {/* Subtle animated background glowing orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-indigo-200/40 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-16 md:top-24 text-center z-20 flex flex-col items-center"
      >
        <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-[#111827]">
          TOOLS <span className="font-thin opacity-70">KIT</span>
        </h2>
        <p className="mt-4 max-w-lg font-sans font-light text-slate-500 text-sm md:text-base leading-relaxed px-6 hidden md:block">
          Setiap antarmuka yang hebat berawal dari sini. Berikut adalah instrumen utama dalam alur kerja pengembangan Frontend kami.
        </p>
      </motion.div>

      {/* Pipeline Layout Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl h-[350px] md:h-[400px] flex items-center justify-between px-12 md:px-20"
      >
        {/* Main Horizontal Dashed Line (The Pipeline) */}
        <div className="absolute top-1/2 left-8 right-8 h-[2px] -translate-y-1/2 border-t-2 border-dashed border-slate-300/80 z-0">
          <span className="bg-[#f1f5f9] px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-slate-400 absolute left-0 -translate-y-1/2 -ml-4 md:-ml-8 rounded-full border border-slate-200">
            [ LOCAL ]
          </span>
          <span className="bg-[#f1f5f9] px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-slate-400 absolute right-0 -translate-y-1/2 -mr-4 md:-mr-8 rounded-full border border-slate-200">
            [ PRODUCTION ]
          </span>
        </div>

        {tools.map((tool, index) => {
          // Alternating up and down positions
          const isTop = index % 2 === 0;
          
          return (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              className="relative h-full flex flex-col justify-center"
              style={{ width: '80px' }}
            >
              {/* Connector Node on the main line */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-300 ring-4 ring-[#f1f5f9] z-20"></div>
              
              {/* Step Number Background */}
              <span className="absolute top-1/2 left-1/2 ml-3 md:ml-4 -translate-y-1/2 font-sans font-black text-2xl md:text-3xl text-slate-200/60 z-0 select-none">
                0{index + 1}
              </span>
              
              {/* Vertical connecting stem */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-slate-200 z-10"
                style={{
                  top: isTop ? '' : '50%',
                  bottom: isTop ? '50%' : '',
                  height: '48px'
                }}
              ></div>

              {/* Floating Animation Wrapper for the Card */}
              <motion.div
                animate={{ y: [0, isTop ? -8 : 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
                className={`absolute left-1/2 -translate-x-1/2 z-30 ${isTop ? 'bottom-[calc(50%+48px)]' : 'top-[calc(50%+48px)]'}`}
              >
                {/* Tool Card - Clean Circular Layout */}
                <div className="relative flex flex-col items-center group">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-full flex items-center justify-center hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] transition-all duration-300 cursor-pointer hover:scale-105">
                    <img 
                      src={tool.image} 
                      alt={tool.name} 
                      className="w-10 h-10 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                    />
                  </div>
                  
                  {/* Floating Labels matching EcosystemSlide style */}
                  <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 pointer-events-none">
                    <h3 className="font-sans font-bold text-xs text-slate-700 whitespace-nowrap">{tool.name}</h3>
                    <p className="font-sans text-[9px] text-slate-400 leading-tight whitespace-nowrap">{tool.desc}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
