import { motion } from 'framer-motion';
import { Target, CheckCircle2 } from 'lucide-react';
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
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0f1a2e 50%, #0a0a0a 100%)' }}
    >
      <div className="absolute inset-0 opacity-20">
        <img src={visiBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-noir-black via-noir-black/80 to-transparent" />

      {/* Giant bg text */}
      <div className="bg-text text-[16vw] top-[20%] left-1/2 -translate-x-1/2">VISI</div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl px-8 text-center"
      >
        <motion.p variants={itemVariants} className="font-mono text-xs tracking-[0.3em] text-unsrat-light mb-6 uppercase">
          // Visi & Misi
        </motion.p>

        <motion.h2 variants={itemVariants}
          className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white text-glow-white leading-[0.9] mb-14"
        >
          VISI & MISI
          <span className="block text-unsrat-blue text-glow-blue">DIVISI</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <motion.div variants={itemVariants} className="glass-card-blue p-8 flex-1 max-w-md text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 flex items-center justify-center">
                <Target size={20} color="#FFD700" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans font-bold text-xl text-accent-yellow">VISI</h3>
            </div>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Mencetak developer frontend yang <span className="text-white font-medium">kompeten</span>, <span className="text-white font-medium">kolaboratif</span>, dan siap membangun produk digital yang <span className="text-accent-yellow font-medium">berdampak</span>.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-blue p-8 flex-1 max-w-md text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-unsrat-blue/10 border border-unsrat-blue/20 flex items-center justify-center">
                <CheckCircle2 size={20} color="#5B8EC2" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans font-bold text-xl text-unsrat-blue">MISI</h3>
            </div>
            <ul className="space-y-3 font-sans text-sm text-white/60 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-unsrat-blue/60 mt-0.5 text-xs font-mono">01</span>
                <span>Memberikan pelatihan <span className="text-white font-medium">HTML, CSS, JavaScript</span> hingga framework modern</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-unsrat-blue/60 mt-0.5 text-xs font-mono">02</span>
                <span>Membangun budaya <span className="text-white font-medium">kolaborasi & code review</span></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-unsrat-blue/60 mt-0.5 text-xs font-mono">03</span>
                <span>Mengerjakan <span className="text-white font-medium">proyek nyata</span> yang bisa jadi portfolio</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
