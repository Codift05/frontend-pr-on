import { motion } from 'framer-motion';
import visiBg from '../assets/visi_bg.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function VisiMisiSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-noir-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-30">
        <img src={visiBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-noir-black via-noir-black/80 to-transparent" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl px-8 text-center"
      >
        {/* Label */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs tracking-[0.3em] text-neon-cyan mb-6 uppercase"
        >
          // Visi & Misi
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white text-glow-white leading-[0.9] mb-12"
        >
          VISI & MISI
          <span className="block text-neon-lime text-glow-lime">DIVISI</span>
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Visi */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 flex-1 max-w-md text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neon-lime/10 border border-neon-lime/30 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ccff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 className="font-sans font-bold text-xl text-neon-lime">VISI</h3>
            </div>
            <p className="font-sans text-base text-white/70 leading-relaxed">
              Mencetak developer frontend yang <span className="text-white font-semibold">kompeten</span>, <span className="text-white font-semibold">kolaboratif</span>, dan siap membangun produk digital yang <span className="text-neon-lime font-semibold">berdampak</span>.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 flex-1 max-w-md text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="font-sans font-bold text-xl text-neon-cyan">MISI</h3>
            </div>
            <ul className="space-y-3 font-sans text-sm text-white/70 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-neon-cyan mt-1">▸</span>
                <span>Memberikan pelatihan <span className="text-white font-medium">HTML, CSS, JavaScript</span> hingga framework modern</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-cyan mt-1">▸</span>
                <span>Membangun budaya <span className="text-white font-medium">kolaborasi & code review</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-cyan mt-1">▸</span>
                <span>Mengerjakan <span className="text-white font-medium">proyek nyata</span> yang bisa jadi portfolio</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
