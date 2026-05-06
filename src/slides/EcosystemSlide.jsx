import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import all real logos provided by the user
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/JS.png';
import reactLogo from '../assets/react.svg';
import nextLogo from '../assets/next.png';
import nuxtLogo from '../assets/nuxt.png';
import tailwindLogo from '../assets/tailwind.png';
import viteLogo from '../assets/vite.svg';

const techStack = [
  { name: 'HTML', image: htmlLogo, angle: -90, delay: 0 },
  { name: 'CSS', image: cssLogo, angle: -45, delay: 0.2 },
  { name: 'JavaScript', image: jsLogo, angle: 0, delay: 0.4 },
  { name: 'React', image: reactLogo, angle: 45, delay: 0.6 },
  { name: 'Next.js', image: nextLogo, angle: 90, delay: 0.8 },
  { name: 'Nuxt.js', image: nuxtLogo, angle: 135, delay: 1.0 },
  { name: 'Tailwind', image: tailwindLogo, angle: 180, delay: 1.2 },
  { name: 'Vite', image: viteLogo, angle: 225, delay: 1.4 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const getPosition = (angle, radius) => {
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
};

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

export default function EcosystemSlide() {
  const windowWidth = useWindowWidth();
  // Responsive radius: small screens get smaller orbit
  const radius = windowWidth < 640 ? 110 : windowWidth < 768 ? 140 : windowWidth < 1024 ? 180 : 220;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#f1f5f9] overflow-hidden px-8">
      {/* Subtle animated background glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-emerald-200/30 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Title Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-16 md:top-24 text-center z-20"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-slate-400 mb-3 uppercase"></p>
        <h2 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-[#111827]">
          FRONTEND
          <span className="font-thin opacity-70"> STACK</span>
        </h2>
      </motion.div>

      {/* Circular Orbit Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-3xl aspect-square flex items-center justify-center mt-12 md:mt-20 z-10"
      >
        {/* Dashed Integration Circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/80"
          style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
        ></div>

        {/* Center Text (Core) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-white/50 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-inner border border-white/60 backdrop-blur-md">
          <span className="font-mono font-bold text-slate-400 text-xs tracking-widest">CORE</span>
        </div>

        {/* Orbiting Tech Cards */}
        {techStack.map((tech) => {
          const pos = getPosition(tech.angle, radius);
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0, x: pos.x, y: pos.y }}
              animate={{
                opacity: 1,
                scale: 1,
                x: pos.x,
                y: pos.y,
              }}
              transition={{
                opacity: { duration: 0.8, delay: tech.delay },
                scale: { duration: 0.8, delay: tech.delay, type: 'spring', bounce: 0.4 },
              }}
              className="absolute top-1/2 left-1/2 z-20"
            >
              {/* Inner floating div perfectly centered on the coordinate */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: tech.delay * 0.5 }}
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow duration-300 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="font-sans font-semibold text-[10px] md:text-xs text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 bg-white px-2 py-1 rounded shadow-sm border border-slate-100 whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
