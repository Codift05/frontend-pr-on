import { motion } from 'framer-motion';
import gojoImg from '../assets/Gojo2.png';
import unsratImg from '../assets/unsrat.png';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay } },
});

const slideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

const slideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden select-none"
      style={{
        background: 'linear-gradient(135deg, #1a2d4a 0%, #3A6B9F 30%, #5B8EC2 55%, #8BB5DC 80%, #d0e2f0 100%)',
      }}
    >
      {/* === BG: UNSRAT building image (behind everything) === */}
      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        animate="visible"
        className="absolute right-0 bottom-0 w-[55%] h-full z-[1] opacity-25"
      >
        <img src={unsratImg} alt="" className="w-full h-full object-cover object-left" />
      </motion.div>

      {/* Gradient overlay on right to blend building */}
      <div className="absolute inset-0 z-[2]"
        style={{
          background: 'linear-gradient(90deg, rgba(58,107,159,0.95) 0%, rgba(58,107,159,0.7) 40%, transparent 70%)',
        }}
      />

      {/* === Diagonal stripes === */}
      <div className="absolute w-[200%] h-[100px] -left-[50%] top-[25%] bg-white/[0.04] z-[3]"
        style={{ transform: 'rotate(-5deg)' }}
      />
      <div className="absolute w-[200%] h-[60px] -left-[50%] bottom-[25%] bg-white/[0.03] z-[3]"
        style={{ transform: 'rotate(-5deg)' }}
      />
      <div className="absolute w-[200%] h-[2px] -left-[50%] top-[50%] z-[3]"
        style={{ transform: 'rotate(-5deg)', background: 'linear-gradient(90deg, transparent 20%, rgba(255,215,0,0.3) 50%, transparent 80%)' }}
      />

      {/* === Giant background text — outline only === */}
      <motion.div
        variants={fadeIn(0.15)}
        initial="hidden"
        animate="visible"
        className="absolute top-1/2 left-1/2 -translate-x-[48%] -translate-y-[55%] z-[4] pointer-events-none"
      >
        <div
          className="font-display text-[22vw] leading-[0.85] tracking-[0.02em] whitespace-nowrap"
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px rgba(255,255,255,0.08)',
          }}
        >
          FRONT
          <br />
          END
        </div>
      </motion.div>

      {/* === Shadow/duplicate text (offset) === */}
      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="visible"
        className="absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-[50%] z-[5] pointer-events-none"
      >
        <div className="font-display text-[22vw] leading-[0.85] tracking-[0.02em] whitespace-nowrap text-white/[0.03]">
          FRONT
          <br />
          END
        </div>
      </motion.div>

      {/* === Character — Gojo2 (center-right) === */}
      <motion.div
        variants={slideLeft(0.3)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 right-[5%] md:right-[12%] z-[10] h-[78%] md:h-[88%] lg:h-[95%]"
      >
        <img
          src={gojoImg}
          alt="Gojo - Frontend Division"
          className="h-full w-auto object-contain"
          style={{ filter: 'drop-shadow(0 0 40px rgba(30,60,100,0.4))' }}
        />
      </motion.div>

      {/* === Foreground text: Top-left main title === */}
      <motion.div
        variants={slideUp(0.4)}
        initial="hidden"
        animate="visible"
        className="absolute top-8 md:top-12 left-6 md:left-12 z-[20]"
      >
        {/* Small label */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-yellow" />
          <span className="font-condensed text-xs md:text-sm tracking-[0.15em] text-white/60 uppercase">Onboarding Division</span>
        </div>

        {/* Main title — Bebas Neue, no shadow */}
        <h1 className="font-display text-[4.5rem] md:text-[7rem] lg:text-[9rem] leading-[0.9] tracking-[0.02em] text-white">
          FRONT
          <span className="text-accent-yellow">END</span>
        </h1>
      </motion.div>

      {/* === Left-middle: Role labels === */}
      <motion.div
        variants={slideUp(0.55)}
        initial="hidden"
        animate="visible"
        className="absolute top-[45%] md:top-[42%] left-6 md:left-12 z-[20]"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="font-display text-3xl md:text-5xl text-white tracking-wider">DEVELOPER</span>
          <span className="px-2.5 py-1 bg-accent-yellow font-condensed text-xs md:text-sm font-bold text-noir-black tracking-wider uppercase">
            WEB
          </span>
        </div>
        <div className="font-condensed text-sm md:text-base text-white/40 tracking-[0.15em] uppercase">
          Codift <span className="text-white/20 mx-1">|</span> Frontend Division
        </div>
      </motion.div>

      {/* === Bottom-left: UNSRAT label === */}
      <motion.div
        variants={slideUp(0.7)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-[20]"
      >
        <div className="font-condensed text-xs tracking-[0.2em] text-white/40 uppercase mb-1">
          Universitas Sam Ratulangi
        </div>
        <div className="font-condensed text-xs tracking-[0.15em] text-white/25 uppercase">
          Fakultas Teknik
        </div>
      </motion.div>

      {/* === Bottom-right: Year/season === */}
      <motion.div
        variants={slideUp(0.65)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-[20] text-right"
      >
        <div className="font-condensed text-xs tracking-[0.2em] text-white/50 uppercase mb-1">
          Season
        </div>
        <div className="font-display text-6xl md:text-8xl text-white leading-none">
          20<span className="text-accent-yellow">26</span>
        </div>
      </motion.div>

      {/* === Right side: Vertical text === */}
      <motion.div
        variants={fadeIn(0.9)}
        initial="hidden"
        animate="visible"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-[20] hidden md:block"
      >
        <div className="font-condensed text-[10px] tracking-[0.3em] text-white/20 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          FRONTEND DEVELOPMENT
        </div>
      </motion.div>

      {/* === Left side: Vertical text === */}
      <motion.div
        variants={fadeIn(0.9)}
        initial="hidden"
        animate="visible"
        className="absolute left-4 bottom-1/3 z-[20] hidden md:block"
      >
        <div className="font-condensed text-[10px] tracking-[0.3em] text-white/20 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          UNSRAT
        </div>
      </motion.div>

      {/* === Floating badge: top-right area === */}
      <motion.div
        variants={fadeIn(0.8)}
        initial="hidden"
        animate="visible"
        className="absolute top-[18%] right-[18%] md:right-[25%] z-[20]"
      >
        <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded font-condensed text-xs text-white/70 tracking-wider uppercase">
          Web Dev
        </div>
      </motion.div>

      {/* === Floating badge: left-center === */}
      <motion.div
        variants={fadeIn(0.85)}
        initial="hidden"
        animate="visible"
        className="absolute top-[58%] left-[5%] z-[20] hidden md:block"
      >
        <div className="px-3 py-1.5 bg-accent-yellow/15 border border-accent-yellow/25 rounded font-condensed text-xs text-accent-yellow tracking-wider uppercase">
          UNSRAT
        </div>
      </motion.div>

      {/* Corner brackets */}
      <div className="absolute top-3 left-3 w-6 h-6 border-l-[2px] border-t-[2px] border-white/15 z-[20]" />
      <div className="absolute top-3 right-3 w-6 h-6 border-r-[2px] border-t-[2px] border-white/15 z-[20]" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-l-[2px] border-b-[2px] border-white/15 z-[20]" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-r-[2px] border-b-[2px] border-white/15 z-[20]" />
    </div>
  );
}
