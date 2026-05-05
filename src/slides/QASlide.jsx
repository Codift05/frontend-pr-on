import { motion } from 'framer-motion';
import yujiImg from '../assets/Yuji.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function QASlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #5B8EC2 0%, #3A6B9F 40%, #2A5080 100%)' }}
    >
      {/* Pattern */}
      <div className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Giant bg text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[25vw] text-white/[0.04] whitespace-nowrap select-none pointer-events-none tracking-tighter leading-none">
        Q&A
      </div>

      {/* Character */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute right-[5%] md:right-[8%] bottom-0 h-[70%] md:h-[85%] z-10"
      >
        <img src={yujiImg} alt="" className="h-full w-auto object-contain character-img-yellow" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-start ml-8 md:ml-16 lg:ml-24 mr-auto max-w-2xl"
      >
        {/* Q&A Badge */}
        <motion.div
          variants={itemVariants}
          className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-noir-black flex items-center justify-center mb-8"
          style={{ boxShadow: '0 0 60px rgba(0,0,0,0.4)' }}
        >
          <span className="font-sans font-black text-2xl md:text-3xl text-white tracking-wider">Q&A</span>
        </motion.div>

        {/* Main text */}
        <motion.h2
          variants={itemVariants}
          className="font-sans font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-white leading-[0.85]"
        >
          ADA
          <br />
          PERTANYAAN?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 font-mono text-sm text-white/60 tracking-wider"
        >
          Raise your hand or type in chat
        </motion.p>
      </motion.div>

      {/* Corners */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-3 border-t-3 border-white/20" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r-3 border-t-3 border-white/20" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-3 border-b-3 border-white/20" />

      {/* Bottom label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 right-6 font-mono text-[10px] text-white/30 tracking-[0.3em]"
      >
        FRONTEND ONBOARDING 2026
      </motion.p>
    </div>
  );
}
