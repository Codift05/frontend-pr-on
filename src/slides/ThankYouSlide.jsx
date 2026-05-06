import React from 'react';
import { motion } from 'framer-motion';

export default function ThankYouSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0b1120] to-[#111827] overflow-hidden">

      {/* Subtle Ambient Glow */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[35%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* THANK YOU Typography */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="leading-none"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(5rem, 15vw, 16rem)', letterSpacing: '-0.04em', color: '#ffffff' }}
        >
          THANK
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}
          className="leading-none"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 100, fontSize: 'clamp(5rem, 15vw, 16rem)', letterSpacing: '-0.04em', color: 'rgba(255,255,255,0.6)' }}
        >
          YOU
        </motion.h1>
      </div>

    </div>
  );
}
