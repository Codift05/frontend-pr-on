import { motion } from 'framer-motion';

export default function SlideIndicator({ current, total }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3"
    >
      <span className="font-mono text-sm font-semibold text-white/80">
        {String(current + 1).padStart(2, '0')}
      </span>
      <div className="w-16 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-unsrat-blue rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
      <span className="font-mono text-sm text-white/30">
        {String(total).padStart(2, '0')}
      </span>
    </motion.div>
  );
}
