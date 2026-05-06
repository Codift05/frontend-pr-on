import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhyFrontend() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#f1f5f9] px-6">

      {/* Subtle animated background orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center w-full max-w-5xl"
      >
        {/* Header Text */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <span className="font-mono text-xs md:text-sm tracking-widest text-slate-400 uppercase mb-3 block">
          </span>
          <h2 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-[#111827] leading-none mb-4">
            THIS IS <span className="font-thin opacity-70">FRONTEND.</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Seni mengubah baris kode menjadi pengalaman interaktif.
            <br className="hidden md:block" />Cobalah gerakkan objek 3D di bawah ini dengan kursor / jarimu.
          </p>
        </motion.div>

        {/* Browser Mockup + Iframe */}
        <motion.div
          variants={itemVariants}
          className="w-full h-[45vh] md:h-[55vh] lg:h-[60vh] bg-white rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-200 overflow-hidden flex flex-col"
        >
          {/* Browser Toolbar */}
          <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center justify-between px-4 shrink-0">
            {/* Mac Window Controls */}
            <div className="flex items-center gap-2 w-16">
              <div className="w-3 h-3 rounded-full bg-[#FF605C]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD44]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00CA4E]"></div>
            </div>
            {/* Plain URL Text */}
            <div className="text-slate-400 text-xs font-mono font-medium flex items-center justify-center">
              webgl-fluid-simulation.com
            </div>
            <div className="w-16"></div>
          </div>

          {/* Iframe Content */}
          <div className="flex-1 bg-black relative">
            <iframe
              src="/fluid-sim/index.html"
              frameBorder="0"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
              title="Frontend Interactive Showcase"
            ></iframe>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
