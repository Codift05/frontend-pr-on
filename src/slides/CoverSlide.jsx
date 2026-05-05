import { motion } from 'framer-motion';
import gojoImg from '../assets/Gojo2.png';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden select-none"
      style={{
        background: 'linear-gradient(135deg, #1a2d4a 0%, #2a4570 20%, #5B8EC2 50%, #8BB5DC 80%, #c8ddf0 100%)',
      }}
    >
      {/* === LAYER 1: Background gradient shapes === */}
      <div className="absolute top-0 right-0 w-[60%] h-full"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(200,221,240,0.3) 50%, rgba(255,255,255,0.4) 100%)',
        }}
      />

      {/* Diagonal white stripe — top */}
      <div className="absolute w-[200%] h-[120px] -left-[50%] top-[15%] bg-white/[0.07]"
        style={{ transform: 'rotate(-5deg)' }}
      />
      {/* Diagonal white stripe — bottom */}
      <div className="absolute w-[200%] h-[80px] -left-[50%] bottom-[20%] bg-white/[0.05]"
        style={{ transform: 'rotate(-5deg)' }}
      />
      {/* Thin accent line */}
      <div className="absolute w-[200%] h-[3px] -left-[50%] top-[55%]"
        style={{ transform: 'rotate(-5deg)', background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)' }}
      />

      {/* === LAYER 2: Giant background text (behind character) === */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] pointer-events-none z-10"
      >
        <div className="font-sans font-black text-[18vw] md:text-[16vw] leading-[0.8] tracking-[-0.04em] text-center whitespace-nowrap"
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px rgba(255,255,255,0.12)',
          }}
        >
          FRONT
          <br />
          END
        </div>
      </motion.div>

      {/* Shadow duplicate text (offset) */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.15}
        className="absolute top-1/2 left-1/2 pointer-events-none z-[9]"
        style={{ transform: 'translate(-47%, -50%)' }}
      >
        <div className="font-sans font-black text-[18vw] md:text-[16vw] leading-[0.8] tracking-[-0.04em] text-center whitespace-nowrap text-white/[0.04]">
          FRONT
          <br />
          END
        </div>
      </motion.div>

      {/* === LAYER 3: Character image (center) === */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 h-[80%] md:h-[90%] lg:h-[95%]"
      >
        <img
          src={gojoImg}
          alt="Gojo - Frontend Division"
          className="h-full w-auto object-contain"
          style={{
            filter: 'drop-shadow(0 0 60px rgba(91,142,194,0.3)) drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
          }}
        />
      </motion.div>

      {/* === LAYER 4: Foreground text & badges (in front of character) === */}

      {/* Top-left: "ONBOARDING" label */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="absolute top-6 md:top-8 left-6 md:left-10 z-30"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-white/60 uppercase">Onboarding</span>
        </div>
        <div className="font-sans font-black text-4xl md:text-6xl lg:text-7xl text-white leading-none tracking-tight"
          style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.2), 0 0 30px rgba(91,142,194,0.3)' }}
        >
          FRONT
          <span className="text-accent-yellow" style={{ textShadow: '0 0 20px rgba(255,215,0,0.4)' }}>END</span>
        </div>
      </motion.div>

      {/* Top-right: "DEVELOPER" rotated tag */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.7}
        className="absolute top-8 right-6 md:right-10 z-30"
      >
        <div className="font-sans font-black text-sm md:text-base tracking-wider text-white/70 uppercase"
          style={{ writingMode: 'vertical-rl', textShadow: '1px 1px 0 rgba(0,0,0,0.2)' }}
        >
          DEVELOPER
        </div>
      </motion.div>

      {/* Left side: "DIVISION" vertical text */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.8}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-30"
      >
        <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          DIVISION
        </div>
      </motion.div>

      {/* Right side: "UNSRAT" vertical text */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.8}
        className="absolute right-6 md:right-10 bottom-1/3 z-30"
      >
        <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          UNSRAT
        </div>
      </motion.div>

      {/* Bottom-left: Character name + role label */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.6}
        className="absolute bottom-16 md:bottom-12 left-6 md:left-10 z-30"
      >
        <div className="flex items-end gap-3 mb-2">
          <span className="font-sans font-black text-lg md:text-2xl text-white uppercase tracking-wide"
            style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}
          >
            DEVELOPER
          </span>
          <span className="px-2 py-0.5 rounded bg-accent-yellow/90 font-mono text-[10px] font-bold text-noir-black tracking-wider">
            FRONTEND
          </span>
        </div>
        <div className="font-mono text-[10px] text-white/40 tracking-wider">
          CODIFT
          <span className="text-white/20 mx-2">|</span>
          FRONTEND DIVISION
        </div>
      </motion.div>

      {/* Bottom-right: Year/Season badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.7}
        className="absolute bottom-12 md:bottom-12 right-6 md:right-10 z-30 text-right"
      >
        <div className="font-mono text-[10px] text-white/50 tracking-wider uppercase mb-1">
          Onboarding
        </div>
        <div className="font-sans font-black text-5xl md:text-7xl text-white leading-none"
          style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.2), 0 0 30px rgba(255,255,255,0.1)' }}
        >
          20<span className="text-accent-yellow" style={{ textShadow: '0 0 20px rgba(255,215,0,0.3)' }}>26</span>
        </div>
      </motion.div>

      {/* Floating badge: top center-right */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        custom={0.9}
        className="absolute top-[20%] right-[15%] md:right-[20%] z-30"
      >
        <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 font-mono text-[10px] text-white/80 tracking-wider">
          WEB DEV
        </div>
      </motion.div>

      {/* Floating badge: left center */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        custom={1}
        className="absolute top-[40%] left-[8%] z-30 hidden md:block"
      >
        <div className="px-3 py-1.5 rounded-lg bg-accent-yellow/20 backdrop-blur-sm border border-accent-yellow/30 font-sans font-bold text-xs text-accent-yellow tracking-wider">
          UNSRAT
        </div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/15 z-30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/15 z-30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/15 z-30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/15 z-30" />
    </div>
  );
}
