import { motion } from 'framer-motion';
import resourcesImg from '../assets/learning_resources.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const resources = [
  { name: 'freeCodeCamp', url: 'freecodecamp.org', emoji: '🔥', color: '#0a0a23', desc: 'Belajar gratis dari nol' },
  { name: 'MDN Web Docs', url: 'developer.mozilla.org', emoji: '📖', color: '#ffffff', desc: 'Dokumentasi lengkap web' },
  { name: 'YouTube', url: 'Web Dev Simplified, Fireship', emoji: '▶️', color: '#FF0000', desc: 'Tutorial video terbaik' },
  { name: 'W3Schools', url: 'w3schools.com', emoji: '🌐', color: '#04AA6D', desc: 'Try it yourself editor' },
  { name: 'CSS-Tricks', url: 'css-tricks.com', emoji: '🎨', color: '#ff6ec7', desc: 'Tips & trik CSS keren' },
  { name: 'ChatGPT / AI', url: 'Tanya apa aja!', emoji: '🤖', color: '#00e5ff', desc: 'Asisten coding 24/7' },
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
            className="font-mono text-xs tracking-[0.3em] text-neon-pink mb-3 uppercase"
          >
            // Level up!
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-white text-glow-white leading-[0.9] mb-8"
          >
            RESOURCES
            <span className="block text-neon-lime text-glow-lime">BELAJAR</span>
          </motion.h2>

          {/* Resource list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {resources.map((r) => (
              <motion.div
                key={r.name}
                variants={itemVariants}
                className="glass-card px-4 py-3 flex items-center gap-3 hover:glow-lime transition-shadow duration-300"
              >
                <span className="text-xl flex-shrink-0">{r.emoji}</span>
                <div className="min-w-0">
                  <h3 className="font-sans font-bold text-sm text-white truncate">{r.name}</h3>
                  <p className="font-mono text-[10px] text-white/30 truncate">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          variants={itemVariants}
          className="flex-shrink-0 w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl hidden md:block"
        >
          <img src={resourcesImg} alt="Learning Resources" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}
