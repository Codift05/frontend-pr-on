import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import real logos provided by the user
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/JS.png';
import reactLogo from '../assets/react.svg';
import nextLogo from '../assets/next.png';
import githubLogo from '../assets/github.png';
import vscodeLogo from '../assets/vscode.png';

const steps = [
  { 
    title: 'HTML & CSS', 
    desc: 'Seni dan ilmu membangun antarmuka pengguna yang interaktif dan responsif — bagian yang dilihat dan dirasakan langsung oleh user. Fondasi utama styling web.', 
    color: '#3b82f6', // Blue
    logos: [htmlLogo, cssLogo]
  },
  { 
    title: 'JAVASCRIPT', 
    desc: 'Memberikan "nyawa" dan logika pada antarmuka statis. Mengolah interaksi dari yang paling sederhana hingga manajemen state aplikasi yang kompleks.', 
    color: '#eab308', // Yellow
    logos: [jsLogo]
  },
  { 
    title: 'FRAMEWORK', 
    desc: 'Beranjak dari vanilla ke teknologi modern. Memanfaatkan ekosistem React, Vue, atau Next untuk membangun Single Page Application yang efisien dan modular.', 
    color: '#ec4899', // Pink
    logos: [reactLogo, nextLogo]
  },
  { 
    title: 'PROJECT!', 
    desc: 'Waktunya eksekusi nyata. Bekerja dalam tim menggunakan Git, menulis kode dengan bersih, dan mewujudkan desain Figma ke dalam sistem yang berfungsi penuh.', 
    color: '#8b5cf6', // Purple
    logos: [vscodeLogo, githubLogo]
  },
];

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

export default function RoadmapSlide({ activeStep = 0 }) {
  const active = activeStep;
  const windowWidth = useWindowWidth();
  const isMd = windowWidth >= 768;

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row bg-[#f8fafc] overflow-hidden font-sans">
      
      {/* Subtle Slide Identifier */}
      <div className="absolute top-6 right-8 md:top-8 md:right-12 z-50 pointer-events-none">
        <p className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
           {active + 1} / {steps.length} — Roadmap Belajar
        </p>
      </div>

      {steps.map((step, index) => {
        const isActive = active === index;

        return (
          <motion.div
            key={index}
            layout
            transition={{ layout: { type: "spring", bounce: 0.15, duration: 0.8 } }}
            className={`relative h-full overflow-hidden transition-colors duration-500 ${isMd ? 'border-l' : 'border-t'} flex flex-col md:flex-row items-center md:items-start ${isActive ? 'flex-[4] md:flex-[5] bg-white' : 'flex-[1] bg-slate-50'}`}
            style={{ 
              borderColor: isActive ? step.color : '#e2e8f0', 
              borderLeftWidth: isActive && isMd ? '4px' : (isMd ? '1px' : '0px'),
              borderTopWidth: isActive && !isMd ? '4px' : (!isMd ? '1px' : '0px')
            }}
          >
            {/* Inner fixed-width container so content doesn't squash, it just gets clipped by overflow */}
            <div className="absolute top-0 left-0 w-[100vw] md:w-[70vw] h-[100vh] md:h-full p-8 pl-8 pr-4 md:pl-24 lg:pl-32 md:pr-16 flex flex-col justify-center pointer-events-none">
              
              {/* TOP: Huge Number & Subtitle */}
              <div className="flex flex-col justify-start w-[85vw] md:w-[600px] flex-shrink-0 mt-[-5%]">
                <motion.h2 
                  animate={{ x: isActive ? 0 : -30, opacity: isActive ? 1 : 0.3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="font-sans font-black text-7xl md:text-[140px] leading-none tracking-tighter select-none" 
                  style={{ color: isActive ? `${step.color}15` : '#cbd5e1' }}
                >
                  0{index + 1}
                </motion.h2>
                <p 
                  className={`font-mono text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8 mt-2 md:mt-[-10px] transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-40'}`} 
                  style={{ color: step.color }}
                >
                  Fase Pembelajaran
                </p>
              </div>

              {/* BOTTOM: Title, Description, and Logos */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 w-full max-w-3xl">
                
                {/* Left: Title & Description */}
                <div className="flex flex-col w-full md:w-[350px] lg:w-[450px]">
                  <motion.h3 
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25, delay: isActive ? 0.1 : 0 }}
                    className={`font-sans font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none mb-4 whitespace-nowrap md:whitespace-normal truncate md:overflow-visible`}
                    style={{ color: '#1e293b' }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  {/* Description - justified text with slide effect */}
                  <motion.p 
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25, delay: isActive ? 0.15 : 0 }}
                    className="font-sans font-normal text-xs md:text-sm lg:text-base text-slate-500 leading-relaxed text-justify pointer-events-auto"
                  >
                    {step.desc}
                  </motion.p>
                </div>

                {/* Right: Logos placed neatly beside text (NO SHADOWS/CARDS) */}
                <motion.div 
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: isActive ? 0.2 : 0 }}
                  className="flex flex-row md:flex-wrap items-center justify-start gap-6 mt-2 pointer-events-auto"
                >
                  {step.logos.map((logo, i) => (
                    <motion.div 
                      key={`logo-${i}`}
                      initial={{ scale: 0.5, opacity: 0, x: 20 }}
                      animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8, delay: isActive ? 0.25 + (i * 0.1) : 0 }}
                      className="flex items-center justify-center cursor-pointer"
                    >
                      <img src={logo} alt="Technology Logo" className="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-sm" />
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
