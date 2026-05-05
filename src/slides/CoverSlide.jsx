import { motion } from 'framer-motion';
import gojoImg from '../assets/Gojo2.png';
import unsratImg from '../assets/unsrat.png';

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

const fadeOnly = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay } },
});

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden select-none"
      style={{ background: 'linear-gradient(120deg, #0f1c30 0%, #1a2d4a 30%, #3A6B9F 60%, #5B8EC2 85%, #7aadda 100%)' }}
    >
      {/* === BG LAYER: UNSRAT building (left half, fading right) === */}
      <div className="absolute left-0 top-0 w-[60%] h-full z-[1]">
        <motion.img
          variants={fadeOnly(0.1)}
          initial="hidden"
          animate="visible"
          src={unsratImg}
          alt=""
          className="w-full h-full object-cover opacity-35"
        />
        {/* Gradient overlay — smooth fade to right background */}
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(15,28,48,0.3) 0%, rgba(26,45,74,0.6) 50%, rgba(58,107,159,1) 100%)',
          }}
        />
      </div>

      {/* === BG LAYER: Grid pattern (full) === */}
      <div className="absolute inset-0 z-[2] opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* === BG LAYER: Diagonal stripes === */}
      <div className="absolute w-[200%] h-[80px] -left-[50%] top-[22%] bg-white/[0.03] z-[3]"
        style={{ transform: 'rotate(-5deg)' }}
      />
      <div className="absolute w-[200%] h-[50px] -left-[50%] bottom-[18%] bg-white/[0.025] z-[3]"
        style={{ transform: 'rotate(-5deg)' }}
      />
      <div className="absolute w-[200%] h-[2px] -left-[50%] top-[48%] z-[3]"
        style={{ transform: 'rotate(-5deg)', background: 'linear-gradient(90deg, transparent 10%, rgba(255,215,0,0.2) 40%, rgba(255,215,0,0.35) 50%, rgba(255,215,0,0.2) 60%, transparent 90%)' }}
      />

      {/* === BG LAYER: Giant outlined text (behind everything) === */}
      <motion.div
        variants={fadeOnly(0.15)}
        initial="hidden"
        animate="visible"
        className="absolute top-[42%] left-[35%] -translate-y-1/2 z-[4] pointer-events-none"
      >
        <div className="font-display text-[20vw] leading-[0.85] tracking-[0.02em] whitespace-nowrap"
          style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.06)' }}
        >
          FRONTEND
        </div>
      </motion.div>

      {/* === CHARACTER: Gojo (left-center) === */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="absolute bottom-0 left-[8%] md:left-[12%] z-[8] h-[80%] md:h-[90%] lg:h-[95%]"
      >
        <img
          src={gojoImg}
          alt="Gojo"
          className="h-full w-auto object-contain"
          style={{ filter: 'drop-shadow(0 0 50px rgba(15,28,48,0.6))' }}
        />
      </motion.div>

      {/* === Scanline effect === */}
      <div className="absolute inset-0 z-[9] pointer-events-none overflow-hidden">
        <div className="scanline" />
      </div>

      {/* === RIGHT SIDE: Typography === */}
      <div className="absolute right-0 top-0 w-[55%] md:w-[50%] h-full flex flex-col justify-center px-6 md:px-10 lg:px-16 z-[15]">

        {/* Small label */}
        <motion.div variants={fade(0.4)} initial="hidden" animate="visible" className="mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[1.5px] bg-accent-yellow" />
            <span className="font-condensed text-xs md:text-sm tracking-[0.25em] text-white/50 uppercase">Onboarding Division</span>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div variants={fade(0.5)} initial="hidden" animate="visible">
          <h1 className="font-display text-[4.5rem] md:text-[6.5rem] lg:text-[8.5rem] leading-[0.9] tracking-[0.02em] text-white">
            FRONT
          </h1>
          <h1 className="font-display text-[4.5rem] md:text-[6.5rem] lg:text-[8.5rem] leading-[0.9] tracking-[0.02em] text-accent-yellow">
            END
          </h1>
        </motion.div>

        {/* Sub line */}
        <motion.div variants={fade(0.6)} initial="hidden" animate="visible" className="mt-2 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl md:text-2xl lg:text-3xl text-white/25 tracking-[0.1em]">
              DEVELOPMENT
            </span>
            <div className="flex-1 h-[1px] bg-white/10 max-w-[100px]" />
          </div>
        </motion.div>

        {/* Info block */}
        <motion.div variants={fade(0.7)} initial="hidden" animate="visible">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-yellow/60" />
            <span className="font-condensed text-sm tracking-[0.15em] text-white/40 uppercase">
              Codift — Frontend Division
            </span>
          </div>
          <p className="font-condensed text-xs tracking-[0.15em] text-white/20 uppercase pl-[18px]">
            Universitas Sam Ratulangi
          </p>
        </motion.div>

        {/* Year badge */}
        <motion.div variants={fade(0.8)} initial="hidden" animate="visible" className="mt-10">
          <div className="flex items-end gap-3">
            <div className="font-condensed text-[10px] tracking-[0.2em] text-white/30 uppercase mb-2">Season</div>
            <div className="font-display text-5xl md:text-6xl lg:text-7xl text-white/15 leading-none">
              20<span className="text-accent-yellow/30">26</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Corner brackets (cyberpunk) === */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l-[1.5px] border-t-[1.5px] border-white/15 z-20" />
      <div className="absolute top-4 right-4 w-6 h-6 border-r-[1.5px] border-t-[1.5px] border-white/15 z-20" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-[1.5px] border-b-[1.5px] border-white/15 z-20" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-[1.5px] border-b-[1.5px] border-white/15 z-20" />

      {/* Bottom code tag */}
      <motion.div
        variants={fadeOnly(1.2)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <span className="font-mono text-[10px] text-white/15 tracking-wider">{'<'}FrontendDev{' />'}</span>
      </motion.div>
    </div>
  );
}
