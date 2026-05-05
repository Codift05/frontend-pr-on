import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-noir-black bg-grid overflow-hidden">
      {/* Scanline */}
      <div className="scanline" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-neon-lime/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[100px] pointer-events-none" />

      {/* Center content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center select-none"
      >
        <motion.h1
          variants={itemVariants}
          className="font-sans font-black text-[8rem] md:text-[10rem] lg:text-[12rem] leading-[0.85] tracking-tighter text-white text-glow-white"
        >
          FRONTEND
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="font-sans font-black text-[8rem] md:text-[10rem] lg:text-[12rem] leading-[0.85] tracking-tighter text-neon-lime text-glow-lime"
        >
          DEVELOPMENT
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          variants={itemVariants}
          className="mt-8 mx-auto w-32 h-[2px] bg-gradient-to-r from-transparent via-neon-lime to-transparent"
        />
      </motion.div>

      {/* Bottom text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 font-mono text-xs tracking-[0.3em] text-noir-mid uppercase"
      >
        Onboarding Division 2026
      </motion.p>

      {/* Top-left decorative bracket */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-8 left-8 font-mono text-xs text-noir-mid"
      >
        {'<'}FrontendDev{' />'}
      </motion.div>
    </div>
  );
}
