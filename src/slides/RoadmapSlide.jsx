import { motion } from 'framer-motion';
import { Code2, Braces, Layers, FolderGit2 } from 'lucide-react';

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
  { phase: '01', title: 'HTML & CSS', desc: 'Fondasi struktur dan styling web', color: '#ccff00', Icon: Code2 },
  { phase: '02', title: 'JavaScript', desc: 'Logika dan interaktivitas', color: '#00e5ff', Icon: Braces },
  { phase: '03', title: 'Framework', desc: 'React, Vue, atau Nuxt', color: '#ff6ec7', Icon: Layers },
  { phase: '04', title: 'Project!', desc: 'Bikin proyek nyata bareng tim', color: '#A259FF', Icon: FolderGit2 },
];

export default function RoadmapSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-noir-black overflow-hidden px-8">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-lime/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-neon-cyan/3 blur-[120px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 md:mb-16 text-center z-10"
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
        className="relative z-10 flex flex-col md:flex-row items-stretch gap-4 md:gap-0 max-w-5xl w-full"
      >
        {steps.map((step, i) => (
          <motion.div key={i} variants={itemVariants} className="flex items-center flex-1 w-full md:w-auto">
            {/* Card */}
            <div className="glass-card p-6 flex-1 text-center hover:glow-lime transition-shadow duration-300">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: step.color + '12', border: `1px solid ${step.color}30` }}
              >
                <step.Icon size={24} color={step.color} strokeWidth={1.5} />
              </div>

              {/* Phase badge */}
              <div
                className="inline-block px-3 py-1 rounded-full font-mono text-[10px] font-bold mb-3"
                style={{ backgroundColor: step.color + '10', color: step.color, border: `1px solid ${step.color}20` }}
              >
                FASE {step.phase}
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-base text-white">{step.title}</h3>

              {/* Desc */}
              <p className="font-sans text-xs text-white/40 mt-1 leading-relaxed">{step.desc}</p>
            </div>

            {/* Arrow connector (not on last) */}
            {i < steps.length - 1 && (
              <div className="hidden md:flex items-center px-2 flex-shrink-0">
                <div className="w-6 h-[1px]" style={{ backgroundColor: step.color + '40' }} />
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px]" style={{ borderLeftColor: steps[i+1].color + '50' }} />
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
        Gak perlu bisa semua sekarang — kita belajar bareng!
      </motion.p>
    </div>
  );
}
