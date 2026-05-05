import { motion } from 'framer-motion';
import gojoImg from '../assets/Gojo.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-noir-black overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #0f1a2e 40%, #1a2d4a 60%, #0a0a0a 100%)',
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Scanline */}
      <div className="scanline" />

      {/* Giant background text */}
      <div className="bg-text text-[20vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        FRONTEND
      </div>

      {/* Diagonal accent stripe */}
      <div className="diagonal-stripe w-[150%] h-24 -left-[25%] top-[38%] bg-gradient-to-r from-transparent via-unsrat-blue/10 to-transparent" />
      <div className="diagonal-stripe w-[150%] h-1 -left-[25%] top-[52%] bg-gradient-to-r from-transparent via-accent-yellow/20 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-unsrat-blue/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-accent-yellow/5 blur-[100px] pointer-events-none" />

      {/* Character — Gojo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute right-[5%] md:right-[10%] bottom-0 z-20 h-[85%] md:h-[95%]"
      >
        <img
          src={gojoImg}
          alt="Character"
          className="h-full w-auto object-contain character-img"
        />
      </motion.div>

      {/* Left content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 ml-8 md:ml-16 lg:ml-24 mr-auto max-w-2xl select-none"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-unsrat-blue/10 border border-unsrat-blue/20 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
          <span className="font-mono text-[11px] tracking-wider text-unsrat-light">UNSRAT 2026</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-sans font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-white text-glow-white"
        >
          FRONT
          <br />
          <span className="text-unsrat-blue text-glow-blue">END</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mt-2 font-sans font-black text-3xl md:text-4xl tracking-tight text-white/40"
        >
          DEVELOPMENT
        </motion.div>

        {/* Decorative line */}
        <motion.div
          variants={itemVariants}
          className="mt-6 w-20 h-[2px] bg-gradient-to-r from-accent-yellow to-transparent"
        />

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-4 font-mono text-xs tracking-widest text-unsrat-light/60 uppercase"
        >
          Onboarding Divisi Frontend
        </motion.p>
      </motion.div>

      {/* Bottom right label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 right-6 font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase z-30"
      >
        DIVISION 2026
      </motion.p>

      {/* Top-left code tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-6 left-6 font-mono text-xs text-unsrat-light/40 z-30"
      >
        {'<'}FrontendDev{' />'}
      </motion.div>
    </div>
  );
}
