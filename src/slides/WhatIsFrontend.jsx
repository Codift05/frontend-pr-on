import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhatIsFrontend() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #f0f0f0 100%)' }}
    >
      {/* Noise overlay */}
      <div className="noise-overlay opacity-20" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-8 max-w-5xl"
      >
        <motion.p
          variants={wordVariants}
          className="font-mono text-sm tracking-[0.3em] text-gray-400 mb-8 uppercase"
        >
          // Slide 03
        </motion.p>

        <motion.h2
          variants={wordVariants}
          className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 leading-[1.05]"
        >
          APA ITU
          <br />
          FRONTEND WEB
          <br />
          DEVELOPMENT?
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={wordVariants}
          className="w-16 h-[2px] bg-gray-300 mx-auto my-10"
        />

        {/* Description */}
        <motion.p
          variants={wordVariants}
          className="font-sans text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Seni dan ilmu membangun antarmuka pengguna yang interaktif dan responsif
          — <span className="text-gray-900 font-semibold">bagian yang dilihat dan dirasakan langsung oleh user</span>.
        </motion.p>

        {/* Tech Formula */}
        <motion.div
          variants={wordVariants}
          className="flex items-center justify-center gap-4 md:gap-5"
        >
          {['HTML', 'CSS', 'JavaScript'].map((tech, i) => (
            <div key={tech} className="flex items-center gap-4 md:gap-5">
              <span className="px-5 py-2.5 rounded-xl bg-white/60 border border-gray-200 font-mono text-sm md:text-base text-gray-600 shadow-sm">
                {tech}
              </span>
              {i < 2 && <span className="text-gray-300 text-lg font-light">+</span>}
            </div>
          ))}
          <span className="text-gray-300 text-lg font-light mx-1">=</span>
          <span className="px-5 py-2.5 rounded-xl bg-gray-900 font-mono text-sm md:text-base text-white font-semibold shadow-lg">
            Frontend
          </span>
        </motion.div>
      </motion.div>

      {/* Decorative corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-gray-300 opacity-50" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-gray-300 opacity-50" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-gray-300 opacity-50" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-gray-300 opacity-50" />
    </div>
  );
}
