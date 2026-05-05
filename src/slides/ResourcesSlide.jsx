import { motion } from 'framer-motion';
import { Flame, BookOpen, Play, Globe, Palette, Bot } from 'lucide-react';
import resourcesImg from '../assets/learning_resources.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const resources = [
  { name: 'freeCodeCamp', desc: 'Belajar gratis dari nol', color: '#5B8EC2', Icon: Flame },
  { name: 'MDN Web Docs', desc: 'Dokumentasi lengkap web', color: '#ffffff', Icon: BookOpen },
  { name: 'YouTube', desc: 'Web Dev Simplified, Fireship', color: '#FF4444', Icon: Play },
  { name: 'W3Schools', desc: 'Try it yourself editor', color: '#04AA6D', Icon: Globe },
  { name: 'CSS-Tricks', desc: 'Tips & trik CSS keren', color: '#ff6ec7', Icon: Palette },
  { name: 'ChatGPT / AI', desc: 'Asisten coding 24/7', color: '#00e5ff', Icon: Bot },
];

export default function ResourcesSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-noir-black bg-grid overflow-hidden px-8">
      {/* Ambient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-magenta/3 blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 max-w-6xl w-full"
      >
        {/* Left: Content */}
        <div className="flex-1">
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs tracking-[0.3em] text-accent-yellow mb-3 uppercase"
          >
            // Level up!
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-white text-glow-white leading-[0.9] mb-10"
          >
            RESOURCES
            <span className="block text-unsrat-blue text-glow-blue">BELAJAR</span>
          </motion.h2>

          {/* Resource list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {resources.map((r) => (
              <motion.div
                key={r.name}
                variants={itemVariants}
                className="glass-card px-4 py-3.5 flex items-center gap-3.5 hover:glow-blue transition-shadow duration-300"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: r.color + '12', border: `1px solid ${r.color}20` }}
                >
                  <r.Icon size={18} color={r.color} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-sans font-semibold text-sm text-white truncate">{r.name}</h3>
                  <p className="font-mono text-[10px] text-white/30 truncate">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          variants={itemVariants}
          className="flex-shrink-0 w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl hidden lg:block"
        >
          <img src={resourcesImg} alt="Learning Resources" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}
