import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const tools = [
  { name: 'VS Code', desc: 'Code Editor', color: '#007ACC', abbr: '{ }' },
  { name: 'Git', desc: 'Version Control', color: '#F05032', abbr: '⎇' },
  { name: 'GitHub', desc: 'Code Hosting', color: '#ffffff', abbr: '◉' },
  { name: 'Figma', desc: 'UI Design', color: '#A259FF', abbr: '◆' },
  { name: 'Chrome DevTools', desc: 'Debugging', color: '#4285F4', abbr: '⚙' },
  { name: 'npm', desc: 'Package Manager', color: '#CB3837', abbr: '▣' },
];

export default function ToolsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-noir-black bg-grid overflow-hidden px-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-cyan/3 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 md:mb-14 text-center z-10"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-neon-cyan mb-3 uppercase">// Our daily weapons</p>
        <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white text-glow-white">
          TOOLS<span className="text-neon-lime text-glow-lime"> KIT</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card p-5 md:p-6 flex flex-col items-center text-center cursor-pointer transition-shadow duration-300 hover:glow-lime"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 text-2xl font-bold"
              style={{
                backgroundColor: tool.color + '15',
                border: `1px solid ${tool.color}40`,
                color: tool.color,
              }}
            >
              {tool.abbr}
            </div>
            <h3 className="font-sans font-bold text-sm md:text-base text-white">{tool.name}</h3>
            <p className="font-mono text-[10px] md:text-xs mt-1" style={{ color: tool.color }}>{tool.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
