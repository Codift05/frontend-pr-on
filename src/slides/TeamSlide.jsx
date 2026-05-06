import React from 'react';
import { motion } from 'framer-motion';
import kucingImg from '../assets/kucing2.jpeg';

const team = [
  {
    name: 'Miftahuddin S. Arsyad',
    role: 'Koordinator',
    avatar: kucingImg,
  },
  {
    name: 'Gloria Elisabeth',
    role: 'Anggota',
    avatar: kucingImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TeamSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#f1f5f9]">
      
      {/* Subtle animated background orbs matching SplashSlide */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[30%] w-[40vw] h-[40vw] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="-mt-32 md:-mt-40 mb-16 md:mb-24 text-center z-10 w-full"
      >
        <h2 className="font-sans font-black text-5xl md:text-7xl tracking-tighter text-[#111827] leading-none flex justify-center items-center gap-3 md:gap-4">
          MEET THE <span className="font-thin opacity-70">TEAM</span>
        </h2>
      </motion.div>

      {/* Team Cards (Minimalist & No Shadows) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-5xl w-full px-6 z-10"
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            className="flex-1 bg-white border border-[#e2e8f0] overflow-hidden flex flex-col"
          >
            {/* Image Container */}
            <div className="w-full aspect-square md:aspect-[4/3] bg-slate-100 overflow-hidden relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Content Container */}
            <div className="p-8 md:p-10 flex flex-col bg-white">
              <span className="text-xs md:text-sm font-light tracking-widest text-slate-400 uppercase mb-2">
                {member.role}
              </span>
              <h3 className="font-sans font-light text-2xl md:text-4xl text-[#111827] tracking-wide leading-tight">
                {member.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
