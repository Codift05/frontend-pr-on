import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function QASlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#ccff00' }}
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Q&A Circle */}
        <motion.div
          variants={itemVariants}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-noir-black flex items-center justify-center mb-10"
          style={{ boxShadow: '0 0 60px rgba(0,0,0,0.3)' }}
        >
          <span className="font-sans font-black text-3xl md:text-4xl text-white tracking-wider">
            Q&A
          </span>
        </motion.div>

        {/* Main Text */}
        <motion.h2
          variants={itemVariants}
          className="font-sans font-black text-6xl md:text-8xl lg:text-[10rem] tracking-tighter text-noir-black leading-[0.9] max-w-4xl"
        >
          ADA PERTANYAAN?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-8 font-mono text-sm md:text-base text-noir-black/60 tracking-wider"
        >
          Raise your hand or type in chat
        </motion.p>
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-noir-black/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-noir-black/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-noir-black/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-noir-black/20" />

      {/* Bottom label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 font-mono text-xs text-noir-black/40 tracking-[0.3em]"
      >
        FRONTEND ONBOARDING 2026
      </motion.p>
    </div>
  );
}
