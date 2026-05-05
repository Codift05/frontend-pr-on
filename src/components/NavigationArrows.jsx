import { motion } from 'framer-motion';

export default function NavigationArrows({ onPrev, onNext, current, total }) {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrev}
        disabled={isFirst}
        className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 cursor-pointer
          ${isFirst
            ? 'border-white/5 text-white/15 cursor-not-allowed'
            : 'border-white/15 text-white/60 hover:border-unsrat-blue/50 hover:text-unsrat-blue hover:shadow-[0_0_15px_rgba(91,142,194,0.2)]'
          }`}
        aria-label="Previous slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={isLast}
        className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 cursor-pointer
          ${isLast
            ? 'border-white/5 text-white/15 cursor-not-allowed'
            : 'border-white/15 text-white/60 hover:border-unsrat-blue/50 hover:text-unsrat-blue hover:shadow-[0_0_15px_rgba(91,142,194,0.2)]'
          }`}
        aria-label="Next slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </div>
  );
}
