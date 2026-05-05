import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const steps = [
  { phase: '01', title: 'HTML & CSS', desc: 'Fondasi struktur dan styling web', color: '#ccff00', icon: '🏗️' },
  { phase: '02', title: 'JavaScript', desc: 'Logika dan interaktivitas', color: '#00e5ff', icon: '⚡' },
  { phase: '03', title: 'Framework', desc: 'React, Vue, atau Nuxt', color: '#ff6ec7', icon: '🚀' },
  { phase: '04', title: 'Project!', desc: 'Bikin proyek nyata bareng tim', color: '#A259FF', icon: '🎯' },
];

export default function RoadmapSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-noir-black overflow-hidden px-8">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-lime/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-neon-cyan/3 blur-[120px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 md:mb-14 text-center z-10"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-neon-cyan mb-3 uppercase">// Your journey</p>
        <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white text-glow-white">
          ROADMAP<span className="text-neon-lime text-glow-lime"> BELAJAR</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-0 max-w-5xl w-full"
      >
        {steps.map((step, i) => (
          <motion.div key={i} variants={itemVariants} className="flex items-center flex-1 w-full md:w-auto">
            {/* Card */}
            <div className="glass-card p-5 md:p-6 flex-1 text-center hover:glow-lime transition-shadow duration-300">
              {/* Icon */}
              <div className="text-3xl md:text-4xl mb-3">{step.icon}</div>

              {/* Phase badge */}
              <div
                className="inline-block px-3 py-1 rounded-full font-mono text-[10px] font-bold mb-2"
                style={{ backgroundColor: step.color + '15', color: step.color, border: `1px solid ${step.color}30` }}
              >
                FASE {step.phase}
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-base md:text-lg text-white">{step.title}</h3>

              {/* Desc */}
              <p className="font-sans text-xs text-white/40 mt-1">{step.desc}</p>
            </div>

            {/* Arrow connector (not on last) */}
            {i < steps.length - 1 && (
              <div className="hidden md:flex items-center px-2">
                <div className="w-8 h-[2px] bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${step.color}60, ${steps[i+1].color}60)` }} />
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px]" style={{ borderLeftColor: steps[i+1].color + '60' }} />
              </div>
            )}

            {/* Vertical arrow for mobile */}
            {i < steps.length - 1 && (
              <div className="md:hidden flex flex-col items-center py-1">
                <div className="w-[2px] h-4" style={{ backgroundColor: step.color + '40' }} />
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px]" style={{ borderTopColor: steps[i+1].color + '60' }} />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 font-mono text-xs text-noir-mid tracking-wider z-10"
      >
        *Gak perlu bisa semua sekarang — kita belajar bareng! 🤝
      </motion.p>
    </div>
  );
}
