import { motion } from 'framer-motion';
import frontendImg from '../assets/frontend_importance.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'First Impression',
    desc: 'Frontend adalah hal pertama yang dilihat user. 94% kesan pertama terkait desain!',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'User Experience',
    desc: 'Kita yang bikin website enak dipakai, responsif, dan cepat.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6ec7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Demand Tinggi',
    desc: 'Frontend developer paling dicari di industri tech Indonesia.',
  },
];

const apps = ['Tokopedia', 'Gojek', 'Traveloka', 'Shopee', 'Discord'];

export default function WhyFrontend() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-noir-black bg-dots overflow-hidden px-8">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-neon-lime/5 blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl w-full"
      >
        {/* Left: Image */}
        <motion.div
          variants={itemVariants}
          className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <img src={frontendImg} alt="Frontend Development" className="w-full h-full object-cover" />
        </motion.div>

        {/* Right: Content */}
        <div className="flex-1 text-left">
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs tracking-[0.3em] text-neon-cyan mb-3 uppercase"
          >
            // Why it matters
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-white text-glow-white leading-[0.9] mb-8"
          >
            KENAPA
            <span className="block text-neon-lime text-glow-lime">FRONTEND?</span>
          </motion.h2>

          {/* Reason Cards */}
          <div className="space-y-4 mb-8">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-card p-4 flex items-start gap-4 hover:glow-lime transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-white">{r.title}</h3>
                  <p className="font-sans text-xs text-white/50 mt-1 leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* App logos */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-[10px] text-white/30 mr-1">Dipakai oleh:</span>
            {apps.map((app) => (
              <span key={app} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-white/50">
                {app}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
