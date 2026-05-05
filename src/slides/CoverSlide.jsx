import { motion } from 'framer-motion';
import gojoImg from '../assets/Gojo2.png';

const floatAnim = {
  y: ["-10px", "10px"],
  transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
};

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#9EAFC2] font-sans text-[#111827] select-none">
      
      {/* === TECH GRID BACKGROUND === */}
      <div className="absolute inset-0 z-[1] opacity-[0.07] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(17, 24, 39, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 24, 39, 1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* === BACKGROUND LAYER: Organized Giant Text === */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] overflow-hidden">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center justify-center -rotate-2"
        >
          {/* Top Line */}
          <div className="font-black italic text-[20vw] leading-[0.8] tracking-tighter"
            style={{ WebkitTextStroke: '2px rgba(17, 24, 39, 0.4)', color: 'transparent' }}>
            FRONT-
          </div>
          {/* Bottom Line */}
          <div className="font-black italic text-[20vw] leading-[0.8] tracking-tighter mt-[-2%]"
               style={{ WebkitTextStroke: '2px rgba(17, 24, 39, 0.4)', color: 'transparent' }}>
            END
          </div>
        </motion.div>
      </div>

      {/* Floating Particles (Rocks & Tech Elements) */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {/* Hollow yellow accent */}
        <motion.div animate={floatAnim} className="absolute top-[18%] left-[8%] w-8 h-8 border-[3px] border-[#FBBF24] opacity-80 rotate-12 rounded-sm drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
        {/* Dark solid block */}
        <motion.div animate={{ ...floatAnim, transition: { duration: 4, repeat: Infinity, repeatType: "reverse" } }} className="absolute bottom-[30%] left-[12%] w-14 h-4 bg-[#111827] opacity-60 -rotate-12 rounded-sm" />
        {/* Hollow white box */}
        <motion.div animate={{ ...floatAnim, transition: { duration: 3.5, repeat: Infinity, repeatType: "reverse" } }} className="absolute top-[28%] right-[10%] w-6 h-6 border-2 border-white/60 rotate-45 rounded-sm" />
        {/* Solid glowing yellow particle */}
        <motion.div animate={{ ...floatAnim, transition: { duration: 5, repeat: Infinity, repeatType: "reverse" } }} className="absolute bottom-[25%] right-[18%] w-6 h-6 bg-[#FBBF24] opacity-80 rotate-[60deg] rounded-sm drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" />

        {/* HUD Decor Text */}
        <div className="absolute top-[35%] left-[4%] text-[#111827]/30 font-mono text-xs font-bold tracking-[0.2em] -rotate-90 origin-left select-none">
          // SYS_INIT: OK
        </div>
        <div className="absolute bottom-[35%] right-[4%] text-[#111827]/30 font-mono text-xs font-bold tracking-[0.2em] rotate-90 origin-right select-none">
          0x99F4A :: SECTOR_7
        </div>
        
        {/* Crosshair accents */}
        <div className="absolute top-1/2 left-[15%] w-4 h-4 border-t-2 border-l-2 border-[#111827]/20" />
        <div className="absolute bottom-1/3 right-[25%] w-4 h-4 border-b-2 border-r-2 border-white/30" />
      </div>

      {/* === FOREGROUND LAYER: Character === */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-[0%] md:bottom-[-55%] lg:bottom-[-65%] left-1/2 -translate-x-1/2 z-[25] h-[85%] md:h-[175%] lg:h-[185%] pointer-events-none flex items-end justify-center w-[150%] md:w-auto"
      >
        <img
          src={gojoImg}
          alt="Gojo Satoru"
          className="h-full w-auto object-contain object-bottom relative z-[25]"
        />
      </motion.div>

      {/* === TOP HEADER (FULL BLEED) === */}
      {/* Black Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-auto min-h-[12%] md:min-h-[14%] bg-[#111827] z-[20] flex items-center p-4 md:px-12 border-b-[1px] border-[#FBBF24]/20"
      >
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
          <div className="text-white font-black italic text-xl md:text-4xl lg:text-5xl tracking-tighter uppercase whitespace-normal md:whitespace-nowrap leading-tight md:leading-none">
            FRONT-END <span className="text-[#FBBF24]">ONBOARDING PROTOCOL</span>
          </div>

          <div className="self-end md:self-auto flex flex-col items-end text-right mt-2 md:mt-0">
            <span className="text-[#FBBF24] font-black italic text-sm md:text-2xl lg:text-3xl tracking-tighter uppercase leading-none">
              STATUS: ONBOARDING
            </span>
            <span className="text-white font-black italic text-xs md:text-xl lg:text-2xl tracking-tighter uppercase mt-1 leading-none text-white/90">
              BATCH 2026
            </span>
          </div>
        </div>
      </motion.div>

      {/* === BOTTOM FOOTER (FULL BLEED) === */}
      {/* White Footer */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-auto min-h-[12%] md:min-h-[14%] bg-white z-[20] flex items-center p-4 md:px-12 border-t-[1px] border-[#111827]/10"
      >
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0">

          {/* Left Side */}
          <div className="flex flex-col max-w-[80%] md:max-w-[50%]">
            <span className="text-[#FBBF24] font-black italic text-3xl md:text-5xl lg:text-6xl leading-none tracking-tighter whitespace-normal md:whitespace-nowrap">
              UNITY FRONTEND
            </span>
            <span className="text-[#111827] font-black italic text-xl md:text-3xl lg:text-4xl leading-none tracking-tight mt-1 md:mt-2">
              UNSRAT IT COMMUNITY
            </span>
          </div>

          {/* Right Side */}
          <div className="self-end md:self-auto flex flex-col items-end text-right mt-2 md:mt-0">
            <span className="text-[#FBBF24] font-black italic text-xs md:text-xl tracking-widest uppercase">
              FOKUS KITA:
            </span>
            <span className="text-[#111827] font-black italic text-xs md:text-base lg:text-xl tracking-widest uppercase mt-0 md:mt-1 max-w-[200px] md:max-w-[400px] leading-tight">
              NGULIK FRONTEND & BIKIN WEB KEREN
            </span>
          </div>

        </div>
      </motion.div>

      {/* Scanline overlay for aesthetic */}
      <div className="absolute inset-0 z-[30] pointer-events-none overflow-hidden mix-blend-overlay opacity-30">
        <div className="scanline" style={{ background: 'rgba(0,0,0,0.2)' }} />
      </div>

    </div>
  );
}
