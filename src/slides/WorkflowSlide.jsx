import { motion } from 'framer-motion';
import { GitFork, GitBranch, Terminal, ArrowUpFromLine } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const steps = [
  {
    num: '1',
    title: 'Clone / Fork',
    desc: 'Salin repository ke komputer kamu',
    code: 'git clone https://github.com/...',
    color: '#ccff00',
    Icon: GitFork,
  },
  {
    num: '2',
    title: 'Buat Branch',
    desc: 'Kerja di branch sendiri, jangan di main!',
    code: 'git checkout -b fitur-baru',
    color: '#00e5ff',
    Icon: GitBranch,
  },
  {
    num: '3',
    title: 'Coding!',
    desc: 'Tulis kode, save, lalu commit',
    code: 'git add . && git commit -m "..."',
    color: '#ff6ec7',
    Icon: Terminal,
  },
  {
    num: '4',
    title: 'Push & PR',
    desc: 'Push ke GitHub, buat Pull Request',
    code: 'git push origin fitur-baru',
    color: '#A259FF',
    Icon: ArrowUpFromLine,
  },
];

export default function WorkflowSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-noir-black bg-dots overflow-hidden px-8">
      {/* Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-neon-magenta/3 blur-[120px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 md:mb-14 text-center z-10"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-neon-pink mb-3 uppercase">// Git for beginners</p>
        <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white text-glow-white">
          WORKFLOW
          <span className="text-neon-lime text-glow-lime"> GITHUB</span>
        </h2>
        <p className="font-sans text-sm text-white/40 mt-4">Tenang, ini simpel kok! 4 langkah aja.</p>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl w-full"
      >
        {steps.map((step) => (
          <motion.div
            key={step.num}
            variants={itemVariants}
            className="glass-card p-5 flex items-start gap-4 hover:glow-lime transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: step.color + '12',
                  border: `1px solid ${step.color}25`,
                }}
              >
                <step.Icon size={22} color={step.color} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] font-bold" style={{ color: step.color }}>
                STEP {step.num}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-sans font-bold text-base text-white">{step.title}</h3>
              <p className="font-sans text-xs text-white/40 mt-1">{step.desc}</p>
              {/* Code snippet */}
              <div className="mt-2.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-neon-lime/60 overflow-x-auto">
                <span className="text-white/20">$ </span>{step.code}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 font-mono text-xs text-noir-mid tracking-wider z-10"
      >
        Nanti kita praktek bareng step by step!
      </motion.p>
    </div>
  );
}
