import React from 'react';
import { motion } from 'framer-motion';

export default function SplashSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#f1f5f9]">
      
      {/* Subtle animated background glowing orbs to make it elegant */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[20%] w-[35vw] h-[35vw] bg-emerald-200/30 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative z-10 flex items-center gap-4 text-[#111827] select-none"
      >
        <div className="text-6xl md:text-8xl lg:text-[9rem] font-light opacity-80">
          {"</>"}
        </div>
        <div className="flex flex-col text-left leading-[0.85]">
          <span className="text-4xl md:text-7xl lg:text-[6rem] font-black tracking-tighter">FRONTEND</span>
          <span className="text-4xl md:text-7xl lg:text-[6rem] font-thin tracking-tight opacity-70">DEVELOPER</span>
        </div>
      </motion.div>
    </div>
  );
}
