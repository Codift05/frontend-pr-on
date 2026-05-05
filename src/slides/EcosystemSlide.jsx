import { motion } from 'framer-motion';

const techStack = [
  { name: 'HTML', color: '#e44d26', x: 10, y: 15, description: 'Structure' },
  { name: 'CSS', color: '#264de4', x: 35, y: 15, description: 'Styling' },
  { name: 'JavaScript', color: '#f7df1e', x: 60, y: 15, description: 'Logic', textDark: true },
  { name: 'React', color: '#61dafb', x: 22, y: 55, description: 'UI Library' },
  { name: 'Nuxt', color: '#00dc82', x: 48, y: 55, description: 'Vue Framework' },
  { name: 'Tailwind', color: '#38bdf8', x: 74, y: 55, description: 'Utility CSS' },
];

const connections = [
  { from: 0, to: 3, color: '#ff6ec7' },
  { from: 1, to: 3, color: '#00e5ff' },
  { from: 1, to: 4, color: '#00e5ff' },
  { from: 1, to: 5, color: '#ff6ec7' },
  { from: 2, to: 3, color: '#ff6ec7' },
  { from: 2, to: 4, color: '#00e5ff' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.6,
    transition: { duration: 1.2, ease: 'easeInOut', delay: 1 },
  },
};

export default function EcosystemSlide() {
  const getCenter = (item) => ({
    x: item.x + 10,
    y: item.y + 10,
  });

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-noir-black bg-grid overflow-hidden px-8">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-neon-cyan/3 blur-[120px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 md:mb-12 text-center z-10"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-neon-cyan mb-3 uppercase">// Our tech ecosystem</p>
        <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white text-glow-white">
          ECOSYSTEM
          <span className="text-neon-lime text-glow-lime"> & STACK</span>
        </h2>
      </motion.div>

      {/* Tech Tree */}
      <div className="relative w-full max-w-4xl aspect-[16/9] z-10">
        {/* SVG Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
          {connections.map((conn, i) => {
            const from = getCenter(techStack[conn.from]);
            const to = getCenter(techStack[conn.to]);
            const midY = (from.y + to.y) / 2;
            return (
              <motion.path
                key={i}
                d={`M ${from.x} ${from.y + 5} C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${to.y - 5}`}
                className="connector-line"
                stroke={conn.color}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
            );
          })}
        </svg>

        {/* Tech Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full h-full"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              className="absolute glass-card-neon p-4 flex flex-col items-center justify-center cursor-pointer transition-shadow duration-300 hover:glow-lime-strong"
              style={{
                left: `${tech.x}%`,
                top: `${tech.y}%`,
                width: '20%',
                minWidth: '100px',
                maxWidth: '160px',
              }}
            >
              {/* Color indicator */}
              <div
                className="w-10 h-10 rounded-lg mb-2 flex items-center justify-center font-mono font-bold text-xs"
                style={{ backgroundColor: tech.color + '22', border: `1px solid ${tech.color}55` }}
              >
                <span style={{ color: tech.color }}>{tech.name.slice(0, 2).toUpperCase()}</span>
              </div>
              <h3 className="font-sans font-bold text-sm text-white">{tech.name}</h3>
              <p className="font-mono text-[10px] text-noir-mid mt-1">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 font-mono text-xs text-noir-mid tracking-wider"
      >
        ── Frontend Tech Tree ──
      </motion.p>
    </div>
  );
}
