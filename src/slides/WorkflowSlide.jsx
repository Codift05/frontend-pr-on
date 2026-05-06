import { motion } from 'framer-motion';
import { Database, Settings, Code2, Server } from 'lucide-react';

const steps = [
  {
    title: 'CLONE / FORK',
    code: 'git clone <url>',
    color: '#3b82f6', // Blue
    Icon: Database,
    type: 'square',
  },
  {
    title: 'BUAT BRANCH',
    code: 'git checkout -b',
    color: '#06b6d4', // Cyan
    Icon: Settings,
    type: 'diamond',
  },
  {
    title: 'CODING!',
    code: 'git commit -m',
    color: '#a3e635', // Lime
    Icon: Code2,
    type: 'circle',
  },
  {
    title: 'PUSH & PR',
    code: 'git push origin',
    color: '#ec4899', // Pink
    Icon: Server,
    type: 'server',
  },
];

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function WorkflowSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0b1120] to-[#111827] overflow-hidden px-4 md:px-12 font-sans">
      
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-12 md:top-20 text-center z-20 flex flex-col items-center"
      >
        <h2 className="font-sans font-black text-4xl md:text-6xl tracking-widest text-slate-200">
          THE <span className="text-[#a3e635] text-glow-lime" style={{ textShadow: '0 0 20px rgba(163, 230, 53, 0.5)' }}>GIT</span> PIPELINE
        </h2>
        <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-slate-500 mt-3 uppercase">
          Architecture & Workflow
        </p>
      </motion.div>

      {/* The Neon Pipeline Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl h-[600px] md:h-[400px] mt-24"
      >
        
        {/* Animated Main Straight SVG Dashed Line Connector (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] -translate-y-1/2 z-0 overflow-visible">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <motion.line 
              x1="0" y1="1" x2="100%" y2="1"
              stroke="#334155" strokeWidth="2" strokeDasharray="8 8"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        {/* Animated Colored Segment Overlays (To simulate passing data) */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] -translate-y-1/2 z-0 pointer-events-none">
           <motion.div 
             animate={{ left: ['0%', '100%'] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 -translate-y-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent blur-[2px] opacity-40"
           />
        </div>

        {steps.map((step, index) => {
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center justify-center flex-1 h-full z-10"
            >
              {/* Vertical line for mobile connecting steps */}
              {index < steps.length - 1 && (
                <div className="block md:hidden absolute top-1/2 left-1/2 w-[2px] h-full z-0 -translate-x-1/2">
                   <svg className="w-full h-full">
                    <motion.line 
                      x1="1" y1="0" x2="1" y2="100%"
                      stroke="#334155" strokeWidth="2" strokeDasharray="8 8"
                      animate={{ strokeDashoffset: [0, -16] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>
              )}

              {/* Title Above the Node */}
              {(index === 2 || index === 3) && (
                <div className="absolute top-[8%] md:top-[12%] text-center">
                  <h3 className="font-mono text-[10px] md:text-xs font-bold tracking-[0.2em]" style={{ color: step.color, textShadow: `0 0 10px ${step.color}` }}>
                    {step.title}
                  </h3>
                </div>
              )}

              {/* The Geometric Node (Interactive) */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center w-24 h-24 md:w-36 md:h-36 z-10 group cursor-pointer"
              >
                
                {/* 1. ROUNDED SQUARE */}
                {step.type === 'square' && (
                  <div 
                    className="absolute inset-0 bg-[#0b1120] rounded-2xl md:rounded-3xl transition-all duration-300 group-hover:bg-[#3b82f6]/10"
                    style={{ 
                      border: `2px solid ${step.color}`,
                      boxShadow: `0 0 20px ${step.color}40, inset 0 0 20px ${step.color}20` 
                    }}
                  ></div>
                )}

                {/* 2. DIAMOND */}
                {step.type === 'diamond' && (
                  <div 
                    className="absolute inset-0 bg-[#0b1120] rotate-45 transition-all duration-300 group-hover:bg-[#06b6d4]/10"
                    style={{ 
                      border: `2px solid ${step.color}`,
                      boxShadow: `0 0 20px ${step.color}40, inset 0 0 20px ${step.color}20` 
                    }}
                  ></div>
                )}

                {/* 3. ORBITAL CIRCLE */}
                {step.type === 'circle' && (
                  <>
                    <div 
                      className="absolute inset-0 bg-[#0b1120] rounded-full transition-all duration-300 group-hover:bg-[#a3e635]/10"
                      style={{ 
                        border: `2px solid ${step.color}`,
                        boxShadow: `0 0 30px ${step.color}60, inset 0 0 20px ${step.color}20` 
                      }}
                    ></div>
                    {/* The spinning dashed outer orbit */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 md:-inset-6 rounded-full border-[2px] border-dashed group-hover:border-solid transition-all duration-500"
                      style={{ borderColor: `${step.color}80` }}
                    ></motion.div>
                    {/* Glowing Core */}
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full transition-transform group-hover:scale-150"
                      style={{ backgroundColor: step.color, filter: `blur(8px)` }}
                    ></motion.div>
                  </>
                )}

                {/* 4. SERVER BOX */}
                {step.type === 'server' && (
                  <div 
                    className="absolute inset-1 md:inset-2 bg-[#0b1120] rounded-xl transition-all duration-300 group-hover:bg-[#ec4899]/10"
                    style={{ 
                      border: `2px solid ${step.color}`,
                      boxShadow: `0 0 20px ${step.color}40, inset 0 0 20px ${step.color}20` 
                    }}
                  >
                    {/* Server horizontal lines */}
                    <div className="absolute top-1/4 left-3 right-3 h-[2px] rounded-full opacity-50 transition-opacity group-hover:opacity-100" style={{ backgroundColor: step.color }}></div>
                    <div className="absolute top-1/2 left-3 right-3 h-[2px] rounded-full opacity-50 -translate-y-1/2 transition-opacity group-hover:opacity-100" style={{ backgroundColor: step.color }}></div>
                    <div className="absolute bottom-1/4 left-3 right-3 h-[2px] rounded-full opacity-50 transition-opacity group-hover:opacity-100" style={{ backgroundColor: step.color }}></div>
                  </div>
                )}

                {/* The Icon inside the node */}
                <div className={`relative z-20 flex flex-col items-center justify-center ${step.type === 'circle' ? 'scale-125' : ''}`}>
                  {step.type !== 'server' && (
                    <step.Icon 
                      size={step.type === 'circle' ? 28 : 36} 
                      color={step.color} 
                      strokeWidth={1.5} 
                      style={{ filter: `drop-shadow(0 0 8px ${step.color})` }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                </div>

                {/* CLI Command Tooltip (Hover Interaction) */}
                <div className="absolute top-[110%] md:top-[120%] left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 z-50 w-max flex flex-col items-center">
                  <code className="text-xs md:text-sm font-mono font-bold tracking-wide" style={{ color: step.color, textShadow: `0 0 12px ${step.color}` }}>
                    $ {step.code}
                  </code>
                </div>

              </motion.div>

              {/* Title Below the Node */}
              {(index === 0 || index === 1) && (
                <div className="absolute bottom-[8%] md:bottom-[12%] text-center">
                  <h3 className="font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] text-white" style={{ textShadow: `0 0 10px ${step.color}` }}>
                    {step.title}
                  </h3>
                </div>
              )}
            </motion.div>
          );
        })}

        {/* The bottom "Retraining" loop equivalent for the Git workflow */}
        <div className="hidden md:block absolute bottom-[20%] left-[38%] right-[12%] h-[60px] z-0 overflow-visible opacity-80 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <motion.path 
              d="M 0 0 L 0 60 L 100% 60 L 100% 0"
              fill="transparent"
              stroke="#ec4899" 
              strokeWidth="2" 
              strokeDasharray="8 8"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-[#0b1120] px-4 font-mono text-[10px] tracking-widest text-[#ec4899] font-bold" style={{ textShadow: `0 0 8px #ec4899` }}>
            CODE REVIEW
          </div>
        </div>

      </motion.div>
    </div>
  );
}
