import { motion } from 'framer-motion';
import { Monitor, Users, TrendingUp } from 'lucide-react';
import frontendImg from '../assets/frontend_importance.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const reasons = [
  {
    Icon: Monitor,
    color: '#5B8EC2',
    title: 'First Impression',
    desc: 'Frontend adalah hal pertama yang dilihat user. 94% kesan pertama terkait desain!',
  },
  {
    Icon: Users,
    color: '#00e5ff',
    title: 'User Experience',
    desc: 'Kita yang bikin website enak dipakai, responsif, dan cepat.',
  },
  {
    Icon: TrendingUp,
    color: '#ff6ec7',
    title: 'Demand Tinggi',
    desc: 'Frontend developer paling dicari di industri tech Indonesia.',
  },
];

const apps = ['Tokopedia', 'Gojek', 'Traveloka', 'Shopee', 'Discord'];

export default function WhyFrontend() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-noir-black bg-dots overflow-hidden px-8">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-unsrat-blue/5 blur-[120px] pointer-events-none" />

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
            className="font-mono text-xs tracking-[0.3em] text-unsrat-light mb-3 uppercase"
          >
            // Why it matters
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-white text-glow-white leading-[0.9] mb-8"
          >
            KENAPA
            <span className="block text-unsrat-blue text-glow-blue">FRONTEND?</span>
          </motion.h2>

          {/* Reason Cards */}
          <div className="space-y-3 mb-8">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-card p-4 flex items-start gap-4 hover:glow-blue transition-shadow duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: r.color + '12', border: `1px solid ${r.color}25` }}
                >
                  <r.Icon size={20} color={r.color} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-white">{r.title}</h3>
                  <p className="font-sans text-xs text-white/40 mt-1 leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* App logos */}
          <motion.div variants={itemVariants} className="flex items-center gap-2.5 flex-wrap">
            <span className="font-mono text-[10px] text-white/25 mr-1">Dipakai oleh:</span>
            {apps.map((app) => (
              <span key={app} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] text-white/40">
                {app}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
