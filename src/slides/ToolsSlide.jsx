import { motion } from 'framer-motion';
import { Braces, GitMerge, Globe, PenTool, Bug, Package } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const tools = [
  { name: 'VS Code', desc: 'Code Editor', color: '#007ACC', Icon: Braces },
  { name: 'Git', desc: 'Version Control', color: '#F05032', Icon: GitMerge },
  { name: 'GitHub', desc: 'Code Hosting', color: '#ffffff', Icon: Globe },
  { name: 'Figma', desc: 'UI Design', color: '#A259FF', Icon: PenTool },
  { name: 'Chrome DevTools', desc: 'Debugging', color: '#4285F4', Icon: Bug },
  { name: 'npm', desc: 'Package Manager', color: '#CB3837', Icon: Package },
];

export default function ToolsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-noir-black bg-grid overflow-hidden px-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-unsrat-blue/3 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 md:mb-14 text-center z-10"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-unsrat-light mb-3 uppercase">// Our daily weapons</p>
        <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white text-glow-white">
          TOOLS<span className="text-unsrat-blue text-glow-blue"> KIT</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl w-full"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={cardVariants}
            whileHover={{ scale: 1.04, y: -4 }}
            className="glass-card p-6 flex flex-col items-center text-center cursor-pointer transition-shadow duration-300 hover:glow-blue"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
              style={{
                backgroundColor: tool.color + '10',
                border: `1px solid ${tool.color}25`,
              }}
            >
              <tool.Icon size={24} color={tool.color} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans font-bold text-sm md:text-base text-white">{tool.name}</h3>
            <p className="font-mono text-[10px] md:text-xs text-white/35 mt-1">{tool.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
