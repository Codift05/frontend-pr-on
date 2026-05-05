import { motion } from 'framer-motion';
import gojoImg from '../assets/Gojo2.png';
import unsratImg from '../assets/unsrat.png';

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden select-none flex"
      style={{ background: 'linear-gradient(135deg, #1a2d4a 0%, #3A6B9F 40%, #5B8EC2 70%, #8BB5DC 100%)' }}
    >
      {/* === LEFT SIDE: Images === */}
      <div className="relative w-[50%] h-full">
        {/* UNSRAT building — background layer */}
        <motion.div
          variants={fade(0.1)}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-[1] opacity-30"
        >
          <img src={unsratImg} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* Dark overlay for depth */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-transparent to-[#3A6B9F]/80" />

        {/* Gojo character */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[5] h-[85%] md:h-[92%]"
        >
          <img
            src={gojoImg}
            alt="Gojo"
            className="h-full w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 30px rgba(20,50,90,0.5))' }}
          />
        </motion.div>

        {/* Diagonal accent line */}
        <div className="absolute w-[200%] h-[2px] -left-[50%] top-[45%] z-[3]"
          style={{ transform: 'rotate(-8deg)', background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.25), transparent)' }}
        />
      </div>

      {/* === RIGHT SIDE: Typography === */}
      <div className="relative w-[50%] h-full flex flex-col justify-center px-8 md:px-14 lg:px-20 z-10">
        {/* Subtle bg pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Label */}
          <motion.div variants={fade(0.4)} initial="hidden" animate="visible">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-accent-yellow" />
              <span className="font-condensed text-sm tracking-[0.2em] text-white/50 uppercase">Onboarding 2026</span>
            </div>
          </motion.div>

          {/* Main title */}
          <motion.div variants={fade(0.5)} initial="hidden" animate="visible">
            <h1 className="font-display text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.88] tracking-[0.02em] text-white mb-2">
              FRONT
              <br />
              <span className="text-accent-yellow">END</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={fade(0.6)} initial="hidden" animate="visible">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white/30 tracking-[0.05em] mb-8">
              DEVELOPMENT
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div variants={fade(0.65)} initial="hidden" animate="visible">
            <div className="w-12 h-[1px] bg-white/20 mb-6" />
          </motion.div>

          {/* Info */}
          <motion.div variants={fade(0.7)} initial="hidden" animate="visible">
            <p className="font-condensed text-sm tracking-[0.15em] text-white/40 uppercase mb-1">
              Codift — Frontend Division
            </p>
            <p className="font-condensed text-xs tracking-[0.15em] text-white/25 uppercase">
              Universitas Sam Ratulangi
            </p>
          </motion.div>
        </div>

        {/* Bottom-right: Year */}
        <motion.div
          variants={fade(0.8)}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 right-8 md:right-14"
        >
          <div className="font-display text-6xl md:text-7xl text-white/10 leading-none">
            2026
          </div>
        </motion.div>
      </div>

      {/* Minimal corner marks */}
      <div className="absolute top-4 left-4 w-5 h-5 border-l-[1.5px] border-t-[1.5px] border-white/15 z-20" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-r-[1.5px] border-b-[1.5px] border-white/15 z-20" />
    </div>
  );
}
